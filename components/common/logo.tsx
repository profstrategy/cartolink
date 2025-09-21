
import { image1 } from '@/public'
import Image, { StaticImageData } from 'next/image'
type LogoProps = {
    logo: StaticImageData
    className?: string
    imageClassName?: string
}
const Logo = ({ logo, className, imageClassName }: LogoProps) => {
    return (
        <div className={className}>
            <Image src={logo} priority quality={100} width={60} height={60} className={imageClassName} alt='navbar-brand-logo' />
        </div>
    )
}

export default Logo