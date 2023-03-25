import { AuthProvider } from "@pankod/refine-core";
import nookies from "nookies";
import axios, { AxiosRequestConfig } from "axios";


const mockUsers = [
  {
    username: "admin",
    email: "admin@refine.dev",
    roles: ["admin"],
  },
  {
    username: "editor",
    email: "editor@refine.dev",
    roles: ["editor"],
  },
];

const axiosInstance = axios.create();

export const authProvider: AuthProvider = {
  login: async ({ email, username, password, remember }) => {
    // Suppose we actually send a request to the back end here.
    const user = mockUsers[0];

    console.log("****login");
    if (user) {
      console.log(user);

      const response = await fetch("http://localhost:5010/user",
      {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              name: user.username,
              email: user.email,
              id: user.email,
              role: user.roles[0],
          }),
      })
      const data = await response.json();

      if (response.status === 200) {
          console.log("200 GOT IN POST");
          // localStorage.setItem(
          //     "user",
          //     JSON.stringify({
          //         ...user,
          //         avatar: data.avatar,
          //         userid: data._id,
          //     }),
          // );
          nookies.set(null, "auth", JSON.stringify(user), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          return Promise.resolve();
      } else {
          return Promise.reject();
      }
    };
    
  },
  logout: () => {
    nookies.destroy(null, "auth");
    return Promise.resolve();
  },
  checkError: (error) => {
    if (error && error.statusCode === 401) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkAuth: (ctx) => {
    const cookies = nookies.get(ctx);
    return cookies["auth"] ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.roles);
    }
    return Promise.reject();
  },
  getUserIdentity: () => {
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.username);
    }
    return Promise.reject();
  },
};
