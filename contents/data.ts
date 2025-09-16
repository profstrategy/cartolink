import { generateCardIcons } from "@/components/common/icon-wrapper";
import { CardProps } from "@/hooks/use-card-props";

export const data: CardProps[] = [
    {
        id: '1',
        cardTitle: 'Image',
        cardText: 'Generate images with custom file styles in flux and ideograms',
        icon: generateCardIcons.image.iconComponent(),
        isNew: true
    },
    {
        id: '2',
        cardTitle: 'Video',
        cardText: 'Generate videos with Haiku, Pika, Runway, Lumalabs, and more.',
        icon: generateCardIcons.video.iconComponent(),
    },

     {
        id: '3',
        cardTitle: 'Realtime',
        cardText: 'Realtime AI rendering on a canvas. Instant feedback loops.',
        icon: generateCardIcons.realtime.iconComponent(),
    },

     {
        id: '4',
        cardTitle: 'Enhancer',
        cardText: 'Upscale and enhance images and video up to 22k',
        icon: generateCardIcons.enhancer.iconComponent(),
        isNew: true
    },

     {
        id: '5',
        cardTitle: 'Edit',
        cardText: 'Add objects, change styles, or expand photos and generations.',
        icon: generateCardIcons.edit.iconComponent(),
        isNew: true
    },

     {
        id: '6',
        cardTitle: 'Video Lypsync',
        cardText: 'Lip sync any video to any audio.',
        icon: generateCardIcons.videoLipSync.iconComponent(),
        isNew: true
    },

    {
        id: '7',
        cardTitle: 'Motion Transfer',
        cardText: 'Transfer motion to images and animate characters.',
        icon: generateCardIcons.motionTransfer.iconComponent(),
        isNew: true
    },

    {
        id: '8',
        cardTitle: 'Train',
        cardText: 'Teach knea to replicate your style, production, or characters.',
        icon: generateCardIcons.train.iconComponent(),
        isNew: true
    }
]