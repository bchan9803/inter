"use client"

import React from "react";
import { useState } from "react";

const InterForm = (props: any) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleSubmit = (e: unknown) => {
        // e.preventDefault();

        // props.fn(email, password)

        // console.log(`form data: ${email} and ${password}`);
    // };

    return (
        <form className="border-red-500 border-2 mx-auto w-fit p-12 flex flex-col gap-2" onSubmit={handleSubmit}>
            <h4 className="font-semibold text-4xl">{props.formTitle}</h4>
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
                placeholder="example@email.com"
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
            <button
                type="submit"
                className="border-2 border-blue-500 rounded-md bg-slate-200 w-fit py-2 px-6 mx-auto font-semibold"
            >
                Submit
            </button>
        </form>
    );
};

export default InterForm;
