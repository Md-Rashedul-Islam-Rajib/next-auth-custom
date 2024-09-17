import  User  from '@/models/userModel';
import { connectDb } from "@/database/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


export const POST = async(request : NextRequest) => {
    try {
        await connectDb();
        const userInfo = await request.json();
        console.log("user-info",userInfo);
        const {name,email,password} = userInfo;
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({message: "User already exists", status: 400 });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({name,email,password: hashedPassword});
        const user_1 =await newUser.save();
        console.log("user-info-2",user_1);
        return NextResponse.json(userInfo);
    } catch (error:any) {
        return NextResponse.json({message: error.message, status: 500})
    }
}