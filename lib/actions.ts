"use server";
import { redirect } from "@/navigation";
import axios from "axios";
import { cookies } from "next/headers";
const baseURL = "http://localhost:5000/api/";
export const login = async (formData: any) => {
  const { username, password } = Object.fromEntries(formData);
  let data = JSON.stringify({
    username,
    password,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
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
          error: error?.response.data.error,
        };
      } else {
        return {
          error: error?.message,
        };
      }
    });
  if (result?.accessToken) {
    cookies().set("jwt", result.accessToken);
    redirect("/")
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
