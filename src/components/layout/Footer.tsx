import Link from "next/link"
import { Mail } from "lucide-react"
import { BrandLogo, SocialLinks, ContactItem } from "@/components/shared"
import { NAVIGATION_ITEMS, BRAND_COPY, CONTACT_INFO } from "@/lib/constants"


export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <BrandLogo href={undefined} />
            <p className="text-muted-foreground">
              {BRAND_COPY.tagline}
              <br />
              {BRAND_COPY.subtitle}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">快速連結</h3>
            <nav className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((link) => (
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
                content={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
              />
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 PTalk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}