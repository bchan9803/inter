"use client";

import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig";


/*
    Log out
*/
export const logout = async () =>  {
    try {
        // prompt alert modal to confirm if user wants to sign out
        if (confirm("Do you want to sign out?")) {
            await signOut(auth)
            console.log("User signed out!")
        }
    }
    catch (err) {
        console.error('ERROR: ', err)
    }
}

/*
    Signup
*/
export const signUpWithEmailAndPassword = async (email: string, password: string, confirmPassword: string) => {
    // setAuthing(true);
    // setError("");

    if (password !== confirmPassword) {
        // setError("Passwords do not match");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user.uid);
            // router.push("/");
        })
        .catch((err) => {
            console.error(err);
            // setError(err.message);
            // setAuthing(false);
        });
    // setAuthing(false);
};

/*
    Login
*/
// allows to login in with Google
export const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        console.log('result.user: ', result.user)
        return result
    } catch (error) {
        console.error('Error: ', error.message, error.code )
    }
};

// allows to login in with email and password
export const loginWithEmailAndPassword = async (email: string, password: string) => {
    // setAuthing(true);
    // setError("");

    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user.uid);
            // router.push("/");
        })
        .catch((err) => {
            console.error(err);
            // setError(err.message);
            // setAuthing(false);
        });
    // setAuthing(false);
};