"use client";

import Link from "next/link";
// import HomeMsgPreview from "./components/HomeMsgPreview";
import { useAuthContext } from "./contexts/authContext";


export default function Home() {
    const { userLoggedIn, currentUser, loading } = useAuthContext();

    if (loading) return <p>Loading...</p>

    const name = currentUser?.displayName || currentUser?.email || "User";


    return (
        <main className="flex flex-col ">
            <h1 className="text-3xl font-semibold flex gap-2">
                Welcome {userLoggedIn ? <p>{name}</p> : <p>Not logged in</p>}
            </h1>

            {/* <span className="border-2 border-red-600 px-8"> */}
                {/* <HomeMsgPreview /> */}
            {/* </span> */}

            <Link
                href="/msg"
                className="border-2 border-black font-semibold w-fit bg-gray-300 rounded-md py-4 px-2 my-7"
            >
                New Message
            </Link>


            <Link
                href="/rooms"
                className="border-2 border-black font-semibold w-fit bg-gray-300 rounded-md py-4 px-2 my-7"
            >
                Join / Create Room
            </Link>
        </main>
    );
}
