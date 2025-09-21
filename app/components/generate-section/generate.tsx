'use client'

import AppHeading from "@/components/common/app-heading";
import { GenerateGrid } from "@/components/common/grid";
import IconContainer from "@/components/common/icon-container";
import { generateCardData } from "@/contents/data"
import { useGenerateCard } from "@/hooks/use-generate-card"
import { IoIosArrowDown } from 'react-icons/io';

const GenerateSection = () => {
  return (
    <section className="container mb-16">
      <div className="flex justify-between items-center mb-8">
        <AppHeading variants="h2" className="font-semibold">Generate</AppHeading>
        <IconContainer label="Toggle to view more" text="show all" className_icon_text_button="flex-row-reverse items-center h-4 items-center" text_color><IoIosArrowDown className="h-4 w-4 text-blue-500" /></IconContainer>
      </div>
      <div className="grid xl:grid-cols-[280px_minmax(250px,280px)_280px_280px] lg:grid-cols-[300px_minmax(250px,300px)_300px] sm:grid-cols-2 grid-cols-1 justify-center grid-flow-dense lg:gap-12 md:gap-8 gap-4">
        {generateCardData.map((item) => (
          <GenerateGrid key={item.id} {...useGenerateCard(item)} />
        ))
        }
      </div>
    </section>
  )
}

export default GenerateSection