import { FC } from "react";
import { BUTTON_VARIANTS } from "../../../constants";
import { ButtonProps } from "../../types";
import { classNames } from "../../utils";

const Button: FC<ButtonProps> = ({
    className,
    style,
    children,
    variant = "colored",
    color = "primary",
    loading,
    ...props
}) => {
    return (
        <button
            type="button"
            className={classNames(
                "py-2 px-4 font-medium font-poppins rounded-md flex items-center justify-center",
                BUTTON_VARIANTS[`${variant}-${color}`],
                { "opacity-70": loading },
                className
            )}
            style={{ ...style }}
            {...props}
        >
            {children}
        </button>
    );
};
export default Button;
