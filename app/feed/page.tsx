import Link from 'next/link'
import { supabase } from '../lib/supabase'

export default async function Feed() {
  const { data: changes } = await supabase
    .from('change_events')
    .select('*, crm_object:crm_objects(name, object_type, amount)')
    .order('detected_at', { ascending: false })

  const severityColor: Record<string, string> = {
    Critical: 'bg-red-100 text-red-700',
    High: 'bg-orange-100 text-orange-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Low: 'bg-green-100 text-green-700',
  }

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
            <Link href="/feed" className="text-sm font-medium text-gray-900">Insight Feed</Link>
            <Link href="/watchlists" className="text-sm text-gray-500 hover:text-gray-900">Watchlists</Link>
            <Link href="/rules" className="text-sm text-gray-500 hover:text-gray-900">Rules</Link>
            <Link href="/settings" className="text-sm text-gray-500 hover:text-gray-900">Settings</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Insight Feed</h1>
          <p className="text-gray-500 mt-1">Every meaningful change, ranked by importance.</p>
        </div>

        {changes && changes.length > 0 ? (
          <div className="flex flex-col gap-4">
            {changes.map((change: any) => (
              <div key={change.id} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {change.crm_object?.object_type ?? change.object_type ?? 'Object'}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${severityColor[change.severity] ?? 'bg-gray-100 text-gray-600'}`}>
                      {change.severity}
                    </span>
                    <span className="font-semibold text-gray-900">
                      {change.crm_object?.name ?? 'Unknown'}
                    </span>
                    {change.crm_object?.amount && (
                      <span className="text-sm text-gray-500">
                        ${Number(change.crm_object.amount).toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-400">
                    {new Date(change.detected_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                  <span>{change.changed_field}</span>
                  <span>→</span>
                  <span className="text-gray-700">{change.old_value}</span>
                  <span>→</span>
                  <span className="font-medium text-gray-900">{change.new_value}</span>
                </div>

                {change.why_it_matters && (
                  <p className="text-sm text-gray-600 mb-4">{change.why_it_matters}</p>
                )}

                {change.recommended_action && (
                  <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
                    <p className="text-sm text-gray-700 font-medium">{change.recommended_action}</p>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <button className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Mark Reviewed
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Snooze</button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Dismiss</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 px-6 py-12 text-center">
            <p className="text-gray-400 text-sm">No changes detected yet.</p>
            <p className="text-gray-400 text-sm mt-1">Add objects to a watchlist to start monitoring.</p>
          </div>
        )}
      </div>
    </div>
  )
}