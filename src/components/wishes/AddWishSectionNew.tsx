"use client"

import { useState } from "react"
import { Plus, Send, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { WishFormData } from "@/lib/wishes/types"
import { validateWishForm } from "@/lib/wishes/utils"

interface AddWishSectionNewProps {
  onSubmit: (wishData: WishFormData) => void
  isSubmitting?: boolean
}

export function AddWishSectionNew({ onSubmit, isSubmitting = false }: AddWishSectionNewProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [errors, setErrors] = useState<string[]>([])
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 驗證表單
    const validationErrors = validateWishForm(title, description, authorName)
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }
    
    // 提交表單
    onSubmit({
      title,
      description,
      authorName,
      category: "feature"
    })
    
    // 重置表單
    setTitle("")
    setDescription("")
    setAuthorName("")
    setErrors([])
    setShowForm(false)
  }

  const handleInputChange = (field: string, value: string) => {
    if (field === "title") setTitle(value)
    if (field === "description") setDescription(value)
    if (field === "authorName") setAuthorName(value)
    
    // 清除錯誤
    if (errors.length > 0) {
      setErrors([])
    }
  }

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border-2 border-pink-200 dark:border-gray-600 shadow-xl">
      {!showForm ? (
        /* Add Wish Button */
        <div className="p-8 text-center">
          <div className="mb-6">
            <Lightbulb className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              有新的想法嗎？
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              分享你的願望，讓更多人看見你的創意！
            </p>
          </div>
          
          <Button
            onClick={() => setShowForm(true)}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Plus className="h-6 w-6 mr-3" />
            許下新願望
          </Button>
        </div>
      ) : (
        /* Add Wish Form */
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              ✨ 許下你的願望
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              告訴我們你最想看到的功能
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 錯誤提示 */}
            {errors.length > 0 && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <div className="text-red-600 dark:text-red-400 space-y-1">
                  {errors.map((error, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span>⚠️</span>
                      <span>{error}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 願望標題 */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-700 dark:text-gray-200">
                願望標題 <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="例如：🐕 增加寵物健康追蹤功能"
                value={title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                maxLength={100}
                required
                className="text-lg p-4 rounded-xl border-2 border-pink-200 dark:border-gray-600 focus:border-pink-400 dark:focus:border-pink-500 bg-white dark:bg-gray-700"
              />
              <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                {title.length}/100
              </div>
            </div>

            {/* 願望描述 */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-700 dark:text-gray-200">
                詳細描述 <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="詳細描述你的想法，包括為什麼需要這個功能、如何使用等..."
                value={description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                maxLength={500}
                rows={4}
                required
                className="text-lg p-4 rounded-xl border-2 border-pink-200 dark:border-gray-600 focus:border-pink-400 dark:focus:border-pink-500 bg-white dark:bg-gray-700 resize-none"
              />
              <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                {description.length}/500
              </div>
            </div>

            {/* 你的暱稱 */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-700 dark:text-gray-200">
                你的暱稱 <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="例如：愛狗人士小王"
                value={authorName}
                onChange={(e) => handleInputChange("authorName", e.target.value)}
                maxLength={50}
                required
                className="text-lg p-4 rounded-xl border-2 border-pink-200 dark:border-gray-600 focus:border-pink-400 dark:focus:border-pink-500 bg-white dark:bg-gray-700"
              />
              <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                {authorName.length}/50
              </div>
            </div>

            {/* 提交按鈕 */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowForm(false)
                  setTitle("")
                  setDescription("")
                  setAuthorName("")
                  setErrors([])
                }}
                disabled={isSubmitting}
                className="flex-1 py-3 text-lg rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                取消
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !title.trim() || !description.trim() || !authorName.trim()}
                className="flex-1 py-3 text-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                    許願中...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    送出願望
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}