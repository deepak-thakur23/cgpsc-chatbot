import React from 'react'
export default function Exams(){
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-cgb-900">Examinations</h2>
      <p className="mt-2 text-slate-600">Overview of exams with syllabi, application dates and exam calendars.</p>
      <div className="mt-4">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-600 border-b">
            <tr><th className="py-2">Exam</th><th className="py-2">Stage</th><th className="py-2">Date</th></tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2">Combined State Service</td><td>Prelims</td><td>Nov 16, 2025</td></tr>
            <tr className="border-b"><td className="py-2">Assistant Engineer (Civil)</td><td>Written</td><td>Dec 05, 2025</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
