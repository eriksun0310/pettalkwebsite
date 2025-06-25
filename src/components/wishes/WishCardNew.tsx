"use client";

import { Heart, Trophy, Medal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wish } from "@/lib/wishes/types";
import { formatVoteCount } from "@/lib/wishes/utils";

interface WishCardNewProps {
  wish: Wish;
  rank: number;
  hasVoted: boolean;
  onVote: (wishId: string) => void;
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return (
        <div className="flex flex-col items-center">
          <Trophy className="h-5 w-5 text-white" />
          {/* <span className="text-xs font-bold text-white">1</span> */}
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col items-center">
          <Medal className="h-5 w-5 text-white" />
          {/* <span className="text-xs font-bold text-white">2</span> */}
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col items-center">
          <Award className="h-5 w-5 text-white" />
          {/* <span className="text-xs font-bold text-white">3</span> */}
        </div>
      );
    default:
      return (
        <span className="h-6 w-6 flex items-center justify-center text-sm font-bold text-white">
          {rank}
        </span>
      );
  }
};

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-yellow-400 to-orange-400 border-yellow-300 shadow-yellow-100 dark:shadow-yellow-900/20";
    case 2:
      return "bg-gradient-to-r from-gray-200 to-gray-300 border-gray-300 shadow-gray-100 dark:from-gray-600 dark:to-gray-700 dark:border-gray-500 dark:shadow-gray-900/20";
    case 3:
      return "bg-gradient-to-r from-amber-300 to-orange-300 border-amber-300 shadow-amber-100 dark:shadow-amber-900/20";
    default:
      return "bg-white dark:bg-gray-800 border-pink-200 dark:border-gray-600";
  }
};

export function WishCardNew({
  wish,
  rank,
  hasVoted,
  onVote,
}: WishCardNewProps) {
  const handleVote = () => {
    if (!hasVoted) {
      onVote(wish.id);
    }
  };

  return (
    <div
      className={`relative rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${getRankColor(
        rank
      )} ${
        rank <= 3
          ? "shadow-lg"
          : "shadow-md hover:border-pink-300 dark:hover:border-gray-500"
      }`}
    >
      {/* Rank Badge */}
      <div className="absolute -top-3 -left-3 z-10">
        <div
          className={`rounded-full p-3 shadow-lg ${
            rank === 1
              ? "bg-yellow-500"
              : rank === 2
              ? "bg-gray-400 dark:bg-gray-600"
              : rank === 3
              ? "bg-amber-600"
              : "bg-pink-500"
          }`}
        >
          {getRankIcon(rank)}
        </div>
      </div>

      <div className="p-6 pt-8">
        <div className="flex items-start justify-between gap-4">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className={`text-xl md:text-2xl font-bold mb-3 leading-tight ${
                rank === 1 || rank === 3
                  ? "text-gray-900 dark:text-gray-900"
                  : rank === 2
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {wish.title}
            </h3>

            {wish.description && (
              <p
                className={`leading-relaxed mb-4 line-clamp-3 ${
                  rank === 1 || rank === 3
                    ? "text-gray-700 dark:text-gray-900"
                    : rank === 2
                    ? "text-gray-700 dark:text-gray-200"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {wish.description}
              </p>
            )}

            {/* Author */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>💭</span>
              <span>
                由{" "}
                <span className="font-medium text-pink-600 dark:text-pink-400">
                  {wish.authorName}
                </span>{" "}
                提出
              </span>
            </div>
          </div>

          {/* Vote Section */}
          <div className="flex flex-col items-center min-w-0 ml-4">
            <Button
              onClick={handleVote}
              disabled={hasVoted}
              size="lg"
              className={`mb-3 px-6 py-3 font-medium rounded-full transition-all duration-200 ${
                hasVoted
                  ? "bg-pink-500 text-white cursor-not-allowed opacity-80 hover:bg-pink-500"
                  : "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
              }`}
            >
              <Heart
                className={`h-5 w-5 mr-2 ${hasVoted ? "fill-current" : ""}`}
              />
              {hasVoted ? "已投票" : "投票"}
            </Button>

            {/* Vote Count */}
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${
                  rank === 1 || rank === 3
                    ? "text-gray-900 dark:text-gray-900"
                    : rank === 2
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-800 dark:text-gray-100"
                }`}
              >
                {formatVoteCount(wish.votes)}
              </div>
              <div
                className={`text-xs font-medium ${
                  rank === 1 || rank === 3
                    ? "text-gray-600 dark:text-gray-700"
                    : rank === 2
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                票數
              </div>
            </div>
          </div>
        </div>

        {/* Popular Badge for Top 3 */}
        {rank <= 3 && (
          <div className="mt-4 pt-4 border-t border-white/30 dark:border-gray-700/50">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🔥</span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {rank === 1
                  ? "最熱門願望"
                  : rank === 2
                  ? "超人氣願望"
                  : "熱門願望"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
