import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import type { IRegister } from "@/types/auth";

const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
};

export default authServices;
