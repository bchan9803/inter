"use client"

import { logout } from "../../../firebase/firebaseAuth";
import { useAuthContext } from "../contexts/authContext";

const Account = () => {
    // const accountUser = "bchan32";
    // const accountEmail = "bchan9803@gmail.com";
    const accountDate = "09/08/2003";

    const { userLoggedIn, currentUser } = useAuthContext();
    const accountUser = currentUser?.displayName || currentUser?.email || "User";
    const accountEmail = currentUser?.email || "User"


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
