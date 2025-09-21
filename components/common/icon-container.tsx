import { cn } from "@/_lib/lib"

type Props = {
    children?: React.ReactNode
    text?: string
    label: string
    className_icon_text_button?: string
    className_icon_button?: string
    text_color?: boolean
    onclick?: () => void
}
const IconContainer = ({ children, text, label, className_icon_button, className_icon_text_button,text_color, onclick }: Props) => {
    const baseclasses = 'hover:bg-white/60 focus:bg-white/60 active:bg-white/50 rounded-full active:scale-95 transition cursor-pointer'
    const renderContent = () => {
        if (text) return (
            <div className={cn(baseclasses, 'flex justify-center items-center gap-1', className_icon_text_button)}>
                {text && <p className={cn(`text-[1rem] ${text_color ? 'text-blue-500' : ''}`)}>{text}</p>} <span><button aria-label={label}>
                    {children}
                </button></span>
            </div>
        )

        return <button aria-label={label} onClick={onclick} className={cn(baseclasses, className_icon_button)}>{children}</button>
    }

    return <div> {renderContent()} </div>
}

export default IconContainer