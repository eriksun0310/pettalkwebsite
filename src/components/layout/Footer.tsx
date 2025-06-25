import Link from "next/link"
import { Mail } from "lucide-react"
import { BrandLogo, SocialLinks, ContactItem } from "@/components/shared"

const navigationLinks = [
  { name: "首頁", href: "/" },
  { name: "App 功能", href: "/app" },
  { name: "關於我們", href: "/about" },
  { name: "聯絡我們", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <BrandLogo href={undefined} />
            <p className="text-muted-foreground">
              讓不會說話的牠，也能被好好守護。
              <br />
              用十幾年的陪伴，我們守護牠的每一次選擇。
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">快速連結</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">聯絡資訊</h3>
            <div className="space-y-2">
              <ContactItem
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                content="contact@pettalk.com"
                href="mailto:contact@pettalk.com"
              />
              <SocialLinks />
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