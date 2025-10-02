"use client"

import { logout } from "../../../firebase/firebaseAuth";
import { useAuthContext } from "../contexts/authContext";
import useFetchUsername from "../hooks/useFetchUsername";

const Account = () => {
    // const accountUser = "bchan32";
    // const accountEmail = "bchan9803@gmail.com";
    const accountDate = "00/00/0000";

    const { name, userLoggedIn, currentUser } = useFetchUsername();

    1
    
    const accountUser = name || currentUser?.email;
    const accountEmail = currentUser?.email;

    // const accountUser = currentUser?.displayName || currentUser?.email || "User";
    // const accountEmail = currentUser?.email || "User";

    return (
        <main>
            <h1 className="font-semibold text-3xl">Account</h1>
            <h3 className="font-semibold">Username</h3>
            <h4>{accountUser}</h4>
            <h3 className="font-semibold">Email Address</h3>
            <h4>{accountEmail}</h4>
            <h3 className="font-semibold">User since</h3>
            <h4>{accountDate}</h4>

            <button
                onClick={logout}
                className="font-bold bg-gray-300 rounded-lg p-3"
            >
                Sign Out
            </button>
        </main>
    );
};

export default Account;
