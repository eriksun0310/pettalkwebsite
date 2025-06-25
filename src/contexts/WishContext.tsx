"use client"

import { createContext, useContext, useEffect, useReducer, ReactNode } from "react"
import { Wish, WishFormData, UserVote, WishContextType } from "@/lib/wishes/types"
import { WishStorage, VoteStorage, getUserId, initializeDefaultWishes } from "@/lib/wishes/storage"
import { sortWishesByVotes } from "@/lib/wishes/utils"

interface WishState {
  wishes: Wish[]
  userVotes: UserVote[]
  userId: string
  loading: boolean
  error: string | null
}

type WishAction =
  | { type: "SET_LOADING"; loading: boolean }
  | { type: "SET_ERROR"; error: string | null }
  | { type: "LOAD_DATA"; wishes: Wish[]; userVotes: UserVote[]; userId: string }
  | { type: "ADD_WISH"; wish: Wish }
  | { type: "VOTE_WISH"; wishId: string; userId: string }
  | { type: "UNVOTE_WISH"; wishId: string; userId: string }

function wishReducer(state: WishState, action: WishAction): WishState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.loading }
    
    case "SET_ERROR":
      return { ...state, error: action.error, loading: false }
    
    case "LOAD_DATA":
      return {
        ...state,
        wishes: action.wishes,
        userVotes: action.userVotes,
        userId: action.userId,
        loading: false,
        error: null
      }
    
    case "ADD_WISH":
      return {
        ...state,
        wishes: [...state.wishes, action.wish]
      }
    
    case "VOTE_WISH": {
      const newVote: UserVote = {
        wishId: action.wishId,
        userId: action.userId,
        votedAt: new Date()
      }
      
      const updatedWishes = state.wishes.map(wish =>
        wish.id === action.wishId
          ? { ...wish, votes: wish.votes + 1, updatedAt: new Date() }
          : wish
      )
      
      return {
        ...state,
        wishes: updatedWishes,
        userVotes: [...state.userVotes, newVote]
      }
    }
    
    case "UNVOTE_WISH": {
      const updatedWishes = state.wishes.map(wish =>
        wish.id === action.wishId
          ? { ...wish, votes: Math.max(0, wish.votes - 1), updatedAt: new Date() }
          : wish
      )
      
      const updatedUserVotes = state.userVotes.filter(
        vote => !(vote.wishId === action.wishId && vote.userId === action.userId)
      )
      
      return {
        ...state,
        wishes: updatedWishes,
        userVotes: updatedUserVotes
      }
    }
    
    default:
      return state
  }
}

const WishContext = createContext<WishContextType | null>(null)

interface WishProviderProps {
  children: ReactNode
}

export function WishProvider({ children }: WishProviderProps) {
  const [state, dispatch] = useReducer(wishReducer, {
    wishes: [],
    userVotes: [],
    userId: "",
    loading: true,
    error: null
  })

  // 初始化資料
  useEffect(() => {
    try {
      dispatch({ type: "SET_LOADING", loading: true })
      
      // 初始化默認願望
      initializeDefaultWishes()
      
      // 載入資料
      const wishes = WishStorage.getWishes()
      const userVotes = VoteStorage.getUserVotes()
      const userId = getUserId()

      dispatch({
        type: "LOAD_DATA",
        wishes,
        userVotes,
        userId
      })
    } catch (error) {
      console.error("Failed to initialize wish data:", error)
      dispatch({
        type: "SET_ERROR",
        error: "載入許願池資料時發生錯誤"
      })
    }
  }, [])

  const addWish = (wishData: WishFormData) => {
    try {
      const newWish = WishStorage.addWish(wishData)
      dispatch({ type: "ADD_WISH", wish: newWish })
    } catch (error) {
      console.error("Failed to add wish:", error)
      dispatch({ type: "SET_ERROR", error: "新增願望時發生錯誤" })
    }
  }

  const voteForWish = (wishId: string) => {
    try {
      const hasVoted = VoteStorage.hasUserVoted(wishId, state.userId)
      
      if (hasVoted) {
        // 取消投票
        VoteStorage.removeVote(wishId, state.userId)
        const wish = state.wishes.find(w => w.id === wishId)
        if (wish) {
          WishStorage.updateWishVotes(wishId, Math.max(0, wish.votes - 1))
        }
        dispatch({ type: "UNVOTE_WISH", wishId, userId: state.userId })
      } else {
        // 新增投票
        VoteStorage.addVote(wishId, state.userId)
        const wish = state.wishes.find(w => w.id === wishId)
        if (wish) {
          WishStorage.updateWishVotes(wishId, wish.votes + 1)
        }
        dispatch({ type: "VOTE_WISH", wishId, userId: state.userId })
      }
    } catch (error) {
      console.error("Failed to vote for wish:", error)
      dispatch({ type: "SET_ERROR", error: "投票時發生錯誤" })
    }
  }

  const canVoteForWish = (wishId: string): boolean => {
    return !VoteStorage.hasUserVoted(wishId, state.userId)
  }

  const sortWishesByVotesMethod = (): Wish[] => {
    return sortWishesByVotes(state.wishes)
  }

  const contextValue: WishContextType = {
    wishes: state.wishes,
    userVotes: state.userVotes,
    userId: state.userId,
    loading: state.loading,
    error: state.error,
    addWish,
    voteForWish,
    canVoteForWish,
    sortWishesByVotes: sortWishesByVotesMethod
  }

  return (
    <WishContext.Provider value={contextValue}>
      {children}
    </WishContext.Provider>
  )
}

export function useWishes(): WishContextType {
  const context = useContext(WishContext)
  if (!context) {
    throw new Error("useWishes must be used within a WishProvider")
  }
  return context
}