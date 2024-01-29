"use server";
import { redirect } from "@/navigation";
import { baseURL } from "@/utils/constants";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import toast from "react-hot-toast";

export type FormState = {
  success: boolean;
  errors: {
    message: undefined;
  };
};
export async function login(prevState: FormState, formData: FormData) {
  "use server";
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
}
export const addUser = async (prevState: FormState, formData: FormData) => {
  "use server";
  const jwt = cookies().get("jwt")?.value || "";
  const { name, lastname, username, password, userID, isAdmin } =
    Object.fromEntries(formData);
  let data = JSON.stringify({
    name,
    lastname,
    username,
    password,
    userID,
    isAdmin,
  });

  let config = {
    method: "post",
    url: `${baseURL}user`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: jwt as string,
    },

    data: data,
  };
  const result = await axios
    .request(config)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        console.log("success");
        return {
          success: true,
          errors: {
            message: null,
          },
        };
      }
    })
    .catch((error: any) => {
      if (error?.response?.data?.error) {
        return {
          success: false,
          errors: {
            message: error?.response.data.error,
          },
        };
      } else {
        return {
          success: false,
          errors: { message: error?.message },
        };
      }
    });
  if (result?.success) {
    redirect("/users");
    // revalidatePath("/users");
  } else {
    return result;
  }
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

export async function getUserInfo() {
  "use server";

  const jwt = cookies().get("jwt")?.value || "";
  let config = {
    method: "GET",
    withCredentials: true,
    url: `${baseURL}home`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: jwt as string,
    },
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
            status: error?.response?.status,
          },
        };
      } else {
        return {
          errors: { status: error?.response?.status },
        };
      }
    });
  return result;
}
export async function getUsers() {
  "use server";

  const jwt = cookies().get("jwt")?.value || "";
  let config = {
    method: "GET",
    withCredentials: true,
    url: `${baseURL}user`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: jwt as string,
    },
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
            status: error?.response?.status,
          },
        };
      } else {
        return {
          errors: { status: error?.response?.status },
        };
      }
    });
  return result;
}
export async function getEnds() {
  "use server";

  const jwt = cookies().get("jwt")?.value || "";
  let config = {
    method: "GET",
    withCredentials: true,
    url: `${baseURL}end`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: jwt as string,
    },
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
            status: error?.response?.status,
          },
        };
      } else {
        return {
          errors: { status: error?.response?.status },
        };
      }
    });
  return result;
}
export async function getFilters() {
  "use server";

  const jwt = cookies().get("jwt")?.value || "";
  let config = {
    method: "GET",
    withCredentials: true,
    url: `${baseURL}filters`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: jwt as string,
    },
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
            status: error?.response?.status,
          },
        };
      } else {
        return {
          errors: { status: error?.response?.status },
        };
      }
    });
  return result;
}
