import type { Metadata } from 'next'
import './globals.css'
import { ButtonToTop } from "/app/components/ui/ButtonToTop"

export const metadata: Metadata = {
  title: 'FixIT - Professional IT Equipment Repair',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-cream min-h-screen">
        <ButtonToTop />
        {children}
      </body>
    </html>
  )
}
