import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  Cog,
  CircleDot,
  Box,
  Flame,
  Truck,
  Layers,
  Pipette,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const products = [
  {
    icon: Container,
    name: 'Storage Tanks',
    category: 'Processing',
    desc: 'Custom-engineered storage tanks in SS and MS for diverse industrial applications. Available in various capacities with options for insulation, agitation, and specialized coatings.',
    features: ['SS & MS Construction', 'Custom Capacities', 'Insulated Options', 'Pressure-Rated Designs', 'Food-Grade Available', 'Agitator Integration'],
    applications: ['Chemical Storage', 'Food Processing', 'Pharma Industry', 'Water Treatment'],
  },
  {
    icon: Cog,
    name: 'Industrial Equipment',
    category: 'Processing',
    desc: 'Precision-manufactured industrial processing equipment designed for heavy-duty operations. Engineered for maximum efficiency, durability, and ease of maintenance.',
    features: ['Heavy-Duty Construction', 'Precision Engineering', 'Low Maintenance', 'Energy Efficient', 'Custom Configurations', 'Long Service Life'],
    applications: ['Manufacturing Plants', 'Process Industries', 'Chemical Plants', 'Food Industry'],
  },
  {
    icon: CircleDot,
    name: 'Industrial Blenders',
    category: 'Processing',
    desc: 'High-performance ribbon blenders, paddle mixers, and V-type blenders for uniform mixing of powders, granules, and pastes across industries.',
    features: ['Ribbon Blenders', 'Paddle Mixers', 'V-Type Blenders', 'Uniform Mixing', 'Easy Cleaning', 'Variable Speed'],
    applications: ['Pharmaceutical', 'Food & Beverage', 'Chemical Mixing', 'Powder Processing'],
  },
  {
    icon: Box,
    name: 'Conveyors',
    category: 'Material Handling',
    desc: 'Robust conveyor systems including belt, screw, chain, and bucket elevators designed for efficient material transport in industrial environments.',
    features: ['Belt Conveyors', 'Screw Conveyors', 'Chain Conveyors', 'Bucket Elevators', 'Modular Design', 'Heavy Load Capacity'],
    applications: ['Mining & Minerals', 'Food Processing', 'Cement Industry', 'Packaging Lines'],
  },
  {
    icon: Flame,
    name: 'Dryer & Evaporator',
    category: 'Processing',
    desc: 'Advanced spray dryers, rotary dryers, and industrial evaporators optimized for thermal efficiency. Designed for consistent product quality and energy savings.',
    features: ['Spray Dryers', 'Rotary Dryers', 'Flash Dryers', 'Evaporators', 'Energy Efficient', 'PLC Controlled'],
    applications: ['Dairy Industry', 'Chemical Processing', 'Pharmaceutical', 'Food Industry'],
  },
  {
    icon: Truck,
    name: 'Material Handling Equipment',
    category: 'Material Handling',
    desc: 'Complete material handling solutions including hoists, cranes, trolleys, and automated systems for seamless industrial workflow optimization.',
    features: ['Hoists & Cranes', 'Trolley Systems', 'Loading Systems', 'Custom Solutions', 'Safety Compliant', 'Automated Options'],
    applications: ['Warehousing', 'Manufacturing', 'Logistics', 'Construction'],
  },
  {
    icon: Layers,
    name: 'Structure / Base Frame',
    category: 'Structural',
    desc: 'Precision-built structural steel frameworks, machine base frames, and platform structures for reliable industrial installations and plant infrastructure.',
    features: ['Steel Structures', 'Base Frames', 'Platform Structures', 'Mezzanine Floors', 'Custom Fabrication', 'Anti-Corrosion Coating'],
    applications: ['Plant Infrastructure', 'Machine Mounting', 'Industrial Sheds', 'Support Structures'],
  },
  {
    icon: Pipette,
    name: 'Mixing Tanks',
    category: 'Processing',
    desc: 'Agitator-equipped mixing tanks with precise speed control for homogeneous blending of liquids, slurries, and chemical compounds.',
    features: ['Agitator Vessels', 'Speed Control', 'Jacketed Options', 'Bottom Discharge', 'CIP Compatible', 'Multiple Materials'],
    applications: ['Chemical Mixing', 'Paint Industry', 'Cosmetics', 'Adhesives'],
  },
];

const categories = ['All', 'Processing', 'Material Handling', 'Structural'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

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
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 font-heading">
              Product Range
            </h1>
            <p className="text-steel-300 mt-4 max-w-2xl mx-auto text-lg">
              Comprehensive range of processing, material handling, and structural equipment
              built to the highest engineering standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-steel-200 sticky top-[72px] z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-steel-100 text-steel-700 hover:bg-steel-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              {filteredProducts.map((product) => {
                const Icon = product.icon;
                const isExpanded = expandedProduct === product.name;
                return (
                  <motion.div
                    key={product.name}
                    variants={fadeUp}
                    layout
                    className="bg-white rounded-2xl border border-steel-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div
                      className="p-8 cursor-pointer"
                      onClick={() => setExpandedProduct(isExpanded ? null : product.name)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl flex items-center justify-center shrink-0">
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-navy-900 font-heading">{product.name}</h3>
                            <span className="text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-medium">
                              {product.category}
                            </span>
                          </div>
                          <p className="text-steel-600 leading-relaxed">{product.desc}</p>
                        </div>
                        <button className="w-10 h-10 bg-steel-100 rounded-full flex items-center justify-center shrink-0 hover:bg-steel-200 transition-colors">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 border-t border-steel-100 pt-6">
                            <div className="grid md:grid-cols-2 gap-8">
                              <div>
                                <h4 className="font-semibold text-navy-900 mb-4 font-heading flex items-center gap-2">
                                  <Cog size={18} className="text-orange-500" /> Key Features
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                  {product.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-sm text-steel-700">
                                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-navy-900 mb-4 font-heading flex items-center gap-2">
                                  <Layers size={18} className="text-orange-500" /> Applications
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {product.applications.map((app) => (
                                    <span key={app} className="bg-navy-50 text-navy-700 px-4 py-2 rounded-lg text-sm font-medium">
                                      {app}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-steel-100">
                              <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm shadow-md"
                              >
                                Request Quote for {product.name} <ArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Equipment Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Showcase</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-heading">
              Equipment We Manufacture
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              'Spray Dryer', 'Bag Filter', 'Hot Air Generator (HAG)',
              'Silo', 'Heat Exchanger', 'Pressure Vessel',
              'Agitator Storage Tank', 'Cyclone Separator',
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 text-center cursor-default"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Cog size={28} className="text-orange-400" />
                </div>
                <h4 className="text-white font-semibold text-sm font-heading">{item}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Need Custom Equipment?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            We design and manufacture equipment tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-navy-900 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg text-lg"
          >
            Request Custom Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
