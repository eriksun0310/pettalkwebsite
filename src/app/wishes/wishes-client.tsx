"use client"

import { useState } from 'react'
import { WishProvider, useWishes } from '@/contexts/WishContext'
import { WishCardNew, AddWishSectionNew } from '@/components/wishes'
import { WishFormData } from '@/lib/wishes/types'
import { sortWishesByVotes } from '@/lib/wishes/utils'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

function WishesContent() {
  const { wishes, userVotes, loading, error, addWish, voteForWish } = useWishes()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddWish = async (wishData: WishFormData) => {
    try {
      setIsSubmitting(true)
      addWish(wishData)
    } catch (error) {
      console.error('Failed to add wish:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVote = (wishId: string) => {
    voteForWish(wishId)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin h-12 w-12 border-4 border-pink-300 border-t-pink-600 rounded-full mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">載入願望中... 🌟</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-red-500 text-xl">⚠️ {error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="text-pink-600 hover:text-pink-700 underline font-medium"
          >
            重新載入
          </button>
        </div>
      </div>
    )
  }

  const sortedWishes = sortWishesByVotes(wishes)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 dark:from-pink-900/20 dark:via-orange-900/20 dark:to-yellow-900/20">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-6xl mb-4 block">🐾</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              你的願望我聽見了
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-8 font-medium">
            選出你最想在下一版看到的功能！
          </p>
          <div className="max-w-2xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 dark:border-gray-600">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              每一票都是對未來的期待 ✨ 
              投票給你最想看到的功能，讓我們一起打造更完美的毛孩社群！
              你的心聲將直接影響產品的發展方向。
            </p>
          </div>
        </div>
      </section>

        {/* Wishes List */}
        <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              🌟 熱門願望排行榜
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              依照票數排序，最受歡迎的功能在最上方
            </p>
          </div>

          {sortedWishes.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">
                還沒有任何願望
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                成為第一個許願的人，分享你對 PTalk 的想法！
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {sortedWishes.map((wish, index) => (
                <WishCardNew
                  key={wish.id}
                  wish={wish}
                  rank={index + 1}
                  hasVoted={userVotes.map(vote => vote.wishId).includes(wish.id)}
                  onVote={handleVote}
                />
              ))}
            </div>
          )}
        </div>
      </section>

        {/* Add New Wish Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <AddWishSectionNew
              onSubmit={handleAddWish}
              isSubmitting={isSubmitting}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function WishesClient() {
  return (
    <WishProvider>
      <WishesContent />
    </WishProvider>
  )
}