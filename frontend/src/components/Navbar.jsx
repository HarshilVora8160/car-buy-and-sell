import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
    return (
        // bg white no aapvathi background aave che
        <div className='sticky top-0 z-50 bg-white' >
            <div className="grid grid-cols-12 p-2 shadow-md" >
                <div className="flex col-span-12 justify-between mx-[5%]" >
                    <div className="flex items-center col-span-3 justify-center" >
                        <img className="h-10" src="https://cdn.vectorstock.com/i/500p/16/88/black-line-car-logo-template-vector-47361688.jpg" alt="" />
                    </div>
                    <div className="flex col-span-4 items-center gap-15" >
                        <li className="list-none font-semibold" >NEW CARS</li>
                        <li className="list-none font-semibold" >USED CARS</li>
                        <li className="list-none font-semibold" >REVIEWS & NEWS</li>
                    </div>
                    <div className="flex justify-center col-span-5 gap-4" >
                        <TextField
                            label="Search"
                            variant="outlined"
                            sx={{
                                width: 400,
                                "& .MuiOutlinedInput-input": {
                                    height: "20px", // Adjust as needed
                                    padding: "", // Adjust padding to center text vertically if needed
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
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