import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CombinedProviders } from "@/context";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pupilz Game",
  description: "Pupilz Game test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CombinedProviders>
          <main className="h-screen flex overflow-scroll items-center bg-[#96403E] backdrop-blur-xl justify-center">
            <div className="block portrait:block landscape:hidden text-white text-center text-2xl">
              <div>
                <Image
                  src="/Pupilz/Promo-sheet0.png"
                  alt="Logo"
                  width={300}
                  height={300}
                  className="w-[300px] mx-auto mb-5"
                />
              </div>
              Please rotate your phone to landscape
            </div>
            {children}
          </main>
        </CombinedProviders>
      </body>
    </html>
  );
}
