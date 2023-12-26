export const login = async (formData: any) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);
  try {
    console.log(username, password);
  } catch (error) {}
};
export const addUser = async (formData: any) => {
  "use server";
  const { name, lastname, username, password, chatID, isAdmin } =
    Object.fromEntries(formData);
  try {
    console.log(name, lastname, username, password, chatID, isAdmin);
  } catch (error) {}
};
export const addEnding = async (formData: any) => {
  "use server";
  const { text } = Object.fromEntries(formData);
  try {
    console.log(text);
  } catch (error) {}
};
export const addFilter = async (formData: any) => {
  "use server";
  const { text } = Object.fromEntries(formData);
  try {
    console.log(text);
  } catch (error) {}
};
