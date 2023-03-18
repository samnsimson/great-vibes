import { FC } from "react";
import { Button, Card, classNames, Grid, Image, Menu } from "../../libs";
import { IJobListProps } from "../../libs/types";
import CompanyInfo from "./CompanyInfo";
import JobDescription from "./JobDescription";
import JobLocation from "./JobLocation";
import JobTitle from "./JobTitle";
import jobLogo from "../../images/job-logo.svg";

const JobList: FC<IJobListProps> = ({ jobs, columns = 1, className, menuAction }) => {
    return (
        <Grid columns={columns} className={classNames("", className)}>
            {jobs.map((job, idx) => (
                <Card key={idx}>
                    <div className="flex gap-2 items-start">
                        <Image src={jobLogo} />
                        <Grid columns={1} className="flex-1">
                            <div className="font-poppins">
                                <JobTitle title={job.jobTitle} />
                                <CompanyInfo company={job.companyName} industry={job.industry} />
                                <JobLocation location={job.location} remoteType={job.remoteType} />
                            </div>
                            <JobDescription {...job} />
                            <div className="flex gap-6">
                                {(job.applyType === "quickApply" || job.applyType === null) && (
                                    <Button>Apply Now</Button>
                                )}
                                {(job.applyType === "externalApply" || job.applyType === null) && (
                                    <Button variant="outline" color="primary">
                                        External Apply
                                    </Button>
                                )}
                            </div>
                        </Grid>
                        <Menu menuAction={menuAction} job={job} />
                    </div>
                </Card>
            ))}
        </Grid>
    );
};
export default JobList;
