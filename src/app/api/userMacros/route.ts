import { NextResponse } from "next/server";
import connectMongoDB from "@/config/mongodb";
import User from "@/models/userSchema";
import { mongo } from "mongoose";


export const POST = async (request:Request) => {
    const {userId, calories, protein, fat, carbs} = await request.json();

    console.log(calories, protein, fat, carbs);

    await connectMongoDB();

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                calories,
                protein,
                fat,
                carbs,
            },
        },
        {new:true}
    );

    if (!updatedUser) {
        return new NextResponse("User not found", {status : 404});
    }

    return new NextResponse("User macros updated", {status : 404});
};