import { FC } from "react";
import { ModalBodyProps } from "../../types";
import { classNames } from "../../utils";

const ModalBody: FC<ModalBodyProps> = ({ children, className }) => {
    return <div className={classNames("", className)}>{children}</div>;
};
export default ModalBody;
