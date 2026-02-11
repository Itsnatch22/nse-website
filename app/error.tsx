"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-5xl font-bold text-emerald-600">
          Something broke
        </h1>

        <p className="text-gray-600">
          The system tripped over a wire. Happens. Let&apos;s retry.
        </p>

        <button
          onClick={reset}
          className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
