import { 
  User, 
  Calendar, 
  FileText, 
  Download, 
  Search, 
  ArrowLeft,
  Bell,
  LogOut,
  ChevronRight,
  Activity,
  Droplet,
  FlaskConical,
  Clock,
  Plus,
  ShieldCheck,
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const patientData = {
    name: "Tawseef Hussain Mir",
    id: "MINAB-2026-001",
    lastVisit: "May 05, 2026",
    appointments: [
      { date: "May 10, 2026", time: "09:00 AM", test: "Lipid Profile", status: "Upcoming" },
      { date: "May 05, 2026", time: "08:30 AM", test: "CBC & KFT", status: "Completed" },
      { date: "April 28, 2026", time: "10:00 AM", test: "Thyroid Profile", status: "Completed" }
    ],
    reports: [
      { id: "REP-9921", date: "May 05, 2026", test: "CBC & KFT", fileName: "Report_CBC_KFT.pdf" },
      { id: "REP-8812", date: "April 28, 2026", test: "Thyroid Profile", fileName: "Report_Thyroid.pdf" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] flex font-sans">
      {/* Sidebar - Accessible Navigation */}
      <aside 
        className="w-72 bg-white border-r border-slate-100 hidden lg:flex flex-col sticky top-0 h-screen"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="p-8">
          <Link to="/" className="mb-10 block" aria-label="Go to Home">
            <Logo />
          </Link>

          <nav className="space-y-2">
            {[
              { icon: <User className="w-5 h-5" />, label: "Overview" },
              { icon: <Calendar className="w-5 h-5" />, label: "Appointments" },
              { icon: <FileText className="w-5 h-5" />, label: "Health Reports" },
              { icon: <ShieldCheck className="w-5 h-5" />, label: "Control Center" },
            ].map((item, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(item.label)}
                aria-current={activeTab === item.label ? 'page' : undefined}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${activeTab === item.label ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'}`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-slate-50">
          <button 
            className="flex items-center gap-4 text-slate-400 hover:text-red-500 font-bold text-sm transition-colors w-full focus-visible:text-red-500 outline-none"
            aria-label="Sign out"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto" role="main">
        {activeTab === 'Control Center' ? (
          <div className="max-w-5xl mx-auto">
            <header className="mb-12">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Management Portal</h1>
              <p className="text-slate-500 font-medium italic">Monitor lab activity and bookings from one place.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold flex items-center gap-3">
                      <Activity className="text-blue-400 w-6 h-6" />
                      Live Activity
                    </h2>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-black rounded-full uppercase tracking-widest border border-green-500/30">
                      Live
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-slate-400 font-bold">New Bookings</span>
                      <span className="text-2xl font-black">12 Today</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-slate-400 font-bold">Pending Reports</span>
                      <span className="text-2xl font-black">5 Orders</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
                <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                  <Plus className="text-blue-600 w-6 h-6" />
                  Quick Tools
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Add Test", icon: <FileText /> },
                    { label: "Pricing", icon: <Settings /> },
                    { label: "Bookings", icon: <Calendar /> },
                    { label: "Staff", icon: <User /> },
                  ].map((action, i) => (
                    <button key={i} className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-slate-50 hover:bg-blue-50 hover:border-blue-100 transition-all group">
                      <div className="text-blue-600 group-hover:scale-110 transition-transform">
                        {action.icon}
                      </div>
                      <span className="font-bold text-slate-700 text-xs">{action.label}</span>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        ) : (
          /* Default Patient Overview */
          <>
            <header className="flex justify-between items-center mb-12">
              <div>
                <Link to="/" className="lg:hidden flex items-center gap-2 mb-6 text-blue-600 font-bold" aria-label="Go back to home">
                  <ArrowLeft className="w-4 h-4" /> Back to Site
                </Link>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, Tawseef</h1>
                <p className="text-slate-400 font-bold text-sm mt-1">Patient ID: {patientData.id}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-sm font-black text-slate-900">{patientData.name}</span>
                  <span className="text-xs font-bold text-slate-400">Regular Member</span>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600" aria-hidden="true">
                  <User className="w-6 h-6" />
                </div>
              </div>
            </header>

            {/* Overview Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Blood Pressure", value: "118/76", unit: "mmHg", icon: <Activity className="text-red-500" />, color: "bg-red-50" },
                { label: "Blood Glucose", value: "94", unit: "mg/dL", icon: <Droplet className="text-blue-500" />, color: "bg-blue-50" },
                { label: "Cholesterol", value: "182", unit: "mg/dL", icon: <FlaskConical className="text-green-500" />, color: "bg-green-50" },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6"
                >
                  <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center`} aria-hidden="true">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">{stat.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-slate-800">{stat.value}</span>
                      <span className="text-xs font-bold text-slate-400">{stat.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Appointment History */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    Recent Appointments
                  </h3>
                  <button className="text-blue-600 font-bold text-sm hover:underline outline-none focus-visible:underline">View All</button>
                </div>

                <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                      <tr>
                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Test Type</th>
                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Date & Time</th>
                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                        <th className="px-8 py-4"><span className="sr-only">Actions</span></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {patientData.appointments.map((app, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors group">
                          <td className="px-8 py-6 font-bold text-slate-800">{app.test}</td>
                          <td className="px-8 py-6">
                            <div className="flex flex-col">
                              <span className="font-bold text-slate-600">{app.date}</span>
                              <span className="text-xs font-medium text-slate-400">{app.time}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${app.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <button className="outline-none focus-visible:text-blue-600" aria-label={`View details for ${app.test}`}>
                              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors inline-block" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Reports Download */}
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    Latest Reports
                  </h3>
                  <button className="text-blue-600 font-bold text-sm hover:underline outline-none focus-visible:underline">Manage All</button>
                </div>

                <div className="space-y-4">
                  {patientData.reports.map((report, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600" aria-hidden="true">
                          <FlaskConical className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 leading-none mb-1">{report.test}</h4>
                          <span className="text-xs font-bold text-slate-400 italic">Issued on {report.date}</span>
                        </div>
                      </div>
                      <button 
                        className="w-10 h-10 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center transition-all outline-none focus-visible:bg-blue-600 focus-visible:text-white"
                        aria-label={`Download report for ${report.test}`}
                      >
                        <Download className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))}

                  <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <Clock className="w-8 h-8 text-blue-400 mb-6" aria-hidden="true" />
                    <h4 className="text-xl font-black mb-2">Need Help?</h4>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                      Facing issues with reports? Contact our technician directly on WhatsApp.
                    </p>
                    <a 
                      href="https://wa.me/917889383928" 
                      className="inline-flex items-center gap-2 text-blue-400 font-bold hover:gap-3 transition-all outline-none focus-visible:gap-3"
                    >
                      Message Support
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
