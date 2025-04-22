import Navbar from "../components/navbar";
import { auth } from "../auth";
import "./globals.css";
import { SessionProvider } from "next-auth/react";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}
