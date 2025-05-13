import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/authContext";

export const metadata: Metadata = {
    title: "Inter!",
    description: "Chat with people all around the world.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <AuthProvider>
                    <span className="flex gap-6">
                        <Navbar />
                        {children}
                    </span>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
