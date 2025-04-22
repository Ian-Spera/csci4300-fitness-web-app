import connectMongoDB from "@/config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse, NextRequest } from "next/server";

interface RouteParams {
    params: {id: string};
}

export async function GET(request: NextRequest, {params}: RouteParams) {
    const {id} = await params;
    await connectMongoDB();
    const items = await Item.find({userID: id});
    return NextResponse.json({items});
} // GET Request