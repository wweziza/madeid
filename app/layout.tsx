import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ListHouse } from "@/components/listhouse";
import { Home } from "@/components/home";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen flex flex-col bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="flex-grow">
          <Navbar />
          <div className="space-y-16"> 
            <Home />
            <ListHouse />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
