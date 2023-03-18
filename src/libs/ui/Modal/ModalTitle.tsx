import { FC } from "react";
import { ModalTitleProps } from "../../types";
import { classNames } from "../../utils";

const ModalTitle: FC<ModalTitleProps> = ({ children, className }) => {
    return <div className={classNames("pb-6", className)}>{children}</div>;
};

export default ModalTitle;
