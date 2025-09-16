type Props = {
    children?: React.ReactNode
    icon?: React.ReactNode
    label: string
}
const IconButton = ({ children, icon, label }: Props) => {
    const renderContent = () => {
        if (icon) return (
            <div className='inline-block rounded-2xl shadow-md p-3 hover:shadow-lg active:shadow-sm active:scale-95 transition'>
                {icon && <span><button aria-label={label}>
                    {icon}
                </button></span>} <p>{children}</p>
            </div>
        )

        return <button aria-label='icon-button'>{children}</button>
    }

    { renderContent() }
}

export default IconButton