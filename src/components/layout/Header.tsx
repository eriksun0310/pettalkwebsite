"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { BrandLogo } from "@/components/shared"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <BrandLogo href="/" />

          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 transform hover:-translate-y-0.5 relative group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">開啟選單</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>選單</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col space-y-4">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 transform hover:translate-x-2 relative group p-2 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}