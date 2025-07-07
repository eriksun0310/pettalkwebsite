import { Metadata } from 'next'
import WishesClient from './wishes-client'

export const metadata: Metadata = {
  title: '許願池 | PTalk',
  description: '分享您對 PTalk 的建議和願望，與其他毛孩家長一起投票支持最需要的功能改進。',
}

export default function WishesPage() {
  return <WishesClient />
}