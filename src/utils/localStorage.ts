import { IUserResponse } from "../types";

export const addUserToLocalStorage = (data: IUserResponse) => {
  localStorage.setItem("authData", JSON.stringify(data));
  localStorage.setItem("authToken", JSON.stringify(data.data.token));
};

export const getUserFromLocalStorage = () => {
  const token = localStorage.getItem("authToken");
  const user = localStorage.getItem("authData");

  if (token && user) {
    try {
      return {
        token: JSON.parse(token),
        user: JSON.parse(user),
      };
    } catch (error) {
      console.error("Error parsing data from localStorage", error);
      return null;
    }
  }
  
  return null;
};

export const removeUserFromLocalStorage = () => { 
  localStorage.removeItem("authData");
};

