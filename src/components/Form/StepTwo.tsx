import { FC, useState } from "react";
import { classNames, Label, Radio, RadioGroup, TextInput } from "../../libs";
import { FormStepProps } from "../../libs/types";

const StepTwo: FC<FormStepProps> = ({ className, register, formState, getValues }) => {
    const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
    const { errors } = formState;

    const validateNumber = (v: number): boolean | string => {
        return v > 0 || "Value must be a number greater than 0";
    };

    return (
        <div className={classNames("flex flex-col gap-6", className)}>
            <div className="grid gap-1">
                <Label>Experience</Label>
                <div className="grid grid-cols-2 gap-6">
                    <TextInput
                        id="experienceMinimum"
                        placeholder="Minimum"
                        error={errors["experienceMinimum"] && String(errors.experienceMinimum.message)}
                        {...register("experienceMinimum", {
                            valueAsNumber: true,
                            validate: (v) => validateNumber(Number(v)),
                        })}
                    />
                    <TextInput
                        id="experienceMaximum"
                        placeholder="Maximum"
                        error={errors["experienceMaximum"] && String(errors.experienceMaximum.message)}
                        {...register("experienceMaximum", {
                            valueAsNumber: true,
                            validate: (v) => validateNumber(Number(v)),
                        })}
                    />
                </div>
            </div>
            <div className="grid gap-1">
                <Label>Salary</Label>
                <div className="grid grid-cols-2 gap-6">
                    <TextInput
                        id="salaryMinimum"
                        placeholder="Minimum"
                        error={errors["salaryMinimum"] && String(errors.salaryMinimum.message)}
                        {...register("salaryMinimum", {
                            valueAsNumber: true,
                            validate: (v) => validateNumber(Number(v)),
                        })}
                    />
                    <TextInput
                        id="salaryMaximum"
                        placeholder="Maximum"
                        error={errors["salaryMaximum"] && String(errors.salaryMaximum.message)}
                        {...register("salaryMaximum", {
                            valueAsNumber: true,
                            validate: (v) => validateNumber(Number(v)),
                        })}
                    />
                </div>
            </div>
            <TextInput id="totalEmployee" label="Total employee" placeholder="ex. 100" {...register("totalEmployee")} />
            <RadioGroup label="Apply type">
                <Radio
                    label="Quick apply"
                    id="quickApply"
                    value="quickApply"
                    selected={selectedRadio === "quickApply" || getValues("applyType") === "quickApply"}
                    onClick={() => setSelectedRadio("quickApply")}
                    {...register("applyType")}
                />
                <Radio
                    label="External apply"
                    id="externalApply"
                    value="externalApply"
                    selected={selectedRadio === "externalApply" || getValues("applyType") === "externalApply"}
                    onClick={() => setSelectedRadio("externalApply")}
                    {...register("applyType")}
                />
            </RadioGroup>
        </div>
    );
};
export default StepTwo;
