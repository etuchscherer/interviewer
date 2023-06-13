import * as React from "react"

export default function Card({ children }: { children: React.ReactNode}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {children}
    </div>
  )
}