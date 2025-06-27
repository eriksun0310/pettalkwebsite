import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">用戶真實回饋</h2>
          <p className="text-xl text-muted-foreground">
            數萬名毛孩家長的信任推薦
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/public/gender/狗狗女.png"
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <span key={i} className="text-yellow-400">
                              ⭐
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString("zh-TW")}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
