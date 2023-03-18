import { FC } from "react";
import { ModalFooterProps } from "../../types";
import { classNames } from "../../utils";

const ModalFooter: FC<ModalFooterProps> = ({ className, children }) => {
    return <div className={classNames("flex justify-end", className)}>{children}</div>;
};
export default ModalFooter;
