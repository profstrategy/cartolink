import { cn } from "@/_lib/lib"
import AppHeading from "@/components/common/app-heading"
import AppButton from "@/components/common/button/app-button"

export type CardProps = {
    id: string
    icon: React.ReactNode
    className?: string
    cardTitle: string
    cardText: string
    isNew?: React.ReactNode
}
export const useCardProps = (props: CardProps) => {
    const { icon, cardTitle, isNew, cardText, className, id } = props


    return {
        firstContent: (
            <div className="flex gap-[.5rem] items-center justify-start w-full" key={id}>
                <div>{icon}</div>
                <div className="flex flex-col ">
                    <div className="flex justify-start items-center gap-2">
                        <AppHeading variants="h4" className="text-gray-900">{cardTitle}</AppHeading>
                        {isNew && <AppButton variant="primary" label="new badge" width="3" height="2">New</AppButton>}
                    </div>
                    <p className="text-[.7rem] text-gray-600 leading-[1]">{cardText}</p>
                </div>
            </div>
        ),
        secondContent: (

            <AppButton variant="secondary" label="open button">Open</AppButton>

        ),
        className: className
    }
}