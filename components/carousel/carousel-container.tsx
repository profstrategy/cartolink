const CarouselContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='w-full bg-app-text relative overflow-hidden'>
            <main className='w-full'>
                <div className='flex px-4'>
                    {children}
                </div>
            </main>
        </section>
    )
}

export default CarouselContainer