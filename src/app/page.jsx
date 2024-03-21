import Price from "../components/priceBlock";
import AddServices from "../components/addServices";
import 'bootstrap/dist/css/bootstrap.css'
import dynamic from "next/dynamic";
import Image from 'next/image';
import car from '../assets/car-img.jpg';
import carBot1 from '../assets/bot-car1.png';
import carBot2 from '../assets/bot-car2.png';
import vector from '../assets/vector.svg';
import Footer from "../components/footer";

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
            <a href="tel:+79096298188" className="text-regular mt-8">+7 (909) 629-81-88</a>
          </div>
          <div className="grid grid-cols-12 gap-x-2">
            <div className="col-span-12 md:col-span-7">
            <h1 className="text-bold-h1 text-5xl">ТРЕЗВЫЙ ВОДИТЕЛЬ</h1>
              <div className="flex">
                <p className="text-regular text-sm pt-4 align-middle">по Москве и Московской области</p>
                <p className="text-regular-bold text-6xl ml-2">24/7</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="leanding-main">
        <div className="gap-y-5 justify-center flex gap-x-6 flex-wrap">
              <Price price="1800" text="Поездка в пределах МКАД" />
              <Price price="2000" text="Поездка за МКАД" />
              <Price price="2500" text="Поездка за ЦКАД" />
        </div>
        <p className="price-block-text-light text-xs text-end">
        *Первый час включено 10км
        </p>
        <div className=" mt-6 pt-1 bg-gradient-to-r to-indigo-500">
          <h2 className=" text-regular-bold text-center">НАШИ ПРЕИМУЩЕСТВА</h2>
          <ul className="mt-1 list">
            <li>Водители стажем от 5 лет</li>
            <li>Подача в течении 30 минут</li>
            <li>Качественный сервис</li>
          </ul>
        </div>
        <div className="hidden grid-cols-12 gap-x-2 pt-9">
        <SlideBar />
        </div>
        <div className="grid grid-cols-12 gap-x-2">
          <p className="col-span-12" style={{"text-indent": "25px"}}>Наш профессиональный водитель приедет на помощь, сядет за руль вашего автомобиля и отвезет вас домой или в нужное место. Быстро и безопасно.</p>
        </div>
          <h2 className="text-center pt-10">ДОПОЛНИТЕЛЬНЫЕ<br/> УСЛУГИ</h2>
          <div className="flex flex-wrap justify-items-center justify-center mt-4">
            <AddServices />
            <AddServices />
          </div>
          <Image
                src={carBot1}
                alt="Wild Landscape"
                className="col-start-1 col-span-5"
          />
          <div className="col-span-4 col-start-6">
            <p className="bot-bold-text text-base mt-4 font-normal">
            Выпили?<br/>Плохая погода?<br/>Чувствуете себя нехорошо?<br/>Не уверены в себе, как водитель?
            </p>
            <p className="bot-bold-text font-bold">
            Не подвергайтесь опасности - не садитесь за руль!
            </p>
            <p className="indent text-xs">
            Воспользуйтесь сервисом "Трезвый водитель" и доберитесь домой без "приключений". Наш профессиональный водитель доставит вас, ваших пассажиров и машину до места назначения в целости и сохранности.
            </p>
            <p className="indent text-xs">
            Наша компания располагает необходимым количеством трезвых водителей, так что Вы никогда не услышите на свой запрос отказа, связанного с нехваткой водителей. Основным преимуществом нашей компании являются умеренные тарифы различного класса.
            </p>
        </div>
        <Image
                src={carBot2}
                alt="Wild Landscape"
                className="col-span-5 col-start-6"
          />
          <div className="col-start-1 col-span-5">
            <p className="bot-bold-text">Наши тарифы ме имеют скрытых доплат. Гарантируем, стоимость не вырастет в процессе поездки.</p>
            <ul style={{
              'list-style-type': 'square',
            }}>
              <li>Оплата остановок по заранее согласованному маршруту - отсутствует.</li>
              <li>Ночные или праздничные наценки - отсутствует.</li>
              <li>Оплата нашему водителю обратной дороги - за наш счёт.</li>
              <li>Отсутствие расширенной страховки ОСАГО - за наш счёт.</li>
            </ul>
          </div>
        </div>
    </main>
  );
}
