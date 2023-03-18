import { Children, cloneElement, FC } from "react";
import { RadioGroupProps } from "../../types";
import { classNames } from "../../utils";
import Label from "../Label/Label";
import Radio from "./Radio";

const RadioGroup: FC<RadioGroupProps> = ({ label, children, className, orientation = "horizontal" }) => {
    return (
        <div className={classNames("flex flex-col gap-1", className)}>
            {label && <Label>{label}</Label>}
            <div
                className={classNames("flex gap-4", {
                    "flex-row": orientation === "horizontal",
                    "flex-col": orientation === "vertical",
                })}
            >
                {Children.map(children, (child) => child.type === Radio && cloneElement(child))}
            </div>
        </div>
    );
};
export default RadioGroup;
