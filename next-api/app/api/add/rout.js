import { NextResponse } from "next/server"
export async function GET(request) {
    let data = await request.json()
    console.log(data)
    NextResponse.json({success:true, data})

}