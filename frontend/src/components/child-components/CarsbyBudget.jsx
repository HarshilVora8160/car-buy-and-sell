import { useState } from "react"
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const CarsByBudget = ({ title }) => {

    const [carBudget, setCarBudget] = useState('')

    const carBudgetData = [
        { imagePath: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80", carTitle: "Tata Nexon", price: "Rs.8.00 - 15.60 Lakh", breakup: "View Price Breakup" },
        { imagePath: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80", carTitle: "Tata Nexon", price: "Rs.8.00 - 15.60 Lakh", breakup: "View Price Breakup" },
        { imagePath: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80", carTitle: "Tata Nexon", price: "Rs.8.00 - 15.60 Lakh", breakup: "View Price Breakup" },
        { imagePath: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80", carTitle: "Tata Nexon", price: "Rs.8.00 - 15.60 Lakh", breakup: "View Price Breakup" },
    ]

    return (
        <div>
            <div className='flex justify-center my-4' >
                <div className='w-70/100' >
                    <h4>{title}</h4>
                    <div className='flex mt-4 justify-center' >
                        {
                            title === "Cars by Budget" ?
                                <div>
                                    <div className='flex w-55/100 list-none gap-5 text-md' >
                                        <div>
                                            <li onClick={() => setCarBudget('')} className={`${carBudget === "" ? "text-green-700 mb-2" : ""}`} >Cars Under 10 Lakh</li>
                                            {carBudget === "" ? <div className='p-[2px] bg-green-700' ></div> : ""}
                                        </div>
                                        <div>
                                            <li onClick={() => setCarBudget('10-20 Lakh')} className={`${carBudget === "10-20 Lakh" ? "text-green-700 mb-2" : ""}`}>10-20 Lakh</li>
                                            {carBudget === "10-20 Lakh" ? <div className='p-[2px] bg-green-700' ></div> : ""}
                                        </div>
                                        <div>
                                            <li onClick={() => setCarBudget('20-30 Lakh')} className={`${carBudget === "20-30 Lakh" ? "text-green-700 mb-2" : ""}`}>20-30 Lakh</li>
                                            {carBudget === "20-30 Lakh" ? <div className='p-[2px] bg-green-700' ></div> : ""}
                                        </div>
                                        <div>
                                            <li onClick={() => setCarBudget('Luxury Cars')} className={`${carBudget === "Luxury Cars" ? "text-green-700 mb-2" : ""}`}>Luxury Cars</li>
                                            {carBudget === "Luxury Cars" ? <div className='p-[2px] bg-green-700' ></div> : ""}
                                        </div>
                                    </div>

                                    <div className='p-[0.5px] bg-gray-500' ></div>

                                    <div className='my-2' >
                                        <div className='grid grid-cols-12 gap-2.5' >
                                            {
                                                carBudgetData?.map((ele, idx) => {
                                                    return (

                                                        <div className='col-span-3 rounded-2xl p-1 py-2 border' >
                                                            <img src={ele.imagePath} className='rounded-xl' />
                                                            <div className='mx-2' >
                                                                <div className='mb-1' >
                                                                    <span className='text-[18px]' >{ele.carTitle}</span>
                                                                </div>
                                                                <span>{ele.price}</span>
                                                                <div className='text-blue-600 mt-2 text-[14px]' >{ele.breakup}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className='mt-2' >
                                        <span className='flex text-[12px] mb-2 text-gray-500 gap-1'  >Showing Avg. Ex-Showroom Price,<span className='flex items-center gap-1 underline text-gray-700' > Select City <FaRegPenToSquare /></span></span>
                                        <span className='flex items-center gap-1' >All Cars Under 10 Lakh <FaAngleRight /></span>
                                    </div>
                                </div>
                                : ""
                        }
                        {
                            title === "Upcoming and Recently Launched Cars" ?
                                <div>
                                    <div className='flex w-55/100 list-none gap-5 text-md' >
                                        <div>
                                            <li onClick={() => setCarBudget('')} className={`${carBudget === "" ? "text-green-800 mb-2" : ""}`} >Upcoming Cars</li>
                                            {carBudget === "" ? <div className='p-[2px] bg-green-700' ></div> : ""}
                                        </div>
                                        <div>
                                            <li onClick={() => setCarBudget('10-20 Lakh')} className={`${carBudget === "10-20 Lakh" ? "text-green-800 mb-2" : ""}`}>Just Launched Cars</li>
                                            {carBudget === "10-20 Lakh" ? <div className='p-[2px] bg-green-700' ></div> : ""}
                                        </div>
                                    </div>

                                    <div className='p-[0.5px] bg-gray-500' ></div>

                                    <div className='my-2' >
                                        <div className='grid grid-cols-12 gap-2.5' >
                                            {
                                                carBudgetData?.map((ele, idx) => {
                                                    return (

                                                        <div className='col-span-3 rounded-2xl p-1 py-2 border' >
                                                            <img src={ele.imagePath} className='rounded-xl' />
                                                            <div className='mx-2' >
                                                                <div className='mb-1' >
                                                                    <span className='text-[18px]' >{ele.carTitle}</span>
                                                                </div>
                                                                <span>{ele.price}</span>
                                                                <div className='text-blue-600 mt-2 text-[14px]' >{ele.breakup}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className='mt-2' >
                                        <span className='flex text-[12px] mb-2 text-gray-500 gap-1'  >Showing Avg. Ex-Showroom Price,<span className='flex items-center gap-1 underline text-gray-700' > Select City <FaRegPenToSquare /></span></span>
                                        <span className='flex items-center gap-1' >All Cars Under 10 Lakh <FaAngleRight /></span>
                                    </div>
                                </div>
                                : ""
                        }
                    </div>


                </div>
            </div>


        </div>
    )
}

export default CarsByBudget