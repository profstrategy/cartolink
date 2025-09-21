import { StaticImageData } from "next/image"

export type GenerateCardProps = {
  id: string
  icon: React.ReactNode
  className?: string
  cardTitle: string
  cardText: string
  isNew?: boolean
  badge?: string
}

export type HeroCardProps = {
  id: string
  image: StaticImageData;
  heading: string;
  text: string;
  subText: string;
  label: string
  isActive?: boolean
  className?: string
}