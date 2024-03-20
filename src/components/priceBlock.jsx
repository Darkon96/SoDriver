export default function Price(props) {
    const { price } = props;
    const { text } = props;
    return(
        <div className="price-block h-full w-full flex flex-wrap content-between border-1 border-slate-50 rounded-md mb-3">
            <p className="price-block-text-bold font-black text-xl pt-7 w-full">{text}</p>
            <p className="price-block-text-regular font-medium text-base w-full text-nowrap">{price} ₽/час *</p>
        </div>
    )
}