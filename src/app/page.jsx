import Price from "@/components/priceBlock";
import SlideBar from "@/components/slideBar";
import AddServices from "@/components/addServices";
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main>
      <div className="leanding grid grid-cols-12 gap-x-2">
        <div className="h-screen col-span-12">
          <div className="flex justify-end">
            <a href="tel:+79001111111" className="text-regular mt-8">+7 (909) 111-11-11</a>
          </div>
          <div className="grid grid-cols-12 gap-x-2">
            <div className=" col-span-6">
            <h1 className="text-bold-h1">ТРЕЗВЫЙ ВОДИТЕЛЬ</h1>
              <div className="flex">
                <p className="text-regular pt-4">по Москве и Московской области</p>
                <p className="text-regular-bold ml-2">24/7</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="leanding-main">
        <div className=" pb-7 w-full flex gap-x-6 justify-center pt-20">
          <Price />
          <Price />
          <Price />
        </div>
        <p className="price-block-text-light">
        *После первого часа 200 ₽/10 мин или 1200 ₽/час<br />
        Ожидание 5 минут бесплатно далее 10 мин. 200 рублей
        </p>
        <div className="pt-16">
          <div className=" advantages-text text-center">ДОВЕРЬТЕ ДЕЛО ПРОФЕССИОНАЛАМ</div>
          <h2 className=" text-regular-bold text-center">ПРЕИМУЩЕСТВА</h2>
        </div>
        <div>
          <SlideBar />
        </div>
        <div>
          <p>Не рискуйте!<br/>Наш профессиональный водитель приедет на помощь, сядет за руль вашего автомобиля и отвезет вас домой или в нужное место. Быстро и безопасно.</p>
        </div>
        <div>
          <h2>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
           <AddServices />
           <AddServices />
        </div>
      </div>
    </main>
  );
}
