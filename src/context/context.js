import React, { createContext, useState } from "react";

export const Context = createContext();
const Provider = ({ children }) => {
    const [user, setUser] = useState("");

    return (
      <Context.Provider value={{
        user,
        handleUser: (name) => {
            setUser(name);
        }
    }}
      >
        {children}
      </Context.Provider>
);
};

export default {
    Provider,
    Consumer: Context.Consumer,
};