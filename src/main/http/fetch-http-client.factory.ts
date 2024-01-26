import { fetchHttpClient } from "@/infra/http";

export const makeHttpClient = () => new fetchHttpClient();
