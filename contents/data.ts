import { generateCardIcons } from "@/components/common/app-icon-wrapper";
import { image1, image2 } from "@/public";
import { GenerateCardProps, HeroCardProps } from "@/types";

export const generateCardData: GenerateCardProps[] = [
    {
        id: '1',
        cardTitle: 'Image',
        cardText: 'Generate images with custom file styles in flux and ideograms',
        icon: generateCardIcons.image.iconComponent(),
        isNew: true,
        badge: 'New'
    },
    {
        id: '2',
        cardTitle: 'Video',
        cardText: 'Generate videos with Haiku, Pika, Runway, Lumalabs, and more.',
        icon: generateCardIcons.video.iconComponent(),
        badge: 'New',
        isNew: false,
    },

    {
        id: '3',
        cardTitle: 'Realtime',
        cardText: 'Realtime AI rendering on a canvas. Instant feedback loops.',
        icon: generateCardIcons.realtime.iconComponent(),
        badge: 'New',
        isNew: false,
    },

    {
        id: '4',
        cardTitle: 'Enhancer',
        cardText: 'Upscale and enhance images and video up to 22k',
        icon: generateCardIcons.enhancer.iconComponent(),
        isNew: true,
        badge: 'New',
    },

    {
        id: '5',
        cardTitle: 'Edit',
        cardText: 'Add objects, change styles, or expand photos and generations.',
        icon: generateCardIcons.edit.iconComponent(),
        isNew: true,
        badge: 'New',
    },

    {
        id: '6',
        cardTitle: 'Video Lypsync',
        cardText: 'Lip sync any video to any audio.',
        icon: generateCardIcons.videoLipSync.iconComponent(),
        isNew: true,
        badge: 'New',
    },

    {
        id: '7',
        cardTitle: 'Motion Transfer',
        cardText: 'Transfer motion to images and animate characters.',
        icon: generateCardIcons.motionTransfer.iconComponent(),
        isNew: true,
        badge: 'New',
    },

    {
        id: '8',
        cardTitle: 'Train',
        cardText: 'Teach knea to replicate your style, production, or characters.',
        icon: generateCardIcons.train.iconComponent(),
        isNew: true,
        badge: 'New',
    }
]

export const heroCardData: HeroCardProps[] = [
    {
        id: 'Try WAN 2.2',
        image: image1,
        heading: 'WAN 2.2',
        text: 'WAN 2.2 Image generation',
        subText: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra realistic textures.',
        label: 'NEW IMAGE MODEL'
    },

    {
        id: 'Try FLUX.1 krea',
        image: image2,
        heading: 'Open Source',
        text: 'FLUX.1-Krea',
        subText: 'We are making the way to our flux.1-Krea model open-source. Download and run our model weights, read the technical report or, generate with it in Krea Image.',
        label: 'NEW IMAGE MODEL'
    },

    {
        id: 'Try WAN 2.2',
        image: image1,
        heading: 'WAN 2.2',
        text: 'WAN 2.2 Image generation',
        subText: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra realistic textures.',
        label: 'NEW IMAGE MODEL'
    },

    {
        id: 'Try FLUX.1 krea',
        image: image2,
        heading: 'Open Source',
        text: 'FLUX.1-Krea',
        subText: 'We are making the way to our flux.1-Krea model open-source. Download and run our model weights, read the technical report or, generate with it in Krea Image.',
        label: 'NEW IMAGE MODEL'
    },

    {
        id: 'Try WAN 2.2',
        image: image1,
        heading: 'WAN 2.2',
        text: 'WAN 2.2 Image generation',
        subText: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra realistic textures.',
        label: 'NEW IMAGE MODEL'
    },

    {
        id: 'Try FLUX.1 krea',
        image: image2,
        heading: 'Open Source',
        text: 'FLUX.1-Krea',
        subText: 'We are making the way to our flux.1-Krea model open-source. Download and run our model weights, read the technical report or, generate with it in Krea Image.',
        label: 'NEW IMAGE MODEL'
    },

    {
        id: 'flux1-krea',
        image: image2,
        heading: 'Open Source',
        text: 'FLUX.1-Krea',
        subText: 'We are making the way to our flux.1-Krea model open-source. Download and run our model weights, read the technical report or, generate with it in Krea Image.',
        label: 'NEW IMAGE MODEL'
    },

    {
        id: 'Try FLUX.1 krea',
        image: image2,
        heading: 'Open Source',
        text: 'FLUX.1-Krea',
        subText: 'We are making the way to our flux.1-Krea model open-source. Download and run our model weights, read the technical report or, generate with it in Krea Image.',
        label: 'NEW IMAGE MODEL'
    },

     {
        id: 'Try WAN 2.2',
        image: image1,
        heading: 'WAN 2.2',
        text: 'WAN 2.2 Image generation',
        subText: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra realistic textures.',
        label: 'NEW IMAGE MODEL'
    }
]