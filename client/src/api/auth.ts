import axios from "./axios.ts";
import { FieldValues } from "react-hook-form";

export const registerRequest = (user: FieldValues) =>
  axios.post(`/register`, user);

export const loginRequest = (user: FieldValues) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);
