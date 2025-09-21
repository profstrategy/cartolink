import { HiAcademicCap, HiLightningBolt, HiPencil, HiSparkles, HiSwitchHorizontal, HiVideoCamera } from "react-icons/hi";
import { FaVideo, FaImage, FaFolder } from 'react-icons/fa';
import { GiMicrophone } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlinePermMedia } from 'react-icons/md';
import { FaPenRuler } from 'react-icons/fa6';
import { TbBallpenOff } from 'react-icons/tb';

type IconWrapperProps = { 
  children: React.ReactNode; 
  bgColor: string;
  size?: string;
}
export const AppIconWrapper = ({ children, bgColor, size = "w-10 h-10" }:IconWrapperProps) => (
  <div className={`${size} ${bgColor} rounded-lg flex items-center justify-center text-white`}>
    {children}
  </div>
);

export const generateCardIcons = {
  image: {
    icon: <FaImage size={20} />,
    bgColor: "bg-gray-500",
    iconComponent: () => (
      <AppIconWrapper bgColor="bg-gray-500">
        <FaImage size={20} />
      </AppIconWrapper>
    )
  },
  video: {
    icon: <FaVideo size={20} />,
    bgColor: "bg-orange-500", 
    iconComponent: () => (
      <AppIconWrapper bgColor="bg-orange-500">
        <FaVideo size={20} />
      </AppIconWrapper>
    )
  },
  edit: {
    icon: <HiPencil size={20} />,
    bgColor: "bg-purple-500",
    iconComponent: () => (
      <AppIconWrapper bgColor="bg-purple-500">
        <HiPencil size={20} />
      </AppIconWrapper>
    )
  },
   videoLipSync: {
    icon: <GiMicrophone size={20} />,
    bgColor: "bg-green-500",
    iconComponent: () => (
      <AppIconWrapper bgColor="bg-green-500/80 opacity-0.8">
        <GiMicrophone size={20} />
      </AppIconWrapper>
    )
  },
  motionTransfer: {
    icon: <HiSwitchHorizontal size={20} />,
    bgColor: "bg-gray-900",
    iconComponent: () => (
      <AppIconWrapper bgColor="bg-gray-900">
        <HiSwitchHorizontal size={20} />
      </AppIconWrapper>
    )
  },
  realtime: {
    icon: <HiLightningBolt size={20} />,
    bgColor: "bg-cyan-500",
    iconComponent: () => (
      <AppIconWrapper bgColor="bg-cyan-500">
        <HiLightningBolt size={20} />
      </AppIconWrapper>
    )
  },
  enhancer: {
    icon: <HiSparkles size={20} />,
    bgColor: "bg-gray-800",
    iconComponent: () => (
      <AppIconWrapper bgColor="bg-gray-800">
        <HiSparkles size={20} />
      </AppIconWrapper>
    )
  },
  train: {
    icon: <HiAcademicCap size={20} />,
    bgColor: "bg-orange-400",
    iconComponent: () => (
      <AppIconWrapper bgColor="bg-orange-400">
        <HiAcademicCap size={20} />
      </AppIconWrapper>
    )
  }
}

export const navbarIcons = [
  {
    icon: <AiFillHome size={18} className="text-black" />,
    label: 'Home',
  },
  {
    icon: <MdOutlinePermMedia size={18} className="text-black" />,
    label: 'Media',
  },
   {
    icon: <FaVideo size={18} className="text-black" />,
    label: 'Video',
  },
   {
    icon: <FaPenRuler size={18} className="text-black" />,
    label: 'Ehnancer',
  },
   {
    icon: <TbBallpenOff size={18} className="text-black" />,
    label: 'Contrast',
  },
   {
    icon: <FaFolder size={18} className="text-black" />,
    label: 'Folder',
  }
]