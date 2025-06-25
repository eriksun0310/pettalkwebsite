import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🐾</span>
              <span className="font-bold text-xl">Pet Talk</span>
            </div>
            <p className="text-muted-foreground">
              讓不會說話的牠，也能被好好守護。
              <br />
              用十幾年的陪伴，我們守護牠的每一次選擇。
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">快速連結</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                首頁
              </Link>
              <Link href="/app" className="text-muted-foreground hover:text-foreground transition-colors">
                App 功能
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                關於我們
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                聯絡我們
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">聯絡資訊</h3>
            <div className="space-y-2">
              <a
                href="mailto:contact@pettalk.com"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                contact@pettalk.com
              </a>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 Pet Talk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}