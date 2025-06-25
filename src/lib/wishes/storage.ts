// 許願池本地存儲管理

import { Wish, UserVote, WishFormData } from './types'

const WISHES_STORAGE_KEY = 'pettalk-wishes'
const USER_VOTES_STORAGE_KEY = 'pettalk-user-votes'
const USER_ID_STORAGE_KEY = 'pettalk-user-id'

// 生成唯一 ID
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// 生成或獲取用戶 ID
export function getUserId(): string {
  if (typeof window === 'undefined') return 'server-user'
  
  let userId = localStorage.getItem(USER_ID_STORAGE_KEY)
  if (!userId) {
    userId = generateId()
    localStorage.setItem(USER_ID_STORAGE_KEY, userId)
  }
  return userId
}

// 願望存儲操作
export class WishStorage {
  static getWishes(): Wish[] {
    if (typeof window === 'undefined') return []
    
    try {
      const stored = localStorage.getItem(WISHES_STORAGE_KEY)
      if (!stored) return []
      
      const wishes = JSON.parse(stored)
      return wishes.map((wish: any) => ({
        ...wish,
        createdAt: new Date(wish.createdAt),
        updatedAt: new Date(wish.updatedAt)
      }))
    } catch (error) {
      console.error('Failed to load wishes:', error)
      return []
    }
  }

  static saveWishes(wishes: Wish[]): void {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishes))
    } catch (error) {
      console.error('Failed to save wishes:', error)
    }
  }

  static addWish(wishData: WishFormData): Wish {
    const newWish: Wish = {
      id: generateId(),
      title: wishData.title,
      description: wishData.description,
      authorName: wishData.authorName,
      category: wishData.category,
      votes: 0,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const wishes = this.getWishes()
    wishes.push(newWish)
    this.saveWishes(wishes)
    
    return newWish
  }

  static updateWishVotes(wishId: string, newVoteCount: number): void {
    const wishes = this.getWishes()
    const wishIndex = wishes.findIndex(w => w.id === wishId)
    
    if (wishIndex !== -1) {
      wishes[wishIndex].votes = newVoteCount
      wishes[wishIndex].updatedAt = new Date()
      this.saveWishes(wishes)
    }
  }
}

// 用戶投票存儲操作
export class VoteStorage {
  static getUserVotes(): UserVote[] {
    if (typeof window === 'undefined') return []
    
    try {
      const stored = localStorage.getItem(USER_VOTES_STORAGE_KEY)
      if (!stored) return []
      
      const votes = JSON.parse(stored)
      return votes.map((vote: any) => ({
        ...vote,
        votedAt: new Date(vote.votedAt)
      }))
    } catch (error) {
      console.error('Failed to load user votes:', error)
      return []
    }
  }

  static saveUserVotes(votes: UserVote[]): void {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(USER_VOTES_STORAGE_KEY, JSON.stringify(votes))
    } catch (error) {
      console.error('Failed to save user votes:', error)
    }
  }

  static addVote(wishId: string, userId: string): void {
    const votes = this.getUserVotes()
    const newVote: UserVote = {
      wishId,
      userId,
      votedAt: new Date()
    }
    
    votes.push(newVote)
    this.saveUserVotes(votes)
  }

  static hasUserVoted(wishId: string, userId: string): boolean {
    const votes = this.getUserVotes()
    return votes.some(vote => vote.wishId === wishId && vote.userId === userId)
  }

  static removeVote(wishId: string, userId: string): void {
    const votes = this.getUserVotes()
    const filteredVotes = votes.filter(
      vote => !(vote.wishId === wishId && vote.userId === userId)
    )
    this.saveUserVotes(filteredVotes)
  }
}

// 初始化默認資料
export function initializeDefaultWishes(): void {
  const existingWishes = WishStorage.getWishes()
  if (existingWishes.length === 0) {
    const defaultWishes: WishFormData[] = [
      {
        title: '📸 增加寵物友善餐廳的照片上傳功能',
        description: '希望能讓使用者上傳餐廳的寵物友善設施照片，包括寵物座位區、水碗位置、戶外空間等，讓其他飼主更清楚了解環境是否適合自己的毛孩',
        authorName: '愛狗人士小王',
        category: 'feature'
      },
      {
        title: '🏥 新增寵物醫院評價功能',
        description: '除了餐廳，也希望能評價寵物醫院的服務品質，包括醫師專業度、等待時間、設備新舊、收費合理性等，幫助其他飼主選擇好的動物醫院',
        authorName: '多貓家庭',
        category: 'feature'
      },
      {
        title: '🏨 增加寵物友善住宿推薦',
        description: '旅行時需要帶寵物的住宿選擇太少了！希望平台也能提供寵物友善飯店、民宿的評價和推薦，包括房間大小、是否提供寵物用品、周邊散步環境等資訊',
        authorName: '旅行愛好者',
        category: 'content'
      },
      {
        title: '⚡ 優化地圖搜尋的載入速度',
        description: '目前地圖載入較慢，特別是在查看附近寵物友善餐廳時，希望能改善使用者體驗，讓搜尋結果更快顯示',
        authorName: '貓奴小李',
        category: 'improvement'
      },
      {
        title: '🎯 個人化推薦系統',
        description: '根據我們家毛孩的品種、年齡、喜好來推薦適合的餐廳和活動，比如適合大型犬的餐廳、老犬友善的環境等',
        authorName: '黃金獵犬媽媽',
        category: 'feature'
      },
      {
        title: '💬 增加即時聊天功能',
        description: '希望能和其他在附近的毛孩家長聊天，安排一起遛狗或分享育兒心得，建立本地的寵物社群',
        authorName: '社交達人',
        category: 'feature'
      }
    ]

    // 隨機設置一些票數讓排行榜更有趣
    defaultWishes.forEach((wishData, index) => {
      const newWish = WishStorage.addWish(wishData)
      
      // 設置不同的票數來建立排行榜
      const votes = [89, 67, 45, 34, 23, 12][index] || 5
      WishStorage.updateWishVotes(newWish.id, votes)
    })
  }
}