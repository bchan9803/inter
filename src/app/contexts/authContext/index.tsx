"use client";

import React, { useContext, useState, useEffect, ReactNode } from "react";
import { auth } from "../../../../firebase/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthContextType {
    currentUser: User | null;
    userLoggedIn: boolean;
    loading: boolean;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    // return useContext(AuthContext);

    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider")
    }
    return context
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (User) => {
            setCurrentUser(User);
            setUserLoggedIn(!!User);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // async function initializeUser(user) {
    //     if (user) {
    //         setCurrentUser({ ...user });
    //         setUserLoggedIn(true);
    //     } else {
    //         setCurrentUser(null);
    //         setUserLoggedIn(false);
    //     }
    //     setLoading(false);
    // }

    const value: AuthContextType = {
        currentUser,
        userLoggedIn,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
