import { ImgHTMLAttributes } from "react";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={`${hasBorder && 'border-2 border-solid border-primary'}   w-[55px] h-[55px] rounded-lg p-[2px]`}
      {...props}
    />
  )
}