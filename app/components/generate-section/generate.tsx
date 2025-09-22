'use client'
import AppHeading from "@/components/common/app-heading";
import { GenerateGrid } from "@/components/common/grid";
import IconContainer from "@/components/common/icon-container";
import { generateCardData } from "@/contents/data"
import { useGenerateCard } from "@/hooks/use-generate-card"
import { useState } from "react";
import { IoIosArrowUp } from 'react-icons/io';

const GenerateSection = () => {
  const [ showLess, setShowLess ] = useState(false)
  
  const handleToggle = () => {
    setShowLess(!showLess)
  }

  return (
    <section className="container">
      <div className="flex justify-between items-center mb-2">
        <AppHeading variants="h2" className="font-semibold dark:text-white">Generate</AppHeading>
        <button onClick={handleToggle}>
          <IconContainer 
            label={showLess ? "Toggle to view more" : "Toggle to view less"} 
            text={showLess ? "show all" : "show less"} 
            className_icon_text_button="flex-row-reverse items-center h-4 items-center text-black dark:text-white" 
            text_color
          >
            <IoIosArrowUp className={`h-4 w-4 text-blue-500 dark:text-blue-400 transition-transform duration-300 cursor-pointer ${!showLess ? 'rotate-180' : ''}`} />
          </IconContainer>
        </button>
      </div>
      
      <div className={`relative transition-all duration-500 ease-in-out ${showLess ? 'h-20 overflow-hidden' : 'h-auto'}`}>
        <div className="grid xl:grid-cols-[280px_minmax(250px,280px)_280px_280px] lg:grid-cols-[300px_minmax(250px,300px)_300px] sm:grid-cols-2 justify-center grid-flow-dense w-full lg:gap-12 md:gap-8 gap-4">
          {generateCardData.map((item, i) => (
            <div key={item.id}>
              <GenerateGrid
                {...useGenerateCard(item)} 
                className="h-16"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlay when cards are hidden */}
        {showLess && (
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-white dark:from-gray-900 to-80% to-transparent backdrop-blur-3xl top-12 pointer-events-none text-black dark:text-white text-center cursor-pointer">
            <p onClick={handleToggle} className="z-50">Show More</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default GenerateSection