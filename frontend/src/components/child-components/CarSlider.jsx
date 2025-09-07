import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarSlider = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "gray", borderRadius: "20%" }} // Apply color here
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "gray", borderRadius: "20%" }} // Apply color here
                onClick={onClick}
            />
        );
    }

    const carData = [
        { imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s", imageTitle: "Tata Safari", price: "Rs. 15.50 - 27.44 Lakh" },
        { imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s", imageTitle: "Tata Safari", price: "Rs. 15.50 - 27.44 Lakh" },
        { imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s", imageTitle: "Tata Safari", price: "Rs. 15.50 - 27.44 Lakh" },
        { imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s", imageTitle: "Tata Safari", price: "Rs. 15.50 - 27.44 Lakh" },
        { imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s", imageTitle: "Tata Safari", price: "Rs. 15.50 - 27.44 Lakh" },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Slider {...settings} className="flex" >
            {
                carData?.map((ele, idx) => {
                    return (
                        <div className="p-2 flex items-center" >
                            <div className="p-2 bg-white rounded-xl gap-4 border ">
                                <img className='rounded-2xl' src={`${ele.imagePath}`} />
                                <div className='my-1' >
                                    <span className='text-xl font-semibold' >{ele.imageTitle}</span>
                                </div>
                                <span className='text-md' >{ele.price}</span>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default CarSlider