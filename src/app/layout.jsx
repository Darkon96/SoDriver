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
      <meta name="yandex-verification" content="008e50b2267486d2" />
      <body className={inter.className}>
        {children} 
      </body>
    </html>
  );
}
