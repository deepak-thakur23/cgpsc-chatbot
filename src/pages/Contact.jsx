import React from 'react'
export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    alert('Demo: integrate backend to submit messages')
  }
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-cgb-900">Contact</h2>
      <address className="mt-2 text-slate-600 not-italic">
        CGPSC Office, Sector-19, North Block<br /> Nava Raipur, Chhattisgarh<br /> Phone: +91-771-XXXXXXX<br /> Email: info@cgpsc.gov.in
      </address>

      <form onSubmit={onSubmit} className="mt-4 space-y-3">
        <input required placeholder="Your name" className="w-full border rounded-md px-3 py-2" />
        <input required type="email" placeholder="Email" className="w-full border rounded-md px-3 py-2" />
        <textarea required rows={4} placeholder="Message" className="w-full border rounded-md px-3 py-2" />
        <div className="text-right"><button className="btn-primary">Send</button></div>
      </form>
    </div>
  )
}
