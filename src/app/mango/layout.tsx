import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: "Mango",
  description: "Study by Willian Igor",
  openGraph: {
    title: "Clean Arquitecture Mango",
    description: "Mango Clean Arquitecture Fruits",
    url: "https://clean-architecture-fruits.vercel.app/",
    siteName: "Clean Arquitecture Fruits",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1129761952743301180/1200057097421869247/manga.png?ex=65c4cb44&is=65b25644&hm=a8eaf2a87bbe9f35b65b9b91fc5f174babbdbddb5a410b48469b156248b5ec85&=&format=webp&quality=lossless",
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
