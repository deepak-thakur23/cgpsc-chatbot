import React from 'react'
export default function Downloads(){
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-cgb-900">Downloads</h2>
      <p className="mt-2 text-slate-600">Admit cards, answer keys, syllabi and application forms available for download.</p>
      <ul className="mt-4 list-none space-y-2 text-slate-700">
        <li>Admit Card - Combined State Service 2025 <span className="text-slate-500">(PDF)</span></li>
        <li>Syllabus - Assistant Engineer (Civil) <span className="text-slate-500">(PDF)</span></li>
      </ul>
    </div>
  )
}
