import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { IoCarSharp } from "react-icons/io5";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { SiTransmission } from "react-icons/si";
import { CiFilter } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";
import CarSlider from './child-components/CarSlider';
import TrendingCars from './child-components/TrendingCars';
import CarsByBudget from './child-components/CarsbyBudget';
import CarsLogo from './child-components/CarsLogo';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';

const CarData = () => {

    return (
        <div className="">
            <div className="px-10 my-3 relative" >
                <img
                    src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/107719/range-rover-exterior-right-rear-three-quarter.jpeg?isig=0&q=80&q=80"
                    alt="Family with Car on Beach"
                    className="w-full h-[65vh] object-cover rounded-xl"
                />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10 top-[500px]">
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

            <div className='my-4 flex justify-center pt-48'>
                <div className='w-[60vw] bg-gray-50 p-3 rounded-2xl' >
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

            {/* Trending Cars component */}
            <div className='flex justify-center' >
                <div className='w-[60vw] bg-gray-100 p-3 rounded-2xl' >
                    <div className='flex gap-2 mb-2' >
                        <i className="bi bi-graph-up-arrow"></i>
                        <span>Trending Cars</span>
                    </div>
                    <TrendingCars />
                </div>
            </div>

            {/* Cars by Budget component */}
            <CarsByBudget />

            {/* Cars logo component */}
            <CarsLogo />

            {/* Find The Cars Of Your Choice Component */}
            <div className='flex justify-center my-5' >
                <div className='w-70/100' >
                    <h4 className='flex mb-3' >Find The Cars of Your Choice</h4>
                    <div className='bg-gray-50 p-2 rounded-2xl' >
                        <div className='flex items-center gap-2 p-2 py-3' >
                            <span>Budget</span>
                            <div className='flex items-center gap-3' >
                                <button className="bg-white p-2 rounded border flex items-center gap-1"><LocalAtmIcon /> Under 5 Lakh</button>
                                <button className="bg-white p-2 rounded border flex items-center gap-1"><LocalAtmIcon />Under 10 Lakh</button>
                                <button className="bg-white p-2 rounded border flex items-center gap-1"><LocalAtmIcon /> Under 15 Lakh</button>
                                <div className='h-5 p-[0.5px] bg-gray-300' ></div>
                            </div>
                            <span>Body Type</span>
                            <div className='flex items-center gap-3' >
                                <button className="bg-white p-2 rounded border flex items-center gap-1"><TimeToLeaveOutlinedIcon />SUV</button>
                                <button className="bg-white p-2 rounded border flex items-center gap-1"><TimeToLeaveOutlinedIcon />Hatchback</button>
                                <button className="bg-white p-2 rounded border flex items-center gap-1"><TimeToLeaveOutlinedIcon />Sedan</button>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3 p-2' >
                            <span>Fuel Type & Others</span>
                            <button className="bg-white p-2 rounded border flex items-center gap-1"><LocalAtmIcon />Electiric</button>
                            <button className="bg-white p-2 rounded border flex items-center gap-1"><LocalAtmIcon />Hybrid</button>
                            <button className="bg-white p-2 rounded border flex items-center gap-1"><LocalAtmIcon />CNG</button>
                            <button className="bg-white p-2 rounded border flex items-center gap-1"><LocalAtmIcon />7 Seater</button>
                            <button className="bg-white p-2 rounded border flex items-center gap-1"><LocalAtmIcon />Automatic</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarData