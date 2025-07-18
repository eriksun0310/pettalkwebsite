import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock, MapPin } from "lucide-react"
import { ContactItem, SocialLinks } from "@/components/shared"
import { CONTACT_INFO } from "@/lib/constants"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>聯絡資訊</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ContactItem
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            content={
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            }
          />
          
          {/* <ContactItem
            icon={<Clock className="w-5 h-5" />}
            label="回覆時間"
            content={CONTACT_INFO.businessHours}
          />
           */}
          {/* <ContactItem
            icon={<MapPin className="w-5 h-5" />}
            label="總部位置"
            content={CONTACT_INFO.location}
          /> */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>社群媒體</CardTitle>
        </CardHeader>
        <CardContent>
          <SocialLinks layout="vertical" showLabels />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>隱私權聲明</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            我們重視您的隱私權。您提供的個人資料僅用於回覆您的詢問，
            不會用於其他商業用途，也不會提供給第三方。
            詳細的隱私權政策請參考我們的條款頁面。
          </p>
        </CardContent>
      </Card>
    </div>
  )
}