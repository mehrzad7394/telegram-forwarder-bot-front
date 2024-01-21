"use server";
import { redirect } from "@/navigation";
import axios from "axios";
import { cookies } from "next/headers";
const baseURL = "http://localhost:5000/api/";

export type FormState = {
  errors: {
    message: undefined;
  };
};
export const login = async (prevState: FormState, formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);
  let data = JSON.stringify({
    username,
    password,
  });

  let config = {
    method: "post",
    url: `${baseURL}auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const result = await axios
    .request(config)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error: any) => {
      if (error?.response?.data?.error) {
        return {
          errors: {
            message: error?.response.data.error,
          },
        };
      } else {
        return {
          errors: { message: error?.message },
        };
      }
    });
  if (result?.accessToken) {
    cookies().set("jwt", result.accessToken);
    redirect("/");
  } else {
    return result;
  }
};
export const addUser = async (formData: any) => {
  const { name, lastname, username, password, chatID, isAdmin } =
    Object.fromEntries(formData);
  try {
    console.log(name, lastname, username, password, chatID, isAdmin);
  } catch (error) {}
};
export const addEnding = async (formData: any) => {
  const { text } = Object.fromEntries(formData);
  try {
    console.log(text);
  } catch (error) {}
};
export const addFilter = async (formData: any) => {
  const { text } = Object.fromEntries(formData);
  try {
    console.log(text);
  } catch (error) {}
};

export const getUserInfo = async () => {
  const jwt = cookies().get("jwt")?.value || "";
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    withCredentials: true,
    url: `${baseURL}home`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: jwt as string,
    },
  };
  // await axios
  //   .request(config)
  //   .then((response) => console.log(response))
  //   .catch((error) => console.log(error));
};
