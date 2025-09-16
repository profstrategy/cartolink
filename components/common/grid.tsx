type CardGridProps = {
    firstContent: React.ReactNode
    secondContent: React.ReactNode
}
export const CardGrid = ({ firstContent, secondContent }:CardGridProps) => {
    return <main className="grid lg:grid-cols-[230px_1rem] md:grid-cols-[300px_1rem] sm:grid-cols-[220px_1rem] grid-cols-2 items-center">
        <div className="grid grid-cols-1">{firstContent}</div>
        <div>{secondContent}</div>
    </main>
}

type GalleryGridProps = {
    children: React.ReactNode
    grid_col: string
}
export const GalleryGrid = ({ children }:GalleryGridProps) => {
return <main className={`grid overflow-x-auto`}>{children}</main>
}