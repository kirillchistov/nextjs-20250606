"use client";

// import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "NextJS 15 Training",
//   description: "Tennis Store Shop built as part of the course",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang='en'>
      <body>
        <div>
          <Link href='/' style={{ color: isHomePage ? "black" : "blue" }}>
            home
          </Link>
        </div>
        <div>root layout</div>
        {children}
      </body>
    </html>
  );
}
