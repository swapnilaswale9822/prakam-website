import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  ArrowRight,
  Factory,
  Wrench,
  Shield,
  Truck,
  Award,
  Users,
  Clock,
  CheckCircle2,
  ChevronRight,
  Cog,
  Flame,
  Container,
  Pipette,
  Box,
  Layers,
  CircleDot,
  Construction,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience', icon: Clock },
  { value: 15, suffix: '+', label: 'Trusted Clients', icon: Users },
  { value: 500, suffix: '+', label: 'Projects Completed', icon: CheckCircle2 },
  { value: 4000, suffix: ' Sq.Ft.', label: 'Workshop Area', icon: Factory },
];

const services = [
  {
    icon: Cog,
    title: 'Processing Equipment',
    desc: 'High-performance processing equipment engineered for efficiency, precision, and long operational life across diverse industries.',
  },
  {
    icon: Flame,
    title: 'Dryer & Evaporation Plants',
    desc: 'Advanced drying and evaporation systems designed for optimal thermal efficiency and consistent product quality.',
  },
  {
    icon: Truck,
    title: 'Material Handling Equipment',
    desc: 'Robust conveyor systems, bucket elevators, and material transfer solutions for seamless industrial workflows.',
  },
  {
    icon: Construction,
    title: 'Plant Site Erection',
    desc: 'Complete on-site erection and commissioning services with experienced teams ensuring timely project delivery.',
  },
  {
    icon: Layers,
    title: 'Structure & Base Frame',
    desc: 'Precision-built structural steel frameworks and machine base frames for reliable industrial installations.',
  },
];

const products = [
  { icon: Container, name: 'Storage Tanks', desc: 'Custom SS & MS tanks' },
  { icon: Cog, name: 'Industrial Equipment', desc: 'Precision machinery' },
  { icon: CircleDot, name: 'Industrial Blenders', desc: 'Ribbon & paddle types' },
  { icon: Box, name: 'Conveyors', desc: 'Belt, screw & chain systems' },
  { icon: Flame, name: 'Dryer & Evaporator', desc: 'Spray & rotary dryers' },
  { icon: Truck, name: 'Material Handling', desc: 'Complete MH solutions' },
  { icon: Layers, name: 'Structure / Base Frame', desc: 'Heavy fabrication' },
  { icon: Pipette, name: 'Mixing Tanks', desc: 'Agitator vessels' },
];

const clients = [
  'Chemdist Process Solutions Pvt Ltd',
  'Shrijee Process Engineering Ltd',
  'Wilo Pumps Pvt Ltd',
  'Elementis Specialties (India) Pvt Ltd',
  'Arkchem System Pvt Ltd',
  'Raj Process Equipments & Systems Pvt Ltd',
];

function StatCounter({ stat }: { stat: typeof stats[0] }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const Icon = stat.icon;
  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
        <Icon size={28} className="text-orange-400" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white font-heading mb-2">
        {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : '0'}
        <span className="text-orange-400">{stat.suffix}</span>
      </div>
      <p className="text-steel-300 text-sm">{stat.label}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-400 rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Leading Engineering Solutions Since 2010</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 font-heading">
              Precision Engineering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Solutions
              </span>{' '}
              You Can Trust
            </h1>
            <p className="text-lg text-steel-300 mb-10 max-w-xl leading-relaxed">
              Manufacturing, supplying and erecting world-class processing equipment,
              material handling systems, and structural solutions. Built to last, engineered for excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 text-lg"
              >
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 text-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🏭', label: 'Spray Dryers' },
                    { icon: '⚙️', label: 'Heat Exchangers' },
                    { icon: '🔩', label: 'Pressure Vessels' },
                    { icon: '🏗️', label: 'Structural Work' },
                    { icon: '📦', label: 'Storage Tanks' },
                    { icon: '🔄', label: 'Cyclone Separators' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors cursor-default"
                    >
                      <span className="text-3xl mb-2 block">{item.icon}</span>
                      <span className="text-white/80 text-sm font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-400/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6 font-heading leading-tight">
                Your Trusted Partner in Industrial Engineering
              </h2>
              <p className="text-steel-600 mb-6 leading-relaxed">
                Prakam Engineering Systems is one of the most prominent names in manufacturing,
                supplying and erecting Processing Equipment, Material Handling Equipment & Structural Work.
                Our products and services are acknowledged for their optimum quality, durability and reliability.
              </p>
              <p className="text-steel-600 mb-8 leading-relaxed">
                With a state-of-the-art plant, infrastructure, and machine shop, we offer complete
                facilities for Designing, Manufacturing and supply of modern Material Handling equipment
                under one roof.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Sturdy Construction',
                  'Corrosion Resistant',
                  'Durable Usage',
                  'Quality Assured',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-steel-700">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors group"
              >
                Learn More About Us
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="bg-gradient-to-br from-steel-50 to-steel-100 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-steel-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                        <Factory size={24} className="text-navy-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900 font-heading">Workshop Facility</h4>
                        <p className="text-sm text-steel-500">4,000 Sq.Ft. state-of-art plant</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-steel-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                        <Wrench size={24} className="text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900 font-heading">Advanced Machinery</h4>
                        <p className="text-sm text-steel-500">ARC, Argon, CO2 welding, CNC & more</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-steel-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                        <Users size={24} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900 font-heading">Expert Team</h4>
                        <p className="text-sm text-steel-500">10-15 technically qualified professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-100 rounded-full blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-heading">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-steel-600 mt-4 max-w-2xl mx-auto">
              From design to erection, we deliver end-to-end engineering solutions
              tailored to your industrial needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-steel-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-heading">{service.title}</h3>
                  <p className="text-steel-600 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-heading">
              Quality Products for Every Need
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-steel-50 to-white rounded-2xl p-6 border border-steel-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-navy-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                    <Icon size={28} className="text-navy-700 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <h4 className="font-semibold text-navy-900 text-sm md:text-base font-heading mb-1">{product.name}</h4>
                  <p className="text-steel-500 text-xs md:text-sm">{product.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors group"
            >
              View Complete Product Range
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-heading">
              The Prakam Advantage
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, title: 'Quality Assured', desc: 'Rigorous quality checks at every stage of manufacturing ensure products of superior standards.' },
              { icon: Award, title: 'Industry Expertise', desc: 'Technically qualified team with hands-on experience in manufacturing and engineering.' },
              { icon: Wrench, title: 'Modern Equipment', desc: 'State-of-the-art machinery including ARC, Argon, CO2 welding, lathe, and milling machines.' },
              { icon: Clock, title: 'Timely Delivery', desc: 'Committed to on-schedule delivery with complete in-house design-to-assembly capability.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-heading">{item.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Clients Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Trusted By</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-heading">
              Our Valued Clients
            </h2>
            <p className="text-steel-600 mt-4 max-w-2xl mx-auto">
              We are proud to serve some of the most respected names across industries.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {clients.map((client) => (
              <motion.div
                key={client}
                variants={fadeUp}
                className="bg-steel-50 border border-steel-200 rounded-xl p-6 text-center hover:border-orange-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-navy-50 rounded-full flex items-center justify-center">
                  <Factory size={20} className="text-navy-600" />
                </div>
                <p className="text-navy-900 font-medium text-sm">{client}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors group"
            >
              View All Clients
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              From concept to completion — let our engineering expertise bring your industrial
              vision to life. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-orange-600 hover:bg-navy-900 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg text-lg"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+918600500725"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-lg"
              >
                Call: +91 8600500725
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
