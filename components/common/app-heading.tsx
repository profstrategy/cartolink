import { cn } from "@/_lib/lib"

type AppHeadingProps = {
    variants?: 'h1'| 'h2'| 'h3' | 'h4'
    children: React.ReactNode
    color?: string
    align?: 'left' | 'center'|'right'
    className?: string
}
const AppHeading = ({ variants='h1', children, color, align='left', className }:AppHeadingProps) => {
   const variantStyles = {
        h1: 'text-2xl md:text-3xl lg:text-[5rem] font-bold leading-[1.5] md:leading-[1.4] lg:leading-[1.3]',
        h2: 'text-xl md:text-2xl lg:text-3xl leading-[1.5] md:leading-[1.4] lg:leading-[1.3]',
        h3: 'text-lg md:text-xl lg:text-2xl leading-[1.6] md:leading-[1.5] lg:leading-[1.4]',
        h4: 'text-base leading-[1.7] md:leading-[1.6] lg:leading-[1.5] font-semibold',
    };
    const Component = variants
  return (
    <Component className={cn(`text-${color}`, `text-${align}`, variantStyles[variants], className )}>{children}</Component>
  )
}

export default AppHeading