import { Children, cloneElement, FC, forwardRef } from "react";
import { FormProps } from "../../types";
import { classNames } from "../../utils";

const Form: FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(({ children, className }, ref) => (
    <form className={classNames("", className)} ref={ref}>
        {Children.map(children, (child) => child && cloneElement(child))}
    </form>
));

export default Form;
