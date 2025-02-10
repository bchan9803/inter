import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between p-4">
            <Link href="/">
                <h1 className="text-3xl">Inter!</h1>
            </Link>

            <span className="border-2 border-black flex flex-col">
                <button className="text-center font-semibold text-2xl">
                    Bryan
                </button>

                <div className="border-2 border-black bg-gray-300 p-2 flex flex-col justify-center text-center">
                    <button className="py-1 px-2">Account</button>

                    <Link href="/login" className="py-1 px-2">
                        *Login
                    </Link>
                    <Link href="/signup" className="py-1 px-2">
                        *Sign Up
                    </Link>

                    <button className="py-1 px-2">Log out</button>
                </div>
            </span>
        </header>
    );
};

export default Header;
