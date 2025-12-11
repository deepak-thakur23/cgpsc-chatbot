import React from 'react'
export default function About(){
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-cgb-900">About CGPSC</h2>
      <p className="mt-3 text-slate-600">Established under the Constitution, CGPSC conducts recruitment and advises the State Government on personnel matters.</p>
      <h3 className="mt-4 font-semibold">Mandate</h3>
      <ul className="mt-2 list-disc list-inside text-slate-600">
        <li>Conduct competitive examinations</li>
        <li>Ensure fairness and transparency in recruitment</li>
        <li>Advisory role to the State Government on personnel matters</li>
      </ul>
    </div>
  )
}
