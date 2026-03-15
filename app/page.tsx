import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">K</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">Know What Changed</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">Dashboard</Link>
            <Link href="/feed" className="text-sm text-gray-600 hover:text-gray-900">Insight Feed</Link>
            <Link href="/watchlists" className="text-sm text-gray-600 hover:text-gray-900">Watchlists</Link>
            <Link href="/rules" className="text-sm text-gray-600 hover:text-gray-900">Rules</Link>
            <Link href="/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Pipeline Intelligence</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What changed.<br />
            Why it matters.<br />
            What to do next.
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            KWC monitors your pipeline and surfaces the changes that actually matter — before they become problems.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Go to Dashboard →
          </Link>
        </div>
      </div>
    </div>
  )
}