import localFont from "next/font/local";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const lineSeedJP = localFont({
  src: [
    { path: "./fonts/LINESeedJP-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/LINESeedJP-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-line-seed-jp",
  display: "swap",
});

export const metadata = {
  title: "marokiki",
  description: "marokiki's Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${lineSeedJP.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
