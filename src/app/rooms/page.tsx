"use client";

import { NextResponse } from "next/server";
// import { prisma } from "../../../lib/prisma";
// import { useState } from "react";

const Rooms = () => {
    const fetchPrisma = async () => {
        // const rooms = await prisma.room.findMany();
        try {
            const res = await fetch("/api/rooms");

            const text = await res.text();

            const data = await JSON.parse(text);

            console.log("Rooms: ", data);
        } catch (err: any) {
            console.error("Error (FE): ", err.message);
            return NextResponse.json({ status: 500 });
        }
    };

    return (
        <main>
            <h1 className="font-semibold text-3xl">Rooms</h1>

            <span className="flex flex-col gap-6">
                <button
                    className="bg-slate-200 border-2 border-black p-4"
                    onClick={fetchPrisma}
                >
                    Fetch prisma data
                </button>

                <button className="bg-slate-200 border-2 border-black p-4">
                    Create Room
                </button>
            </span>
        </main>
    );
};

export default Rooms;
