'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Globe,
  Check,
  Calendar,
  Building2,
  Lock,
  UserCheck,
  AlertCircle,
  FileText,
  Clock,
  ArrowRight,
  Sliders,
  X,
} from 'lucide-react';

const sections = [
  { id: 'who-we-are', label: '1. Who We Are', icon: Building2 },
  { id: 'info-collect', label: '2. Information We Collect', icon: FileText },
  { id: 'info-use', label: '3. How We Use It', icon: Clock },
  { id: 'sms-messaging', label: '4. SMS Communications', icon: MessageSquare },
  { id: 'info-share', label: '5. Sharing Policies', icon: Globe },
  { id: 'data-security', label: '6. Data Security', icon: Lock },
  { id: 'your-rights', label: '7. Your Rights', icon: UserCheck },
  { id: 'cookies-analytics', label: '8. Cookies & Analytics', icon: Shield },
  { id: 'children-privacy', label: "9. Children's Privacy", icon: AlertCircle },
  { id: 'policy-changes', label: '10. Policy Changes', icon: Calendar },
  { id: 'manage-preferences', label: '11. Manage Preferences', icon: Sliders },
];

export function PrivacyPolicyContent() {
  const [activeSection, setActiveSection] = useState('who-we-are');

  // Opts state
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [smsPhone, setSmsPhone] = useState('');
  const [emailOptIn, setEmailOptIn] = useState(false);
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(true);

  // Modal & validation state
  const [showSmsModal, setShowSmsModal] = useState(false);
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Toast state
  const [toast, setToast] = useState<{ message: string } | null>(null);

  // Load preferences from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        setSmsOptIn(localStorage.getItem('jybek-sms-opt-in') === 'true');
        setSmsPhone(localStorage.getItem('jybek-sms-phone') || '');
        setEmailOptIn(localStorage.getItem('jybek-email-opt-in') === 'true');
        
        const analytics = localStorage.getItem('cookie-consent-analytics');
        if (analytics !== null) setAnalyticsCookies(analytics === 'true');

        const marketing = localStorage.getItem('cookie-consent-marketing');
        if (marketing !== null) setMarketingCookies(marketing === 'true');
      } catch (err) {
        console.error('Failed to load preferences:', err);
      }
    }
  }, []);

  const showToast = (message: string) => {
    setToast({ message });
  };

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Phone validation
  const validatePhone = (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    return cleaned.length >= 10;
  };

  // Format phone number dynamically as user types: (123) 456-7890
  const handlePhoneInputChange = (val: string) => {
    const cleaned = val.replace(/\D/g, '');
    let formatted = cleaned;
    
    if (cleaned.length > 0) {
      if (cleaned.length <= 3) {
        formatted = `(${cleaned}`;
      } else if (cleaned.length <= 6) {
        formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
      } else {
        formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
      }
    }
    
    setPhoneNumberInput(formatted);
    if (phoneError) setPhoneError('');
  };

  // Toggle handlers
  const handleSmsToggleChange = (checked: boolean) => {
    if (checked) {
      // Open verification/consent modal rather than checking directly
      setPhoneNumberInput(smsPhone);
      setPhoneError('');
      setShowSmsModal(true);
    } else {
      setSmsOptIn(false);
      setSmsPhone('');
      if (typeof window !== 'undefined') {
        localStorage.setItem('jybek-sms-opt-in', 'false');
        localStorage.removeItem('jybek-sms-phone');
      }
      showToast('SMS updates: Opted Out.');
    }
  };

  const handleConfirmSmsOptIn = () => {
    if (!validatePhone(phoneNumberInput)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      return;
    }
    
    const formattedPhone = phoneNumberInput;
    setSmsOptIn(true);
    setSmsPhone(formattedPhone);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('jybek-sms-opt-in', 'true');
      localStorage.setItem('jybek-sms-phone', formattedPhone);
    }
    
    setShowSmsModal(false);
    showToast(`SMS Opt-in confirmed for ${formattedPhone}!`);
  };

  const handleCancelSmsOptIn = () => {
    setShowSmsModal(false);
    setPhoneNumberInput('');
    setPhoneError('');
  };

  const handleEmailChange = (checked: boolean) => {
    setEmailOptIn(checked);
    if (typeof window !== 'undefined') {
      localStorage.setItem('jybek-email-opt-in', String(checked));
    }
    showToast(checked ? 'Newsletter: Subscribed successfully!' : 'Newsletter: Unsubscribed.');
  };

  const handleAnalyticsChange = (checked: boolean) => {
    setAnalyticsCookies(checked);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent-analytics', String(checked));
    }
    showToast(`Analytics Cookies: ${checked ? 'Allowed' : 'Disallowed'}.`);
  };

  const handleMarketingChange = (checked: boolean) => {
    setMarketingCookies(checked);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent-marketing', String(checked));
    }
    showToast(`Marketing Cookies: ${checked ? 'Allowed' : 'Disallowed'}.`);
  };

  // Handle smooth scroll
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Scrollspy to set active sidebar item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // threshold offset

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950/20">
      {/* Toast Notification Banner */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-4 rounded-2xl shadow-soft-xl border border-gray-800 dark:border-gray-150 flex items-center gap-3.5 max-w-sm"
          >
            <div className="bg-emerald-500 rounded-full p-1 text-white shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <div>
              <p className="text-sm font-semibold">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SMS Confirmation Modal */}
      <AnimatePresence>
        {showSmsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCancelSmsOptIn}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 z-10"
            >
              {/* Close Button */}
              <button
                onClick={handleCancelSmsOptIn}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Confirm SMS Opt-in
                </h3>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Please enter your mobile phone number to confirm your consent to receive text updates.
                </p>

                {/* Input Field */}
                <div className="w-full text-left mb-6">
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                    Mobile Phone Number
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={phoneNumberInput}
                    onChange={(e) => handlePhoneInputChange(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all duration-200 ${
                      phoneError
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  />
                  {phoneError && (
                    <p className="text-xs text-rose-500 mt-1.5 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {phoneError}
                    </p>
                  )}
                </div>

                {/* Legal Disclosure */}
                <p className="text-2xs text-gray-400 dark:text-gray-500 text-left leading-relaxed border-t border-gray-100 dark:border-gray-800/80 pt-4 mb-6">
                  By clicking Confirm, you agree to receive automated messages (care scheduling, reminders, updates) from Jybek HomeCare Services at the number provided. Consent is not a condition of purchase. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to cancel at any time.
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 w-full">
                  <button
                    onClick={handleCancelSmsOptIn}
                    className="flex-1 px-5 py-3 bg-gray-150 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmSmsOptIn}
                    className="flex-1 px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-brand hover:shadow-lg transition-all duration-200 text-sm"
                  >
                    Confirm Opt-in
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden animate-fade-in">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-15" />
        
        {/* Decorative Blur Spheres */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-500/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/10 w-80 h-80 bg-accent-teal/20 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Pulsing Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-brand-100 border border-white/20 mb-6 animate-pulse-soft">
              <Shield className="w-3.5 h-3.5" />
              <span>Trust &amp; Privacy Center</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed text-balance">
              Your privacy is our priority. Read about how Jybek HomeCare Group LLC collects, uses, and safeguards your personal data.
            </p>
          </motion.div>
        </div>

        {/* Decorative Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
              className="dark:fill-gray-950"
            />
          </svg>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="bg-white dark:bg-gray-950 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Metadata Card Rows */}
          <div className="relative -mt-10 z-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-soft-xl border border-gray-100 dark:border-gray-800 mb-16 animate-fade-in-up">
            <div className="p-2 border-r border-gray-100 dark:border-gray-800 last:border-0">
              <span className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Company</span>
              <span className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">Jybek HomeCare Group LLC</span>
            </div>
            <div className="p-2 border-r border-gray-100 dark:border-gray-800 last:border-0">
              <span className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Doing Business As</span>
              <span className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">Jybek HomeCare Services</span>
            </div>
            <div className="p-2 border-r border-gray-100 dark:border-gray-800 last:border-0">
              <span className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Effective Date</span>
              <span className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">June 19, 2026</span>
            </div>
            <div className="p-2">
              <span className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Last Updated</span>
              <span className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">June 19, 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Sidebar ToC */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 z-20">
              <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/80 rounded-2xl p-5 shadow-soft">
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 px-2">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => handleScrollTo(sec.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-brand-500 text-white shadow-brand dark:bg-brand-600'
                            : 'text-gray-600 dark:text-gray-400 hover:text-brand-600 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 dark:hover:text-brand-400'
                        }`}
                      >
                        <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? 'text-white' : 'text-gray-400 dark:text-gray-500'}`} />
                        <span className="truncate">{sec.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-12 text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              
              {/* SMS Callout Alert Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-brand-50/20 dark:from-blue-950/20 dark:to-brand-950/5 border-l-4 border-brand-500 shadow-soft flex gap-5">
                <div className="p-3 bg-brand-100 dark:bg-brand-950/50 rounded-xl shrink-0 h-fit">
                  <MessageSquare className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 dark:text-brand-300 text-xs uppercase tracking-widest mb-1.5">
                    SMS &amp; Mobile Messaging Disclosure
                  </h4>
                  <p className="text-gray-900 dark:text-gray-200 font-medium text-sm sm:text-base leading-relaxed">
                    No mobile opt-in data will be shared with third parties. Message and data rates may apply. Reply STOP to opt out of SMS messages at any time. Reply HELP for assistance.
                  </p>
                </div>
              </div>

              {/* 1. Who We Are */}
              <section id="who-we-are" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">1</span>
                  Who We Are
                </h2>
                <p>
                  Jybek HomeCare Group LLC (DBA Jybek HomeCare Services) is a non-medical homecare agency located at 44 Bearfoot Rd #200, Northborough, MA 01532. We provide in-home personal care, companion care, respite care, and related homecare services to individuals and families.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/80 text-sm">
                  For questions about this policy, contact us at{' '}
                  <a href="mailto:info@jybekhomecares.com" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
                    info@jybekhomecares.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+18887175009" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
                    +1 888-717-5009
                  </a>
                  .
                </div>
              </section>

              {/* 2. Information We Collect */}
              <section id="info-collect" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">2</span>
                  Information We Collect
                </h2>
                <p>We collect information you provide directly, including:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                  {[
                    'Name, address, phone number, and email address',
                    'ZIP code and care service needs',
                    'Health and care-related information needed to deliver our services',
                    'Communications with our team via phone, email, or SMS',
                    'Information submitted through our website contact or assessment forms',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm sm:text-base">
                      <div className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full p-1 h-5 w-5 shrink-0 flex items-center justify-center mt-1">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  We also collect limited technical data such as browser type, pages visited, and IP address through standard website analytics tools.
                </p>
              </section>

              {/* 3. How We Use Your Information */}
              <section id="info-use" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">3</span>
                  How We Use Your Information
                </h2>
                <p>We use your information to:</p>
                <ul className="grid grid-cols-1 gap-3 pl-2">
                  {[
                    'Provide, coordinate, and improve our homecare services',
                    'Respond to inquiries and schedule consultations',
                    'Send appointment reminders, shift notifications, and care updates via SMS or phone',
                    'Comply with applicable federal and state regulations',
                    'Send care-related newsletters or resources if you have subscribed',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm sm:text-base">
                      <div className="bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 rounded-full p-1 h-5 w-5 shrink-0 flex items-center justify-center mt-1">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 4. SMS Messaging & Mobile Communications */}
              <section id="sms-messaging" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">4</span>
                  SMS Messaging &amp; Mobile Communications
                </h2>
                <p>
                  By providing your phone number and consenting to receive SMS communications from Jybek HomeCare Services, you agree to receive text messages related to care scheduling, caregiver coordination, appointment reminders, and service updates.
                </p>

                <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/50 flex gap-4 my-6">
                  <div className="bg-emerald-500 rounded-full p-1 h-5 w-5 shrink-0 flex items-center justify-center text-white text-xs font-bold mt-1">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <p className="text-emerald-950 dark:text-emerald-300 font-semibold text-sm sm:text-base">
                    No mobile opt-in data will be shared with third parties for marketing or any other purpose.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Opt-in', desc: 'Consent is obtained via our website contact forms.' },
                    { title: 'Opt-out', desc: 'Reply STOP to any SMS message to unsubscribe immediately. You will receive one confirmation message.' },
                    { title: 'Help', desc: 'Reply HELP to any SMS message for assistance, or call +1 888-717-5009.' },
                    { title: 'Rates', desc: 'Message and data rates may apply depending on your carrier plan.' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/20">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1.5 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. How We Share Your Information */}
              <section id="info-share" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">5</span>
                  How We Share Your Information
                </h2>
                <p>
                  We do not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:
                </p>
                <ul className="space-y-3.5 pl-2">
                  {[
                    { bold: 'Service delivery:', text: 'With caregivers and care coordinators to fulfill your care plan' },
                    { bold: 'Legal compliance:', text: 'When required by law, court order, or government authority' },
                    { bold: 'Business operations:', text: 'With trusted service providers (payroll, scheduling, IT) who are bound by confidentiality agreements' },
                    { bold: 'Safety:', text: 'To protect the health or safety of a client, caregiver, or the public' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm sm:text-base">
                      <div className="bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 rounded-full p-1 h-5 w-5 shrink-0 flex items-center justify-center mt-1">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span>
                        <strong className="text-gray-900 dark:text-white mr-1.5">{item.bold}</strong>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/50 flex gap-4 my-6">
                  <div className="bg-emerald-500 rounded-full p-1 h-5 w-5 shrink-0 flex items-center justify-center text-white text-xs font-bold mt-1">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <p className="text-emerald-950 dark:text-emerald-300 font-semibold text-sm sm:text-base">
                    We never share your mobile opt-in data or phone number with third parties for marketing purposes.
                  </p>
                </div>
              </section>

              {/* 6. Data Security */}
              <section id="data-security" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">6</span>
                  Data Security
                </h2>
                <p>
                  We implement appropriate administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* 7. Your Rights */}
              <section id="your-rights" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">7</span>
                  Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pl-2">
                  {[
                    'Access the personal information we hold about you',
                    'Request correction of inaccurate information',
                    'Request deletion of your information (subject to legal retention requirements)',
                    'Opt out of SMS communications at any time by replying STOP',
                    'Opt out of email newsletters by clicking the unsubscribe link',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm sm:text-base">
                      <div className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full p-1 h-5 w-5 shrink-0 flex items-center justify-center mt-1">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:info@jybekhomecares.com" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
                    info@jybekhomecares.com
                  </a>
                  .
                </p>
              </section>

              {/* 8. Cookies & Website Analytics */}
              <section id="cookies-analytics" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">8</span>
                  Cookies &amp; Website Analytics
                </h2>
                <p>
                  Our website uses cookies and standard analytics tools to understand how visitors use the site and improve user experience. You may disable cookies in your browser settings. We do not use tracking technologies to sell your data to advertisers.
                </p>
              </section>

              {/* 9. Children's Privacy */}
              <section id="children-privacy" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">9</span>
                  Children&apos;s Privacy
                </h2>
                <p>
                  Our services and website are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us immediately.
                </p>
              </section>

              {/* 10. Changes to This Policy */}
              <section id="policy-changes" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">10</span>
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically. Continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* 11. Manage Preferences */}
              <section id="manage-preferences" className="scroll-mt-32 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-bold text-sm">11</span>
                  Manage Preferences
                </h2>
                <p>
                  Directly manage your preferences, opt-in/opt-out status, and cookie configurations below. Changes are saved instantly.
                </p>

                <div className="bg-gray-50/50 dark:bg-gray-900/30 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 space-y-6">
                  {/* SMS Preference */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800/80">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">SMS Communications Opt-in</h4>
                        {smsOptIn && smsPhone && (
                          <span className="px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-2xs font-semibold">
                            Consented: {smsPhone}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl">
                        Consent to receive caregiver assignments, schedule alerts, and transactional messages. (Reply STOP to cancel)
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input
                        type="checkbox"
                        checked={smsOptIn}
                        onChange={(e) => handleSmsToggleChange(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                    </label>
                  </div>

                  {/* Email Preference */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800/80">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Email Newsletter Opt-in</h4>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl">
                        Subscribe to receive weekly caregiving resources, helpful articles, and community tips.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input
                        type="checkbox"
                        checked={emailOptIn}
                        onChange={(e) => handleEmailChange(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                    </label>
                  </div>

                  {/* Analytics Cookies Preference */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800/80">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Performance &amp; Analytics Cookies</h4>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl">
                        Help us improve our website by collecting anonymous metrics about which pages are visited.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input
                        type="checkbox"
                        checked={analyticsCookies}
                        onChange={(e) => handleAnalyticsChange(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                    </label>
                  </div>

                  {/* Marketing Cookies Preference */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Marketing &amp; Targeting Cookies</h4>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl">
                        Allow us to tailor resource suggestions and showcase personalized options during your visit.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input
                        type="checkbox"
                        checked={marketingCookies}
                        onChange={(e) => handleMarketingChange(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                    </label>
                  </div>
                </div>
              </section>

              {/* Quick contact center card */}
              <div className="mt-16 p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Questions About Our Policy?
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">
                      Reach out to our privacy compliance coordinators
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-brand-500 shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Jybek HomeCare Group LLC</p>
                        <p className="text-2xs text-gray-400 uppercase tracking-widest">DBA Jybek HomeCare Services</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                      <span>44 Bearfoot Rd #200, Northborough, MA 01532</span>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <a href="tel:+18887175009" className="flex items-center gap-3 group text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      <Phone className="h-5 w-5 text-brand-500 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>+1 888-717-5009</span>
                    </a>
                    <a href="mailto:info@jybekhomecares.com" className="flex items-center gap-3 group text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      <Mail className="h-5 w-5 text-brand-500 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>info@jybekhomecares.com</span>
                    </a>
                    <a href="https://jybekhomecares.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      <Globe className="h-5 w-5 text-brand-500 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="flex items-center gap-1.5">
                        jybekhomecares.com
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
