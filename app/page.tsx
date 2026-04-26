'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { 
  ArrowRight, Star, CheckCircle, Sparkles, Shield, 
  Target, Globe, FileText, Building2, Users, Award, 
  Rocket, Briefcase, GraduationCap, Zap, TrendingUp 
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { internships as featuredInternships } from '@/data/internships'
import { GlobeHero } from '@/components/globe-hero'
import { useTheme } from 'next-themes'
import { FeaturedInternships } from '@/components/featured-internships'

// Enhanced structured data for global SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InternAdda',
  alternateName: 'InternAdda Global Internship Platform',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Upforge Global',
    url: 'https://upforge.org'
  },
  description: 'Professional global internship platform connecting ambitious students with verified opportunities across 40+ countries. Trusted by 500+ companies worldwide.',
  url: 'https://internadda.com',
  logo: 'https://internadda.com/logo.png',
  image: 'https://internadda.com/og-image.jpg',
  foundingDate: '2024',
  foundingLocation: 'Global',
  areaServed: {
    '@type': 'Continent',
    name: 'Worldwide'
  },
  sameAs: [
    'https://linkedin.com/company/internadda',
    'https://twitter.com/internadda',
    'https://instagram.com/internadda'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@internadda.com',
    availableLanguage: ['English', 'Hindi', 'Spanish', 'French']
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '7200'
  }
};

// Additional FAQ structured data for rich snippets
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find verified internships on InternAdda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Browse our curated listings of verified internships from trusted companies worldwide. Use our smart matching system to find opportunities aligned with your skills and career goals.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is InternAdda free for students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, InternAdda is completely free for students. We believe in democratizing access to quality internship opportunities globally.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes InternAdda different from other internship platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InternAdda is powered by Upforge Global, offering verified opportunities, AI-driven matching, professional resume building tools, and a trusted ecosystem of 500+ companies across 40+ countries.'
      }
    }
  ]
};

const CONTAINER = "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8";

// Professional color system
const COLORS = {
  primary: {
    light: 'sky',
    dark: 'indigo',
    hex: '#2563EB'
  },
  accent: {
    success: 'emerald',
    warning: 'amber',
    info: 'blue'
  }
};

