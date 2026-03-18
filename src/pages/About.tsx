import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  Factory,
  Wrench,
  Users,
  Target,
  Eye,
  Award,
  Shield,
  Clock,
  CheckCircle2,
  Zap,
  Gauge,
  Hammer,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const machines = [
  { name: 'ARC Welding Machine', icon: Zap },
  { name: 'Argon Welding Machine', icon: Zap },
  { name: 'CO2 Welding Machine', icon: Zap },
  { name: 'Air Compressor', icon: Gauge },
  { name: 'Manually Bending Machine', icon: Wrench },
  { name: 'Drilling Machine', icon: Hammer },
  { name: 'Gas Cutting Setup', icon: Zap },
  { name: 'Grinder', icon: Wrench },
  { name: 'Lathe Machine', icon: Wrench },
  { name: 'Milling Machine', icon: Wrench },
  { name: 'Finishing Machine', icon: Wrench },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-navy-900 font-heading mb-2">
        {inView ? <CountUp end={value} duration={2.5} separator="," /> : '0'}
        <span className="text-orange-500">{suffix}</span>
      </div>
      <p className="text-steel-600 text-sm">{label}</p>
    </div>
  );
}

export default function About() {
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
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 font-heading">
              Our Story & Vision
            </h1>
            <p className="text-steel-300 mt-4 max-w-2xl mx-auto text-lg">
              Decades of engineering excellence in processing equipment and industrial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
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
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Company Profile</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6 font-heading leading-tight">
                Engineering Excellence, Delivered
              </h2>
              <p className="text-steel-600 mb-6 leading-relaxed">
                Prakam Engineering Systems is one of the most prominent names engrossed in manufacturing,
                supplying and erecting Processing Equipment, Material Handling Equipment & Structural Work.
                These products and services are acknowledged for their optimum quality, durability and reliability.
              </p>
              <p className="text-steel-600 mb-6 leading-relaxed">
                The products offered by us are acknowledged for sturdy construction, corrosive resistance
                and durable usage. We have a state-of-the-art plant, infrastructure, machine shop and
                heavy fabrication equipment.
              </p>
              <p className="text-steel-600 mb-8 leading-relaxed">
                We have total facility for Designing, Manufacturing and supply of modern Material Handling
                equipment under one roof and also to assemble the Equipment for trial. Our totally dedicated
                and technically qualified team has hands-on experience in manufacturing quality products.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <AnimatedStat value={15} suffix="+" label="Years Experience" />
                <AnimatedStat value={500} suffix="+" label="Projects Done" />
                <AnimatedStat value={15} suffix="+" label="Happy Clients" />
                <AnimatedStat value={4000} suffix=" Sq.Ft." label="Workshop Area" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="space-y-6">
                {/* Vision */}
                <div className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 border border-navy-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center">
                      <Eye size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-heading">Our Vision</h3>
                  </div>
                  <p className="text-steel-600 leading-relaxed">
                    To be the most trusted engineering solutions partner in India, known for
                    innovation, precision, and unwavering commitment to quality in every product we deliver.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Target size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-heading">Our Mission</h3>
                  </div>
                  <p className="text-steel-600 leading-relaxed">
                    To deliver world-class processing and material handling equipment with superior
                    engineering standards, on-time delivery, and exceptional customer service at competitive costs.
                  </p>
                </div>

                {/* Values */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-heading">Core Values</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {['Quality First', 'Customer Focus', 'Innovation', 'Integrity'].map((val) => (
                      <div key={val} className="flex items-center gap-2 text-steel-700 text-sm">
                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Facility & Equipment */}
      <section className="py-20 md:py-28 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Our Facility</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-heading">
              State-of-the-Art Workshop
            </h2>
            <p className="text-steel-600 mt-4 max-w-2xl mx-auto">
              Equipped with advanced machinery and tools to deliver precision engineering at scale.
            </p>
          </motion.div>

          {/* Facility Overview Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Factory,
                title: 'Workshop',
                detail: '4,000 Sq.Ft.',
                desc: 'Fully equipped manufacturing facility with dedicated areas for fabrication, machining, and assembly.',
              },
              {
                icon: Users,
                title: 'Workforce',
                detail: '10-15 Experts',
                desc: 'Technically qualified team with hands-on experience in heavy fabrication and precision engineering.',
              },
              {
                icon: Shield,
                title: 'Quality Control',
                detail: '100% Inspection',
                desc: 'Rigorous quality checks at every manufacturing stage ensuring products meet the highest standards.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-steel-200 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 font-heading mb-1">{item.title}</h3>
                  <p className="text-orange-500 font-bold text-lg mb-3">{item.detail}</p>
                  <p className="text-steel-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Machines Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-bold text-navy-900 font-heading mb-8 text-center">Our Machinery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {machines.map((machine) => {
                const Icon = machine.icon;
                return (
                  <div
                    key={machine.name}
                    className="bg-white border border-steel-200 rounded-xl p-5 flex items-center gap-3 hover:border-orange-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-navy-700" />
                    </div>
                    <span className="text-sm font-medium text-navy-900">{machine.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Why Prakam</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-heading">
              What Sets Us Apart
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Factory,
                title: 'Complete In-House Facility',
                desc: 'From designing to manufacturing to assembly — everything happens under one roof, ensuring quality control at every stage.',
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                desc: 'With dedicated workflows and an experienced team, we are committed to delivering projects on schedule, every time.',
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                desc: 'Years of experience serving leading industrial companies across Pune and Maharashtra with consistent quality and reliability.',
              },
              {
                icon: Wrench,
                title: 'Advanced Manufacturing',
                desc: 'Equipped with modern welding, machining, and fabrication equipment to handle projects of any complexity and scale.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-6 p-6 rounded-2xl hover:bg-steel-50 transition-colors"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2 font-heading">{item.title}</h3>
                    <p className="text-steel-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
