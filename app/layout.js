import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InfoVerse",
  description: "Infoverse | InfoVerse: Your ultimate information hub, covering everything from animals to anime, cryptocurrencies to earthquakes. Explore a vast array of topics with ease and stay informed with regular updates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="min-h-screen p-20">
        {children}
        </main>
        </body>
    </html>
  );
}
