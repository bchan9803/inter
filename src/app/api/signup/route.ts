import { NextResponse } from "next/server"

// POST
// (for signup form)
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
        
        // successfully create new account
        return NextResponse.json({
            message: "Account successfully created!",
            data: {email, password},
            status: 201
        })
    } catch (err) {
        // handle error creating new account
        return NextResponse.json({
            message: "Error: Could not create new account!",
            status: 500
        })
    }
}