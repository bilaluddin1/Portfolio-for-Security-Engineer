import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal as TerminalIcon, Cpu, RefreshCw } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const TerminalBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'assistant',
      content: 'SentinelBot v2.5 initialized. Awaiting queries about security protocols, experience, or available projects.',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, content: m.content }));
    
    try {
      const responseText = await sendMessageToGemini(history, userMsg.content);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'system',
        content: 'ERROR: Uplink failed. Please retry.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-cyber-dark border border-gray-800 rounded-lg overflow-hidden shadow-2xl shadow-cyber-neon/10">
      {/* Terminal Header */}
      <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="ml-3 text-xs font-mono text-gray-400 flex items-center gap-1">
            <Cpu className="w-3 h-3" />
            gemini-2.5-flash@sentinel-portfolio:~
          </span>
        </div>
        <div className="text-xs font-mono text-gray-500">BASH</div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="h-[400px] overflow-y-auto p-4 font-mono text-sm space-y-4 bg-black/50 backdrop-blur-sm"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] rounded p-3 ${
                msg.role === 'user' 
                  ? 'bg-cyber-neon/10 text-cyber-neon border-l-2 border-cyber-neon' 
                  : msg.role === 'system'
                  ? 'bg-red-900/20 text-red-400 border-l-2 border-red-500'
                  : 'bg-gray-800/50 text-gray-300 border-l-2 border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 text-xs opacity-50">
                {msg.role === 'user' ? 'USER@IP-UNK' : 'SENTINEL_BOT'} 
                <span>[{msg.timestamp.toLocaleTimeString()}]</span>
              </div>
              <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                 <div className="bg-gray-800/50 text-gray-300 border-l-2 border-gray-600 rounded p-3 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-cyber-neon" />
                    <span className="animate-pulse">Processing neural request...</span>
                 </div>
            </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="bg-gray-900 p-2 border-t border-gray-800 flex items-center gap-2">
        <span className="text-cyber-green font-mono pl-2">$</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command or question..." 
          className="flex-1 bg-transparent border-none text-gray-200 font-mono focus:ring-0 focus:outline-none py-2 px-2"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="p-2 text-cyber-neon hover:bg-cyber-neon/10 rounded transition-colors disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};