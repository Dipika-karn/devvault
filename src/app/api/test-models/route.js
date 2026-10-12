import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Resource from "@/models/Resource";

export async function POST() {
  try {
    await connectDB();

    // 1. Create a test user
    const user = await User.create({
      name: "Model Test User",
      email: "modeltest@example.com",
      password: "temporary-password",
      role: "user",
    });

    // 2. Create a resource belonging to that user
    const resource = await Resource.create({
      title: "Next.js Documentation",
      url: "https://nextjs.org/docs",
      description: "Testing Resource model",
      type: "documentation",
      tags: ["Next.js", "React"],
      notes: "Testing User → Resource relationship",
      user: user._id,
    });

    // 3. Find the resource and populate the user
    const result = await Resource.findById(resource._id).populate("user");

    return Response.json({
      success: true,
      user,
      resource: result,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}