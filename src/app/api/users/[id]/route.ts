import connectMongoDB from "@/config/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userSchema";

interface RouteParams {
    params: {id: string};
}

export async function GET(request: NextRequest, {params}: RouteParams) {
    const {id} = await params;
    await connectMongoDB();
    const user = await User.findOne({email: id});
    return NextResponse.json({user}, {status: 200});
}