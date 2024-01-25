import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: "Orange",
  description: "Study by Willian Igor",
  openGraph: {
    title: "Clean Arquitecture Orange",
    description: "Orange Clean Arquitecture Fruits",
    url: "https://clean-architecture-fruits.vercel.app/",
    siteName: "Clean Arquitecture Fruits",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1129761952743301180/1200057097153421425/laranja.png?ex=65c4cb43&is=65b25643&hm=59d1229115366adaad8f22ab871d9622f0744723793233804d81111d90ee1ccc&=&format=webp&quality=lossless",
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
