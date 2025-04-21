import connectMongoDB from "@/config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json({items});
} // GET Request

export async function POST(request: NextRequest) {
    const {name, calories, carbs, fats, protein} = await request.json();
    await connectMongoDB();
    await Item.create({name, calories, carbs, fats, protein});
    return NextResponse.json({message: "Food item added successfully!"}, {status: 201});
}