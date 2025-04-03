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

export const saveLocation = (location: Location | null) => {
  if (location?.pathname) {
    const path = location.pathname + location.search;
    localStorage.setItem("preLoginPath", path);
  }
};

export const getLastLocation = (): string | null => {
  return localStorage.getItem("preLoginPath");
};

export const deleteLastLocation = () => {
  localStorage.removeItem("preLoginPath");
};
