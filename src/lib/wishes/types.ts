// 許願池相關的 TypeScript 類型定義

export interface Wish {
  id: string
  title: string
  description?: string
  authorName: string
  votes: number
  createdAt: Date
  updatedAt: Date
  category?: WishCategory
  status: WishStatus
}

export type WishCategory = 
  | 'feature' 
  | 'improvement' 
  | 'bug-fix' 
  | 'content' 
  | 'other'

export type WishStatus = 
  | 'pending' 
  | 'in-review' 
  | 'approved' 
  | 'implemented' 
  | 'rejected'

export interface WishFormData {
  title: string
  description: string
  authorName: string
  category: WishCategory
}

export interface UserVote {
  wishId: string
  userId: string
  votedAt: Date
}

export interface WishContextType {
  wishes: Wish[]
  userVotes: UserVote[]
  userId: string
  addWish: (wishData: WishFormData) => void
  voteForWish: (wishId: string) => void
  canVoteForWish: (wishId: string) => boolean
  sortWishesByVotes: () => Wish[]
  loading: boolean
  error: string | null
}

export const WISH_CATEGORIES: Record<WishCategory, string> = {
  feature: '新功能',
  improvement: '功能改進',
  'bug-fix': '錯誤修復',
  content: '內容建議',
  other: '其他'
}

export const WISH_STATUS_LABELS: Record<WishStatus, string> = {
  pending: '待處理',
  'in-review': '審核中',
  approved: '已批准',
  implemented: '已實作',
  rejected: '已拒絕'
}