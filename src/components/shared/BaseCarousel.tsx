"use client"

import { ReactNode, useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BaseCarouselProps {
  children: ReactNode[]
  className?: string
  slideClassName?: string
  slideSizes?: {
    mobile?: string
    tablet?: string
    desktop?: string
  }
}

export function BaseCarousel({ 
  children, 
  className = "", 
  slideClassName = "",
  slideSizes = {
    mobile: "90%",
    tablet: "50%", 
    desktop: "33.333%"
  }
}: BaseCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    loop: true,
    dragFree: false
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden mx-10 md:mx-14" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div 
              key={index} 
              className={cn(
                "min-w-0 px-2 md:px-3",
                "flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                slideClassName
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 z-10",
          "h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg",
          "bg-background/95 backdrop-blur-sm",
          "hover:bg-background hover:scale-110 transition-all"
        )}
        onClick={scrollPrev}
        disabled={prevBtnDisabled && !emblaApi?.canScrollPrev()}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 z-10",
          "h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg",
          "bg-background/95 backdrop-blur-sm",
          "hover:bg-background hover:scale-110 transition-all"
        )}
        onClick={scrollNext}
        disabled={nextBtnDisabled && !emblaApi?.canScrollNext()}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
    </div>
  )
}