import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
      <section>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-cgb-900">Welcome to CGPSC</h2>
              <p className="mt-2 text-slate-600">Official portal for recruitments, notifications, results and candidate services.</p>
              <div className="mt-4 flex gap-3">
                <Link to="/notifications" className="btn-primary">Latest Notifications</Link>
                <Link to="/downloads" className="px-4 py-2 rounded-lg border border-slate-200 font-semibold">Downloads</Link>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-slate-100 text-slate-800 px-3 py-1 rounded-md">Official</span>
              <div className="mt-3 text-sm text-slate-500">Portal updated: <strong>Oct 14, 2025</strong></div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-cgb-900">Important Notices</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <article className="p-4 border-l-4 border-accent bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold">Combined State Service 2025 - Prelims Date</h4>
              <div className="text-sm text-slate-500 mt-1">Published: Sep 25, 2025</div>
              <p className="text-sm text-slate-600 mt-2">Admit cards will be available for download 10 days before the exam.</p>
            </article>

            <article className="p-4 border-l-4 border-accent bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold">Recruitment - Assistant Engineer (Civil)</h4>
              <div className="text-sm text-slate-500 mt-1">Published: Sep 10, 2025</div>
              <p className="text-sm text-slate-600 mt-2">Applications open till Nov 1, 2025.</p>
            </article>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <article className="p-4 border-l-4 border-accent bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold">Combined State Service 2025 - Prelims Date</h4>
              <div className="text-sm text-slate-500 mt-1">Published: Sep 25, 2025</div>
              <p className="text-sm text-slate-600 mt-2">Admit cards will be available for download 10 days before the exam.</p>
            </article>

            <article className="p-4 border-l-4 border-accent bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold">Recruitment - Assistant Engineer (Civil)</h4>
              <div className="text-sm text-slate-500 mt-1">Published: Sep 10, 2025</div>
              <p className="text-sm text-slate-600 mt-2">Applications open till Nov 1, 2025.</p>
            </article>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-cgb-900">Upcoming Exams</h3>
          <table className="w-full mt-3 text-sm">
            <thead className="text-left text-slate-600 border-b">
              <tr><th className="py-2">Exam</th><th className="py-2">Stage</th><th className="py-2">Date</th><th className="py-2">Details</th></tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="py-2">Combined State Service</td><td>Prelims</td><td>Nov 16, 2025</td><td><a className="text-cgb-700 underline">Syllabus</a></td></tr>
              <tr className="border-b"><td className="py-2">Assistant Engineer (Civil)</td><td>Written</td><td>Dec 05, 2025</td><td><a className="text-cgb-700 underline">Notification</a></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <aside>
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="font-semibold">Quick Search</h4>
          <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Demo search') }}>
            <input className="flex-1 border rounded-md px-3 py-2" placeholder="Search notifications, results..." />
            <button className="btn-primary">Search</button>
          </form>
        </div>

        <div className="mt-4 bg-white p-4 rounded-xl shadow">
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-2">
            <li><Link to="/notifications" className="underline">Latest Notifications</Link></li>
            <li><Link to="/downloads" className="underline">Admit Cards</Link></li>
            <li><Link to="/results" className="underline">Results</Link></li>
          </ul>
        </div>

        <div className="mt-4 bg-white p-4 rounded-xl shadow">
          <h4 className="font-semibold">Helpline</h4>
          <div className="text-sm text-slate-600">Mon–Fri 10:00–17:00</div>
          <div className="mt-2 font-semibold">+91-771-XXXXXXX</div>
        </div>
      </aside>
    </div>
  )
}
