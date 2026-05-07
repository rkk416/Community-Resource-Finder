import { useEffect, useRef, useState } from 'react';
import { Bot, SendHorizonal, UserRound } from 'lucide-react';
import MessageBubble from './MessageBubble.jsx';

export default function ChatWindow({ messages, loading, onSend, suggestions }) {
  const [draft, setDraft] = useState('');
  const bottomRef = useRef(null);

  // Auto-scroll to bottom whenever messages or loading indicator changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  function submit(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text || loading) return;
    setDraft('');
    onSend(text);
  }

  return (
    <div className="flex h-[calc(100%-57px)] flex-col">
      {/* ── Message list ── */}
      <div className="flex-1 space-y-5 overflow-y-auto p-5">
        {!messages.length && (
          <div className="rounded-2xl p-5 animate-fade-in"
            style={{
              background: 'linear-gradient(135deg, rgba(79,70,229,0.12), rgba(124,58,237,0.06))',
              border: '1px solid rgba(99,102,241,0.2)',
            }}>
            <div className="flex items-center gap-2.5 font-semibold text-white mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                <Bot className="h-4 w-4 text-white" />
              </div>
              Ask naturally in any language
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,163,184,0.85)' }}>
              Try questions like{' '}
              <span className="text-brand-300 font-medium">"I need an emergency hospital near LPU"</span>
              {' '}or{' '}
              <span className="text-violet-400 font-medium">"Which pharmacy is open now in Jalandhar?"</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {suggestions.slice(0, 3).map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => onSend(suggestion)}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200"
                  style={{
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    color: '#a5b4fc',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(99,102,241,0.22)';
                    e.currentTarget.style.color = '#c7d2fe';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(99,102,241,0.12)';
                    e.currentTarget.style.color = '#a5b4fc';
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <MessageBubble
            key={`${message.role}-${index}`}
            message={message}
            icon={message.role === 'user' ? UserRound : Bot}
          />
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="flex items-center gap-1.5 rounded-2xl px-4 py-3"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}>
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>

      {/* ── Input bar ── */}
      <form onSubmit={submit} className="p-4 pt-2">
        <div className="flex gap-2 rounded-2xl p-2 transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
          }}
          onFocusCapture={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'}
          onBlurCapture={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'}
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ask for hospitals, police, pharmacies, ATMs, banks, colleges..."
            className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-slate-600"
            style={{ color: '#e2e8f0' }}
          />
          <button
            disabled={loading}
            className="btn-glow inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
          >
            <SendHorizonal className="h-4 w-4" />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
