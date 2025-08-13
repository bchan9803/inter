import { NextResponse, NextRequest } from "next/server";
// import NextCors from "nextjs-cors";
import { prisma } from "../../../../lib/prisma";

function addCorsHeaders(res: NextResponse) {
    res.headers.set("Access-Control-Allow-Origin", '*')
    res.headers.set("Access-Control-Allow-Methods", "GET, POST")
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    return res
}

export async function GET(req: NextRequest) {
    try {
        const rooms = await prisma.room.findMany()

        return addCorsHeaders(NextResponse.json(rooms))

        // return res.status(200).json(rooms)
    }
    catch (err: any) {
        console.error("Error (BE: Could not fetch Rooms): ", err.message, err)
        return addCorsHeaders(NextResponse.json(
            { error: err.message },
            { status: 500 }
        ))
    }
}

export async function POST(req: NextRequest) {
    try {
        // await NextCors(req, {
        //     origin: '*',
        //     methods: ['GET', 'POST'],
        //     headers: ['Content-Type', 'Authorization']
        // })

        const body = await req.json();
        const { roomName, roomPassword } = body;

        if (!roomName || !roomPassword) {
            return addCorsHeaders(
                NextResponse.json(
                    { error: "Missing roomName and/or roomPassword" },
                    { status: 400 }
            ))
        }

        const newRoom = await prisma.room.create({
            data: {
                roomName,
                roomPassword
            }
        })

        console.log('newRoom: ', newRoom)

        const res = NextResponse.json(newRoom)

        return addCorsHeaders(res)
    } catch (err: any) {
        console.error("Error creating new room (BE: Could not create room): ", err.message, err)
        return addCorsHeaders(NextResponse.json(
            { error: err.message },
            { status: 500}
        ))
    }
};