import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";

function addCorsHeaders(res: NextResponse) {
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST");
    res.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    return res;
}

// POST: Create user
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { username, dateJoined } = body;

        if (!username) {
            return addCorsHeaders(
                NextResponse.json(
                    { error: "Missing username." },
                    { status: 400 }
                )
            );
        }

        const newUser = await prisma.user.create({
            data: { username, dateJoined },
        });

        const res = NextResponse.json(newUser);

        return addCorsHeaders(res);
    } catch (err: any) {
        console.error("Error creating new user (BE: Could not create user): ", err.message, err)
        return addCorsHeaders(NextResponse.json(
            { error: err.message },
            { status: 500}
        ))
    }
}
