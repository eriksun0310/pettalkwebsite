interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">
        Q: {question}
      </h3>
      <p className="text-muted-foreground">
        A: {answer}
      </p>
    </div>
  )
}