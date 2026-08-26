import type { Metadata } from "next";
import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "DK.DEV — Creative Technologist",
  description:
    "Portfolio of DK — creative technologist blending software engineering, visual media, and AI to build products, capture stories, and automate the future.",
};

/** Runs before hydration so the saved theme applies without a flash */
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t === "light") document.documentElement.setAttribute("data-theme", "light");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${anton.variable} ${archivo.variable} ${jetbrains.variable} grain`}
      >
        <ScrollProgress />
        <Nav />
        {children}
      </body>
    </html>
  );
}