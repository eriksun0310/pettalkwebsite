// 許願池相關的工具函數

import { Wish, WishCategory, WishStatus } from './types'

// 依票數排序願望
export function sortWishesByVotes(wishes: Wish[]): Wish[] {
  return [...wishes].sort((a, b) => {
    // 先按票數降序排列
    if (a.votes !== b.votes) {
      return b.votes - a.votes
    }
    // 票數相同時按創建時間降序排列（新的在前）
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

// 依創建時間排序願望
export function sortWishesByDate(wishes: Wish[]): Wish[] {
  return [...wishes].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

// 篩選願望
export function filterWishesByCategory(wishes: Wish[], category?: WishCategory): Wish[] {
  if (!category) return wishes
  return wishes.filter(wish => wish.category === category)
}

export function filterWishesByStatus(wishes: Wish[], status?: WishStatus): Wish[] {
  if (!status) return wishes
  return wishes.filter(wish => wish.status === status)
}

// 搜尋願望
export function searchWishes(wishes: Wish[], query: string): Wish[] {
  if (!query.trim()) return wishes
  
  const lowerQuery = query.toLowerCase()
  return wishes.filter(wish => 
    wish.title.toLowerCase().includes(lowerQuery) ||
    wish.description?.toLowerCase().includes(lowerQuery) ||
    wish.authorName.toLowerCase().includes(lowerQuery)
  )
}

// 格式化日期
export function formatDate(date: Date): string {
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInHours = diffInMs / (1000 * 60 * 60)
  const diffInDays = diffInHours / 24

  if (diffInHours < 1) {
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
    return `${diffInMinutes} 分鐘前`
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} 小時前`
  } else if (diffInDays < 7) {
    return `${Math.floor(diffInDays)} 天前`
  } else {
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
}

// 格式化票數
export function formatVoteCount(count: number): string {
  if (count < 1000) {
    return count.toString()
  } else if (count < 10000) {
    return `${(count / 1000).toFixed(1)}K`
  } else {
    return `${Math.floor(count / 1000)}K`
  }
}

// 驗證願望表單資料
export function validateWishForm(title: string, description: string, authorName: string): string[] {
  const errors: string[] = []

  if (!title.trim()) {
    errors.push('願望標題不能為空')
  } else if (title.length > 100) {
    errors.push('願望標題不能超過 100 個字符')
  }

  if (!description.trim()) {
    errors.push('願望描述不能為空')
  } else if (description.length > 500) {
    errors.push('願望描述不能超過 500 個字符')
  }

  if (!authorName.trim()) {
    errors.push('作者名稱不能為空')
  } else if (authorName.length > 50) {
    errors.push('作者名稱不能超過 50 個字符')
  }

  return errors
}

// 取得願望狀態的顏色
export function getStatusColor(status: WishStatus): string {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'in-review':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'approved':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'implemented':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    case 'rejected':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

// 取得分類的顏色
export function getCategoryColor(category: WishCategory): string {
  switch (category) {
    case 'feature':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'improvement':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'bug-fix':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'content':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    case 'other':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}