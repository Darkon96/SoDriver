export default function Price(props) {
    const { price } = props;
    const { text } = props;
    return(
        <div className="price-block max-w-64 min-w-64 min-h-36 flex content-between bg-gradient-to-r from-neutral-200 to-neutral-400 mt-4 rounded-lg flex-wrap justify-center">
            <p className="price-block-text-bold font-black text-xl pt-7 w-full text-neutral-900" dangerouslySetInnerHTML={{__html: text}}></p>
            <p className="price-block-text-regular font-medium text-base text-nowrap text-neutral-900">{price} ₽/час *</p>
        </div>
    )
}