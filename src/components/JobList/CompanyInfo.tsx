import { FC } from "react";
import { CompanyInfoProps } from "../../libs/types";

const CompanyInfo: FC<CompanyInfoProps> = ({ company, industry }) => {
    return (
        <p className="font-normal text-base">
            {company} - {industry}
        </p>
    );
};
export default CompanyInfo;
