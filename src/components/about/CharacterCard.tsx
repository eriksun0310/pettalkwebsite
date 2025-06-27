import { Card, CardContent } from "@/components/ui/card";
import type { Character } from "@/types";
import Image from "next/image";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="aspect-square relative bg-gradient-to-br from-primary/20 to-primary/5">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">{character.name}</h3>
          </div>
          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <p className="text-muted-foreground leading-relaxed">
              {character.personality}
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic font-medium">
              "{character.quote}"
            </blockquote>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
