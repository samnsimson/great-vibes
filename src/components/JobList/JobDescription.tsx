import { FC, HTMLAttributes } from "react";
import { classNames, formatNumber } from "../../libs";
import { IJob } from "../../libs/types";

const JobDescription: FC<IJob & HTMLAttributes<HTMLUListElement>> = ({
    experienceMinimum,
    experienceMaximum,
    salaryMinimum,
    salaryMaximum,
    totalEmployee,
    className,
}) => {
    return (
        <ul className={classNames("grid grid-cols-1 gap-2 font-poppins", className)}>
            <li>Part-Time (9.00 am - 5.00 pm IST)</li>
            <li>
                Experience ({experienceMinimum} - {experienceMaximum} years)
            </li>
            <li>
                INR (&#8377;) {formatNumber(Number(salaryMinimum))} - {formatNumber(Number(salaryMaximum))} / Month
            </li>
            <li>{totalEmployee} employees</li>
        </ul>
    );
};
export default JobDescription;
