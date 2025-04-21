"use client";
import Link from "next/link";
import { doCredentialLogin } from "../app/actions";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (response?.error) {
        console.error(response.error);
        setError(response.error.message || "An error occurred");
      } else {
        router.push("/");
      }
    } catch (e: any) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="shadow-lg p-5 rounded-lg border-t-4 bg-red-700 border-white max-w-md w-full">
        <h1 className="text-xl text-white font-bold my-4 text-center">Login</h1>
        {error && <div className="text-lg text-yellow-300 text-center">{error}</div>}
        <form
          onSubmit={onSubmit}
          className="my-8 flex flex-col gap-4"
        >
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
            Login
          </button>
        </form>

        <p className="my-3 text-center text-white">
          Don't you have an account?
          <Link href="signup" className="mx-2 underline text-yellow-300">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;