'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Briefcase, GraduationCap, Phone, Building2, Award } from 'lucide-react'

interface ApplicationFlowProps {
  internshipId: string
  internshipTitle: string
  company: string
  onComplete?: () => void
}

type Step = 'intro' | 'details' | 'success'

export function ApplicationFlow({
  internshipId,
  internshipTitle,
  company,
  onComplete,
}: ApplicationFlowProps) {
  const [currentStep, setCurrentStep] = useState<Step>('intro')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    currentYear: '',
    degree: '',
    skills: '',
    linkedinUrl: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDetailsSubmit = async () => {
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.college || !formData.currentYear) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    try {
      // Here you would typically send data to your backend
      // await submitApplication(internshipId, formData)
      
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated delay
      
      setSubmitted(true)
      setCurrentStep('success')
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {currentStep === 'intro' && (
        <IntroStep
          internshipTitle={internshipTitle}
          company={company}
          onNext={() => setCurrentStep('details')}
        />
      )}
      {currentStep === 'details' && (
        <DetailsStep
          formData={formData}
          setFormData={setFormData}
          onNext={handleDetailsSubmit}
          onBack={() => setCurrentStep('intro')}
          isSubmitting={isSubmitting}
        />
      )}
      {currentStep === 'success' && (
        <SuccessStep 
          internshipTitle={internshipTitle}
          company={company}
          onComplete={onComplete} 
        />
      )}
    </div>
  )
}

function IntroStep({
  internshipTitle,
  company,
  onNext,
}: {
  internshipTitle: string
  company: string
  onNext: () => void
}) {
  return (
    <motion.div
      className="space-y-6 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto">
          <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Apply to {company}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            You're applying for{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {internshipTitle}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 space-y-4 border border-blue-100 dark:border-blue-800/30">
        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Application Process
        </h3>
        <ul className="space-y-3">
          {[
            'Complete your profile details',
            'Submit your application for review',
            'Get shortlisted based on your profile',
            'Receive interview invitation via email',
            'Start your professional journey',
          ].map((step, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Why Apply?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Join {company} and gain hands-on experience, mentorship from industry professionals, and build your career portfolio.
            </p>
          </div>
        </div>
      </div>

      <Button
        onClick={onNext}
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-base py-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
      >
        Start Application
        <ArrowRight className="ml-2" size={20} />
      </Button>
    </motion.div>
  )
}

function DetailsStep({
  formData,
  setFormData,
  onNext,
  onBack,
  isSubmitting,
}: {
  formData: any
  setFormData: any
  onNext: () => void
  onBack: () => void
  isSubmitting: boolean
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <motion.div
      className="space-y-6 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Your Profile Details
        </h2>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 -mt-4 mb-4">
        Fill in your details to apply for this internship. All fields marked with * are required.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            <Phone className="w-4 h-4 inline mr-1" />
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="+91 99999 00000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              <Building2 className="w-4 h-4 inline mr-1" />
              College / University *
            </label>
            <input
              type="text"
              placeholder="Your college name"
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Current Year *
            </label>
            <select
              value={formData.currentYear}
              onChange={(e) => setFormData({ ...formData, currentYear: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
              required
            >
              <option value="">Select year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Degree / Course
          </label>
          <input
            type="text"
            placeholder="B.Tech Computer Science"
            value={formData.degree}
            onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Key Skills
          </label>
          <input
            type="text"
            placeholder="React, JavaScript, Python, Figma..."
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Separate skills with commas</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            LinkedIn Profile URL (Optional)
          </label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/johndoe"
            value={formData.linkedinUrl}
            onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent font-semibold py-3 rounded-xl transition-all"
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </span>
            ) : (
              <>
                Submit Application
                <ArrowRight className="ml-2" size={18} />
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  )
}

function SuccessStep({
  internshipTitle,
  company,
  onComplete,
}: {
  internshipTitle: string
  company: string
  onComplete?: () => void
}) {
  return (
    <motion.div
      className="space-y-6 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Application Submitted! 🎉
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Your application for{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {internshipTitle}
          </span>{' '}
          at{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {company}
          </span>{' '}
          has been received.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800/30">
        <h3 className="font-semibold text-green-800 dark:text-green-300 mb-4">
          What Happens Next?
        </h3>
        <div className="space-y-3 text-left">
          {[
            'Our team will review your application within 2-3 business days',
            'Shortlisted candidates will receive an email with interview details',
            'Prepare for your interview by researching the company',
            'Selected candidates will receive an offer letter via email',
          ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-sm text-green-700 dark:text-green-300">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/30">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          <strong>Tip:</strong> Keep an eye on your email inbox (and spam folder) for updates about your application status.
        </p>
      </div>

      <Button
        onClick={onComplete}
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-6 text-base rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
      >
        Back to Opportunities
        <ArrowRight className="ml-2" size={20} />
      </Button>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        You can track your application status from your dashboard
      </p>
    </motion.div>
  )
}
