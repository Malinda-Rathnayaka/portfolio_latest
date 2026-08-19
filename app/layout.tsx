import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Preloader from "@/components/Preloader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Malinda Rathnayaka",
  description:
    "Product engineer specializing in cinematic, high-performance web interfaces. Available for staff-level roles and contract missions.",
  openGraph: {
    title: "Malinda Rathnayaka",
    description: "Engineering beyond the atmosphere.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-void font-sans antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}