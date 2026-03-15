import Link from 'next/link'

export default function Rules() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">K</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">Know What Changed</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-900">Dashboard</Link>
            <Link href="/feed" className="text-sm text-gray-500 hover:text-gray-900">Insight Feed</Link>
            <Link href="/watchlists" className="text-sm text-gray-500 hover:text-gray-900">Watchlists</Link>
            <Link href="/rules" className="text-sm font-medium text-gray-900">Rules</Link>
            <Link href="/settings" className="text-sm text-gray-500 hover:text-gray-900">Settings</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Monitoring Rules</h1>
            <p className="text-gray-500 mt-1">Define what changes matter to you.</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            + New Rule
          </button>
        </div>

        {/* Rule input */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-1">Create a rule in plain language</h2>
          <p className="text-sm text-gray-500 mb-4">Describe what you want to monitor and we will handle the logic.</p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="e.g. Tell me when important deals go cold"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Parse Rule
            </button>
          </div>
        </div>

        {/* Existing rules */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Active Rules</h2>
          </div>
          <div className="px-6 py-12 text-center">
            <p className="text-gray-400 text-sm">No rules created yet.</p>
            <p className="text-gray-400 text-sm mt-1">Create a rule above to start monitoring changes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}