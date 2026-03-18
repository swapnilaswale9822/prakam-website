import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cog,
  Flame,
  Truck,
  Construction,
  Layers,
  ArrowRight,
  CheckCircle2,
  Wrench,
  PenTool,
  PackageCheck,
  Settings,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Cog,
    title: 'Processing Equipment',
    desc: 'We design and manufacture a complete range of processing equipment tailored for chemical, pharmaceutical, food, and allied industries.',
    details: [
      'Storage tanks for liquid and solid storage',
      'Heat exchangers for thermal processing',
      'Pressure vessels to ASME standards',
      'Reactor vessels and agitator tanks',
      'Industrial blenders and mixers',
      'Custom processing solutions',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Flame,
    title: 'Dryer & Evaporation Plants',
    desc: 'Advanced drying and evaporation technology designed for maximum thermal efficiency, consistent product quality, and reduced energy consumption.',
    details: [
      'Spray dryers for liquid-to-powder conversion',
      'Rotary dryers for bulk material drying',
      'Flash dryers for instant drying',
      'Forced circulation evaporators',
      'Multi-effect evaporation systems',
      'Hot air generators (HAG)',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Truck,
    title: 'Material Handling Equipment',
    desc: 'Comprehensive material handling solutions for efficient and safe movement of materials across industrial operations.',
    details: [
      'Belt conveyors for continuous transport',
      'Screw conveyors for powder and granules',
      'Bucket elevators for vertical transport',
      'Chain conveyors for heavy loads',
      'Cyclone separators and bag filters',
      'Silos and hoppers',
    ],
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Construction,
    title: 'Plant Site Erection Work',
    desc: 'Complete on-site erection and commissioning services with experienced teams ensuring precise installation and timely project delivery.',
    details: [
      'Equipment installation and alignment',
      'Piping fabrication and installation',
      'Structural steel erection',
      'Electrical and instrumentation support',
      'Commissioning and trial runs',
      'Post-installation support',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Layers,
    title: 'Structure & Base Frame',
    desc: 'Precision-fabricated structural steel frameworks and machine base frames for reliable, long-lasting industrial installations.',
    details: [
      'Structural steel frameworks',
      'Machine base frames and platforms',
      'Mezzanine floor structures',
      'Equipment support structures',
      'Industrial shed structures',
      'Anti-corrosion treated frames',
    ],
    color: 'from-amber-500 to-amber-600',
  },
];

const processSteps = [
  { icon: PenTool, title: 'Design', desc: 'Detailed engineering design tailored to your requirements' },
  { icon: Settings, title: 'Manufacture', desc: 'Precision manufacturing in our state-of-the-art facility' },
  { icon: PackageCheck, title: 'Quality Check', desc: 'Rigorous quality inspection at every stage' },
  { icon: Truck, title: 'Delivery', desc: 'On-time delivery and professional installation' },
];

export default function Services() {
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
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 font-heading">
              Engineering Services
            </h1>
            <p className="text-steel-300 mt-4 max-w-2xl mx-auto text-lg">
              End-to-end engineering solutions from concept to commissioning,
              backed by technical expertise and modern infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.title} variants={fadeUp} className="text-center relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl flex items-center justify-center relative z-10">
                    <Icon size={26} className="text-white" />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-steel-200 hidden md:block" style={{ display: i === 3 ? 'none' : undefined }} />
                  <span className="text-orange-500 font-bold text-sm">Step {i + 1}</span>
                  <h4 className="font-bold text-navy-900 font-heading mt-1">{step.title}</h4>
                  <p className="text-steel-600 text-sm mt-1">{step.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 md:py-28 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="bg-white rounded-3xl border border-steel-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`grid lg:grid-cols-5 gap-0 ${isReversed ? 'direction-rtl' : ''}`}>
                  <div className={`lg:col-span-2 bg-gradient-to-br ${service.color} p-10 md:p-12 flex flex-col justify-center ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed">{service.desc}</p>
                  </div>
                  <div className={`lg:col-span-3 p-10 md:p-12 ${isReversed ? 'lg:order-1' : ''}`}>
                    <h4 className="font-semibold text-navy-900 mb-6 font-heading text-lg flex items-center gap-2">
                      <Wrench size={20} className="text-orange-500" /> What We Offer
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3 text-steel-700">
                          <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm"
                    >
                      Enquire About This Service <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Have a Project in Mind?
            </h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Let us know your requirements. Our engineering team will work with you
              to deliver the perfect solution for your industrial needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-navy-900 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg text-lg"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
