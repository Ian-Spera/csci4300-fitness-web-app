import { NextResponse } from "next/server";
import connectMongoDB from "@/config/mongodb";
import User from "@/models/userSchema";
import { mongo } from "mongoose";


export const PUT = async (request:Request) => {
    const {userID: userId, calories: calories, protein: protein, fat: fat, carbs: carbs} = await request.json();

    console.log(userId, calories, protein, fat, carbs);

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

    return new NextResponse("User macros updated", {status : 200});
};