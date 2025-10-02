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
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let firebaseUID: string;

        // TODO: fix so that the prisma DB can take in the firebase UID

        // create new user thru Firebase
        try {
            e.preventDefault();

            const userCredential = await signUpWithEmailAndPassword(
                email,
                password
            );
            const user = userCredential.user;
            firebaseUID = user.uid;

            console.log("UID: ", firebaseUID);
            console.log(`form data: ${email} and ${password}`);
        } catch (err: any) {
            console.error(err);
            return;
        }

        // const dateJoinedTimestamp: String = new Date().getTime().toString();

        // add username to DB
        if (firebaseUID) {
            try {
                const res = await fetch("/api/user", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        firebaseUID,
                        username,
                        // dateJoined: dateJoinedTimestamp,
                        // dateJoined: new Date().getTime(),
                    }),
                });

                if (res.ok) {
                    setUsername(username);
                    console.log("Create username successful!");
                } else {
                    const data = await res.json();
                    console.error("Create username failed: ", data);
                }
            } catch (err: any) {
                console.error(err);
            }
        } else {
            alert("Firebase UID not found!");
        }

        // console.log(`form data: ${email} and ${password}`);
    };

    return (
        <form
            className="border-red-500 border-2 mx-auto w-fit p-12 flex flex-col gap-2"
            onSubmit={handleSubmit}
        >
            <h4 className="font-semibold text-4xl">Sign Up</h4>
            <label htmlFor="signupUsername" className="font-semibold">
                Username
            </label>
            <br />
            <input
                type="text"
                id="signupUsername"
                name="signupUsername"
                placeholder="Username"
                className="p-2 bg-gray-100 rounded-lg"
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            {/* 
                email input
            */}
            <br />
            <label htmlFor="signupEmail" className="font-semibold">
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
