import { PROFILE_KEY, TOKEN_KEY } from "@/constants";

export const getCredentials = () => {
  const token: string = localStorage.get(TOKEN_KEY);
  const email: string = localStorage.get(PROFILE_KEY);

  if (token && email) {
    return {
      [TOKEN_KEY]: token,
      [PROFILE_KEY]: email,
    };
  }

  return null;
};

export const setCredentials = (token: string, email: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(PROFILE_KEY, email);
};

export const removeCredentials = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(PROFILE_KEY);
};

export const isLogged = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const user = localStorage.getItem(PROFILE_KEY);

  return token && user;
};
