import { Dialog } from "@headlessui/react";
import { FC, Children } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "../../types";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";

const Modal: FC<ModalProps> = ({ open, children, onClose }) => {
    let title, body, footer;

    Children.forEach(children, (child) => {
        switch (child.type) {
            case ModalTitle:
                title = child;
                break;
            case ModalBody:
                body = child;
                break;
            case ModalFooter:
                footer = child;
                break;
            default:
                break;
        }
    });

    return (open &&
        createPortal(
            <Dialog open={open} onClose={onClose} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white p-8 rounded-md w-[577px]">
                        {title}
                        {body}
                        {footer}
                    </Dialog.Panel>
                </div>
            </Dialog>,
            document.body
        )) as JSX.Element;
};

export default Modal;
