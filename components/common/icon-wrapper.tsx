import { HiAcademicCap, HiCamera, HiLightningBolt, HiPencil, HiSparkles, HiSwitchHorizontal, HiVideoCamera } from "react-icons/hi";
import { GiMicrophone } from 'react-icons/gi';

type IconWrapperProps = { 
  children: React.ReactNode; 
  bgColor: string;
  size?: string;
}
export const IconWrapper = ({ children, bgColor, size = "w-10 h-10" }:IconWrapperProps) => (
  <div className={`${size} ${bgColor} rounded-lg flex items-center justify-center text-white`}>
    {children}
  </div>
);

export const generateCardIcons = {
  image: {
    icon: <HiCamera size={20} />,
    bgColor: "bg-blue-500",
    iconComponent: () => (
      <IconWrapper bgColor="bg-blue-500">
        <HiCamera size={20} />
      </IconWrapper>
    )
  },
  video: {
    icon: <HiVideoCamera size={20} />,
    bgColor: "bg-orange-500", 
    iconComponent: () => (
      <IconWrapper bgColor="bg-orange-500">
        <HiVideoCamera size={20} />
      </IconWrapper>
    )
  },
  edit: {
    icon: <HiPencil size={20} />,
    bgColor: "bg-purple-500",
    iconComponent: () => (
      <IconWrapper bgColor="bg-purple-500">
        <HiPencil size={20} />
      </IconWrapper>
    )
  },
   videoLipSync: {
    icon: <GiMicrophone size={20} />,
    bgColor: "bg-purple-500",
    iconComponent: () => (
      <IconWrapper bgColor="bg-purple-500">
        <GiMicrophone size={20} />
      </IconWrapper>
    )
  },
  motionTransfer: {
    icon: <HiSwitchHorizontal size={20} />,
    bgColor: "bg-gray-900",
    iconComponent: () => (
      <IconWrapper bgColor="bg-gray-900">
        <HiSwitchHorizontal size={20} />
      </IconWrapper>
    )
  },
  realtime: {
    icon: <HiLightningBolt size={20} />,
    bgColor: "bg-cyan-500",
    iconComponent: () => (
      <IconWrapper bgColor="bg-cyan-500">
        <HiLightningBolt size={20} />
      </IconWrapper>
    )
  },
  enhancer: {
    icon: <HiSparkles size={20} />,
    bgColor: "bg-gray-800",
    iconComponent: () => (
      <IconWrapper bgColor="bg-gray-800">
        <HiSparkles size={20} />
      </IconWrapper>
    )
  },
  train: {
    icon: <HiAcademicCap size={20} />,
    bgColor: "bg-orange-400",
    iconComponent: () => (
      <IconWrapper bgColor="bg-orange-400">
        <HiAcademicCap size={20} />
      </IconWrapper>
    )
  }
}