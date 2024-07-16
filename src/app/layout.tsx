import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CombinedProviders } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pubilz Game",
  description: "Pubilz Game test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CombinedProviders>{children}</CombinedProviders>
      </body>
    </html>
  );
}
