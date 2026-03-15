import Link from 'next/link'

export default function Feed() {
  const mockChanges = [
    {
      id: 1,
      object: 'Nexus Platform Expansion',
      type: 'Deal',
      severity: 'Critical',
      field: 'stage',
      oldValue: 'Proposal Sent',
      newValue: 'Closed Lost',
      explanation: 'Deal moved to Closed Lost following three consecutive missed follow-ups and a competitor win signal detected.',
      recommendation: 'Immediately escalate to account executive and schedule re-engagement call.',
      date: 'Mar 13, 2026',
    },
    {
      id: 2,
      object: 'DataPulse Upsell',
      type: 'Deal',
      severity: 'High',
      field: 'amount',
      oldValue: '95000',
      newValue: '72000',
      explanation: 'Deal amount reduced by 24% after procurement negotiations; below standard threshold for enterprise tier.',
      recommendation: 'Review pricing strategy and discuss with sales leadership.',
      date: 'Mar 12, 2026',
    },
    {
      id: 3,
      object: 'Ironclad Partnership Deal',
      type: 'Deal',
      severity: 'Low',
      field: 'stage',
      oldValue: 'Discovery',
      newValue: 'Closed Won',
      explanation: 'Deal marked Closed Won after final contract signature confirmed via DocuSign.',
      recommendation: 'Archive deal record and log win details for case study.',
      date: 'Mar 13, 2026',
    },
  ]

  const severityColor: Record<string, string> = {
    Critical: 'bg-red-100 text-red-700',
    High: 'bg-orange-100 text-orange-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Low: 'bg-green-100 text-green-700',
  }

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
            <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-900">Dashboard</Link>
            <Link href="/feed" className="text-sm font-medium text-gray-900">Insight Feed</Link>
            <Link href="/watchlists" className="text-sm text-gray-500 hover:text-gray-900">Watchlists</Link>
            <Link href="/rules" className="text-sm text-gray-500 hover:text-gray-900">Rules</Link>
            <Link href="/settings" className="text-sm text-gray-500 hover:text-gray-900">Settings</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Insight Feed</h1>
          <p className="text-gray-500 mt-1">Every meaningful change, ranked by importance.</p>
        </div>

        {/* Change Cards */}
        <div className="flex flex-col gap-4">
          {mockChanges.map((change) => (
            <div key={change.id} className="bg-white rounded-xl border border-gray-200 p-6">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">{change.type}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${severityColor[change.severity]}`}>{change.severity}</span>
                  <span className="font-semibold text-gray-900">{change.object}</span>
                </div>
                <span className="text-sm text-gray-400">{change.date}</span>
              </div>

              {/* Change Detail */}
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <span>{change.field}</span>
                <span>→</span>
                <span className="text-gray-700">{change.oldValue}</span>
                <span>→</span>
                <span className={change.newValue === 'Closed Lost' ? 'text-red-600 font-medium' : change.newValue === 'Closed Won' ? 'text-green-600 font-medium' : 'text-gray-900 font-medium'}>{change.newValue}</span>
              </div>

              {/* Explanation */}
              <p className="text-sm text-gray-600 mb-4">{change.explanation}</p>

              {/* Recommendation */}
              <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
                <p className="text-sm text-gray-700 font-medium">{change.recommendation}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Mark Reviewed</button>
                <button className="text-sm text-gray-500 hover:text-gray-700">Snooze</button>
                <button className="text-sm text-gray-500 hover:text-gray-700">Dismiss</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}