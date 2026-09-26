const styles = {
  blue: "bg-blue-50 text-blue-700 ring-blue-600/10",
  amber: "bg-amber-50 text-amber-700 ring-amber-600/10",
  rose: "bg-rose-50 text-rose-700 ring-rose-600/10",
  slate: "bg-slate-100 text-slate-700 ring-slate-600/10"
};

export default function StatusBadge({ tone = "slate", children }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${styles[tone] || styles.slate}`}>
      {children}
    </span>
  );
}