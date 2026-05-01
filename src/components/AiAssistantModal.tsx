import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

export default function AiAssistantModal({
  onSelectProjects
}: {
  onSelectProjects: (projectIds: string[] | null) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      // Create a prompt with all projects metadata
      const projectsContext = JSON.stringify(
        projects.map((p) => ({
          id: p.id,
          title: p.title,
          categories: p.categories,
          color: p.color,
          description: p.description
        }))
      );

      const prompt = `You are a helpful AI assistant for a creative portfolio website.
The user is looking for recommendations or has a question about the portfolio works.
Here are the available projects with their details:
${projectsContext}

Based on the user's request: "${userMessage}", recommend the best matching projects (if any apply) and explain why in a friendly tone. Limit to top 4 recommendations. Always respond in the language the user is speaking (${language === 'en' ? 'English' : 'Traditional Chinese'}). 
Do NOT use markdown outside of plain text.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              responseText: {
                type: Type.STRING,
                description: "The conversational response explaining the recommendations."
              },
              recommendedProjectIds: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Array of project IDs that match the user request. Empty array if no matches found."
              }
            },
            required: ["responseText", "recommendedProjectIds"],
          }
        }
      });

      const resultStr = response.text || "{}";
      const result = JSON.parse(resultStr);

      setMessages((prev) => [...prev, { role: 'ai', content: result.responseText }]);
      
      if (result.recommendedProjectIds && result.recommendedProjectIds.length > 0) {
        onSelectProjects(result.recommendedProjectIds);
      } else {
        onSelectProjects(null); // Reset filter
      }

    } catch (error) {
      console.error('Error generating AI response:', error);
      setMessages((prev) => [...prev, { role: 'ai', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 flex h-12 items-center gap-2 rounded-full bg-zinc-900 px-5 text-white shadow-lg transition-all hover:scale-105 active:scale-95 z-40 animate-bounce ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <Sparkles className="h-5 w-5" />
        <span className="text-sm font-medium">{language === 'en' ? 'Chat with AI' : 'AI 助理推薦'}</span>
      </button>

      {/* Chat Modal View */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 flex w-full max-w-[360px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-200 z-50 sm:max-w-sm transition-all duration-300">
          <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                 <h3 className="text-sm font-semibold text-zinc-900">
                   {language === 'en' ? 'AI Assistant' : 'AI 助理'}
                 </h3>
                 <p className="text-[10px] text-zinc-500">
                   {language === 'en' ? 'Find the best projects' : '幫你找到最適合的作品'}
                 </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex h-80 flex-col gap-4 overflow-y-auto bg-white p-4">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center text-center opacity-70">
                <Sparkles className="mb-2 h-8 w-8 text-zinc-300" />
                <p className="text-sm text-zinc-500">
                  {language === 'en' ? "Hi! I'm your AI assistant. Tell me what style or category you are looking for, e.g. 'I like American style websites'." : "嗨！我是AI助理，請問你想找什麼風格或類型的作品呢？例如：「我喜歡美式風格」"}
                </p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex max-w-[85%] flex-col rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === 'user'
                    ? 'self-end bg-zinc-900 text-white rounded-br-sm'
                    : 'self-start bg-zinc-100 text-zinc-800 rounded-bl-sm whitespace-pre-wrap'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="self-start flex max-w-[85%] rounded-2xl bg-zinc-100 rounded-bl-sm px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin text-zinc-500" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-zinc-100 p-3 pt-0 bg-white">
             {messages.length > 0 && (
               <button 
                 onClick={() => onSelectProjects(null)}
                 className="mb-2 w-full py-1.5 text-xs text-zinc-500 hover:text-zinc-800 transition-colors text-center"
               >
                 {language === 'en' ? 'Show all projects' : '顯示所有作品'}
               </button>
             )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 focus-within:border-zinc-400 focus-within:bg-white transition-colors"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === 'en' ? 'Ask AI...' : '詢問AI助理...'}
                className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-zinc-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white disabled:opacity-50 transition-opacity"
              >
                <Send className="h-3.5 w-3.5 ml-px" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
