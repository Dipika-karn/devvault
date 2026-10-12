"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async () => {
    const result = await signIn("credentials", {
      email: "devvault@example.com",
      password: "testpassword123",
      redirect: false,
    });

    console.log(result);
  };

  return (
    <main>
      <button onClick={handleLogin}>
        Login
      </button>
    </main>
  );
}