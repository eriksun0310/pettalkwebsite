import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { PageHeader, FAQItem, PageLayout, Section } from "@/components/shared"

const faqData = [
  {
    question: "Pet Talk 是免費的嗎？",
    answer: "是的！Pet Talk 完全免費提供所有核心功能，我們希望每一位毛孩家長都能輕鬆使用。"
  },
  {
    question: "如何確保匿名性？",
    answer: "我們使用先進的加密技術保護用戶身份，絕不會洩露任何個人資訊。"
  },
  {
    question: "支援哪些平台？",
    answer: "目前支援 iOS 14+ 和 Android 8+，未來也會推出網頁版本。"
  },
  {
    question: "如何回報不實資訊？",
    answer: "您可以直接在 App 內回報，我們會在 24 小時內處理。"
  }
]

export default function ContactPage() {
  return (
    <PageLayout>
      <Section padding="xl">
        <PageHeader
          title="聯絡我們"
          subtitle="有任何問題或建議嗎？我們很樂意聽到您的聲音！請填寫下方表單，我們會盡快回覆您。"
          className="mb-16"
        />
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            常見問題
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}