export const lngs = ["en", "fa"];
export const defaultLocale = "fa";
export const baseURL = "http://localhost:5000/api/";

export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) return parts?.pop()?.split(";")?.shift();
};
