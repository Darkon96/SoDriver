import Price from "../components/priceBlock";
import AddServices from "../components/addServices";
import WhatsApp from "../components/WhatsApp";

import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image';
import car from '../assets/car-img.jpg';
import carBot1 from '../assets/bot-car1.png';
import carBot2 from '../assets/bot-car2.png';


export default function Home() {
  return (
    <main>
      <div className="leanding grid grid-cols-12 gap-x-2" style={{
        'backgroundImage': `url(${car.src})`,
      }}>
        <div className="h-screen col-span-12">
        <div className="flex justify-end mt-8">
            <WhatsApp />
          </div>
          <div className="grid grid-cols-12 gap-x-2">
            <div className="col-span-12 md:col-span-7">
              <h1 className="text-bold-h1 text-5xl">ТРЕЗВЫЙ ВОДИТЕЛЬ</h1>
              <div className="flex">
                <p className="text-regular text-lg pt-4 align-middle xl:text-xl">по Москве и Московской области</p>
                <p className="text-regular-bold text-6xl ml-2">24/7</p>
              </div>
              <a href="tel:+79096298188" className="text-regular text-4xl xl:text-4xl 2xl:text-5xl max-h-min no-underline">+7 (909) 629-81-88</a>
            </div>
          </div>
        </div>
      </div>
      <div className="leanding-main">
        <div className="gap-y-5 justify-center flex gap-x-6 flex-wrap">
          <Price price="1800" text="Поездка в пределах МКАД" />
          <Price price="2000" text="Поездка за<br/>МКАД" />
          <Price price="2500" text="Поездка за<br/>ЦКАД" />
        </div>
        <p className="price-block-text-light text-xs text-end mt-3 mr-14 xl:pr-28">
          *Первый час включено 10км
        </p>
        <a id="advantage" />
        <div className="mt-20 bg-gradient-to-r to-indigo-500">
          <h2 className=" text-regular-bold text-center">НАШИ ПРЕИМУЩЕСТВА</h2>
          <div className="flex justify-center">
            <ul className="mt-1 list font-bold text-lg">
              <li>Водители стажем от 5 лет</li>
              <li>Подача в течении 30 минут</li>
              <li>Качественный сервис</li>
            </ul>
          </div>
        </div>
        <a id="addServices" />
        <div className="grid grid-cols-12 gap-x-2">
          <p className="col-span-12 text-center mt-5 xl:col-span-6 xl:col-start-4" style={{ "textIndent": "25px" }}>Наш профессиональный водитель приедет на помощь, сядет за руль вашего автомобиля и отвезет вас домой или в нужное место. Быстро и безопасно.</p>
        </div>
        <h2 className="text-center mt-10">ДОПОЛНИТЕЛЬНЫЕ<br /> УСЛУГИ</h2>
        <div className="flex flex-wrap justify-items-center justify-center mt-4 gap-y-2 gap-x-8">
          <AddServices  price="от 7500 руб." text="Трансфер в другой город"/>
          <AddServices  price="от 2500 руб." text="Водитель на мотоцикле"/>
        </div>
        <div className=" grid-cols-12 grid-rows-3 gap-x-2">
        <div className="flex flex-wrap justify-center gap-x-4">
            <Image
            src={carBot1}
            alt="Wild Landscape"
            className="size-full max-w-xl pt-10 xl:pt-6"
            />
          <div className="bg-gradient-to-r from-neutral-200 to-neutral-400 mt-4 rounded-lg max-w-max md:min-w-max xl:min-h-fit self-center">
            <p className="bot-bold-text text-base font-semibold text-neutral-900 text-center pt-3">
              Выпили?<br />Плохая погода?<br />Чувствуете себя нехорошо?<br />Не уверены в себе, как водитель?
            </p>
            <p className="bot-bold-text font-bold text-xl text-neutral-900 text-center p-2">
              Не подвергайтесь опасности - не садитесь за руль!
            </p>
          </div>
          </div>
          <div className="flex flex-wrap justify-center xl:mb-5">
            <p className="text-base text-start mt-5" style={{ 'width': '500px' }}>
              Воспользуйтесь сервисом "Трезвый водитель" и доберитесь домой без "приключений". Наш профессиональный водитель доставит вас, ваших пассажиров и машину до места назначения в целости и сохранности.
            </p>
            <p className="text-base text-start mt-5 gap-x-5 xl:pl-7" style={{ 'width': '500px' }}>
              Наша компания располагает необходимым количеством трезвых водителей, так что Вы никогда не услышите на свой запрос отказа, связанного с нехваткой водителей. Основным преимуществом нашей компании являются умеренные тарифы различного класса.
            </p>
          </div>
          <div className="flex flex-wrap justify-center col-span-8 col-start-3 gap-x-5 xl:pb-5">
          <Image
            src={carBot2}
            alt="Wild Landscape"
            className="xl:order-last"
          />
          <div className="" style={{'maxWidth':'500px'}}>
            <p className="bot-bold-text font-bold mt-5">Наши тарифы ме имеют скрытых доплат. Гарантируем, стоимость не вырастет в процессе поездки.</p>
            <ul className="list">
              <li>Оплата остановок по заранее согласованному маршруту - отсутствует.</li>
              <li>Ночные или праздничные наценки - отсутствует.</li>
              <li>Оплата нашему водителю обратной дороги - за наш счёт.</li>
              <li>Отсутствие расширенной страховки ОСАГО - за наш счёт.</li>
            </ul>
            </div>
          </div>
          </div>
      </div>
    </main>
  );
}
