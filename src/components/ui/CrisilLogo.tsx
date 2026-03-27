'use client'

interface CrisilLogoProps {
  className?: string
  size?: number
}

export function CrisilLogo({ className = '', size = 36 }: CrisilLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* CS monogram */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer C circle */}
        <path
          d="M85 50C85 69.33 69.33 85 50 85C30.67 85 15 69.33 15 50C15 30.67 30.67 15 50 15"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner S shape */}
        <path
          d="M65 35C65 35 58 28 48 30C38 32 33 40 40 46C47 52 58 51 62 57C66 63 61 72 50 72C39 72 35 65 35 65"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Top arc of C completing the mark */}
        <path
          d="M50 15C60 15 69 19 75 26"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {/* Text */}
      <span className="font-light text-xl tracking-wide lowercase" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        crisil <span style={{ color: 'rgb(200 168 75)' }}>solutions</span>
      </span>
    </div>
  )
}
