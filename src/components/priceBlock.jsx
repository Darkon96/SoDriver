import rec from '../assets/rectangle_1.png';

export default function Price(props) {
    const { price } = props;
    const { text } = props;
    return(
        <div className="w-1/5 rounded-3xl price-block flex justify-items-center flex-wrap" style={{
            'backgroundImage': `url(${rec.src})`,
        }}>
            <p className="price-block-text-bold pt-7 w-full">{text}</p>
            <p className="price-block-text-regular w-full">{price} ₽/час *</p>
        </div>
    )
}