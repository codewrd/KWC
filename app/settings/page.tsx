import Link from 'next/link'

export default function Settings() {
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
            <Link href="/rules" className="text-sm text-gray-500 hover:text-gray-900">Rules</Link>
            <Link href="/settings" className="text-sm font-medium text-gray-900">Settings</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1">Manage your account and preferences.</p>
        </div>

        {/* Profile */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
          <h2 className="font-semibold text-gray-900 mb-4">Profile</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-500 block mb-1">Name</label>
              <input type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
          <h2 className="font-semibold text-gray-900 mb-4">Notifications</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Critical changes</p>
                <p className="text-xs text-gray-500">Get notified immediately for critical severity changes</p>
              </div>
              <div className="w-10 h-6 bg-black rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Daily digest</p>
                <p className="text-xs text-gray-500">Receive a daily summary of all changes</p>
              </div>
              <div className="w-10 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Integrations</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900">HubSpot</p>
                <p className="text-xs text-gray-500">Connect your HubSpot CRM</p>
              </div>
              <button className="text-sm border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">Connect</button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900">Salesforce</p>
                <p className="text-xs text-gray-500">Connect your Salesforce instance</p>
              </div>
              <button className="text-sm border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">Connect</button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900">Jobber</p>
                <p className="text-xs text-gray-500">Connect your Jobber account</p>
              </div>
              <button className="text-sm border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}