import { FC } from "react";
import { JobLocationProps } from "../../libs/types";

const JobLocation: FC<JobLocationProps> = ({ location, remoteType }) => {
    return (
        <p className="font-normal text-base text-[#4d4d4d]">
            {location} ({remoteType})
        </p>
    );
};
export default JobLocation;
