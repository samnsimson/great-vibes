import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { JobTitleProps, classNames } from "../../libs";

const JobTitle: FC<JobTitleProps> = ({ title, className }) => {
    return <h2 className={classNames(twMerge("font-poppins text-2xl text-black font-normal", className))}>{title}</h2>;
};
export default JobTitle;