function FadeUp({ children, delay = 0, className = '' }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 24 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description }: any) {
  return (
    <motion.div 
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)' }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function StatCard({ icon: Icon, value, label, colorClass }: any) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-3">
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
      <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Verified Opportunities',
      description: 'Every internship undergoes rigorous verification ensuring authenticity, fair compensation, and quality learning experiences.'
    },
    {
      icon: Target,
      title: 'Intelligent Matching',
      description: 'Our AI-powered algorithm connects you with opportunities perfectly aligned to your skills, interests, and career aspirations.'
    },
    {
      icon: Globe,
      title: 'Truly Global Reach',
      description: 'Access premium internship opportunities across 40+ countries with organizations ranging from startups to Fortune 500 enterprises.'
    },
    {
      icon: FileText,
      title: 'Professional Resume Builder',
      description: 'Create ATS-optimized, professionally designed resumes that stand out to recruiters at leading global companies.'
    }
  ];

  const testimonials = [
    {
      name: 'Aarav Mehta',
      role: 'Software Engineering Intern',
      company: 'TechCorp Solutions, Singapore',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      text: 'InternAdda transformed my career trajectory. Within weeks, I secured an international internship that provided hands-on experience with cutting-edge technologies.',
      verified: true
    },
    {
      name: 'Zara Kapoor',
      role: 'Digital Marketing Associate',
      company: 'BrandWave Agency, London',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      text: 'The platform\'s global reach and verified listings gave me confidence. Received three quality offers within my first week of applying.',
      verified: true
    },
    {
      name: 'Vikram Singh',
      role: 'Data Analytics Intern',
      company: 'DataMind Analytics, Berlin',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      text: 'From resume optimization to interview preparation, InternAdda\'s comprehensive support system made my international internship journey seamless.',
      verified: true
    }
  ];

  if (!mounted) return null;

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} 
      />
      <Header />
      
      <main className="w-full bg-white dark:bg-gray-950 font-sans transition-colors duration-300">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-indigo-950/10 border-b border-gray-100/50 dark:border-gray-800/50">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />
          
          <div className={CONTAINER}>
            <div className="py-12 lg:py-16">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                
                {/* Hero Content */}
                <div className="flex-1 text-center lg:text-left">
                  <FadeUp>
                    <div className="inline-flex items-center gap-2 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-100/50 dark:border-blue-800/30">
                      <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wide">
                        Powered by Upforge Global — Trusted Worldwide
                      </span>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.1}>
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-[1.15] mb-6 tracking-tight">
                      Launch Your
                      <br />
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                        Global Career
                      </span>{" "}
                      Today
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      Connect with verified internship opportunities at leading companies worldwide. 
                      Build real-world experience and accelerate your professional growth.
                    </p>
                  </FadeUp>

                  <FadeUp delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                      <button 
                        onClick={() => router.push('/internships')}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                      >
                        Explore Opportunities
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => router.push('/courses')}
                        className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-200 font-semibold px-8 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 text-sm"
                      >
                        Learning Resources
                      </button>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg border border-green-100 dark:border-green-800/30">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">100% Free for Students · Available in 40+ Countries</span>
                    </div>
                  </FadeUp>

                  {/* Trust indicators */}
                  <FadeUp delay={0.3}>
                    <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>50K+ Students</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>500+ Companies</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Global Network</span>
                      </div>
                    </div>
                  </FadeUp>
                </div>

                {/* Hero Visual */}
                <div className="flex-1 w-full">
                  <FadeUp delay={0.3}>
                    <div className="relative flex items-center justify-center min-h-[380px] lg:min-h-[450px]">
                      <GlobeHero />
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Opportunities */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className={CONTAINER}>
            <FadeUp>
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Featured Opportunities
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Curated internships from leading global companies actively seeking talented individuals
                </p>
              </div>
              <FeaturedInternships internships={featuredInternships} />
            </FadeUp>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className={CONTAINER}>
            <div className="mb-12 text-center">
              <FadeUp>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Why Professionals Choose InternAdda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A comprehensive platform designed to accelerate your career with quality opportunities and professional tools
                </p>
              </FadeUp>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FadeUp key={index} delay={index * 0.1}>
                  <FeatureCard {...feature} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Builder CTA */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className={CONTAINER}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-800 dark:via-indigo-800 dark:to-indigo-900 rounded-2xl p-8 lg:p-12"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-white max-w-2xl text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Build a Professional Resume in Minutes
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Create ATS-optimized, professionally designed resumes that capture recruiter attention and land more interviews.
                  </p>
                </div>
                <button 
                  onClick={() => router.push('/resume-builder')}
                  className="shrink-0 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200 text-sm shadow-lg"
                >
                  Start Building Free →
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className={CONTAINER}>
            <div className="mb-12 text-center">
              <FadeUp>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Success Stories
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Hear from professionals who launched their careers through InternAdda
                </p>
              </FadeUp>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, index) => (
                <FadeUp key={index} delay={index * 0.1}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <Image 
                        src={item.image} 
                        alt={`${item.name} - ${item.role} at ${item.company}`} 
                        width={48} 
                        height={48} 
                        className="rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-sm text-gray-900 dark:text-white">{item.name}</p>
                          {item.verified && (
                            <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.role}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{item.company}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* UpForge Global CTA */}
        <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
          <div className={CONTAINER}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-slate-800 dark:from-gray-950 dark:via-slate-950 dark:to-slate-900 rounded-2xl p-8 lg:p-12"
            >
              {/* Background gradient orbs */}
              <div className="absolute inset-0 opacity-[0.07]">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-500/20">
                    <Building2 className="w-4 h-4" />
                    Upforge Global Ecosystem
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    From Startup to Scale-Up
                  </h2>
                  <p className="text-gray-300 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed">
                    Access the same talent network trusted by 500+ companies worldwide. 
                    Whether building your early team or scaling established operations, 
                    find exceptional interns to accelerate your growth trajectory.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
                  <StatCard 
                    icon={Building2} 
                    value="500+" 
                    label="Partner Companies" 
                    colorClass="text-blue-400" 
                  />
                  <StatCard 
                    icon={Users} 
                    value="50K+" 
                    label="Global Talent Pool" 
                    colorClass="text-emerald-400" 
                  />
                  <StatCard 
                    icon={Award} 
                    value="94%" 
                    label="Success Rate" 
                    colorClass="text-amber-400" 
                  />
                  <StatCard 
                    icon={Rocket} 
                    value="15+" 
                    label="Global Offices" 
                    colorClass="text-purple-400" 
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/hire"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                  >
                    Hire Top Talent
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/partner"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/30 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm backdrop-blur-sm"
                  >
                    Become a Partner
                  </Link>
                </div>

                <p className="text-center text-gray-400 text-sm mt-8">
                  Join the Upforge ecosystem — where global talent meets opportunity
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
