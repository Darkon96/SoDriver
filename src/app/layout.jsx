import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata = {
  title: "SoDriver",
  description: "Трезвый водитель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="yandex-verification" content="d5fc8a70dd638ae9" />
      <body className={inter.className}>
        {children} 
      </body>
    </html>
  );
}
