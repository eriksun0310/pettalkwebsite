"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模擬表單提交
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert("感謝您的訊息！我們會盡快回覆您。")
    setIsSubmitting(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>聯絡我們</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              placeholder="請輸入您的姓名"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="請輸入您的 Email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">主旨</Label>
            <Input
              id="subject"
              placeholder="請輸入主旨"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">留言內容</Label>
            <Textarea
              id="message"
              placeholder="請輸入您的留言..."
              rows={6}
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "送出中..." : "送出訊息"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}