import Link from 'next/link'
import { supabase } from '../lib/supabase'

export default async function Dashboard() {
  const { count: totalChanges } = await supabase
    .from('change_events')
    .select('*', { count: 'exact', head: true })

  const { count: criticalChanges } = await supabase
    .from('change_events')
    .select('*', { count: 'exact', head: true })
    .eq('severity', 'Critical')

  const { count: needsReview } = await supabase
    .from('change_events')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'unreviewed')

  const { count: watchlistItems } = await supabase
    .from('watchlist_items')
    .select('*', { count: 'exact', head: true })

  const { data: recentChanges } = await supabase
    .from('change_events')
    .select('*, crm_object:crm_objects(name, object_type)')
    .order('detected_at', { ascending: false })
    .limit(5)

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
            <Link href="/dashboard" className="text-sm font-medium text-gray-900">Dashboard</Link>
            <Link href="/feed" className="text-sm text-gray-500 hover:text-gray-900">Insight Feed</Link>
            <Link href="/watchlists" className="text-sm text-gray-500 hover:text-gray-900">Watchlists</Link>
            <Link href="/rules" className="text-sm text-gray-500 hover:text-gray-900">Rules</Link>
            <Link href="/settings" className="text-sm text-gray-500 hover:text-gray-900">Settings</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Pipeline Intelligence</h1>
          <p className="text-gray-500 mt-1">What changed, why it matters, and what to do next.</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-1">Watchlist items</p>
            <p className="text-3xl font-bold text-gray-900">{watchlistItems ?? 0}</p>
            <p className="text-xs text-gray-400 mt-1">Objects currently tracked</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-1">Total changes</p>
            <p className="text-3xl font-bold text-gray-900">{totalChanges ?? 0}</p>
            <p className="text-xs text-gray-400 mt-1">Detected across pipeline</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-1">Critical changes</p>
            <p className="text-3xl font-bold text-red-600">{criticalChanges ?? 0}</p>
            <p className="text-xs text-gray-400 mt-1">Need immediate attention</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-1">Needs review</p>
            <p className="text-3xl font-bold text-gray-900">{needsReview ?? 0}</p>
            <p className="text-xs text-gray-400 mt-1">Not yet reviewed</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div>
              <h2 className="font-semibold text-gray-900">Recent changes</h2>
              <p className="text-sm text-gray-500">Recent detected changes across your monitored objects.</p>
            </div>
            <Link href="/feed" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all →
            </Link>
          </div>
          {recentChanges && recentChanges.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {recentChanges.map((change: any) => (
                <div key={change.id} className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{change.crm_object?.name ?? 'Unknown'}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{change.changed_field} changed · {change.severity}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    change.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                    change.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                    change.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>{change.severity}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-400 text-sm">No changes detected yet.</p>
              <p className="text-gray-400 text-sm mt-1">Add objects to a watchlist to start monitoring.</p>
              <Link href="/watchlists" className="inline-flex items-center mt-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Create a watchlist
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}