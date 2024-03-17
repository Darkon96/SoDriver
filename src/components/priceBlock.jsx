import rec from '../assets/rectangle_1.png';

export default function Price() {
    return(
        <div className="size-1/5 rounded-3xl price-block flex justify-items-center flex-wrap" style={{
            'backgroundImage': `url(${rec.src})`,
        }}>
            <p className="price-block-text-bold pt-7">Поездка в пределах МКАД</p>
            <p className="price-block-text-regular w-full">1800 ₽/час *</p>
        </div>
    )
}