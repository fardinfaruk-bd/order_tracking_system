export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-5">
          <div className="h-7 w-40 rounded-lg bg-slate-200" />
          <div className="h-52 rounded-2xl bg-slate-200" />
          <div className="h-80 rounded-2xl bg-slate-200" />
        </div>
      </div>
    </main>
  );
}