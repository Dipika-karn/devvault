
"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Request and message state
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    // Prevent the browser's default GET form submission
    e.preventDefault();

    setMessage("");
    setMessageType("");

    // 1. Check that passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    // 2. Start loading
    setIsLoading(true);

    try {
      // 3. Send data to the existing signup API
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      // 4. Read the response
      const data = await response.json();

      // 5. Handle backend errors
      if (!response.ok) {
        setMessage(data.message || "Signup failed. Please try again.");
        setMessageType("error");
        return;
      }

      // 6. Handle successful signup
      setMessage("Account created successfully!");
      setMessageType("success");

      // Clear the form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch {
      // Handle network or unexpected response errors
      setMessage("Unable to connect. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-8 text-[var(--text)]">
      <div className="mx-auto flex min-h-[90vh] w-full max-w-xl flex-col justify-center">
        {/* Logo */}
        <Link
          href="/"
          className="mx-auto mb-10 flex items-center gap-2"
        >
          <span className="text-3xl font-bold text-[var(--primary)]">
            &lt;/&gt;
          </span>

          <span className="text-2xl font-bold">DevVault</span>
        </Link>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Create Account ✨
          </h1>

          <p className="mt-3 text-[var(--text-secondary)]">
            Create your account to get started
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
              className="
                w-full rounded-[var(--radius-md)]
                border border-[var(--border)]
                bg-[var(--background-secondary)]
                px-4 py-3 text-sm text-[var(--text)]
                outline-none placeholder:text-[var(--text-muted)]
                transition-colors focus:border-[var(--border-focus)]
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="
                w-full rounded-[var(--radius-md)]
                border border-[var(--border)]
                bg-[var(--background-secondary)]
                px-4 py-3 text-sm text-[var(--text)]
                outline-none placeholder:text-[var(--text-muted)]
                transition-colors focus:border-[var(--border-focus)]
              "
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
              className="
                w-full rounded-[var(--radius-md)]
                border border-[var(--border)]
                bg-[var(--background-secondary)]
                px-4 py-3 text-sm text-[var(--text)]
                outline-none placeholder:text-[var(--text-muted)]
                transition-colors focus:border-[var(--border-focus)]
              "
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-semibold"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
              className="
                w-full rounded-[var(--radius-md)]
                border border-[var(--border)]
                bg-[var(--background-secondary)]
                px-4 py-3 text-sm text-[var(--text)]
                outline-none placeholder:text-[var(--text-muted)]
                transition-colors focus:border-[var(--border-focus)]
              "
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full rounded-[var(--radius-md)]
              bg-[var(--primary)] px-4 py-3
              text-sm font-semibold text-white
              transition-colors hover:bg-[var(--primary-hover)]
              active:bg-[var(--primary-active)]
              disabled:cursor-not-allowed disabled:opacity-60
            "
          >
            {isLoading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Success / Error Message */}
        {message && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-center text-sm ${
              messageType === "success"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* Login Link */}
        <p className="mt-7 text-center text-sm text-[var(--text-secondary)]">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="
              font-semibold text-[var(--primary-light)]
              transition-colors hover:text-[var(--primary-hover)]
            "
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}