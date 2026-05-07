import { useEffect, useState } from 'react';
import {
  Clock, Copy, ExternalLink, Map, MessageCircle,
  Phone, Star, X, Shield, Navigation2
} from 'lucide-react';

function getMapsUrl(resource) {
  // If we have valid lat/lng, use them for precision; otherwise fall back to text search
  if (resource.lat && resource.lng) {
    return `https://www.google.com/maps/search/?api=1&query=${resource.lat},${resource.lng}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${resource.name} ${resource.addr}`
  )}`;
}

function getDirectionsUrl(resource) {
  if (resource.lat && resource.lng) {
    return `https://www.google.com/maps/dir/?api=1&destination=${resource.lat},${resource.lng}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${resource.name} ${resource.addr}`
  )}`;
}

function cleanPhone(phone) {
  return String(phone || '').replace(/[^0-9+]/g, '');
}

function formatDistance(distanceKm) {
  if (!Number.isFinite(distanceKm) || distanceKm > 100000) return null;
  return distanceKm < 1
    ? `${Math.round(distanceKm * 1000)} m away`
    : `${distanceKm.toFixed(1)} km away`;
}

export default function ResourceDetailModal({ resource, onClose }) {
  const [copied, setCopied] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!resource) return null;

  const phone = cleanPhone(resource.phone);
  const mapsUrl = getMapsUrl(resource);
  const directionsUrl = getDirectionsUrl(resource);
  const whatsappUrl = `https://wa.me/${phone.replace(/^\+/, '')}`;
  const distance = formatDistance(resource.distanceKm);

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(resource.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = resource.phone;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${resource.name}`}
    >
      {/* ── Modal card ── */}
      <div
        className="relative w-full max-w-md animate-fade-in overflow-hidden rounded-3xl"
        style={{
          background: 'linear-gradient(145deg, rgba(20,20,40,0.98), rgba(13,13,31,0.98))',
          border: '1px solid rgba(99,102,241,0.25)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.12), 0 0 60px rgba(99,102,241,0.08)',
        }}
      >
        {/* Top gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #a78bfa, #6366f1, transparent)' }} />

        {/* ── Header ── */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.12))',
                border: '1px solid rgba(99,102,241,0.25)',
                boxShadow: '0 0 20px rgba(99,102,241,0.15)',
              }}
            >
              {resource.icon || '📍'}
            </div>

            {/* Name & category */}
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-tight text-white">{resource.name}</h2>
              <p className="mt-0.5 text-sm font-medium" style={{ color: '#a5b4fc' }}>
                {resource.category}
              </p>
              <p className="mt-0.5 text-xs" style={{ color: 'rgba(148,163,184,0.65)' }}>
                {resource.city}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-150"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(148,163,184,0.7)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(244,63,94,0.12)';
                e.currentTarget.style.borderColor = 'rgba(244,63,94,0.3)';
                e.currentTarget.style.color = '#fb7185';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(148,163,184,0.7)';
              }}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Badges row */}
          <div className="mt-3 flex flex-wrap gap-2">
            {resource.emergency && (
              <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-bold tracking-wide"
                style={{ background: 'rgba(244,63,94,0.12)', border: '1px solid rgba(244,63,94,0.25)', color: '#fb7185' }}>
                <Shield className="h-3 w-3" />
                Emergency Service
              </span>
            )}
            {resource.hours && (
              <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399' }}>
                <Clock className="h-3 w-3" />
                {resource.hours}
              </span>
            )}
            {distance && (
              <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
                <Navigation2 className="h-3 w-3" />
                {distance}
              </span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

        {/* ── Body ── */}
        <div className="px-6 py-4 space-y-4">

          {/* Address */}
          <div className="flex gap-3 rounded-xl p-3"
            style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <Map className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#818cf8' }} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(148,163,184,0.5)' }}>Address</p>
              <p className="text-sm leading-relaxed" style={{ color: '#e2e8f0' }}>{resource.addr}</p>
            </div>
          </div>

          {/* Phone number + copy */}
          {resource.phone && (
            <div className="flex items-center gap-3 rounded-xl p-3"
              style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <Phone className="h-4 w-4 shrink-0" style={{ color: '#34d399' }} />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'rgba(148,163,184,0.5)' }}>Phone</p>
                <p className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{resource.phone}</p>
              </div>
              <button
                onClick={copyPhone}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200"
                style={copied ? {
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  color: '#34d399',
                } : {
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(203,213,225,0.8)',
                }}
                title="Copy phone number"
              >
                <Copy className="h-3 w-3" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}

          {/* Rating */}
          {resource.rating && (
            <div className="flex items-center gap-3 rounded-xl p-3"
              style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <Star className="h-4 w-4 shrink-0 fill-current" style={{ color: '#fbbf24' }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'rgba(148,163,184,0.5)' }}>Rating</p>
                <p className="text-sm font-semibold" style={{ color: '#fbbf24' }}>
                  {resource.rating} <span className="font-normal text-xs" style={{ color: 'rgba(148,163,184,0.6)' }}>({resource.reviews?.toLocaleString()} reviews)</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Action Buttons ── */}
        <div className="px-6 pb-6 grid grid-cols-3 gap-3">

          {/* Call */}
          <a
            href={`tel:${phone}`}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl py-4 text-xs font-bold transition-all duration-200 group"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.08))',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#34d399',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(16,185,129,0.28), rgba(16,185,129,0.15))';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(16,185,129,0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.08))';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>

          {/* Google Maps */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-2 rounded-2xl py-4 text-xs font-bold transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.08))',
              border: '1px solid rgba(99,102,241,0.25)',
              color: '#818cf8',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.28), rgba(99,102,241,0.15))';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.25)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.08))';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Map className="h-5 w-5" />
            View Map
          </a>

          {/* Get Directions */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-2 rounded-2xl py-4 text-xs font-bold transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.08))',
              border: '1px solid rgba(168,85,247,0.25)',
              color: '#c084fc',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(168,85,247,0.28), rgba(168,85,247,0.15))';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(168,85,247,0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.08))';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Navigation2 className="h-5 w-5" />
            Directions
          </a>
        </div>

        {/* WhatsApp full-width footer button (only if has phone) */}
        {phone && (
          <div className="px-6 pb-6 -mt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl py-3.5 text-sm font-bold transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.08))',
                border: '1px solid rgba(37,211,102,0.25)',
                color: '#25D366',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37,211,102,0.25), rgba(37,211,102,0.15))';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(37,211,102,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.08))';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* WhatsApp SVG icon */}
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>
        )}

        {/* External search link */}
        <div className="border-t px-6 py-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(resource.name + ' ' + resource.city)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 text-xs transition-colors duration-150"
            style={{ color: 'rgba(99,102,241,0.6)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#818cf8'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(99,102,241,0.6)'}
          >
            <ExternalLink className="h-3 w-3" />
            Search on Google for more info
          </a>
        </div>
      </div>
    </div>
  );
}
