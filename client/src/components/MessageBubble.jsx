export default function MessageBubble({ message, icon: Icon }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 animate-slide-up ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-xl shadow-glow-sm"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
          <Icon className="h-4 w-4 text-white" />
        </div>
      )}

      <div
        className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-card`}
        style={isUser ? {
          background: 'linear-gradient(135deg, #4f46e5, #6d28d9)',
          color: '#ffffff',
          borderRadius: '18px 18px 4px 18px',
          boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
        } : {
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.09)',
          color: '#cbd5e1',
          borderRadius: '18px 18px 18px 4px',
        }}
      >
        {message.content}
      </div>

      {isUser && (
        <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-xl"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <Icon className="h-4 w-4 text-slate-300" />
        </div>
      )}
    </div>
  );
}
