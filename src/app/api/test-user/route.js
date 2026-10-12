import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find();

    return NextResponse.json({
      message: "User model connected successfully",
      users,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "User model connection failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}