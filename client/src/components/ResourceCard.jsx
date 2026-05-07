import { useState } from 'react';
import { MapPin, Navigation, Phone, Star, ExternalLink } from 'lucide-react';
import ResourceDetailModal from './ResourceDetailModal.jsx';

function formatDistance(distanceKm) {
  if (!Number.isFinite(distanceKm) || distanceKm > 100000) return null;
  return distanceKm < 1
    ? `${Math.round(distanceKm * 1000)} m`
    : `${distanceKm.toFixed(1)} km`;
}

export default function ResourceCard({ resource }) {
  const [showModal, setShowModal] = useState(false);

  const mapsUrl = resource.lat && resource.lng
    ? `https://www.google.com/maps/search/?api=1&query=${resource.lat},${resource.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${resource.name} ${resource.addr}`)}`;

  const distance = formatDistance(resource.distanceKm);

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        aria-label={`View details for ${resource.name}`}
        className="relative overflow-hidden rounded-2xl transition-all duration-250 group cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.035)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
        onClick={() => setShowModal(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setShowModal(true); } }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.38)';
          e.currentTarget.style.background = 'rgba(99,102,241,0.07)';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(99,102,241,0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.035)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Top gradient strip on hover */}
        <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.8), rgba(168,85,247,0.5), transparent)' }} />

        {/* "Click to expand" hint — shown on hover */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
            style={{ background: 'rgba(99,102,241,0.18)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.25)' }}>
            <ExternalLink className="h-2.5 w-2.5" />
            Details
          </span>
        </div>

        <div className="p-4">
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
              style={{
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.18)',
              }}>
              {resource.icon || '📍'}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold leading-5 text-white text-sm">{resource.name}</h3>
              <p className="mt-0.5 text-xs font-medium" style={{ color: 'rgba(148,163,184,0.7)' }}>
                {resource.category} · {resource.city}
              </p>
            </div>
          </div>

          {/* Address */}
          <p className="mt-3 flex gap-2 text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.75)' }}>
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
            {resource.addr}
          </p>

          {/* Badges */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {resource.emergency && (
              <span className="badge-emergency rounded-md px-2 py-1 text-[10px] font-semibold tracking-wide">
                ⚡ Emergency
              </span>
            )}
            {resource.hours && (
              <span className="badge-hours rounded-md px-2 py-1 text-[10px] font-semibold">
                {resource.hours}
              </span>
            )}
            {distance && (
              <span className="badge-distance rounded-md px-2 py-1 text-[10px] font-semibold">
                📍 {distance}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: '#fbbf24' }}>
              <Star className="h-3.5 w-3.5 fill-current" />
              {resource.rating}
              <span className="text-xs font-normal" style={{ color: 'rgba(148,163,184,0.55)' }}>
                ({resource.reviews})
              </span>
            </div>
            <div className="flex gap-1.5" onClick={e => e.stopPropagation()}>
              {/* Call button — stops propagation so it doesn't open the modal */}
              <a
                href={`tel:${String(resource.phone).replace(/[^0-9+]/g, '')}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-150"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  color: '#34d399',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(16,185,129,0.2)';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(16,185,129,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(16,185,129,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={`Call ${resource.name}`}
                title={`Call: ${resource.phone}`}
              >
                <Phone className="h-3.5 w-3.5" />
              </a>

              {/* Maps button */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-150"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.22)',
                  color: '#818cf8',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.2)';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(99,102,241,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={`Open ${resource.name} in Google Maps`}
                title="Open in Google Maps"
              >
                <Navigation className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Detail modal */}
      {showModal && (
        <ResourceDetailModal
          resource={resource}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
