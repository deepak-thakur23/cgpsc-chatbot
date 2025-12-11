import React from 'react'
export default function Notifications(){
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-cgb-900">Notifications</h2>
      <p className="mt-3 text-slate-600">All official notifications and corrigenda are listed here.</p>
      <ul className="mt-4 list-none space-y-3">
        <li className="border-b py-2"><strong>Notification: Combined State Service 2025</strong> — <span className="text-slate-500">Sep 25, 2025</span></li>
        <li className="border-b py-2"><strong>Corrigendum: AE (Civil) 2025</strong> — <span className="text-slate-500">Sep 18, 2025</span></li>
      </ul>
    </div>
  )
}
