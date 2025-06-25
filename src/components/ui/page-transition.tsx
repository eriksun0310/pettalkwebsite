"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isInitialRender, setIsInitialRender] = useState(true)

  useEffect(() => {
    // 首次載入後設為 false，之後的路由切換才會有動畫
    setIsInitialRender(false)
  }, [])

  // 如果是初始載入，直接顯示內容不做動畫
  if (isInitialRender) {
    return <div className="w-full">{children}</div>
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}