import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "Shashank Ellareddy",
  description:
    "Welcome to my corner of the web! I'm a high school student who's passionate about web development, specializing in JavaScript frameworks like React and Next.js, and backend services such as Firebase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
