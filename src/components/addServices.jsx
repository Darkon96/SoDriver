import Image from 'next/image';
import vector from '../assets/vector.svg';

const AddServices = () => {
    return (
        <div className='flex justify-items-center justify-center'>
            <Image
                src={vector}
                width={48}
                height={48}
                alt="Wild Landscape"
                className="block"
            />
            <div className=' pl-1'>
                <p className='w-full h-min price-block-text-bold text-start'>«Водитель на день»</p>
                <p className=''>7 часов 7200₽ далее 450₽ 30 мин.</p>
            </div>
        </div>
    );
}

export default AddServices;