import { cn } from "@/_lib/lib"

type CardGridProps = {
    firstContent: React.ReactNode
    secondContent: React.ReactNode
}
export const GenerateGrid = ({ firstContent, secondContent }:CardGridProps) => {
    return <main className="grid lg:grid-cols-[220px_4rem] md:grid-cols-[250px_4rem] sm:grid-cols-[220px_4rem] grid-cols-[350px_4rem] justify-center">
        <div className="">{firstContent}</div>
        <div>{secondContent}</div>
    </main>
}

type GalleryGridProps = {
    heroCardContent: React.ReactNode
    grid_col: [...Array<string>]
    className?: string
    id: string
}
export const HeroGrid = ({ heroCardContent, grid_col, className, id }:GalleryGridProps) => {
    const gridTemplate = grid_col.join(' ')
return <main id={id} className={cn( `grid justify-center items-center md:min-w-[50rem] min-h-80 h-auto m-auto w-full`, className)} style={{gridTemplateColumns:gridTemplate}}>{heroCardContent}</main>
}