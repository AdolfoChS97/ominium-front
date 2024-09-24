import { type AuthProvider } from "@refinedev/core";
import { LoginFormData } from "../pages/login/dataTypes";
import dataProvider from "@refinedev/simple-rest";

const API_URL = process.env?.API_URL as unknown as string;

export const authProvider: AuthProvider = {
  login: async ({ user_name, password, remember }: LoginFormData) => {
    if ((user_name) && password) {
      const response = await dataProvider(`${API_URL}`).custom<{ token: string }>({
        url: `${API_URL}/auth/login`,
        method: "post",
        payload: {
          user_name: user_name,
          password: password,
        },
      });
      
      if (response.data?.token) {
        localStorage.setItem('auth', response.data.token);
        return {
          success: true,
          redirectTo: "/dashboard",
          successNotification: {
            message: "Login Successful",
            description: "You have successfully logged in.",
          }
        };
      }
    }

    return {
      success: false,
      errorNotification: {}
    };
  },
  logout: async () => {
    localStorage.removeItem('auth');
    return {
      success: true,
      redirectTo: "/",
      successNotification: {
        message: "Logout Successful",
        description: "You have successfully logged out.",
      },
    };
  },
  check: async () => {
    const token = localStorage.getItem('auth');
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/",
    };
  },
  // getPermissions: async () => null,
  // getIdentity: async () => {
  //   const token = localStorage.getItem(TOKEN_KEY);
  //   if (token) {
  //     return {
  //       id: 1,
  //       name: "John Doe",
  //       avatar: "https://i.pravatar.cc/300",
  //     };
  //   }
  //   return null;
  // },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
