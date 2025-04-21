import connectMongoDB from "@/config/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Item from "@/models/itemSchema";
import mongoose from "mongoose";

interface RouteParams {
    params: {id: string};
}

/// 
/// Get food item from the database by it's id string
///
export async function GET(request: NextRequest, {params}: RouteParams) {
    const {id} = await params;
    await connectMongoDB();
    const item = await Item.findOne({_id: id});
    return NextResponse.json({item}, {status: 200});
}

///
/// Update food item in the database by it's id string
///
export async function PUT(request: NextRequest, {params}: RouteParams) {
    const {id} = await params;
    const {name: name, calories: calories, carbs: carbs, fats: fats, protein: protein} = await request.json();
    await connectMongoDB();
    await Item.findByIdAndUpdate(id, {name, calories, carbs, fats, protein});
    return NextResponse.json({message: "Item " + id + " has been updated."}, {status: 200});
}

///
/// Delete food item by it's id string
///
export async function DELETE(request: NextRequest, {params}: RouteParams) {
    const {id} = await params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return NextResponse.json({message: "Invalid ID format."}, {status: 400});

    await connectMongoDB();
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem)
        return NextResponse.json({message: "Item not found."}, {status: 404});

    return NextResponse.json({message: "Item deleted."}, {status: 200});
}