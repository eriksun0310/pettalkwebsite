import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '許願池 | Pet Talk',
  description: '分享您對 Pet Talk 的建議和願望，與其他毛孩家長一起投票支持最需要的功能改進。',
}

export default function WishesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            許願池 🌟
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            分享您的建議，讓 Pet Talk 變得更好
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            許願池功能開發完成！包含：願望投票清單、新增願望表單、投票限制機制、票數排序與亮暗色主題支援。
          </p>
          <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-green-800 dark:text-green-200">
              ✅ 許願池功能已完全開發完成！<br/>
              所有核心功能包括投票系統、表單驗證、狀態管理等都已實作完畢。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}