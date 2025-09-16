'use client'
import { useCardProps } from "@/hooks/use-card-props"
import { CardGrid } from "./grid"
import { data } from "@/contents/data"
const AppCard = () => {
  return (
    <div className="grid xl:grid-cols-[280px_minmax(250px,280px)_280px_280px] lg:grid-cols-[300px_minmax(250px,300px)_300px] sm:grid-cols-2  grid-flow-dense lg:gap-x-8 md:gap-8">
      {data.map((item) => (
        <CardGrid key={item.id} {...useCardProps(item)} />
      ))
      }
    </div>
  )
}

export default AppCard