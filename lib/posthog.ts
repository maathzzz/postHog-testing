import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      },
      capture_pageview: false,
      capture_pageleave: false,
      autocapture: false,
    })
  }
}

export const captureEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties)
  }
}

export const capturePageview = (url: string) => {
  if (typeof window !== 'undefined') {
    posthog.capture('$pageview', {
      $current_url: url
    })
  }
}

// Login => Call Once
export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.identify(
      userId,  // Replace 'distinct_id' with your user's unique identifier
      properties // optional: set additional person properties such as email/name
    );
  }
}

// Logout
export const resetUser = () => {
  if (typeof window !== 'undefined') {
    posthog.reset()
  }
}

