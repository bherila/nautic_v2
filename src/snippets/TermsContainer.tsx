'use client'
import { ReactNode, useState } from 'react'
import { bodySize } from '@/lib/styles'

export interface TermsProps {
  isAgreed: boolean
  setAgreed: (isAgreed: boolean) => void
  content: ReactNode
}

export default function TermsContainer({
  isAgreed,
  setAgreed,
  content,
}: TermsProps) {
  const [showTerms, setShowTerms] = useState(!isAgreed)
  return (
    <div style={{ textAlign: 'left' }}>
      {!showTerms ? (
        <div>
          <p>
            <a href="#" onClick={() => setShowTerms(true)}>
              Show Terms of Service Again
            </a>
          </p>
        </div>
      ) : (
        <div>{content}</div>
      )}
      <label style={{ fontSize: bodySize }}>
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={(e) => {
            setAgreed(e.currentTarget.checked)
            if (e.currentTarget.checked) {
              setShowTerms(false)
            }
          }}
        />
        &nbsp;I agree to the Terms of Service
      </label>
    </div>
  )
}
