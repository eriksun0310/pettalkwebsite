import { BaseCarousel } from "@/components/shared"
import { CharacterCard } from "./CharacterCard"
import type { Character } from "@/types"

interface CharacterCarouselProps {
  characters: Character[]
  className?: string
}

export function CharacterCarousel({ characters, className = "" }: CharacterCarouselProps) {
  // 桌面版顯示所有卡片
  const desktopView = (
    <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )

  // 手機版顯示輪播
  const mobileView = (
    <div className="md:hidden">
      <BaseCarousel 
        className={className}
        slideSizes={{ mobile: "90%" }}
      >
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </BaseCarousel>
    </div>
  )

  return (
    <>
      {desktopView}
      {mobileView}
    </>
  )
}