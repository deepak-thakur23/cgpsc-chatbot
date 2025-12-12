import React, { useContext } from "react";
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo_cgpsc.png'
import { useAuth } from "../context/AuthContext";



const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `nav-link ${isActive ? 'bg-white/12' : ''}`}
  >
    {children}
  </NavLink>
)

export default function Header() {
  const { token, jwtPayload, user, logoutUser } = useAuth();
  return (
    <header className="bg-gradient-to-r from-cgb-900 to-cgb-700 text-white sticky top-0 z-40 shadow-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="CGPSC logo" className="w-14 h-14 rounded-xl object-contain shadow" />
          <div>
            <h1 className="font-semibold">Chhattisgarh Public Service Commission</h1>
            <p className="text-sm opacity-90">Transparent • Accountable • Efficient</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* <div className="text-sm">Helpline: <strong>+91-771-XXXXXXX</strong></div>

          <Link to="/contact" className="btn-primary">Contact</Link> */}
          {!token && (
            <Link
              to="/login"
              className="btn-primary bg-cgb-500 hover:bg-cgb-700 text-white text-center font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] focus:ring-4 focus:ring-cgb-600 disabled:opacity-60"
            >
              Admin Panel
            </Link>
          )}

          {/* Optionally show something when logged in */}
          {token && (jwtPayload.isAdmin || jwtPayload.super_admin) && (
            <><span className="ml-4">
              Welcome, {user?.fullname} ({jwtPayload.section})
            </span><button
              onClick={() => { logoutUser(); }}
              className="px-3 py-2 rounded bg-red-500 text-white"
            >
                Logout
              </button></>
          )}
          {token && !jwtPayload.isAdmin && (
            <><span className="ml-4">
              Welcome, {user?.fullname} ({jwtPayload.section})
            </span><button
              onClick={() => { logoutUser(); }}
              className="px-3 py-2 rounded bg-red-500 text-white"
            >
                Logout
              </button></>

          )}


        </div>
      </div>

      <nav className="bg-transparent">
        <div className="container flex gap-2 py-3 scrollbar-none">
          {token && jwtPayload.isAdmin && (
            <NavItem to="/admin">Deshboard</NavItem>
          )}
          {token && !jwtPayload.isAdmin && (
            <NavItem to="/user">Deshboard</NavItem>
          )}
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/exams">Examinations</NavItem>
          <NavItem to="/notifications">Notifications</NavItem>
          <NavItem to="/results">Results</NavItem>
          <NavItem to="/recruitment">Recruitment</NavItem>
          <NavItem to="/downloads">Downloads</NavItem>
          <NavItem to="/rti">RTI</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/tenders">Tenders</NavItem>
          {/* <NavItem to="/faq">FAQ</NavItem> */}
          <NavItem to="/contact">Contact</NavItem>
        </div>
      </nav>
    </header>
  )
}
