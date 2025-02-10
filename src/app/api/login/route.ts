import { NextResponse } from "next/server"

// POST
// (for login form)
//
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {email, password} = body

        // validate request body (email, password)
        if (!email) {
            return NextResponse.json({
                message: "Missing email!",
                status: 400
            })
        } else if (!password) {
            return NextResponse.json({
                message: "Missing password!",
                status: 400
            })
        }
        
        // successfully login
        return NextResponse.json({
            message: "User successfully logged in!",
            data: {email, password},
            status: 201
        })
    } catch (err) {
        // handle error (login fail)
        return NextResponse.json({
            message: "Error: Login fail!",
            status: 500
        })
    }
}