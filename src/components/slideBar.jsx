import 'bootstrap/dist/css/bootstrap.css'
import car from '../assets/car-img.jpg'
import car2 from '../assets/car2-img.jpg'
import Image from 'next/image'

const SlideBar = () => { 
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item ">
                    <Image
                         src={car}
                         width={1000}
                         height={1000}
                         alt="Picture of the author"
                         className="d-block w-100"
                    />
                </div>
                <div class="carousel-item active">
                <Image
                         src={car2}
                         width={1000}
                         height={1000}
                         alt="Picture of the author"
                         className="d-block w-100"
                    />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
    );
}
export default SlideBar;