import { GoogleGenAI } from "@google/genai";
import { EXPERIENCE, PROJECTS, SKILLS_DATA } from '../constants';

const SYSTEM_PROMPT = `
You are "SentinelBot", an AI assistant living in the portfolio website of a Senior Security Engineer.
Your goal is to answer questions about the engineer's skills, experience, and projects based on the context provided below.
You should adopt a "cybersecurity expert" persona: concise, technical, slightly futuristic but professional.
If asked about topics outside of security, technology, or this portfolio, politely decline with a "Access Denied" thematic message.

CONTEXT:
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}
Top Skills: ${JSON.stringify(SKILLS_DATA)}

Key attributes:
- Expert in Cloud Security and AppSec.
- Loves Python and Go.
- Believes in "Shift Left" security.

Keep responses under 100 words unless detailed technical explanation is requested.
`;

export const sendMessageToGemini = async (history: { role: string; content: string }[], message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        return "Error: API_KEY not found in environment. Please configure your key.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Format history for the API
    // We are using a simple generateContent here for a single turn or stateless feel, 
    // but to simulate chat we can just append the user message to the context.
    // For a real chat object, we would use ai.chats.create, but here we'll just concatenate for simplicity 
    // or use the chat helper if we want true state. Let's use Chat for better state management if the component held state.
    // However, since the service function is stateless, let's create a chat with history.

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    // Replay history (excluding the very last message which is the new one, handled by sendMessage)
    // Note: in a real app, you might want to persist the chat session object instead of recreating it.
    // To keep it simple and robust for this demo, we will just pass the new message with the system prompt context 
    // effectively "fresh" but we can try to replay if needed. 
    // Actually, let's just use generateContent for single-turn Q&A style which is robust for portfolios,
    // OR use the chat properly.
    
    // Let's use generateContent but include history in the prompt text for context if needed, 
    // OR just rely on the system prompt context. 
    // Since the user might ask follow ups, let's try to include the last few messages in the prompt or use chat.
    
    // Best approach for this stateless function signature:
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