export default function Price(props) {
    const { price } = props;
    const { text } = props;
    return(
        <div className="price-block max-w-64 min-h-36 flex content-between border-1 border-slate-50 rounded-md mb-3 flex-wrap justify-center">
            <p className="price-block-text-bold font-black text-xl pt-7 w-full">{text}</p>
            <p className="price-block-text-regular font-medium text-base text-nowrap">{price} ₽/час *</p>
        </div>
    )
}