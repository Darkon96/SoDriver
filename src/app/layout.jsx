import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "../components/footer";
const inter = Inter({ subsets: ["cyrillic", "latin"] });
import { Suspense } from "react";
import { Metrika } from "../components/metrika";

export const metadata = {
  type: "website",
  url: "tvoytrezvyyvoditel.ru",
  title: "Заказать трезвого водителя",
  description: "Заказать трезвого водителя! Трезвый водитель. Москва и Московская область 24/7 любого класса авто.",
  keywords: ['трезвый водитель', 'заказ трезвого водителя', 'водитель онлайн', 'водитель он-лайн', 'трезвый водитель он-лайн', 'трезвый водитель онлайн', 'трезвый водитель премиум'],
  creator: 'Darkon96',
  openGraph: { type: "website", url: "tvoytrezvyyvoditel.ru", title: "Заказать трезвого водителя", description: "В любое время мы готовы предоставить трезвого водителя в Москве и МО, стаж водителей от 10 лет. Приемлемые цены от 1800 руб.", siteName: "SoDriver", img: ""}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="yandex-verification" content="d326bfab014e4f21" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
