import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import About from './pages/About'
import Exams from './pages/Exams'
import Notifications from './pages/Notifications'
import Results from './pages/Results'
import Recruitment from './pages/Recruitment'
import Downloads from './pages/Downloads'
import RTI from './pages/RTI'
import Services from './pages/Services'
import Tenders from './pages/Tenders'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

export default function App() {
  return (
    <div className="min-h-screen bg-cgb-50 text-slate-900">
      <Header />
      <main className="container py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/results" element={<Results />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/rti" element={<RTI />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tenders" element={<Tenders />} />
          {/* <Route path="/faq" element={<FAQ />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* Protect normal logged user pages */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div>User Profile Page</div>
              </ProtectedRoute>
            }
          />

          {/* Admin-only page */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          {/* User-only page */}
          <Route
            path="/user"
            element={
              <AdminRoute>
                <UserDashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </main>
      <Chatbot />
      <Footer />
    </div>
  )
}
