import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Building, Users, Award, Smartphone, MessageCircle, Handshake, Globe, Heart, CheckCircle, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import * as XLSX from 'xlsx';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    type: 'individual'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const location = useLocation();
  const isAdmin = location.search.includes('admin=1');

  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setUserIP(data.ip))
      .catch(() => setUserIP('Unavailable'));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Compose metadata
      const now = new Date();
      const contactEntry = {
        id: Date.now().toString(),
        timestamp: now.toISOString(),
        date: now.toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        }),
        time: now.toLocaleTimeString('en-US', {
          hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'
        }),
        ipAddress: userIP || 'Unavailable',
        userAgent: navigator.userAgent,
        formData: { ...formData }
      };
      // Save to localStorage
      const prev = JSON.parse(localStorage.getItem('nammaloo_contacts') || '[]');
      prev.push(contactEntry);
      localStorage.setItem('nammaloo_contacts', JSON.stringify(prev, null, 2));
      setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
      setFormData({ name: '', email: '', phone: '', organization: '', message: '', type: 'individual' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Error saving your message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Download all messages as JSON (with download date)
  const handleDownload = () => {
    const contacts = JSON.parse(localStorage.getItem('nammaloo_contacts') || '[]');
    const exportObj = {
      formDownloadDate: new Date().toISOString(),
      contacts
    };
    const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacts.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export all messages as Excel
  const handleExportExcel = () => {
    const contacts = JSON.parse(localStorage.getItem('nammaloo_contacts') || '[]');
    if (!contacts.length) return;
    // Flatten for Excel
    const rows = contacts.map(c => ({
      id: c.id,
      timestamp: c.timestamp,
      date: c.date,
      time: c.time,
      ipAddress: c.ipAddress,
      userAgent: c.userAgent,
      ...c.formData
    }));
    // Add download date as first row
    const downloadDate = new Date().toISOString();
    const ws = XLSX.utils.json_to_sheet([
      { 'formDownloadDate': downloadDate },
      {}, // blank row
      ...rows
    ], { skipHeader: false });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Contacts');
    XLSX.writeFile(wb, 'contacts.xlsx');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#1aaf9b] mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#191c5d] mb-4">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions about NammaLoo? We're here to help. Reach out to us for partnerships, support, or general inquiries.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-[#1aaf9b] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#191c5d] mb-2">Email Us</h3>
              <p className="text-gray-600">info@nammaloo.com</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-[#497abd] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#191c5d] mb-2">Call Us</h3>
              <p className="text-gray-600">+91 999 479 2431</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-[#ed1b24] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#191c5d] mb-2">Visit Us</h3>
              <p className="text-gray-600 justify">2nd Floor, Kathipara Urban Square, 27, 2nd St, near Guindy, Sripuram Colony, Viralur, Rajeswari colony, Chennai, St.Thomas Mount, Tamil Nadu 600016</p>
            </div>
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <Handshake className="w-12 h-12 sm:w-16 sm:h-16 text-[#1aaf9b] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191c5d]">Partnership Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
              <Building className="w-10 h-10 sm:w-12 sm:h-12 text-[#1aaf9b] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#191c5d] mb-2">Government Bodies</h3>
              <p className="text-gray-600 text-sm">Partner with us to implement smart sanitation solutions in your city.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-[#497abd] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#191c5d] mb-2">NGOs</h3>
              <p className="text-gray-600 text-sm">Join our mission to improve sanitation access in underserved communities.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
              <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-[#ed1b24] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#191c5d] mb-2">Smart City Projects</h3>
              <p className="text-gray-600 text-sm">Integrate our smart restroom solutions into your smart city initiatives.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#ffcb05] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#191c5d] mb-2">Investors</h3>
              <p className="text-gray-600 text-sm">Support our vision of creating cleaner, smarter cities through technology.</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <Send className="w-12 h-12 sm:w-16 sm:h-16 text-[#1aaf9b] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191c5d]">Send us a Message</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto bg-white/80 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1aaf9b]/50 focus:border-[#1aaf9b] outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1aaf9b]/50 focus:border-[#1aaf9b] outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1aaf9b]/50 focus:border-[#1aaf9b] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1aaf9b]/50 focus:border-[#1aaf9b] outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1aaf9b]/50 focus:border-[#1aaf9b] outline-none transition-colors"
              >
                <option value="individual">Individual</option>
                <option value="business">Business</option>
                <option value="government">Government Body</option>
                <option value="ngo">NGO</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1aaf9b]/50 focus:border-[#1aaf9b] outline-none transition-colors"
                required
              ></textarea>
            </div>
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`p-4 rounded-lg flex items-center gap-3 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="text-sm font-medium">{submitStatus.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1aaf9b] text-white py-3 rounded-lg font-semibold hover:bg-[#1aaf9b]/90 transition-colors flex items-center justify-center transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Message
                </>
              )}
            </button>
            {isAdmin && (
              <div className="flex gap-2 mt-1">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="w-fit bg-[#497abd] text-white px-3 py-1 rounded hover:bg-[#497abd]/90 transition-colors flex items-center text-xs"
                >
                  <DownloadIcon className="mr-1" size={12} />
                  Download JSON
                </button>
                <button
                  type="button"
                  onClick={handleExportExcel}
                  className="w-fit bg-[#1aaf9b] text-white px-3 py-1 rounded hover:bg-[#1aaf9b]/90 transition-colors flex items-center text-xs"
                >
                  <ExcelIcon className="mr-1" size={12} />
                  Export as Excel
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

// Download icon
function DownloadIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M9 3a1 1 0 112 0v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 115.707 8.293L8 10.586V3z"/><path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/></svg>
  );
}

// Excel icon
function ExcelIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7.828A2 2 0 0017.414 7L13 2.586A2 2 0 0011.586 2H4zm8 1.414L16.586 8H13a1 1 0 01-1-1V3.414zM6.293 13.707a1 1 0 001.414 0L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 000 1.414z"/></svg>
  );
} 