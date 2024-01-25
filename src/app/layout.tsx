import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/presentation/layouts/main.layout";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: "Clean Arquitecture Fruits",
  description: "Study by Willian Igor",
  openGraph: {
    title: "Clean Arquitecture Fruits",
    description: "Home Clean Arquitecture Fruits",
    url: "https://clean-architecture-fruits.vercel.app/",
    siteName: "Clean Arquitecture Fruits",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1129761952743301180/1200055950011289731/fertilizante.png?ex=65c4ca32&is=65b25532&hm=6f213f665e95f9ca76cb940c90caab3cd610ffad2edf2e1ea59b7eb8b2a21cff&=&format=webp&quality=lossless",
        width: 500,
        height: 500,
        alt: "Clean Arquitecture Fruits",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
