import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Factory,
  ArrowRight,
  MapPin,
  Building2,
  Star,
  Quote,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const clients = [
  { name: 'Chemdist Process Solutions Pvt Ltd', location: 'Pune', sector: 'Chemical Processing' },
  { name: 'Shrijee Process Engineering Ltd', location: 'Ahmednagar', sector: 'Process Engineering' },
  { name: 'Vikasratna Vilasrao Deshmukh Manjara Shetkari Sahakari Sakhar Karkhana Ltd', location: 'Latur', sector: 'Sugar Industry' },
  { name: 'Vaishali Biofuel Limited', location: 'Akola', sector: 'Biofuel & Energy' },
  { name: 'Primesol And Ergo Systems', location: 'Pune', sector: 'Engineering Systems' },
  { name: 'Wilo Pumps Pvt Ltd', location: 'Pune', sector: 'Pump Manufacturing' },
  { name: 'Mojj Engineering Systems', location: 'Bhosari', sector: 'Engineering Systems' },
  { name: 'Aditya Polymers', location: 'Pune', sector: 'Polymer Industry' },
  { name: 'Elementis Specialties (India) Pvt Ltd', location: 'Mumbai', sector: 'Specialty Chemicals' },
  { name: 'Arkchem System Pvt Ltd', location: 'Pune', sector: 'Chemical Engineering' },
  { name: 'Cyabernetic Technologies Pvt Ltd', location: 'Pirangut', sector: 'Technology' },
  { name: 'Raj Process Equipments & Systems Pvt Ltd', location: 'Pune', sector: 'Process Equipment' },
  { name: 'Devigere Biosolution Pvt Ltd', location: 'Pune', sector: 'Biotechnology' },
  { name: 'Prochem Turnkey Projects Pvt Ltd', location: 'Pune', sector: 'Turnkey Projects' },
  { name: 'SSEPL Techno Pvt Ltd', location: 'Pune', sector: 'Technology' },
];

const testimonials = [
  {
    quote: 'Prakam Engineering Systems delivered our spray dryer project on time with exceptional quality. Their technical expertise and commitment to precision made the entire process smooth.',
    name: 'Process Engineering Manager',
    company: 'Leading Chemical Processing Company, Pune',
  },
  {
    quote: 'The structural work and base frames fabricated by Prakam have been outstanding in terms of quality and durability. We have been working with them for multiple projects.',
    name: 'Plant Head',
    company: 'Industrial Manufacturing Company, Maharashtra',
  },
  {
    quote: 'Their material handling equipment solutions transformed our warehouse operations. Professional team, quality products, and excellent after-sales support.',
    name: 'Operations Director',
    company: 'Logistics & Manufacturing Company, Pune',
  },
];

const sectors = [
  'Chemical Processing',
  'Pharmaceutical',
  'Food & Beverage',
  'Sugar Industry',
  'Biofuel & Energy',
  'Pump Manufacturing',
  'Polymer Industry',
  'Specialty Chemicals',
  'Biotechnology',
  'Turnkey Projects',
];

export default function Clients() {
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
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Our Clients</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 font-heading">
              Trusted Partnerships
            </h1>
            <p className="text-steel-300 mt-4 max-w-2xl mx-auto text-lg">
              We are proud to serve 15+ leading companies across diverse industries
              throughout Maharashtra and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-8"
          >
            <h2 className="text-xl font-bold text-navy-900 font-heading">Industries We Serve</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {sectors.map((sector) => (
              <motion.span
                key={sector}
                variants={fadeUp}
                className="bg-navy-50 text-navy-700 px-5 py-2.5 rounded-full text-sm font-medium border border-navy-100"
              >
                {sector}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-20 md:py-28 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Our Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-heading">
              Companies That Trust Us
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-steel-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded-xl flex items-center justify-center shrink-0 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <span className="text-white font-bold text-lg font-heading">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-navy-900 font-heading leading-tight mb-2">{client.name}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-1 text-steel-500">
                        <MapPin size={14} /> {client.location}
                      </span>
                      <span className="flex items-center gap-1 text-steel-500">
                        <Building2 size={14} /> {client.sector}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-heading">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.company}
                variants={fadeUp}
                className="bg-steel-50 rounded-2xl p-8 border border-steel-200 relative"
              >
                <Quote size={32} className="text-orange-200 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-steel-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center">
                    <Factory size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{testimonial.name}</p>
                    <p className="text-steel-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Join Our Growing Client Base
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Experience the Prakam difference — quality, reliability, and engineering excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-navy-900 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg text-lg"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
