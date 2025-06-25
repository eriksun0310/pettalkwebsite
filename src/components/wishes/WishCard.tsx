"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wish } from "@/lib/wishes/types"
import { formatDate, formatVoteCount, getCategoryColor, getStatusColor } from "@/lib/wishes/utils"
import { WISH_CATEGORIES, WISH_STATUS_LABELS } from "@/lib/wishes/types"

interface WishCardProps {
  wish: Wish
  canVote: boolean
  hasVoted: boolean
  onVote: (wishId: string) => void
  className?: string
}

export function WishCard({ wish, canVote, hasVoted, onVote, className }: WishCardProps) {
  const handleVote = () => {
    if (canVote && !hasVoted) {
      onVote(wish.id)
    }
  }

  return (
    <Card className={`transition-all duration-200 hover:shadow-md ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2">
              {wish.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {wish.category && (
                <Badge 
                  variant="secondary" 
                  className={getCategoryColor(wish.category)}
                >
                  {WISH_CATEGORIES[wish.category]}
                </Badge>
              )}
              <Badge 
                variant="outline" 
                className={getStatusColor(wish.status)}
              >
                {WISH_STATUS_LABELS[wish.status]}
              </Badge>
            </div>
          </div>
          
          {/* 投票按鈕 */}
          <div className="flex flex-col items-center min-w-0">
            <Button
              variant={hasVoted ? "default" : "outline"}
              size="sm"
              onClick={handleVote}
              disabled={!canVote || hasVoted}
              className={`mb-1 transition-all duration-200 ${
                hasVoted 
                  ? "bg-pink-500 hover:bg-pink-600 text-white" 
                  : "hover:bg-pink-50 hover:border-pink-300 dark:hover:bg-pink-950"
              }`}
            >
              <Heart 
                className={`h-4 w-4 mr-1 ${
                  hasVoted ? "fill-current" : ""
                }`} 
              />
              {hasVoted ? "已投" : "投票"}
            </Button>
            <span className="text-sm font-medium text-muted-foreground">
              {formatVoteCount(wish.votes)}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {wish.description && (
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {wish.description}
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            由 <span className="font-medium">{wish.authorName}</span> 提出
          </span>
          <span>
            {formatDate(wish.createdAt)}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}