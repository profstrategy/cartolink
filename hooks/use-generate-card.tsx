import AppHeading from "@/components/common/app-heading"
import AppButton from "@/components/common/button/app-button"
import { GenerateCardProps } from "@/types"

export const useGenerateCard = (props: GenerateCardProps) => {
    const { icon, cardTitle, isNew, cardText, className, id, badge} = props

    return {
        firstContent: (
            <div className="flex gap-[.5rem] items-center justify-start w-full" key={id}>
                <div>{icon}</div>
                <div className="flex flex-col ">
                    <div className="flex justify-start items-center gap-2">
                        <AppHeading variants="h4" className="text-gray-900 dark:text-white">{cardTitle}</AppHeading>
                        {isNew && <AppButton variant="primary" label="new badge" width="3" height="2">{badge}</AppButton>}
                    </div>
                    <p className="text-[.7rem] text-app-text leading-[1] dark:text-white">{cardText}</p>
                </div>
            </div>
        ),
        secondContent: (

            <AppButton variant="secondary" label="open button">Open</AppButton>

        ),
        className: className
    }
}