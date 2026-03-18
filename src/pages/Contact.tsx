import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
  MessageSquare,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 8600500725', '+91 7066994575'],
    action: 'tel:+918600500725',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['prakamsales@gmail.com', 'prakam.marketing@gmail.com'],
    action: 'mailto:prakamsales@gmail.com',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Plot No.273, Sector No.10,', 'PCNTDA MIDC, Bhosari, Pune'],
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 font-heading">
              Get In Touch
            </h1>
            <p className="text-steel-300 mt-4 max-w-2xl mx-auto text-lg">
              Have a project in mind? Need a quote? We'd love to hear from you.
              Reach out to us and let's build something great together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  variants={fadeUp}
                  className="bg-steel-50 rounded-2xl p-6 border border-steel-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-navy-900 font-heading mb-2">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-steel-600 text-sm">{detail}</p>
                  ))}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-20 md:py-28 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-steel-200 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 font-heading mb-2">
                  Send Us a Message
                </h2>
                <p className="text-steel-600 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} className="text-green-500" />
                    <span className="text-green-700 font-medium">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">
                        <User size={14} className="inline mr-2" />Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-steel-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">
                        <Mail size={14} className="inline mr-2" />Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-steel-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">
                        <Phone size={14} className="inline mr-2" />Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-steel-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">
                        <Building2 size={14} className="inline mr-2" />Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-steel-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-steel-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="product">Product Inquiry</option>
                      <option value="service">Service Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">
                      <MessageSquare size={14} className="inline mr-2" />Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-steel-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 text-lg"
                  >
                    <Send size={20} /> Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Person */}
              <div className="bg-white rounded-2xl p-8 border border-steel-200">
                <h3 className="text-xl font-bold text-navy-900 font-heading mb-4">Contact Person</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl flex items-center justify-center">
                    <User size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">Mr. P. Dange</h4>
                    <p className="text-steel-600 text-sm">Director / Proprietor</p>
                    <a href="tel:+918600500725" className="text-orange-500 text-sm font-medium hover:text-orange-600">
                      +91 8600500725
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918600500725?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20engineering%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 text-center transition-all duration-300 shadow-lg"
              >
                <div className="text-3xl mb-2">💬</div>
                <h4 className="font-bold text-lg mb-1">Chat on WhatsApp</h4>
                <p className="text-white/90 text-sm">Quick response guaranteed</p>
              </a>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden border border-steel-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 font-heading mb-2">Our Location</h3>
                  <p className="text-steel-600 text-sm">Plot No.273, Sector No.10, PCNTDA MIDC, Bhosari, Pune</p>
                </div>
                <div className="h-64 bg-steel-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4!2d73.8!3d18.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQ4LjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prakam Engineering Systems Location"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
