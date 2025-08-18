"use client";

import { useState } from "react";
// import {
//     signInWithPopup,
//     GoogleAuthProvider,
//     signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { auth } from "../../../firebase/firebaseConfig";
import {
    signInWithGoogle,
    loginWithEmailAndPassword,
} from "../../../firebase/firebaseAuth";
import { useAuthContext, AuthProvider } from "../contexts/authContext";

/*
    Login form is powered by firebase
*/

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { userLoggedIn } = useAuthContext();
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function onGoogleSignIn(e: React.FormEvent) {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            signInWithGoogle().catch((err) => {
                setIsSigningIn(false);
            });
        }
    }


        //     err.code === "auth/invalid-credential" ||
        //     err.code === "auth/wrong-password"
        // ) {
        //     alert("Invalid email or password. Please try again.");
        // } else if (err.code === "auth/user-not-found") {
        //     alert("User not found. Please check your email or register.");
        // } else {
        //     alert("Login failed! Please try again.");
        //     console.error("Login error: ", err);
        // }



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await loginWithEmailAndPassword(email, password);
        } catch (err) {
            if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password") {
                alert("Invalid email/password.")
            } else if (err.code === "auth/user-not-found") {
                alert("User not found.")
            } else {
                alert("Login failed! Please try again.")
                console.error(err)
            }
        }

        console.log(`form data: ${email} and ${password}`);
    };

    return (
        <form
            className="border-red-500 border-2 mx-auto w-fit p-12 flex flex-col gap-2"
            onSubmit={handleSubmit}
        >
            <h4 className="font-semibold text-4xl">Login</h4>
            {/* 
                email input
            */}
            <br />
            <label htmlFor="loginEmail" className="font-semibold">
                Email
            </label>
            <br />
            <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                placeholder="example@mail.com"
                className="p-2 bg-gray-100 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {/* 
                password input
            */}
            <label htmlFor="loginPassword" className="font-semibold">
                Password
            </label>
            <br />
            <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="abc123"
                className="p-2 bg-gray-100 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {/* 
                Submit btn
            */}
            <button
                type="submit"
                className="border-2 border-blue-500 rounded-md bg-slate-200 w-fit py-2 px-6 mx-auto font-semibold"
            >
                Submit
            </button>
            <br />
            {/* 
                Sign in with Google (btn)
            */}
            <button
                // disabled={authing}
                onClick={onGoogleSignIn}
                className="border-2 border-blue-500 rounded-md bg-slate-200 w-fit py-2 px-6 mx-auto font-semibold"
            >
                Sign In with Google
            </button>
        </form>
    );
};

export default LoginForm;
