import { useState } from 'react';
import { 
  Microscope, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  User,
  Mail,
  Stethoscope,
  Send,
  Activity,
  HeartPulse,
  ShieldAlert,
  Thermometer,
  Dna,
  CircleCheckBig,
  Download,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    test: ''
  });

  const [reportQuery, setReportQuery] = useState('');

  const whatsappNumber = "917889383928";
  const alternateNumber = "919906163302";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Minab%20Diagnostics,%20I%20am%20contacting%20from%20Budgam%20area%20to%20book%20a%20test.`;
  const phoneLink = `tel:+${whatsappNumber}`;

  const teamContacts = [
    {
      name: "Tawseef Hussain Mir",
      numbers: ["+91 7889383928", "+91 9906163302"],
      areas: ["Sanzipora", "Khanda", "Suthsoo", "News", "Wanpora"],
      primary: true
    },
    {
      name: "Amar Ali",
      numbers: ["+91 9103604976"],
      areas: ["Kultreh", "Gowharpora", "Chadoora", "Bugam", "Adjoining Areas"],
      primary: false
    },
    {
      name: "Mohammad Maqbool Mir",
      numbers: ["+91 9858483859"],
      areas: ["Pohroo", "Nowgam", "Kanihama", "Natipora", "Sheikhpora", "Checkpora"],
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 logo-pattern-bg">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <motion.a
          href={phoneLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="call-btn"
          aria-label="Call Minab Diagnostics"
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
        <motion.a
          href={whatsappLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="whatsapp-btn"
          aria-label="Message on WhatsApp"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </motion.a>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 outline-none" role="navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1">
            <Logo />
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <motion.a 
              href="#reports"
              whileHover={{ scale: 1.05 }}
              className="text-sm font-bold text-slate-600 hover:text-blue-600 flex items-center gap-2 outline-none focus-visible:text-blue-600"
            >
              <Download className="w-4 h-4" />
              Download Reports
            </motion.a>
            <Link 
              to="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <User className="w-4 h-4" />
              Patient Portal
            </Link>
            <div className="flex flex-col text-right border-l border-slate-100 pl-6">
              <span className="text-xs font-bold text-slate-500">📍 Chattergam, Near CHC Hospital</span>
              <span className="text-sm font-black text-blue-600">+91 7889383928</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="medical-gradient text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          {/* Background Logo Graphic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-sm pointer-events-none">
            <Microscope className="w-96 h-96" />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-500/30 text-blue-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            Serving Budgam & Srinagar
          </motion.span>
          <h1 className="text-4xl md:text-7xl font-black mt-8 mb-8 leading-[1.1] tracking-tight">
            Your Trusted Health Partner in <span className="text-blue-400">Chattergam</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Professional blood collection and accurate diagnostics at our state-of-the-art center or in the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <motion.a 
              href={whatsappLink}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group"
            >
              Book Home Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#location" 
              whileHover={{ y: -2 }}
              className="border-2 border-white/20 backdrop-blur-sm px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-colors"
            >
              Visit Center
            </motion.a>
          </div>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold uppercase tracking-widest text-sm"
            >
              Excellence in Diagnostics
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-4 mb-4 tracking-tight">Our Services</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto italic">
              Comprehensive clinical laboratory services using advanced technology for accurate results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CBC (Complete Blood Count)",
                desc: "Full analysis of red cells, white cells, and platelets for general health monitoring.",
                icon: <Activity className="w-8 h-8" />,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "KFT (Kidney Function Test)",
                desc: "Tests for Urea, Creatinine, and Electrolytes to monitor renal health.",
                icon: <ShieldAlert className="w-8 h-8" />,
                color: "bg-orange-50 text-orange-600"
              },
              {
                title: "LFT (Liver Function Test)",
                desc: "Comprehensive check for Bilirubin, ALT, AST, and Proteins.",
                icon: <Thermometer className="w-8 h-8" />,
                color: "bg-green-50 text-green-600"
              },
              {
                title: "Lipid Profile",
                desc: "Monitoring Cholesterol, LDL, HDL, and Triglycerides for heart health.",
                icon: <HeartPulse className="w-8 h-8" />,
                color: "bg-red-50 text-red-600"
              },
              {
                title: "Hormonal Profile",
                desc: "Thyroid (T3, T4, TSH), Prolactin, and other essential hormone assessments.",
                icon: <Dna className="w-8 h-8" />,
                color: "bg-purple-50 text-purple-600"
              },
              {
                title: "Dental Services Available",
                desc: "In partnership with Oro Dental Clinic, providing expert dental care right next door.",
                icon: <CircleCheckBig className="w-8 h-8" />,
                color: "bg-cyan-50 text-cyan-600"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">{service.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed italic">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="location" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100"
          >
            <h2 className="text-3xl font-black text-blue-900 mb-10">Contact Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-5">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800 mb-2">Our Location</h4>
                  <p className="text-slate-600 font-medium leading-relaxed mb-4">
                    Minab Diagnostics,<br />
                    Near Oro Dental Clinic & CHC Hospital,<br />
                    Chattergam, BK Pora, Budgam, J&K - 191113
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/Minab+Diagnostics+Chattergam+Budgam" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-600 text-sm font-bold flex items-center gap-1.5 hover:underline"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-green-50 p-4 rounded-2xl text-green-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800 mb-2">Phone & WhatsApp</h4>
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-600 font-bold text-lg tracking-tight">+91 7889383928</p>
                    <p className="text-slate-600 font-bold text-lg tracking-tight">+91 9906163302</p>
                  </div>
                  <p className="text-slate-400 text-sm mt-2 font-medium italic">Managed by Tawseef Hussain Mir</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-orange-50 p-4 rounded-2xl text-orange-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800 mb-2">Working Hours</h4>
                  <div className="space-y-1">
                    <p className="text-slate-600 font-medium flex items-center gap-2">
                       Mon - Sat: <span className="font-bold text-slate-900">08:00 AM - 08:00 PM</span>
                    </p>
                    <p className="text-red-500 text-sm font-bold bg-red-50 inline-block px-2 py-0.5 rounded">
                      Closed on Sundays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-10"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Why trust Minab Diagnostics?</h3>
            <ul className="space-y-6">
              {[
                "Free Home Collection in Chattergam & BK Pora",
                "Direct Reports on WhatsApp for Quick Access",
                "Highly Competitive & Affordable Rates",
                "Experienced Nursing Staff for Painless Collection",
                "State-of-the-Art Laboratory Equipment"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="bg-green-100 p-1 rounded-full text-green-600 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6 fill-green-50/50" />
                  </div>
                  <span className="font-semibold text-slate-700 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 bg-blue-600 rounded-[2rem] text-white relative overflow-hidden group shadow-xl shadow-blue-600/20"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-xl font-bold italic relative z-10 leading-relaxed">
                "We are dedicated to bringing world-class diagnostic services to your doorstep with precision and care."
              </p>
              <p className="mt-4 text-blue-100 font-bold uppercase tracking-widest text-xs relative z-10">
                — Quality Care Promise
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Area Contacts Section */}
      <section className="py-24 bg-blue-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tight">Service Areas & Contacts</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto italic">
              Our dedicated team is available across various locations for quick sample collection and support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamContacts.map((team, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[2.5rem] border ${team.primary ? 'bg-blue-600 text-white shadow-blue-600/20 shadow-2xl border-blue-600' : 'bg-white border-slate-100 shadow-xl shadow-blue-900/5'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl ${team.primary ? 'bg-white/20' : 'bg-blue-100 text-blue-600'}`}>
                    {team.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-xl leading-none mb-1">{team.name}</h4>
                    <span className={`text-sm font-bold uppercase tracking-wider ${team.primary ? 'text-blue-200' : 'text-blue-600'}`}>
                      {team.primary ? 'Head Operations' : 'Area Representative'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex flex-col gap-1">
                    <span className={`text-xs font-black uppercase tracking-widest ${team.primary ? 'text-blue-200' : 'text-slate-400'}`}>Phone Numbers</span>
                    {team.numbers.map((num, idx) => (
                      <a key={idx} href={`tel:${num.replace(/\s/g, '')}`} className="font-bold text-lg hover:underline underline-offset-4 decoration-2">
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-current opacity-70">
                  <span className={`text-xs font-black uppercase tracking-widest block mb-3 ${team.primary ? 'text-blue-200' : 'text-slate-400'}`}>Serving Highlights</span>
                  <div className="flex flex-wrap gap-2">
                    {team.areas.map((area, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-xs font-bold ${team.primary ? 'bg-white/10' : 'bg-slate-100'}`}>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-slate-100"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tight">Book Your Appointment</h2>
            <p className="text-slate-500 font-medium tracking-wide italic">Easy booking for home collection or center visit</p>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const message = `Booking Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nTest: ${formData.test}`;
              window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="tel" 
                  required
                  placeholder="Enter phone number"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Preferred Test</label>
              <div className="relative">
                <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Full Body Checkup"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium"
                  value={formData.test}
                  onChange={(e) => setFormData({...formData, test: e.target.value})}
                />
              </div>
            </div>

            <div className="md:col-span-2 mt-4">
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 group"
              >
                Confirm Appointment
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Reports Download Section */}
      <section id="reports" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-600/20 w-fit px-4 py-1.5 rounded-full text-blue-400 text-xs font-black tracking-widest uppercase mb-6">
              Online Results
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              Download Your <span className="text-blue-400">Digital Reports</span> Anytime
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 max-w-lg">
              Patients can securely download their diagnostic reports by entering their Bill Number or registered mobile number.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-300">Secure Access</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-300">24/7 Availability</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 relative z-10"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Download className="text-blue-400 w-7 h-7" />
              Retreive Report
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Bill Number or Mobile</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Enter ID or Phone Number"
                    className="w-full pl-12 pr-4 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium text-white"
                    value={reportQuery}
                    onChange={(e) => setReportQuery(e.target.value)}
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if(!reportQuery) return alert("Please enter your Bill Number or Phone Number");
                  const message = `Hi Minab Diagnostics, I want to download my report.\nDetails: ${reportQuery}`;
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-colors flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 group"
              >
                Find & Download
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <p className="text-center text-slate-500 text-sm font-medium italic">
                Reports are usually ready within 6-12 hours of sample collection.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 text-center border-t border-slate-800/50" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <Logo light className="justify-center mb-6" />
          <p className="text-slate-400 font-medium mb-12 max-w-md mx-auto">
            Providing accurate and reliable laboratory services to the Budgam community in 2026.
          </p>
          
          <div className="flex justify-center gap-8 mb-8">
             <a href={phoneLink} aria-label="Call Minab Diagnostics" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 outline-none focus-visible:text-white">
               <Phone className="w-5 h-5" />
               <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Call</span>
             </a>
             <a href={whatsappLink} aria-label="WhatsApp Minab Diagnostics" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 outline-none focus-visible:text-white">
               <MessageCircle className="w-5 h-5" />
               <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">WhatsApp</span>
             </a>
             <Link to="/dashboard" aria-label="Go to Staff Portal" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 outline-none focus-visible:text-white">
               <User className="w-5 h-5" />
               <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Staff Portal</span>
             </Link>
          </div>

          <div className="pt-10 border-t border-slate-800/50">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} Minab Diagnostics. Chattergam, BK Pora, Budgam, J&K.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
