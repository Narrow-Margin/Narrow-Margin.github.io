import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Narrow Margin - Home",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preload" href="/fonts/bebasneuepro-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/ekv8zpw.css" />
      </head>
      <body className="bg-secondary text-primary min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}