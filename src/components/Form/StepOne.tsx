import { FC } from "react";
import { classNames, FormGroup, TextInput } from "../../libs";
import { FormStepProps } from "../../libs/types";

const StepOne: FC<FormStepProps> = ({ className, register, formState }) => {
    const { errors } = formState;

    return (
        <div className={classNames("flex flex-col gap-6", className)}>
            <TextInput
                id="jobTitle"
                placeholder="ex. UX UI Developer"
                label="Job title"
                required
                {...register("jobTitle", { required: "Job Title is required" })}
                error={errors["jobTitle"] && String(errors.jobTitle.message)}
            />
            <TextInput
                id="companyName"
                placeholder="ex. Google"
                label="Company name"
                required
                {...register("companyName", { required: "Company Name is required" })}
                error={errors["companyName"] && String(errors.companyName.message)}
            />
            <TextInput
                id="industry"
                placeholder="ex. Information Technology"
                label="Industry"
                required
                {...register("industry", { required: "Industry is required" })}
                error={errors["industry"] && String(errors.industry.message)}
            />
            <FormGroup columns={2}>
                <TextInput id="location" placeholder="ex. Chennai" label="Location" {...register("location")} />
                <TextInput
                    id="remoteType"
                    placeholder="ex. In-office"
                    label="Remote type"
                    {...register("remoteType")}
                />
            </FormGroup>
        </div>
    );
};
export default StepOne;
