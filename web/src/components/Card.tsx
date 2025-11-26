import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => (
  <div className={`bg-white border border-primary-light/60 rounded-2xl shadow-sm ${className}`}>
    {children}
  </div>
)
