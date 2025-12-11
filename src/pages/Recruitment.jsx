import React from 'react'
export default function Recruitment(){
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-cgb-900">Recruitment</h2>
      <p className="mt-2 text-slate-600">Recruitment rules, reservations, application steps and FAQ for applicants.</p>
      <ol className="mt-3 list-decimal list-inside text-slate-600">
        <li>Create an account on the portal.</li>
        <li>Fill out the online application and upload required documents.</li>
        <li>Pay the examination fee and submit before the deadline.</li>
      </ol>
    </div>
  )
}
