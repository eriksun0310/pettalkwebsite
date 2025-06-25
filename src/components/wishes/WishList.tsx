"use client"

import { useState, useMemo } from "react"
import { Search, Filter, Plus, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WishCard } from "./WishCard"
import { Wish, WishCategory, WishStatus } from "@/lib/wishes/types"
import { sortWishesByVotes, sortWishesByDate, filterWishesByCategory, filterWishesByStatus, searchWishes } from "@/lib/wishes/utils"

interface WishListProps {
  wishes: Wish[]
  userVotes: string[]
  onVote: (wishId: string) => void
  onAddWish: () => void
  className?: string
}

type SortOption = "votes" | "date"

export function WishList({ wishes, userVotes, onVote, onAddWish, className }: WishListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("votes")
  const [filterCategory, setFilterCategory] = useState<WishCategory | "all">("all")
  const [filterStatus, setFilterStatus] = useState<WishStatus | "all">("all")

  const filteredAndSortedWishes = useMemo(() => {
    let result = [...wishes]

    // 搜尋篩選
    if (searchQuery.trim()) {
      result = searchWishes(result, searchQuery)
    }

    // 分類篩選
    if (filterCategory !== "all") {
      result = filterWishesByCategory(result, filterCategory)
    }

    // 狀態篩選
    if (filterStatus !== "all") {
      result = filterWishesByStatus(result, filterStatus)
    }

    // 排序
    if (sortBy === "votes") {
      result = sortWishesByVotes(result)
    } else {
      result = sortWishesByDate(result)
    }

    return result
  }, [wishes, searchQuery, sortBy, filterCategory, filterStatus])

  const totalVotes = wishes.reduce((sum, wish) => sum + wish.votes, 0)

  return (
    <div className={className}>
      {/* 統計資訊 */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold text-primary">{wishes.length}</div>
          <div className="text-sm text-muted-foreground">許願總數</div>
        </div>
        <div className="text-center p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold text-pink-500">{totalVotes}</div>
          <div className="text-sm text-muted-foreground">投票總數</div>
        </div>
        <div className="text-center p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold text-green-500">{userVotes.length}</div>
          <div className="text-sm text-muted-foreground">我的投票</div>
        </div>
      </div>

      {/* 操作欄 */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <h2 className="text-2xl font-bold">許願清單</h2>
          <Button onClick={onAddWish} className="shrink-0">
            <Plus className="h-4 w-4 mr-2" />
            許下新願望
          </Button>
        </div>

        {/* 搜尋和篩選 */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* 搜尋欄 */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜尋願望..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* 篩選器 */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="votes">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    依票數排序
                  </div>
                </SelectItem>
                <SelectItem value="date">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    依時間排序
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterCategory} onValueChange={(value: WishCategory | "all") => setFilterCategory(value)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="分類" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有分類</SelectItem>
                <SelectItem value="feature">新功能</SelectItem>
                <SelectItem value="improvement">功能改進</SelectItem>
                <SelectItem value="bug-fix">錯誤修復</SelectItem>
                <SelectItem value="content">內容建議</SelectItem>
                <SelectItem value="other">其他</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={(value: WishStatus | "all") => setFilterStatus(value)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="狀態" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有狀態</SelectItem>
                <SelectItem value="pending">待處理</SelectItem>
                <SelectItem value="in-review">審核中</SelectItem>
                <SelectItem value="approved">已批准</SelectItem>
                <SelectItem value="implemented">已實作</SelectItem>
                <SelectItem value="rejected">已拒絕</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* 願望清單 */}
      {filteredAndSortedWishes.length === 0 ? (
        <div className="text-center py-12">
          {searchQuery.trim() || filterCategory !== "all" || filterStatus !== "all" ? (
            <div className="space-y-4">
              <Filter className="h-16 w-16 mx-auto text-muted-foreground" />
              <div>
                <h3 className="text-xl font-semibold mb-2">沒有找到符合條件的願望</h3>
                <p className="text-muted-foreground">
                  嘗試調整搜尋關鍵字或篩選條件
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("")
                  setFilterCategory("all")
                  setFilterStatus("all")
                }}
              >
                清除篩選
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-6xl mb-4">🌟</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">還沒有任何願望</h3>
                <p className="text-muted-foreground mb-4">
                  成為第一個許願的人，分享您對 Pet Talk 的建議！
                </p>
              </div>
              <Button onClick={onAddWish}>
                <Plus className="h-4 w-4 mr-2" />
                許下第一個願望
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedWishes.map((wish) => (
            <WishCard
              key={wish.id}
              wish={wish}
              canVote={true}
              hasVoted={userVotes.includes(wish.id)}
              onVote={onVote}
            />
          ))}
        </div>
      )}

      {/* 結果計數 */}
      {filteredAndSortedWishes.length > 0 && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {searchQuery.trim() || filterCategory !== "all" || filterStatus !== "all" 
            ? `顯示 ${filteredAndSortedWishes.length} / ${wishes.length} 個願望`
            : `共 ${wishes.length} 個願望`
          }
        </div>
      )}
    </div>
  )
}