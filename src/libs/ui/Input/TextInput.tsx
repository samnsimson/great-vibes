import { FC, forwardRef } from "react";
import { InputProps } from "../../types";
import { classNames } from "../../utils";
import Label from "../Label/Label";

const TextInput: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, required, type, error, ...props }, ref) => (
        <div className="grid gap-1">
            {label && (
                <Label type="text">
                    {label}
                    {required && <span className="text-danger">*</span>}
                </Label>
            )}
            <input
                {...props}
                ref={ref}
                type="text"
                className={classNames(
                    "h-9 border-[1px] border-lightGrey rounded-[5px] py-2 px-3 font-poppins",
                    "placeholder:text-darkGrey placeholder:text-sm w-full font-normal",
                    className
                )}
            />
            {error && <span className="text-danger pt-1 text-xs">{error}</span>}
        </div>
    )
);

export default TextInput;
