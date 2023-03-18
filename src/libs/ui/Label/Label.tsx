import { FC } from "react";
import { LabelProps } from "../../types";
import { classNames } from "../../utils";

const Label: FC<LabelProps> = ({ children, className, type, ...props }) => {
    return (
        <label
            {...props}
            className={classNames(
                "font-poppins font-medium text-sm text-dark",
                {
                    "text-dark": type !== "radio",
                    "text-darkGrey": type === "radio",
                },
                className
            )}
        >
            {children}
        </label>
    );
};
export default Label;
