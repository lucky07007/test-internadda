'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Clock } from 'lucide-react'

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
    phone: '',
    college: '',
    currentYear: '',
    cgpa: '',
  })
  const [testAnswers, setTestAnswers] = useState<Record<number, string>>({})
  const [testScore, setTestScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleDetailsSubmit = () => {
    if (formData.phone && formData.college && formData.currentYear) {
      setSubmitted(true)
      setCurrentStep('success')
    }
  }

  const handlePaymentSuccess = () => {
    setCurrentStep('test')
  }

  const handleTestSubmit = () => {
    // Calculate score based on correct answers
    const correctAnswers = { 0: 'a', 1: 'b', 2: 'c', 3: 'a', 4: 'c' }
    let score = 0
    for (let i = 0; i < 5; i++) {
      if (testAnswers[i] === correctAnswers[i as keyof typeof correctAnswers]) {
        score++
      }
    }
    const percentage = (score / 5) * 100
    setTestScore(percentage)
    if (percentage >= 50) {
      setCurrentStep('success')
      setSubmitted(true)
    } else {
      setCurrentStep('success')
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
        />
      )}
      {currentStep === 'success' && (
        <SuccessStep score={testScore} onComplete={onComplete} />
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
      className="space-y-6 p-6 sm:p-8 bg-card rounded-2xl border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-black text-foreground">
          Welcome to {company}!
        </h2>
        <p className="text-lg text-muted-foreground">
          You're applying for <span className="font-bold text-foreground">{internshipTitle}</span>
        </p>
      </div>

      <div className="bg-primary/10 rounded-xl p-6 space-y-4">
        <h3 className="font-bold text-foreground">Here's what happens next:</h3>
        <ul className="space-y-3">
          {[
            'Tell us a bit about yourself',
            'Pay ₹199 to unlock the entrance test',
            'Complete 25 tough MCQ questions in 30 minutes',
            'Score 50%+ to get your interview slot',
            'Receive interview link via email within 24 hours',
          ].map((step, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        onClick={onNext}
        className="w-full bg-primary text-white hover:bg-primary/90 font-bold text-base py-6"
      >
        Let's Get Started
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
}: {
  formData: any
  setFormData: any
  onNext: () => void
  onBack: () => void
}) {
  return (
    <motion.div
      className="space-y-6 p-6 sm:p-8 bg-card rounded-2xl border border-border"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-2xl font-black text-foreground">Tell us about yourself</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 99999 00000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            College / University
          </label>
          <input
            type="text"
            placeholder="Your college name"
            value={formData.college}
            onChange={(e) =>
              setFormData({ ...formData, college: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Current Year
          </label>
          <select
            value={formData.currentYear}
            onChange={(e) =>
              setFormData({ ...formData, currentYear: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            CGPA (Optional)
          </label>
          <input
            type="number"
            placeholder="8.5"
            value={formData.cgpa}
            onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            step="0.1"
            min="0"
            max="10"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 border-border text-foreground hover:bg-muted bg-transparent font-bold py-3"
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          className="flex-1 bg-primary text-white hover:bg-primary/90 font-bold py-3"
        >
          Continue
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>
    </motion.div>
  )
}


function SuccessStep({
  score,
  onComplete,
}: {
  score: number
  onComplete?: () => void
}) {
  const passed = score >= 50

  return (
    <motion.div
      className="space-y-6 p-6 sm:p-8 bg-card rounded-2xl border border-border text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto ${
          passed ? 'bg-green-500/20' : 'bg-amber-500/20'
        }`}
      >
        <span className="text-4xl font-black">
          {passed ? '✓' : '⚠'}
        </span>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-black text-foreground">
          {passed ? 'Congratulations! 🎉' : 'Keep Trying!'}
        </h2>
        <p className="text-lg text-muted-foreground">
          Your score: <span className="font-bold text-foreground">{score.toFixed(0)}%</span>
        </p>
      </div>

      {passed ? (
        <div className="bg-green-500/10 rounded-lg p-6 space-y-4 border border-green-500/20">
          <p className="font-semibold text-green-700">Test Passed!</p>
          <p className="text-sm text-green-600">
            You've qualified for the interview. Check your email within 24 hours for interview details.
          </p>
          <div className="space-y-2 text-sm text-foreground">
            <p>• Interview link will be sent shortly</p>
            <p>• Stay tuned to your email & phone</p>
            <p>• Prepare well for the next round!</p>
          </div>
        </div>
      ) : (
        <div className="bg-amber-500/10 rounded-lg p-6 space-y-4 border border-amber-500/20">
          <p className="font-semibold text-amber-700">Need 50% to Qualify</p>
          <p className="text-sm text-amber-600">
            You scored {score.toFixed(0)}%. You can apply again after 7 days. Keep learning!
          </p>
        </div>
      )}

      <Button
        onClick={onComplete}
        className="w-full bg-primary text-white hover:bg-primary/90 font-bold py-6 text-base"
      >
        Back to Home
        <ArrowRight className="ml-2" size={20} />
      </Button>
    </motion.div>
  )
}
