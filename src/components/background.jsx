import Image from "next/image";
import headerImg from "../../public/car-img.jpg"

const BackgroundImg = () => {
    return (
      <Image
        src={headerImg}
        alt="BackgroundImg"
        placeholder="blur"
        className="relative"
      />
    );
}
 
export default BackgroundImg;