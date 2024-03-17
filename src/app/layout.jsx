import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "./footer";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata = {
  title: "SoDriver",
  description: "Трезвый водитель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} 
      </body>
      <Footer />
    </html>
  );
}
