import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "./api";
import { FromStepOne, FromStepTwo, JobList } from "./components";
import { DEFAULT_JOB_DATA } from "./constants";
import { Button, Form, Modal, ModalBody, ModalFooter, ModalTitle } from "./libs";
import { IJob, MenuAction, resetFormFields } from "./libs";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentStep, setCurrentStep] = useState<1 | 2>(1);
    const [jobs, setJobs] = useState<any[]>([]);
    const form = useForm<IJob>({ defaultValues: {}, mode: "onSubmit" });
    const { handleSubmit, reset, setValue, clearErrors } = form;

    /**
     * If the current step is 1, then set the current step to 2, otherwise if the form is in editing
     * mode, then update the data, otherwise save the data
     * @param {IJob} data - IJob - this is the data that is passed from the form.
     */
    const handleData = (data: IJob) => {
        currentStep === 1 ? setCurrentStep(2) : isEditing ? updateData(data) : saveData(data);
    };

    /**
     * We're using axios to make a post request to the server, then we're using the response data to
     * update the state of the jobs array, then we're resetting the form fields, then we're closing the
     * modal, then we're setting the loading state to false
     * @param {IJob} data - IJob - this is the data that we are sending to the server.
     */
    const saveData = (data: IJob) => {
        setIsLoading(true);
        api.jobs
            .create(data)
            .then((data) => setJobs((state) => [...state, data]))
            .then(() => reset(resetFormFields(data)))
            .then(() => closeModal())
            .then(() => setIsLoading(false))
            .catch((err) => console.log("CREATE ERROR", err));
    };

    /**
     * When the user clicks the submit button, the form data is sent to the server, the server updates
     * the database, the server sends back the updated data, the updated data is used to update the
     * state, the form is reset, the modal is closed, and the loading state is set to false.
     * @param {IJob} data - IJob - this is the data that is being passed in from the form.
     */
    const updateData = (data: IJob) => {
        setIsLoading(true);
        api.jobs
            .update(data.id, data)
            .then((data) => setJobs((state) => state.map((job) => (job.id === data.id ? data : job))))
            .then(() => reset(resetFormFields(data)))
            .then(() => closeModal())
            .then(() => setIsLoading(false))
            .catch((err) => console.log("EDIT ERROR", err));
    };

    /** It closes the modal, resets the form, clears the errors, and sets the current step back to 1 */
    const closeModal = () => {
        setIsOpen(false);
        setCurrentStep(1);
        clearErrors(Object.keys(DEFAULT_JOB_DATA) as any);
        reset(DEFAULT_JOB_DATA);
        isEditing && setIsEditing(false);
        isLoading && setIsLoading(false);
    };

    /**
     * It sets the state of the modal to open and editing, and then it sets the value of the form to
     * the values of the job.
     * @param {IJob} job - IJob - this is the job object that is passed in from the parent component.
     */
    const editJob = (job: IJob) => {
        setIsEditing(true);
        setIsOpen(true);
        Object.entries(job).forEach(([key, value]) => setValue(key as keyof IJob, value));
    };

    /**
     * It deletes a job from the database.
     * @param {string | number} id - string | number
     */
    const deleteJob = (id: string | number) => {
        api.jobs
            .delete(id)
            .then((data) => setJobs((state) => state.filter((x) => x.id !== data.id)))
            .then(() => setIsLoading(false));
    };

    /* It's an array of objects that are used to create the menu actions for the job list. */
    const menuAction: MenuAction[] = [
        {
            id: "edit",
            label: "Edit",
            icon: <PencilIcon className="h-4 w-4 text-primary" />,
            action: (job) => editJob(job),
        },
        {
            id: "delete",
            label: "Delete",
            icon: <TrashIcon className="h-4 w-4 text-danger" />,
            action: ({ id }) => deleteJob(id),
        },
    ];

    useEffect(() => {
        api.jobs.get().then((data) => setJobs(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            <Button onClick={() => setIsOpen(!isOpen)} variant="colored" color="primary">
                Create Job
            </Button>
            <JobList jobs={jobs} columns={2} className="my-4" menuAction={menuAction} />
            <Modal open={isOpen} onClose={() => closeModal()}>
                <ModalTitle>
                    <div className="flex items-center justify-between">
                        <h1 className="font-normal font-poppins text-xl text-black ">
                            {isEditing ? "Edit" : "Create a"} job
                        </h1>
                        <p className="font-medium font-poppins text-base">Step {currentStep}</p>
                    </div>
                </ModalTitle>
                <ModalBody className="pb-24">
                    <Form>{currentStep === 1 ? <FromStepOne {...form} /> : <FromStepTwo {...form} />}</Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="colored"
                        color="primary"
                        type="submit"
                        onClick={handleSubmit(handleData)}
                        loading={isLoading}
                        disabled={isLoading}
                    >
                        {isLoading ? "Please wait..." : currentStep === 1 ? "Next" : "Save"}
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default App;
