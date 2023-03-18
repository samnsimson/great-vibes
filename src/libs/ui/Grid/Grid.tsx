import { Children, cloneElement, FC } from "react";
import { GRID_VARIANTS } from "../../../constants";
import { GridProps } from "../../types";
import { classNames } from "../../utils";

const Grid: FC<GridProps> = ({ children, columns = 1, className }) => {
    return (
        <div className={classNames("grid gap-6", GRID_VARIANTS[columns], className)}>
            {Children.map(children, (child) => cloneElement(child))}
        </div>
    );
};
export default Grid;
