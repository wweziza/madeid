export const Home = () => {
    return (
        <div className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-16 gap-8 lg:gap-16">
            <div className="text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    Let's Find The Most <span className="text-blue-500">Suitable Home</span> For You!
                </h1>
                <p className="text-gray-500">
                    We offer the best residence for you with a strategic location and the best home developer. Find your home right now!
                </p>
                <div className="flex flex-wrap justify-between space-x-4 md:space-x-12">
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold">29</p>
                        <p className="text-gray-500 text-sm">Success Partners</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold">92+</p>
                        <p className="text-gray-500 text-sm">Strategic Locations</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold">120K</p>
                        <p className="text-gray-500 text-sm">Satisfied Customers</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-center">
                            <div className="flex items-center space-x-3">
                                <img 
                                    src="/asset/locsearch.png" 
                                    alt="Location Icon" 
                                    width={24} 
                                    height={24} 
                                />
                                <div className="flex-grow">
                                    <label className="text-xs text-gray-500 block mb-1">Location</label>
                                    <input 
                                        type="text" 
                                        placeholder="Type your location" 
                                        className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-blue-500"
                                        aria-label="Location input"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <img 
                                    src="/asset/home.png" 
                                    alt="Home Type Icon" 
                                    width={24} 
                                    height={24} 
                                />
                                <div className="flex-grow">
                                    <label className="text-xs text-gray-500 block mb-1">Type</label>
                                    <input 
                                        type="text" 
                                        placeholder="Select your type" 
                                        className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-blue-500"
                                        aria-label="Home type input"
                                    />
                                </div>
                            </div>
                            
                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                                aria-label="Search for homes"
                            >
                                <span className="mr-2">
                                    <img 
                                        src="/asset/search-normal.png" 
                                        alt="Search" 
                                        width={20} 
                                        height={20} 
                                    />
                                </span>
                                <span>Search</span>
                            </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[500px] md:h-full overflow-hidden">
                <img 
                    src="/asset/map.png" 
                    alt="Map with location markers" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-80" />
                <div className="absolute top-[65px] left-[578px] flex gap-0">
                    <img 
                        src="/asset/smallhouse.png" 
                        alt="Small House" 
                        className="w-[72px] h-[87.59px]" 
                    />
                </div>
                <div className="absolute top-[37px] left-[223px] flex gap-0">
                    <img 
                        src="/asset/smallhouse.png" 
                        alt="Small House" 
                        className="w-[72px] h-[87.59px]" 
                    />
                </div>
                <div className="absolute top-[580px] left-[273px] flex gap-0">
                    <img 
                        src="/asset/smallhouse.png" 
                        alt="Small House" 
                        className="w-[72px] h-[87.59px]" 
                    />
                </div>
                <div className="absolute top-[679px] left-[512px] flex gap-0">
                    <img 
                        src="/asset/smallhouse.png" 
                        alt="Small House" 
                        className="w-[72px] h-[87.59px]" 
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 w-[90%] max-w-[470px] border border-blue-500 ">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d051/3f95/5919d11aab5caaf14208d46f6b99ce12?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5XJLcxdR6Xt~2OVU4l7jC5vsBDOLiOsjXLcpaiUDCXhJ5XZlz3wqbFaVxSD5rxIl2mlqVgRgJRSMKfEVlAmhWam3M3GLSy7pKzCPAjhD05rwPhtRftbEEQqnlbRLPswuEpszubaTq1-TT6LBw5y6Pek7-Zj1Nx6eeMI2F9z6cKZgmlMfzp0Mg9GkcsdZhtua5az89UIUcm~qzcc2xJrNoVjh5AgI1bNkLndag1Qluguc2bwwFcu~yTWHLzEtcUiHNmwwA4j4qUX445d3r6NDHs~SLRffbxYHDMOvzG4BRDS7OjiaMLxR2JrGyaUPx1~tia7rjkXXScAWSaLBXGV-g__" 
                        alt="Palm Tree Resident" 
                        className="w-[105px] h-[133.2px]"
                    />
                    <div className="relative overflow-hidden flex-grow p-4">
                        <p className="text-gray-500 text-sm truncate">Pandeyan, Yogyakarta</p>
                        <p className="text-lg md:text-xl font-bold truncate">Palm Tree Resident</p>
                        <div className="flex items-center gap-4 text-gray-500 mt-2 text-xs md:text-sm flex-wrap">
                            <div className="flex items-center space-x-1">
                                <img 
                                    src="/asset/Vector.png" 
                                    alt="Area" 
                                    className="w-4 h-4 object-contain"  
                                />
                                <span>120 M<sup>2</sup></span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <img 
                                    src="/asset/bathtub.png" 
                                    alt="Bathrooms" 
                                    className="w-4 h-4 object-contain"  
                                />
                                <span>4 Rooms</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <img 
                                    src="/asset/king_bed.png" 
                                    alt="Rooms" 
                                    className="w-4 h-4 object-contain"  
                                />
                                <span>2 Rooms</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};