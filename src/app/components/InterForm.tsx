import React from "react";

const InterForm = (props: string) => {
    return (
        <form className="border-red-500 border-2 mx-auto w-fit p-12 flex flex-col gap-2">
            <h4 className="font-semibold text-4xl">{props.formTitle}</h4>
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
                className="p-2"
            />
            <br />
            <label htmlFor="loginPassword" className="font-semibold">
                Password
            </label>
            <br />
            <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="abc123"
                className="p-2"
            />
            <br />
            <button
                type="submit"
                className="border-2 border-blue-500 rounded-md bg-slate-200 w-fit py-2 px-6 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default InterForm;
