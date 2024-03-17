export default function Price(props) {
    const { price } = props;
    const { text } = props;
    return(
        <div className="w-1/5 rounded-3xl price-block flex justify-items-center flex-wrap bg-zinc-500">
            <p className="price-block-text-bold pt-7 w-full">{text}</p>
            <p className="price-block-text-regular w-full">{price} ₽/час *</p>
        </div>
    )
}