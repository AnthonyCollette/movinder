import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './assets/scss/main.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movinder",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
