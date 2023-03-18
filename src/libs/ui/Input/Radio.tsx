import { FC, forwardRef } from "react";
import { RadioProps } from "../../types";
import Label from "../Label/Label";
import RadioCircle from "./RadioCircle";

const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
    ({ label, className, id, selected, onChange, ...props }, ref) => (
        <Label className="flex gap-1 items-center justify-start h-[36px]" htmlFor={id} type="radio">
            <input
                type="radio"
                id={id}
                className="w-5 h-5 border-lightGrey border-2 hidden"
                checked={selected}
                onChange={onChange}
                {...props}
                ref={ref}
            />
            <RadioCircle selected={selected} />
            <span className="text-darkGrey">{label}</span>
        </Label>
    )
);
export default Radio;
