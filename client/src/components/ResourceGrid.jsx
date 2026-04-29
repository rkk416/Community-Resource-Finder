import ResourceCard from './ResourceCard.jsx';

export default function ResourceGrid({ resources }) {
  if (!resources.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
          style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)' }}>
          🔍
        </div>
        <p className="text-sm font-medium" style={{ color: 'rgba(148,163,184,0.6)' }}>
          No resources loaded yet.
        </p>
        <p className="text-xs" style={{ color: 'rgba(100,116,139,0.7)' }}>
          Ask the AI or select a city to see results.
        </p>
      </div>
    );
  }

  return (
    <div className="grid max-h-[640px] gap-3 overflow-y-auto p-4">
      {resources.map((resource, index) => (
        <ResourceCard
          key={`${resource.name}-${resource.city}-${index}`}
          resource={resource}
        />
      ))}
    </div>
  );
}
