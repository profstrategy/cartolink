import { heroCardData } from "@/contents/data"
import { useState } from "react"
import { useWindowResize } from "./use-window-resize"

export const useCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const { windowResize } = useWindowResize()
    
    // Constants
    const MOBILE_BREAKPOINT = 768
    const isMobile = windowResize.width <= MOBILE_BREAKPOINT
    const totalSlides = heroCardData.length
    const GAP_SIZE = 16
    
    const handleNextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }

    const handlePrevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }
    
    const getTransformValue = () => {
        if (isMobile) {
            return `translateX(-${currentIndex * 100}%)`
        }
        const slideWidth = 100 / totalSlides
        const gapPercentage = (GAP_SIZE * (totalSlides - 1)) / windowResize.width * 100
        return `translateX(-${currentIndex * (slideWidth + gapPercentage / totalSlides)}%)`
    }
    
    const getContainerWidth = () => {
        if (isMobile) {
            return `${totalSlides * 100}%`
        }
        return `calc(${totalSlides * 100}% + ${(totalSlides - 1) * GAP_SIZE}px)`
    }
    
    const getSlideClassName = () => {
        if (isMobile) {
            return 'flex-shrink-0 w-full'
        }
        return 'flex-shrink-0 w-[50rem]'
    }

    return { 
        currentIndex, 
        handleNextSlide, 
        handlePrevSlide, 
        getTransformValue, 
        getContainerWidth, 
        getSlideClassName
    }
}