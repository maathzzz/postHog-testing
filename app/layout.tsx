import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AnalyticsProvider } from '@/components/providers/analytics-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PostHog Analytics Demo',
  description: 'Next.js application with PostHog analytics integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}