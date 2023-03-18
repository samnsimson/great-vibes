import axios from "axios";
import { BASE_URL, JOBS_ENDPOINT } from "../constants";
import { IJob } from "../libs/types";

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});

export const api = {
    jobs: {
        get: async function (): Promise<IJob[]> {
            return await axiosClient
                .get(JOBS_ENDPOINT)
                .then(({ data }) => data)
                .catch((err) => {
                    throw err;
                });
        },
        create: async function (job: IJob): Promise<IJob> {
            return await axiosClient
                .post(JOBS_ENDPOINT, job)
                .then(({ data }) => data)
                .catch((err) => {
                    throw err;
                });
        },
        update: async function (id: number | string, payload: Partial<IJob>): Promise<IJob> {
            return await axiosClient
                .put(`${JOBS_ENDPOINT}/${id}`, payload)
                .then(({ data }) => data)
                .catch((err) => {
                    throw err;
                });
        },
        delete: async function (id: string | number): Promise<IJob> {
            return await axiosClient
                .delete(`${JOBS_ENDPOINT}/${id}`)
                .then(({ data }) => data)
                .catch((err) => {
                    throw err;
                });
        },
    },
};
