import Image from 'next/image';
import vector from '../assets/vector.svg';

const AddServices = (props) => {
    const { price } = props;
    const { text } = props;
    return (
        <div className='flex content-center mb-5'>
            <Image
            src={vector}
            alt="Wild Landscape"
            className="mr-5"
            /> 
            <span className='justify-items-center justify-center'>
                <p className='h-min price-block-text-bold mb-0 text-xl font-bold'>{text}</p>
                <p className='mt-1 text-center mb-0'>{price}</p>
            </span>

        </div>
    );
}

export default AddServices;