import connectMongoDB from "@/config/mongodb"
import { NextRequest, NextResponse } from "next/server"
import User from "@/models/userSchema";

interface RouteParams {
    params: {id:string};
}

export async function GET(request: NextRequest, {params}: RouteParams) {
    const {id} = params;

    await connectMongoDB();
    const user = await User.findById(id).select("userMacros");
    if (!user) {
        return new NextResponse("User not found", {status: 404 });
    }
    return NextResponse.json({ macros: user.userMacros }, { status: 200 });
}