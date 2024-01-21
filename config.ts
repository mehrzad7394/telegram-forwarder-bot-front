import { Pathnames } from "next-intl/navigation";
import { lngs } from "./utils/constants";

export const locales = lngs;

export const pathnames = {
  "/": "/",
  "/login": "/login",
  "/endings": "/endings",
  "/filters": "/filters",
  "/users": "/users",
  "/users/add": "/users/add",
  "/endings/add": "/endings/add",
  "/filters/add": "/filters/add",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
