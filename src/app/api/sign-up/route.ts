import { connectDb } from "@/database/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(request : NextRequest) => {
    try {
        await connectDb();
        const userInfo = await request.json();
        console.log(userInfo);
        return NextResponse.json(userInfo);
    } catch (error:any) {
        return NextResponse.json({message: error.message, status: 500})
    }
}