import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingCars = () => {

    const trendingCarsData = [
        { carImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s', carName: "Taigun" },
        { carImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s', carName: "Taigun" },
        { carImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s', carName: "Taigun" },
        { carImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s', carName: "Taigun" },
        { carImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s', carName: "Taigun" },
        { carImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s', carName: "Taigun" },
        { carImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s', carName: "Taigun" },
    ]

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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:1
                }
            },
        ]
    };


    return (
        <Slider className="flex mx-2" {...settings} >

            {
                trendingCarsData?.map((ele, idx) => {
                    console.log("idx", idx);

                    return (
                        <div className="flex p-2" >
                            <div className={`bg-white rounded-xl ${idx === 0 ? "border border-red-500" : ""} `} >
                                <div className="flex gap-2" >
                                    <div className="p-1" >
                                        <img className={`rounded-xl h-12 my-1`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s" />
                                    </div>
                                    <div className="flex items-center pr-2" >
                                        <span>dsfuhug</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </Slider>
    )
}

export default TrendingCars