/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Quote, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Calculator, 
  Home, 
  Briefcase, 
  Scale, 
  PieChart,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "./components/FadeIn";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Strategy", description: "Bespoke wealth creation blueprints for long-term prosperity.", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Superannuation", description: "Optimising your retirement structures for maximum efficiency.", icon: <PieChart className="w-6 h-6" /> },
    { name: "Accounting & Tax", description: "Strategic tax planning to protect and grow your wealth.", icon: <Calculator className="w-6 h-6" /> },
    { name: "Mortgage Advice", description: "Premium lending solutions for high-value properties.", icon: <Home className="w-6 h-6" /> },
    { name: "Property", description: "Expert guidance on building a high-performance property portfolio.", icon: <MapPin className="w-6 h-6" /> },
    { name: "Risk Insurance", description: "Comprehensive protection for you, your family, and your assets.", icon: <ShieldCheck className="w-6 h-6" /> },
    { name: "Shares", description: "Direct equity investment strategies and portfolio management.", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Legal", description: "Estate planning and legal structures to secure your legacy.", icon: <Scale className="w-6 h-6" /> },
  ];

  const testimonials = [
    {
      text: "Lachlan's approach to financial management is refreshingly holistic. He doesn't just look at the numbers; he looks at the life you want to lead.",
      name: "FELICITY",
      age: "34-45"
    },
    {
      text: "The peace of mind that comes from knowing every aspect of our financial life is integrated and managed by experts is invaluable.",
      name: "KELLIE",
      age: "46-55"
    },
    {
      text: "Franc Mark Sterling has transformed how we view our wealth. It's no longer just about accumulation, but about strategic growth and protection.",
      name: "ADAM",
      age: "35-45"
    }
  ];

  const articles = [
    {
      title: "Investment Markets: Navigating Volatility in 2026",
      category: "MARKETS",
      date: "Feb 15, 2026",
      image: "https://picsum.photos/seed/finance/800/600"
    },
    {
      title: "Land Tax 2026: What NSW Property Owners Need to Know",
      category: "TAX",
      date: "Jan 28, 2026",
      image: "https://picsum.photos/seed/property/800/600"
    },
    {
      title: "The Australian Property Market: A 10-Year Outlook",
      category: "PROPERTY",
      date: "Jan 12, 2026",
      image: "https://picsum.photos/seed/city/800/600"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-brand-grey" 
            : "bg-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-widest text-brand-green font-bold">FRANC MARK STERLING</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">Your Wealth Creation Concierge</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-widest font-semibold text-brand-black hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-gold text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-green transition-all duration-300 shadow-lg shadow-brand-gold/20">
              Client Portal
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-brand-grey overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-sm uppercase tracking-widest font-semibold text-brand-black"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="bg-brand-gold text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold">
                  Client Portal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row pt-24">
        <div className="flex-1 bg-brand-off-white flex items-center px-6 lg:px-24 py-20">
          <div className="max-w-xl">
            <FadeIn direction="up">
              <h1 className="font-serif text-7xl lg:text-8xl leading-[0.9] text-brand-green mb-8">
                Your Wealth.<br />
                Managed.<br />
                <span className="text-brand-gold">Properly.</span>
              </h1>
              <p className="text-lg text-brand-black/60 mb-10 font-light max-w-md">
                Award-winning financial advice for executives, business owners and high-income professionals across Sydney.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-green text-white px-10 py-5 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-brand-charcoal transition-all duration-300">
                  Book a Free Consultation
                </button>
                <button className="border border-brand-gold text-brand-gold px-10 py-5 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  Our Services <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden min-h-[500px] lg:min-h-0">
          <img 
            src="https://picsum.photos/seed/executive/1200/1600" 
            alt="Lachlan Baker" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply"></div>
        </div>
      </section>

      {/* Awards Bar */}
      <div className="bg-brand-green py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-brand-gold text-[11px] uppercase tracking-[0.2em] font-bold">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-brand-gold" />
            <span>2015 & 2018 Affinia Adviser of the Year</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-brand-gold/30"></div>
          <div className="flex items-center gap-2">
            <span>Platinum Adviser — Adviser Ratings</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-brand-gold/30"></div>
          <div className="flex items-center gap-2">
            <span>Top Rated Adviser Sydney CBD</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-brand-gold/30"></div>
              <p className="font-serif italic text-4xl lg:text-5xl text-brand-gold leading-tight mb-10">
                "Most of our clients come to us through referrals. That tells you everything."
              </p>
              <p className="text-brand-black/70 leading-relaxed mb-8 text-lg">
                At Franc Mark Sterling, we believe in a fully integrated approach to financial management. We don't just pick stocks or sell insurance; we coordinate every element of your financial life to ensure you're on the path to true wealth creation and protection.
              </p>
              <a href="#" className="text-brand-gold uppercase tracking-widest font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-brand-gold translate-x-6 translate-y-6 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <img 
                src="https://picsum.photos/seed/lachlan/800/1000" 
                alt="Lachlan Baker" 
                className="relative z-10 w-full aspect-[4/5] object-cover grayscale-[0.1]"
                referrerPolicy="no-referrer"
              />
              <div className="mt-12 relative z-10">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-green">Lachlan Baker</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-1">Principal Adviser & Founder</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-20">
            <h2 className="font-serif text-5xl lg:text-6xl text-brand-green mb-4">Comprehensive Wealth Management.</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={service.name} delay={idx * 0.1} direction="up">
                <div className="bg-white p-10 h-full border border-transparent hover:border-brand-gold transition-all duration-500 group shadow-sm hover:shadow-xl">
                  <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-brand-green text-lg mb-3 tracking-tight">{service.name}</h3>
                  <p className="text-brand-black/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-32 bg-brand-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up" className="mb-20">
            <h2 className="font-serif text-5xl lg:text-6xl text-white">A different kind of financial adviser.</h2>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-16">
            {[
              {
                title: "Fee for Service",
                desc: "We're remunerated by you, not commissions. Our advice is always in your best interest.",
                icon: <Briefcase className="w-8 h-8 text-brand-gold" />
              },
              {
                title: "Fully Integrated",
                desc: "We coordinate every element of your financial life from tax to estate planning.",
                icon: <Scale className="w-8 h-8 text-brand-gold" />
              },
              {
                title: "Deeply Personal",
                desc: "Most clients stay for decades. We know your goals as well as you do.",
                icon: <Users className="w-8 h-8 text-brand-gold" />
              }
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.2} direction="up">
                <div className="flex flex-col">
                  <div className="mb-8">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-20">
            <h2 className="font-serif text-5xl lg:text-6xl text-brand-green">What our clients say.</h2>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <FadeIn key={t.name} delay={idx * 0.1} direction="up">
                <div className="bg-brand-grey p-12 h-full flex flex-col">
                  <Quote className="w-12 h-12 text-brand-gold/30 mb-8" />
                  <p className="font-serif italic text-2xl text-brand-green leading-relaxed mb-10 flex-grow">
                    "{t.text}"
                  </p>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-green">{t.name}</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-1">AGE {t.age}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up" className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-5xl lg:text-6xl text-brand-green">Latest Insights.</h2>
            <a href="#" className="hidden md:flex items-center gap-2 text-brand-gold uppercase tracking-widest font-bold text-xs hover:gap-4 transition-all">
              View All Articles <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-10">
            {articles.map((article, idx) => (
              <FadeIn key={article.title} delay={idx * 0.1} direction="up">
                <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-6 aspect-[16/10]">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-3 block">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-2xl text-brand-green mb-4 group-hover:text-brand-gold transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-brand-black/40">{article.date}</span>
                    <span className="text-brand-gold text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-32 bg-brand-green text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="right">
              <h2 className="font-serif text-5xl lg:text-6xl text-brand-gold mb-8">An integrated approach to building and protecting your wealth.</h2>
              <p className="text-lg text-white/70 mb-12 leading-relaxed">
                We coordinate your entire financial ecosystem. By aligning your tax, legal, and investment strategies, we eliminate inefficiencies and accelerate your progress toward your most ambitious goals.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {["Wealth Creation", "Risk Management", "Tax Minimisation", "Estate Planning"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    <span className="text-sm uppercase tracking-widest font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-brand-gold text-white px-10 py-5 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-brand-green transition-all duration-300">
                See All Services →
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <FadeIn direction="right">
            <h2 className="font-serif text-5xl lg:text-6xl text-brand-green mb-6">Your first conversation is free.</h2>
            <p className="text-brand-black/50 text-lg mb-12">
              No obligation. No jargon. Just clarity on where you stand and what's possible.
            </p>
            
            <div className="space-y-8 mb-16">
              <div className="flex items-start gap-6">
                <div className="bg-brand-grey p-4 rounded-full text-brand-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-brand-green mb-1">Office</h4>
                  <p className="text-brand-black/70">3 Spring Street, Sydney NSW 2000</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-brand-grey p-4 rounded-full text-brand-gold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-brand-green mb-1">Email</h4>
                  <p className="text-brand-black/70">enquiries@francmarksterling.com.au</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-brand-grey p-4 rounded-full text-brand-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-brand-green mb-1">Phone</h4>
                  <p className="text-brand-black/70">+61 2 9231 1111</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 opacity-40 grayscale">
              {/* Association Logos Placeholders */}
              <div className="h-12 bg-brand-grey rounded flex items-center justify-center text-[8px] font-bold">IPA</div>
              <div className="h-12 bg-brand-grey rounded flex items-center justify-center text-[8px] font-bold">FBAA</div>
              <div className="h-12 bg-brand-grey rounded flex items-center justify-center text-[8px] font-bold">FAAA</div>
              <div className="h-12 bg-brand-grey rounded flex items-center justify-center text-[8px] font-bold">TPB</div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="bg-white p-12 shadow-2xl shadow-brand-green/5 border border-brand-grey">
              <form action="https://formspree.io/f/your-id" method="POST" className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full bg-brand-off-white border-none p-4 focus:ring-1 focus:ring-brand-gold transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full bg-brand-off-white border-none p-4 focus:ring-1 focus:ring-brand-gold transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full bg-brand-off-white border-none p-4 focus:ring-1 focus:ring-brand-gold transition-all"
                      placeholder="+61 400 000 000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">What are you looking to achieve?</label>
                  <select 
                    name="goal"
                    className="w-full bg-brand-off-white border-none p-4 focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
                  >
                    <option>Reduce Tax</option>
                    <option>Super Review</option>
                    <option>Retirement Planning</option>
                    <option>Wealth Strategy</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full bg-brand-off-white border-none p-4 focus:ring-1 focus:ring-brand-gold transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-green text-white py-5 uppercase tracking-widest font-bold hover:bg-brand-charcoal transition-all flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-charcoal pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex flex-col mb-6">
                <span className="font-serif text-2xl tracking-widest text-white font-bold">FRANC MARK STERLING</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">Your Wealth Creation Concierge</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Sydney's premier boutique wealth management firm, dedicated to the prosperity of executives and business owners.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-8">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#articles" className="hover:text-white transition-colors">Insights</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-8">Services</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Wealth Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tax Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Superannuation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estate Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Property Advice</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-8">Contact Info</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-gold" /> 3 Spring St, Sydney</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-gold" /> +61 2 9231 1111</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand-gold" /> enquiries@fms.com.au</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/30">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <span>© 2026 Franc Mark Sterling</span>
              <span>AFSL No. 423981</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#" className="hover:text-white transition-colors">FSG Part 1</a>
              <a href="#" className="hover:text-white transition-colors">FSG Part 2</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
