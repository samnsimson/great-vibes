import { FC, ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { classNames } from "../../utils";

const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ src = "", alt = "", className }) => {
    return <img src={src} alt={alt} className={classNames(twMerge("rounded-[5px] w-12 h-12", className))} />;
};
export default Image;
