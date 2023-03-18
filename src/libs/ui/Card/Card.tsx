import { FC } from "react";
import { CardProps } from "../../types";
import { classNames } from "../../utils";

const Card: FC<CardProps> = ({ children, className }) => {
    return (
        <div
            className={classNames("py-4 px-6 bg-white rounded-[10px] w-full border-lightGrey border-[1px]", className)}
        >
            {children}
        </div>
    );
};
export default Card;
