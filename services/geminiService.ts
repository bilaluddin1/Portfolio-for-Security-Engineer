import { GoogleGenAI } from "@google/genai";
import { EXPERIENCE, PROJECTS, SKILLS_DATA, SERVICES } from '../constants';

const SYSTEM_PROMPT = `
You are "SentinelBot", an AI assistant living in the portfolio website of Bilal Uddin, a Security Engineer.
Your goal is to answer questions about Bilal's skills, experience, and projects based on the context provided below.
You should adopt a "cybersecurity expert" persona: concise, technical, slightly futuristic but professional.
If asked about topics outside of security, technology, or this portfolio, politely decline with a "Access Denied" thematic message.

CONTEXT:
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}
Top Skills: ${JSON.stringify(SKILLS_DATA)}
Services Offered: ${JSON.stringify(SERVICES)}

Key attributes:
- Expert in AppSec, Cloud Security (AWS/Kubernetes), and DevSecOps.
- Skilled in Python, Bash, Java.
- Focuses on automation (Prowler, DefectDojo, Wazuh).
- Certified in Cyber Security (ISC2) and Azure Administrator.

Keep responses under 100 words unless detailed technical explanation is requested.
`;

export const sendMessageToGemini = async (history: { role: string; content: string }[], message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        return "Error: API_KEY not found in environment. Please configure your key.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const historyContent = history.map(h => `${h.role === 'user' ? 'User' : 'SentinelBot'}: ${h.content}`).join('\n');
    const fullPrompt = `
    ${SYSTEM_PROMPT}
    
    Current Conversation History:
    ${historyContent}
    
    User New Message: ${message}
    
    SentinelBot Response:
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt
    });

    return response.text || "NO_DATA_RECEIVED";

  } catch (error) {
    console.error("Gemini Error:", error);
    return "SYSTEM_ERROR: Connection to AI Neural Net failed. Check console logs.";
  }
};