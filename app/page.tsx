import { FeatureTest } from '@/components/feature-test'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">PostHog Analytics Demo</h1>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300">
            Click the buttons below to test PostHog event tracking
          </p> */}
        </div>
        
        <FeatureTest />
        
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          {`Check your PostHog dashboard to see the tracked events at `}
          <a className="text-blue-600 visited:text-purple-600" href={process.env.NEXT_PUBLIC_POSTHOG_HOST}> {`${process.env.NEXT_PUBLIC_POSTHOG_HOST}`}</a>
        </div>
      </div>
    </main>
  )
}