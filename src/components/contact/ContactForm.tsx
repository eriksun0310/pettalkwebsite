"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FormField } from "@/components/shared"

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
          <FormField
            id="name"
            label="姓名"
            placeholder="請輸入您的姓名"
            required
          />
          
          <FormField
            id="email"
            type="email"
            label="Email"
            placeholder="請輸入您的 Email"
            required
          />
          
          <FormField
            id="subject"
            label="主旨"
            placeholder="請輸入主旨"
            required
          />
          
          <FormField
            id="message"
            type="textarea"
            label="留言內容"
            placeholder="請輸入您的留言..."
            rows={6}
            required
          />
          
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