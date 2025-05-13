"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { useAuthContext } from "../contexts/authContext";


const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_SERVER_URL;

const ChatChannelMessage = (props) => {
    return (
        <section className="bg-gray-100 rounded-lg w-fit py-2 px-6 h-full">
            {/* Username, Date, Time */}
            <span className="flex gap-4 font-semibold">
                <h3 className="text-lg">{props.userName}</h3>
                <h5 className="text-gray-500 text-md">
                    {props.msgDate}, {props.msgTime}
                </h5>
            </span>
            {/* Message content */}
            <h4 className="text-md">{props.msgContent}</h4>
        </section>
    );
};

const ChatChannel = () => {
    /*
         TODO: handle incoming messages
    */
    const { userLoggedIn, currentUser } = useAuthContext();

    const name = currentUser?.displayName || currentUser?.email || "User";


    const [chatMsgs, setChatMsgs] = useState([]);
    const [chatMsgToSend, setChatMsgToSend] = useState("");
    const [socket, setSocket] = useState(null);

    


    useEffect(() => {
        // Establish Socket connection
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);

        // // Listen for incoming messages
        // newSocket.on("receive_msg", (msg) => {
        //     setChatMsgs((prev) => [...prev, msg])
        // });

        // newSocket.on("receive_msg", (msg) => {
        //     setChatMsgs((prev) => [...prev, msg]);
        // });

        // Send msgs
        newSocket.on("chatMsgs", (msgs) => {
            // setChatMsgs((prev) => [...prev, msg]);
            setChatMsgs(msgs);
        });

        // Cleanup on unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    const handleChange = (e) => {
        setChatMsgToSend(e.target.value);
    };

    const handleSubmit = (e) => {
        const d = new Date();
        let chatMsgDate_ = d.toLocaleDateString();
        let chatMsgTime_ = d.toLocaleTimeString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
        });

        e.preventDefault();

        socket.emit("send_msg", {
            chatMsgContent: chatMsgToSend,
            // chatMsgUserName: "test",

            chatMsgUserName: name,

            chatMsgDate: chatMsgDate_,
            chatMsgTime: chatMsgTime_,
        });
        // socket.on("chatMsgs", (chatMsgs) => {
        //     setChatMsgs(chatMsgs);
        // });
        e.target.reset();
    };

    return (
        <form
            className="flex flex-col gap-6 border-2 border-black p-6"
            onSubmit={handleSubmit}
        >
            {/* Channel header */}
            <h3 className="bg-gray-200 p-3 rounded-lg w-full text-center font-semibold text-2xl">
                The Holy Club
            </h3>

            {/* Message section */}
            <ul className="border-2 border-red-500 flex flex-col gap-6 overflow-y-scroll">
                {chatMsgs.map((msgs) => {
                    console.log(msgs);
                    return (
                        <ChatChannelMessage
                            // key={msgs?.id}
                            key={crypto.randomUUID()}
                            userName={msgs?.chatMsgUserName}
                            msgDate={msgs?.chatMsgDate}
                            msgTime={msgs?.chatMsgTime}
                            msgContent={msgs.chatMsgContent}
                        />
                    );
                })}
            </ul>

            {/* Input/Submit btn */}
            <span className="flex gap-2">
                <input
                    className="bg-gray-200 p-3 rounded-lg w-full"
                    type="text"
                    placeholder="Enter message here"
                    onChange={handleChange}
                />
                <button
                    className="bg-gray-200 py-3 px-5 rounded-lg font-semibold cursor-pointer hover:text-white hover:bg-gray-500 "
                    type="submit"
                >
                    Submit
                </button>
            </span>
        </form>
    );
};

export default ChatChannel;

// "use client";

// import { useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3001");

// socket.on("connect", () => {
//     console.log("WS connected.")
// })

// socket.on("connection_error", (err) => {
//     console.error(`WS error due to ${err}`)
// })

// export default function MsgPage() {
//     const [msg, setMsg] = useState("");

//     function handleMsgChange(e: any) {
//         setMsg(e.target.value)
//     }

//     function sendMsg(e: any) {
//         e.preventDefault();

//         // console.log("form works!");

//         socket.emit("send_msg", { msg });
//     }
//     return (
//         <main>
//             <h1>Test channel</h1>

//             <ul className="border-2 border-black p-6"></ul>

//             <form onSubmit={sendMsg}>
//                 <input
//                     type="text"
//                     placeholder="Send message here"
//                     value={msg}
//                     onChange={handleMsgChange}
//                 />
//                 <button className="bg-gray-300" type="submit">
//                     Send
//                 </button>
//             </form>
//         </main>
//     );
// }
