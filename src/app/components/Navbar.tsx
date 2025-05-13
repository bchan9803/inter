import Link from "next/link";
import React from "react";

import { logout } from "../../../firebase/firebaseAuth";


const ChannelListNavbarSec = () => {
    return (
        <div className="border-2 border-black bg-gray-300 p-2 flex flex-col justify-center text-center">
            <Link href='/'>One</Link>
            <Link href='/'>Two</Link>
            <Link href='/'>Three</Link>
            <Link href='/'>Four</Link>
        </div>
    );
};

const AccountNavbarSec = () => {
    return (
        <div className="border-2 border-black bg-gray-300 p-2 text-center flex flex-col">
            <Link href="/account" className="py-1 px-2">
                Account
            </Link>

            <Link href="/login" className="py-1 px-2">
                *Login
            </Link>
            <Link href="/signup" className="py-1 px-2">
                *Sign Up
            </Link>

            <button onClick={logout} className="py-1 px-2">
                Logout
            </button>
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className="flex flex-col w-fit h-screen bg-ptc">
            <span className="border-2 border-black">
                <Link href="/">
                    <h1 className="text-3xl">Inter!</h1>
                </Link>
                <button className="text-center font-semibold text-2xl">
                    Bryan
                </button>

                <ChannelListNavbarSec />
                <AccountNavbarSec />
            </span>
        </nav>
    );
};

export default Navbar;
