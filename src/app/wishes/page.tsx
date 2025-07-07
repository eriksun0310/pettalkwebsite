import { Metadata } from 'next'
import WishesClient from './wishes-client'

export const metadata: Metadata = {
  title: '你的願望我聽見了 | PTalk',
  description: '選出你最想在下一版看到的功能！與其他毛孩家長一起投票，打造更完美的寵物社群平台。',
}

export default function WishesPage() {
  return <WishesClient />
}