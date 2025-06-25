"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WishFormData, WishCategory, WISH_CATEGORIES } from "@/lib/wishes/types"
import { validateWishForm } from "@/lib/wishes/utils"

interface AddWishFormProps {
  onSubmit: (wishData: WishFormData) => void
  onCancel: () => void
  isSubmitting?: boolean
}

export function AddWishForm({ onSubmit, onCancel, isSubmitting = false }: AddWishFormProps) {
  const [formData, setFormData] = useState<WishFormData>({
    title: "",
    description: "",
    authorName: "",
    category: "feature"
  })
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 驗證表單
    const validationErrors = validateWishForm(
      formData.title,
      formData.description,
      formData.authorName
    )
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }
    
    // 清除錯誤並提交
    setErrors([])
    onSubmit(formData)
    
    // 重置表單
    setFormData({
      title: "",
      description: "",
      authorName: "",
      category: "feature"
    })
  }

  const handleInputChange = (field: keyof WishFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // 清除相關錯誤
    if (errors.length > 0) {
      setErrors([])
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="relative">
        <CardTitle className="flex items-center justify-between">
          許下新願望
          <Button
            variant="ghost"
            size="icon"
            onClick={onCancel}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          分享您對 Pet Talk 的建議和想法，讓我們一起讓平台變得更好！
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 錯誤提示 */}
          {errors.length > 0 && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="text-sm text-destructive space-y-1">
                {errors.map((error, index) => (
                  <div key={index}>• {error}</div>
                ))}
              </div>
            </div>
          )}

          {/* 願望標題 */}
          <div className="space-y-2">
            <Label htmlFor="title">
              願望標題 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              placeholder="例如：增加寵物友善餐廳的照片上傳功能"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              maxLength={100}
              required
            />
            <div className="text-xs text-muted-foreground text-right">
              {formData.title.length}/100
            </div>
          </div>

          {/* 願望描述 */}
          <div className="space-y-2">
            <Label htmlFor="description">
              詳細描述 <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="請詳細描述您的建議，包括具體的功能需求、使用場景等..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              maxLength={500}
              rows={4}
              required
            />
            <div className="text-xs text-muted-foreground text-right">
              {formData.description.length}/500
            </div>
          </div>

          {/* 分類選擇 */}
          <div className="space-y-2">
            <Label htmlFor="category">分類</Label>
            <Select
              value={formData.category}
              onValueChange={(value: WishCategory) => handleInputChange("category", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(WISH_CATEGORIES).map(([key, label]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 作者名稱 */}
          <div className="space-y-2">
            <Label htmlFor="authorName">
              您的暱稱 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="authorName"
              placeholder="例如：愛狗人士小王"
              value={formData.authorName}
              onChange={(e) => handleInputChange("authorName", e.target.value)}
              maxLength={50}
              required
            />
            <div className="text-xs text-muted-foreground text-right">
              {formData.authorName.length}/50
            </div>
          </div>

          {/* 提交按鈕 */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
              className="flex-1"
            >
              取消
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !formData.title.trim() || !formData.description.trim() || !formData.authorName.trim()}
              className="flex-1"
            >
              {isSubmitting ? "許願中..." : "許下願望"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}