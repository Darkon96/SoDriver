import Price from "../components/priceBlock";
import AddServices from "../components/addServices";
import 'bootstrap/dist/css/bootstrap.css'
import dynamic from "next/dynamic";
import Image from 'next/image';
import car from '../assets/car-img.jpg';

const SlideBar = dynamic(() => import("../components/slideBar"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="leanding grid grid-cols-12 gap-x-2" style={{
        'backgroundImage': `url(${car.src})`,
      }}>
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
        <div className="grid grid-cols-12 gap-x-2  pt-9">
        <SlideBar />
        </div>
        <div className="grid grid-cols-12 grid-rows-2 gap-x-2">
          <p className="text-center pt-10 price-block-text-bold col-span-12">Не рискуйте!</p>
          <p className="col-span-8 col-start-3 text-center ">Наш профессиональный водитель приедет на помощь, сядет за руль вашего автомобиля и отвезет вас домой или в нужное место. Быстро и безопасно.</p>
        </div>
        <div className=" pt-10">
          <h2 className="text-center">ДОПОЛНИТЕЛЬНЫЕ<br/> УСЛУГИ</h2>
          <div className="flex justify-items-center justify-center col-span-8 col-start-3 pt-10 gap-x-10">
            <AddServices />
            <AddServices />
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-1 gap-x-8">
          <Image
                src={car}
                alt="Wild Landscape"
                className="col-start-1 col-span-6 "
          />
          <div className="col-span-4 col-start-7">
            <h3>
            Услуга «трезвый водитель» в Москве и Московской области
            </h3>
            <p>
            Выпили? Чувствуете себя нехорошо? Плохая погода? Не уверены о себе, как водитель?
            </p>
            <p>
            Не подвергайтесь опасности - не садитесь за руль!
            </p>
            <p>
            Воспользуйтесь сервисом "Трезвый водитель" и доберитесь домой без "приключений". Наш профессиональный водитель доставит вас, ваших пассажиров и машину до места назначения в целости и сохранности.
            </p>
            <p>
            Наша компания располагает необходимым количеством трезвых водителей, так что Вы никогда не услышите на свой запрос отказа, связанного с нехваткой водителей. Основным преимуществом нашей компании являются умеренные тарифы различного класса.
            </p>
          </div> 
        </div>
        <div className="grid grid-cols-12 grid-rows-1 gap-x-8">
          <div className="col-start-1 col-span-4">
            <h3>
            Услуга «трезвый водитель» в Москве и Московской области
            </h3>
            <p>
            Выпили? Чувствуете себя нехорошо? Плохая погода? Не уверены о себе, как водитель?
            </p>
            <p>
            Не подвергайтесь опасности - не садитесь за руль!
            </p>
            <p>
            Воспользуйтесь сервисом "Трезвый водитель" и доберитесь домой без "приключений". Наш профессиональный водитель доставит вас, ваших пассажиров и машину до места назначения в целости и сохранности.
            </p>
            <p>
            Наша компания располагает необходимым количеством трезвых водителей, так что Вы никогда не услышите на свой запрос отказа, связанного с нехваткой водителей. Основным преимуществом нашей компании являются умеренные тарифы различного класса.
            </p>
          </div>
          <Image
                src={car}
                alt="Wild Landscape"
                className="col-span-6 col-start-5"
          />
        </div>
      </div>
    </main>
  );
}
