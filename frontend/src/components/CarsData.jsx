import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { IoCarSharp } from "react-icons/io5";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { SiTransmission } from "react-icons/si";
import { CiFilter } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";
import CarSlider from './CarSlider';
import TrendingCars from './TrendingCars';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";


const CarData = () => {

    const [carBudget, setCarBudget] = useState('')

    const carBudgetData = [
        { imagePath: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80", carTitle: "Tata Nexon", price: "Rs.8.00 - 15.60 Lakh", breakup: "View Price Breakup" },
        { imagePath: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80", carTitle: "Tata Nexon", price: "Rs.8.00 - 15.60 Lakh", breakup: "View Price Breakup" },
        { imagePath: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80", carTitle: "Tata Nexon", price: "Rs.8.00 - 15.60 Lakh", breakup: "View Price Breakup" },
        { imagePath: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80", carTitle: "Tata Nexon", price: "Rs.8.00 - 15.60 Lakh", breakup: "View Price Breakup" },
    ]

    return (
        <div className="relative">
            <div className="px-10 my-3" >
                <img
                    src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/107719/range-rover-exterior-right-rear-three-quarter.jpeg?isig=0&q=80&q=80"
                    alt="Family with Car on Beach"
                    className="w-full h-[50vh] object-cover rounded-xl"
                />
            </div>

            <div className="flex justify-center ">
                <div className="bg-white shadow-md rounded-xl p-6 px-10 w-[60vw]">
                    <div className="flex items-center justify-between mb-4" >
                        <span className="text-2xl font-semibold">Find Your Right Car</span>
                        <button className="text-gray-600 font-semibold underline gap-1 flex">Select City<i className="bi bi-geo-alt"></i></button>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-4 border border-black rounded-full justify-between">
                        <div className="flex p-1" >
                            <div className="flex p-1 bg-gray-200 rounded-full" >
                                <span className="bg-teal-600 p-1 px-3 rounded-full text-white" >New</span>
                                <span className=" py-1 pl-2 pr-3 rounded-full" >Used</span>
                            </div>

                            <input
                                type="text"
                                placeholder="Type to select car name, e.g. Citroen C3"
                                className="px-2 w-[400px]"
                            />
                        </div>
                        <div className="flex justify-end px-2" >
                            <i className="flex items-center bi bi-search text-xl justify-end" ></i>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-sm">
                        <div className='flex items-center rounded-md border border-gray-500' >
                            <div className='bg-teal-100 p-2 items-center rounded-l-md border-gray-500' >
                                <PaymentsOutlinedIcon sx={{ fontSize: 20 }} />

                            </div>
                            <span className='px-2' >Budget</span>
                        </div>
                        <div className='flex items-center rounded-md border border-gray-500' >
                            <div className='bg-teal-100 p-2 h-full items-center rounded-l-md border-gray-500' >
                                <IoCarSharp size={20} />
                            </div>
                            <span className='px-2' >Body Type</span>
                        </div>
                        <div className='flex items-center rounded-md border border-gray-500' >
                            <div className='bg-teal-100 p-2 items-center h-full rounded-l-md border-gray-500' >
                                <BsFillFuelPumpDieselFill size={20} />
                            </div>
                            <span className='px-2' >Fuel Type</span>
                        </div>
                        <div className='flex items-center rounded-md border border-gray-500' >
                            <div className='bg-teal-100 h-full p-2 items-center rounded-l-md border-gray-500' >
                                <SiTransmission size={18} />
                            </div>
                            <span className='px-2' >Transmission</span>
                        </div>
                        <div className='flex items-center rounded-md border border-gray-500' >
                            <div className='bg-teal-100 p-2 h-full items-center rounded-l-md border-gray-500' >
                                <CiFilter size={20} />
                            </div>
                            <span className='px-2' >All Filters</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 flex justify-center'>
                <div className='w-[50vw] bg-gray-50 p-3 rounded-2xl' >
                    <div className='flex items-center gap-1 mb-2' >
                        <IoMdTime size={20} />
                        <span>Recently Viewed</span>
                    </div>
                    <div className='flex gap-3' >
                        <div className='bg-white flex items-center p-1 w-fit px-1 rounded-xl mb-4 shadow-sm' >
                            <img className='h-12 rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s' />
                            <span className='pl-4 pr-1' >Taigun</span>
                        </div>
                        <div className='bg-white flex items-center p-1 w-fit px-1 rounded-xl mb-4 shadow-sm' >
                            <img className='h-12 rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s' />
                            <span className='pl-4 pr-1' >Taigun</span>
                        </div>
                        <div className='bg-white flex items-center p-1 w-fit px-1 rounded-xl mb-4 shadow-sm' >
                            <img className='h-12 rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh41Uc847A8hO_BpHP-sBaUhKGOEcyvDong&s' />
                            <span className='pl-4 pr-1' >Taigun</span>
                        </div>
                    </div>

                    {/* second car data */}
                    <div className='flex items-center gap-1 mb-2' >
                        <IoCarSharp size={20} />
                        <span>Recommended For You</span>
                    </div>
                    {/* slider */}
                    <div className='mx-2' >
                        <CarSlider />
                    </div>

                    <div className='flex mt-2' >
                        <span className='flex text-sm' >Showing Avg. Ex-Showroom Price, <span className='flex items-center gap-1 underline' > Select City <FaRegPenToSquare /></span></span>
                    </div>
                </div>
            </div>

            <div className='flex justify-center' >
                <div className='w-1/2 bg-gray-100 p-3 rounded-2xl' >
                    <div className='flex gap-2 mb-2' >
                        <i className="bi bi-graph-up-arrow"></i>
                        <span>Trending Cars</span>
                    </div>
                    <TrendingCars />
                </div>
            </div>

            <div>
                <div className='flex justify-center w-55/100 my-3' >
                    <h3>Cars by Budget</h3>
                </div>

                <div className='flex justify-center' >
                    <div className='flex w-55/100 list-none gap-4 text-xl' >
                        <div>
                            <li onClick={() => setCarBudget('')} >Cars Under 10 Lakh</li>
                            {carBudget === "" ? <div className='p-[2px] bg-green-500' ></div> : ""}
                        </div>
                        <div>
                            <li onClick={() => setCarBudget('10-20 Lakh')} >10-20 Lakh</li>
                            {carBudget === "10-20 Lakh" ? <div className='p-[2px] bg-green-500' ></div> : ""}
                        </div>
                        <div>
                            <li onClick={() => setCarBudget('20-30 Lakh')} >20-30 Lakh</li>
                            {carBudget === "20-30 Lakh" ? <div className='p-[2px] bg-green-500' ></div> : ""}
                        </div>
                        <div>
                            <li onClick={() => setCarBudget('Luxury Cars')} >Luxury Cars</li>
                            {carBudget === "Luxury Cars" ? <div className='p-[2px] bg-green-500' ></div> : ""}
                        </div>
                    </div>
                </div>

                <div className='flex justify-center' >
                    <div className='p-[0.5px] bg-gray-500 w-55/100' ></div>
                </div>

                <div className='my-2 flex justify-center' >
                    <div className='w-55/100' >
                        <div className='grid grid-cols-12 gap-3' >
                            {
                                carBudgetData?.map((ele, idx) => {
                                    return (

                                        <div className='col-span-3 rounded-2xl p-2 border' >
                                            <img src={ele.imagePath} className='rounded-xl' />
                                            <div className='mx-2' >
                                                <h4>{ele.carTitle}</h4>
                                                <span>{ele.price}</span>
                                                <div>{ele.breakup}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='flex mt-2 justify-center' >
                    <div className='w-55/100' >
                        <span className='flex text-sm mb-2' >Showing Avg. Ex-Showroom Price, <span className='flex items-center gap-1 underline' > Select City <FaRegPenToSquare /></span></span>
                        <span className='flex items-center gap-1' >All Cars Under 10 Lakh <FaAngleRight /></span>
                    </div>
                </div>

                <div className='my-5 flex justify-center' >
                    <div className='w-55/100' >
                        <h4 className='mb-3' >Get Offers on Popular Cars</h4>
                        <div className='grid grid-cols-12 gap-3' >
                            {
                                carBudgetData?.map((ele, idx) => {
                                    return (

                                        <div className='col-span-3 rounded-2xl p-2 border' >
                                            <img src={ele.imagePath} className='rounded-xl' />
                                            <div className='mx-2' >
                                                <h4>{ele.carTitle}</h4>
                                                <span>{ele.price}</span>
                                                <div>{ele.breakup}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-center' >
                <div className='w-55/100' >
                    <h1 className='mb-3' >All Brands</h1>  
                    <div className='grid grid-cols-12 rounded-2xl' >
                        <div className='col-span-2 flex justify-center items-center border border-black rounded-tl-2xl ' >
                            <div className='p-3'>
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2 flex justify-center border border-black' >
                            <div className='p-3' >
                                <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThaXGkK-gl2qpYQNowhWvNb2YZHXwv4-E_3Q&s' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2  flex justify-center border border-black' >
                            <div className='p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2  flex justify-center border border-black' >
                            <div className='p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2  flex justify-center border border-black' >
                            <div className='p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2  flex justify-center border border-black rounded-tr-2xl' >
                            <div className=' p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2 flex justify-center items-center border border-black rounded-bl-2xl' >
                            <div className='p-3'>
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2 flex justify-center border border-black' >
                            <div className='p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2  flex justify-center border border-black' >
                            <div className='p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2  flex justify-center border border-black' >
                            <div className='p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2  flex justify-center border border-black' >
                            <div className='p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                        <div className='col-span-2  flex justify-center border border-black rounded-br-2xl' >
                            <div className='p-3' >
                                <img className='h-20' src='https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-bmw.jpg' alt='carLogo' />
                                <span className='flex justify-center' >dsgf</span>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default CarData