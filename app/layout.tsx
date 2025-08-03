import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const geistPac = Pacifico({
    weight: "400", // ✅ 这是必须的
    variable: "--font-geist-pac",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "hzb个人主页",
    description: "hzb.gg的个人主页",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${geistPac.variable}  antialiased`}>{children}</body>
        </html>
    );
}
