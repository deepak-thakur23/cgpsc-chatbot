import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_cgpsc.png'

export default function Footer() {
  return (
    <footer className="border-t bg-white/60 mt-12">
      <div className="container py-6 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="CGPSC logo" className="w-14 h-14 rounded-xl object-contain shadow" />
          <div>
            <h4 className="text-cgb-900 font-semibold">Chhattisgarh Public Service Commission</h4>
            <div className="text-sm text-slate-600">Sector-19, North Block, Nava Raipur • Phone: +91-771-XXXXXXX</div>
          </div>
        </div>
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} CGPSC. All rights reserved.</div>
      </div>
    </footer>
  )
}
