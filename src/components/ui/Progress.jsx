export function Progress({ value = 0 }) {
  const safe = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className="h-full rounded-full bg-primary-600 transition-all"
        style={{ width: `${safe}%` }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safe}
        role="progressbar"
      />
    </div>
  );
}
