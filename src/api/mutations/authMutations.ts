import axios from "axios";
import { ILoginUser, IRegisterUser } from "../interfaces/IUser";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string
});

export const registerUser = (registerDto: IRegisterUser) => {
    return api.post("/register", registerDto);
}

export const loginUser = (loginDto: ILoginUser) => {
    return api.post("/login", loginDto);
}