import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Instagram, Facebook, Clock, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>聯絡資訊</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">Email</p>
              <a
                href="mailto:contact@pettalk.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                contact@pettalk.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">回覆時間</p>
              <p className="text-muted-foreground">
                週一至週五 9:00-18:00
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">總部位置</p>
              <p className="text-muted-foreground">
                台北市信義區
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>社群媒體</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@pettalk_official</span>
          </a>
          
          <a
            href="#"
            className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Pet Talk 官方粉絲團</span>
          </a>
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