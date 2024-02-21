import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KimMinSeung",
  description: "프론트엔드 개발자 김민승의 소개페이지입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" className="relative w-full h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="naver-site-verification"
          content="480bc4767eb8ccf83ddce8dd48f3c5877bf2b049"
        />
      </Head>
      <body className={`${inter.className} relative w-screen h-screen`}>
        {children}
      </body>
    </html>
  );
}
