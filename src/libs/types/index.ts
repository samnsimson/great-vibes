import {
    ButtonHTMLAttributes,
    FormHTMLAttributes,
    HTMLAttributes,
    HTMLProps,
    InputHTMLAttributes,
    ReactElement,
    ReactNode,
} from "react";
import { UseFormReturn } from "react-hook-form";

export type PartitalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "colored" | "outline";
    children: ReactNode;
    color: "primary" | "danger" | "dark" | "light";
    loading: boolean;
}

export type ButtonProps = PartitalExcept<IButton, "children">;

export type ModalProps = {
    open: boolean;
    children: ReactElement[];
    onClose: () => void;
};

export interface ModalTitleProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
export interface ModalBodyProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
export interface ModalFooterProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | undefined;
    label?: string;
}

export interface LabelProps extends HTMLProps<HTMLLabelElement> {}

export interface RadioGroupProps extends HTMLProps<HTMLDivElement> {
    children: ReactElement[];
    orientation?: "horizontal" | "vertical";
}

export interface RadioProps extends InputProps {
    selected: boolean;
}

export interface RadioCircleProps {
    selected: boolean;
}

export interface SectionProps extends HTMLProps<HTMLDivElement> {
    children?: ReactElement[];
}

export interface IAppContext {
    [x: string]: any;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactElement | ReactElement[];
}

export interface FormGroupProps extends SectionProps {
    columns?: 1 | 2 | 3 | 4;
}

export interface IJob {
    createdAt: Date;
    jobTitle: string;
    companyName: string;
    industry: string;
    location: string;
    remoteType: string;
    experienceMinimum: string;
    experienceMaximum: string;
    salaryMinimum: string;
    salaryMaximum: string;
    totalEmployee: string;
    applyType: string;
    id: string;
}

export interface MenuAction {
    id: string | number;
    label: string;
    icon: ReactElement;
    action: (item: IJob) => void;
}

export interface IJobListProps extends HTMLAttributes<HTMLDivElement> {
    jobs: IJob[];
    columns: 1 | 2 | 3 | 4;
    menuAction: MenuAction[];
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactElement[];
    columns: 1 | 2 | 3 | 4;
}

export interface JobTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    title: string;
}

export interface CompanyInfoProps extends HTMLAttributes<HTMLParagraphElement> {
    company: string;
    industry: string;
}

export interface JobLocationProps extends HTMLAttributes<HTMLParagraphElement> {
    location: string;
    remoteType: string;
}

export interface MenuDropDownProps extends SectionProps {
    menuAction: MenuAction[];
    job: IJob;
}

export interface FormStepProps extends SectionProps, UseFormReturn<IJob> {}
