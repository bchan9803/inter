import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { redirect } from "next/navigation";

function addCorsHeaders(res: NextResponse) {
    res.headers.set("Access-Control-Allow-Origin", '*')
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT")
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    return res
}

// GET: Find room
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const roomID = searchParams.get("id")
    const roomPassword = searchParams.get("roomPassword")

    if (!roomID || !roomPassword) {
        return NextResponse.json(
            { error: "Missing room ID or roomPassword" },
            { status: 400}
        )
    }

    const room = await prisma.room.findUnique({
        where: { roomID_roomPassword: { roomID, roomPassword } }
    })

    if (room) {
        // redirect('/testRoomAllowed')
        return NextResponse.json({ exists: true, room })
    } else {
        // redirect('/testRoomDenied')
        return NextResponse.json({ exists: false })
    }
}

// POST: Create a new room
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { roomName, roomPassword, users } = body;

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
                roomPassword,
                users
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


// PUT: Create a new room
export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { roomID, users } = body;

        if (!roomID) {
            return addCorsHeaders(NextResponse.json(
                { error: "Missing id" },
                { status: 400 }
            ))
        }
        if (!users) {
            return addCorsHeaders(NextResponse.json(
                { error: "Missing user" },
                { status: 400 }
            ))
        }

        const updateRoomUserList = await prisma.room.update({
            where: { id: roomID },
            data: {
                users: users
            }
        })

        console.log("newRoom: ", updateRoomUserList);

        const res = NextResponse.json(updateRoomUserList);

        return addCorsHeaders(res);
    } catch (err: any) {
        console.error("Error creating new room (BE: Could not create room): ", err.message, err)
        return addCorsHeaders(NextResponse.json(
            { error: err.message },
            { status: 500}
        ))
    };
};