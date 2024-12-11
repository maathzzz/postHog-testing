'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from './ui/input'
import { captureEvent } from '@/lib/posthog'
import { MousePointerClick, Mail, Share2 } from 'lucide-react'

export function FeatureTest() {
  const handleButtonClick = (feature: string) => {
    captureEvent('feature_clicked', { "feature": feature, "user": "Regular User" })
  }

  return (
    <Card className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">Feature Testing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => handleButtonClick('first option')}
        >
          <MousePointerClick className="h-4 w-4" />
          Track Click
        </Button>
        
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => handleButtonClick('newsletter_signup')}
        >
          <Mail className="h-4 w-4" />
          Newsletter Signup
        </Button>
        
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => handleButtonClick('share')}
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => console.log("Clicked Test Button")}
        >
          <Share2 className="h-4 w-4" />
          Test Button
        </Button>

        <Input placeholder='Input Test (onFocus)...' onFocus={() => console.log("onFocus => postHog AutoCapture call")}></Input>
      </div>
    </Card>
  )
}