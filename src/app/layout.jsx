import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata = {
  title: "soDriver",
  description: "Трезвый водитель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}   
      </body>
    </html>
  );
}
