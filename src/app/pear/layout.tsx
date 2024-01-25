import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: "Pear",
  description: "Study by Willian Igor",
  openGraph: {
    title: "Clean Arquitecture Pear",
    description: "Pear Clean Arquitecture Fruits",
    url: "https://clean-architecture-fruits.vercel.app/",
    siteName: "Clean Arquitecture Fruits",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1129761952743301180/1200057096708837386/pera.png?ex=65c4cb43&is=65b25643&hm=561f74e8a1a23a6eb8f266b3b6e411a8695e5c0f78c65ad70fe52b6e1815463c&=&format=webp&quality=lossless",
        width: 500,
        height: 500,
        alt: "Clean Arquitecture Fruits",
      },
    ],
  },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
