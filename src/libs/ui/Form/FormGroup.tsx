import { Children, cloneElement, FC } from "react";
import { GRID_VARIANTS } from "../../../constants";
import { FormGroupProps } from "../../types";
import { classNames } from "../../utils";

const FormGroup: FC<FormGroupProps> = ({ children, className, columns = 1 }) => {
    return (
        <div className={classNames("grid gap-6", GRID_VARIANTS[columns], className)}>
            {Children.map(children, (child) => child && cloneElement(child))}
        </div>
    );
};
export default FormGroup;
