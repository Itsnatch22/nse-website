import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-lg">
        <h1 className="text-8xl font-bold text-emerald-600">404</h1>

        <div className="space-y-2">
          <p className="text-2xl font-semibold">Page not found</p>
          <p className="text-gray-600">
            This route ghosted you. Might&apos;ve moved or never existed.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
          >
            Back home
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-2xl border border-black font-medium hover:bg-black hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
