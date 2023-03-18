import { FC } from "react";
import { RadioCircleProps } from "../../types";
import { classNames } from "../../utils";

const RadioCircle: FC<RadioCircleProps> = ({ selected }) => {
    return (
        <span
            className={classNames("w-5 h-5 rounded-full border-[2px] flex items-center justify-center", {
                "border-lightGrey bg-white": !selected,
                "border-primary": selected,
            })}
        >
            <span
                className={classNames("w-3 h-3 rounded-full block", {
                    "bg-primary": selected,
                })}
            />
        </span>
    );
};
export default RadioCircle;
