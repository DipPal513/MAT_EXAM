"use client";
import "@/app/globals.css";
import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("token"));
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn,isLoading,setIsLoading }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);