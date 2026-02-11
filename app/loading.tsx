export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 rounded-full border-4 border-emerald-600 border-t-transparent animate-spin" />
        <span className="text-black font-medium">Loading…</span>
      </div>
    </div>
  )
}
