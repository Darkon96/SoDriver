const Footer = () => {
    return (
        <div className="footer bg-black grid grid-cols-12 grid-rows-3 gap-x-8 pt-3">
            <div className="col-span-3 text-end bot-bold-text h-min">
                <div className="row-span-1">Круглосуточно 24/7</div>
            </div>
                <a href="tel:+79688508188" className="a-color col-start-1 col-span-3 row-span-1 row-start-2 text-end h-min">+7 (968) 850-81-88</a>
                <div><a href="mailto:Tvojvoditel@gmail.com" className="a-color h-min">Tvojvoditel@gmail.com</a></div>
                <div className="col-span-4 col-start-4 h-min">Адрес: г. Москва</div>
            <div className="row-span-1 row-start-3 col-span-12 text-center ">
                <div>Компания Мой Трезвый Водитель © 2021</div>
                <p className="bot-company-text">Авторские права: информация для правообладателей.По всем вопросам о возможном нарушение обращаться для взаимодействия на Tvojvoditel@gmail.com</p>
            </div>
        </div>
    );
}

export default Footer;