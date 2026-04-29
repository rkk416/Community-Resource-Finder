export default function StatCard({ icon: Icon, label, value }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl transition-all duration-300 group"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
        e.currentTarget.style.background = 'rgba(99,102,241,0.07)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
      }}
    >
      {/* Ambient gradient strip at top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(168,85,247,0.4), transparent)' }} />

      {/* Top-right glow orb */}
      <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' }} />

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'rgba(148,163,184,0.7)' }}>{label}</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <Icon className="h-4 w-4 text-brand-400" />
          </div>
        </div>
        <div className="text-3xl font-bold tracking-tight gradient-text">{value}</div>
      </div>
    </div>
  );
}
