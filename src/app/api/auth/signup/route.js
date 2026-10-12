import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
  try {
    // 1. Connect to MongoDB
    await connectDB();

    // 2. Get data from request
    const { name, email, password } = await request.json();

    // 3. Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Name, email and password are required",
        },
        { status: 400 }
      );
    }

    // 4. Validate password length
    if (password.length < 8) {
      return NextResponse.json(
        {
          message: "Password must be at least 8 characters",
        },
        { status: 400 }
      );
    }

    // 5. Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // 6. Check if user already exists
    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email is already registered",
        },
        { status: 409 }
      );
    }

    // 7. Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 8. Create user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    // 9. Return success
    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong during signup",
      },
      { status: 500 }
    );
  }
}