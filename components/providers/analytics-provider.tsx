'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { initPostHog } from '@/lib/posthog'

export function AnalyticsProvider({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    initPostHog()
  }, [])

  useEffect(() => {
    if (pathname) {
      const url = searchParams?.size
        ? `${pathname}?${searchParams}`
        : pathname
      
      // identifyUser('984b7c50-646e-4d64-b2dd-20bb54675230', { "email": "user@example.com", "name": "Regular User"})
      // capturePageview(url)
    }
  }, [pathname, searchParams])

  return <>{children}</>
}