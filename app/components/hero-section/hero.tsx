'use client'
import CarouselContainer from '@/components/carousel/carousel-container'
import CarouselInner from '@/components/carousel/carousel-inner'
import { HeroGrid } from '@/components/common/grid'
import { heroCardData } from '@/contents/data'
import { useCarousel } from '@/hooks/use-carousel'
import UseHeroCard from '@/hooks/use-hero-card'

const AppHeroSection = () => {
    const { handleNextSlide, handlePrevSlide, currentIndex, getContainerWidth, getSlideClassName, getTransformValue } = useCarousel()
    return (
        <section>
            <CarouselContainer>
                <div 
                    className="flex transition-transform md:gap-8 gap-4  ease-in-out duration-500 mb-2"
                    style={{ 
                        transform: getTransformValue(),
                        width: getContainerWidth()
                    }}
                >
                    {heroCardData.map((item) => (
                        <div
                            key={item.id}
                            className={getSlideClassName()}
                        >
                            <HeroGrid
                                id={`main-${item.id}`}
                                grid_col={['1fr']}
                                {...UseHeroCard(item)}
                                className="h-full"
                            />
                        </div>
                    ))}
                </div>
            </CarouselContainer>
            
            <CarouselInner 
                currentIndex={currentIndex} 
                gotoNext={handleNextSlide} 
                gotoPrev={handlePrevSlide} 
            />
        </section>
    )
}

export default AppHeroSection