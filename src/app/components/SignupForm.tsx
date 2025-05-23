"use client";

import { useState } from "react";
// import {
//     createUserWithEmailAndPassword,
//     signInWithPopup,
//     GoogleAuthProvider,
// } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { auth } from "../../../firebase/firebaseConfig";
import {
    signInWithGoogle,
    signUpWithEmailAndPassword,
} from "../../../firebase/firebaseAuth";

/*
    Signup form is powered by firebase
*/

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const [authing, setAuthing] = useState(false);
    // const [error, setError] = useState("");

    // const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        signUpWithEmailAndPassword(email, password, confirmPassword);

        console.log(`form data: ${email} and ${password}`);
    };

    return (
        <form
            className="border-red-500 border-2 mx-auto w-fit p-12 flex flex-col gap-2"
            onSubmit={handleSubmit}
        >
            <h4 className="font-semibold text-4xl">Sign Up</h4>
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
                id="signupEmail"
                name="signupEmail"
                placeholder="example@email.com"
                className="p-2 bg-gray-100 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {/* 
                password input
            */}
            <label htmlFor="signupPassword" className="font-semibold">
                Password
            </label>
            <br />
            <input
                type="password"
                id="signupPassword"
                name="signupPassword"
                placeholder="abc123"
                className="p-2 bg-gray-100 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <label htmlFor="signupConfirmPassword" className="font-semibold">
                Confirm Password
            </label>
            <br />
            <input
                type="password"
                id="signupConfirmPassword"
                name="signupConfirmPassword"
                placeholder="abc123"
                className="p-2 bg-gray-100 rounded-lg"
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            {/* 
                Signup with Google btn
            */}
            <button
                // disabled={authing}
                onClick={signInWithGoogle}
                className="border-2 border-blue-500 rounded-md bg-slate-200 w-fit py-2 px-6 mx-auto font-semibold"
            >
                Sign Up with Google
            </button>
        </form>
    );
};

export default SignupForm;
