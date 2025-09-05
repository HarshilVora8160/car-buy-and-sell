
const Navbar = () => {
    return (
        <div>
            <div className="grid grid-cols-12 p-2 shadow-md" >
                <div className="flex col-span-12 justify-between mx-[15%]" >
                    <div className="flex items-center col-span-3 justify-center" >
                        <img className="h-10" src="https://cdn.vectorstock.com/i/500p/16/88/black-line-car-logo-template-vector-47361688.jpg" alt="" />
                    </div>
                    <div className="flex col-span-4 items-center gap-15" >
                        <li className="list-none font-semibold" >NEW CARS</li>
                        <li className="list-none font-semibold" >USED CARS</li>
                        <li className="list-none font-semibold" >REVIEWS & NEWS</li>
                    </div>
                    <div className="flex justify-center col-span-5 gap-4" >
                        <div className="flex justify-between border border-gray-600 text-gray-800 rounded-md px-3 w-80 p-2" >
                            <input type="text" placeholder="Search" className="text-md font-semibold" />
                            <i className="flex items-center bi bi-search text-xl" ></i>
                        </div>
                        <div className="flex gap-4 items-center text-2xl font-bold" >
                            <i className="bi bi-geo-alt"></i>
                            <i className="bi bi-translate"></i>
                            <i className="bi bi-person"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar