"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Link from "next/link";

const SignupForm = () => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const username = formData.get("username") as string | null;
      const email = formData.get("email") as string | null;
      const password = formData.get("password") as string | null;

      if (!username || !email || !password) {
        throw new Error("All fields are required.");
      }

      const response = await fetch(`/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.status === 201) {
        router.push("/login");
      } else {
        console.log(`Failed to register: ${response.statusText}`);
      }
    } catch (e: any) {
      console.log(e.message || "An error occurred during registration.");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="shadow-lg p-5 rounded-lg border-t-4 bg-red-700 border-white max-w-md w-full">
        <h1 className="text-xl text-white font-bold my-4 text-center">Signup</h1>
        <form
          onSubmit={handleSubmit}
          className="my-8 flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-sm font-medium text-white">
              Username
            </label>
            <input
              className="border border-gray-400 rounded px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-white">
              Email Address
            </label>
            <input
              className="border border-gray-400 rounded px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-medium text-white">
              Password
            </label>
            <input
              className="border border-gray-400 rounded px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black text-black rounded px-4 py-2 mt-2 hover:bg-yellow-600 transition text-white"
          >
            Signup
          </button>
        </form>

        <p className="my-3 text-center text-white">
          Already have an account?
          <Link href="/login" className="mx-2 underline text-yellow-300">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;