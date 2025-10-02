import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/authContext";

// if (loading) return <p>Loading...</p>;
// let name = "User";

const useFetchUsername = () => {
    const [name, setName] = useState("loading user...");
    const [isUsernameLoading, setIsUsernameLoading] = useState(false);
    const { userLoggedIn, currentUser, loading } = useAuthContext();

    useEffect(() => {
        const fetchUsername = async () => {
            if (currentUser) {
                try {
                    setIsUsernameLoading(true);
                    const uidTT = currentUser?.uid;
                    const usernameResTT = await fetch(
                        `/api/user?firebaseUID=${uidTT}`
                    );
                    const usernameDataTT = await usernameResTT.json();

                    console.log("usernameDataTT: ", usernameDataTT);

                    setName(usernameDataTT.user.username);
                } catch (err) {
                    console.error(
                        "Error while fetching username from UID: ",
                        err
                    );
                } finally {
                    setIsUsernameLoading(false);
                }
            }
        };

        fetchUsername();
    }, [currentUser]);

    return { name, isUsernameLoading, userLoggedIn, currentUser, loading };
};

export default useFetchUsername;
