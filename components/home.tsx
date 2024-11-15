export const Home = () => {
    return (
        <div className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-16 gap-16">
            <div className="text-left">
                <h1 className="text-5xl font-bold leading-tight">
                    Let's Find The Most <span className="text-blue-500">Suitable Home</span> For You!
                </h1>
                <p className="text-gray-500 mt-4">
                    We offer the best residence for you with a strategic location and the best home developer. Find your home right now!
                </p>
                <div className="flex mt-8 space-x-12">
                    <div className="text-center">
                        <p className="text-3xl font-bold">29</p>
                        <p className="text-gray-500">Success Partners</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">92+</p>
                        <p className="text-gray-500">Strategic Locations</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">120K</p>
                        <p className="text-gray-500">Satisfied Customers</p>
                    </div>
                </div>

                <div className="mt-12 bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-map-marker-alt text-blue-500" aria-hidden="true"></i>
                        <input 
                            type="text" 
                            placeholder="Type your location" 
                            className="border-none focus:outline-none text-gray-500"
                            aria-label="Location input"
                        />
                    </div>
                    <div className="border-l h-6"></div>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-home text-blue-500" aria-hidden="true"></i>
                        <input 
                            type="text" 
                            placeholder="Select your type" 
                            className="border-none focus:outline-none text-gray-500"
                            aria-label="Home type input"
                        />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2" aria-label="Search for homes">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        <span>Search</span>
                    </button>
                </div>
            </div>

            <div className="relative w-full h-full">
                <img 
                    src="/asset/map.png" 
                    alt="Map with location markers" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-80" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
                    <img 
                        src="https://placehold.co/100x100" 
                        alt="Palm Tree Resident" 
                        className="w-16 h-16 rounded-lg"
                    />
                    <div>
                        <p className="text-gray-500">Pandeyan, Yogyakarta</p>
                        <p className="text-xl font-bold">Palm Tree Resident</p>
                        <div className="flex items-center space-x-4 text-gray-500 mt-2 whitespace-nowrap">
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
                                    src="/asset/king_bed.png" 
                                    alt="Rooms" 
                                    className="w-4 h-4 object-contain"  
                                />
                                <span>2 Rooms</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <img 
                                    src="/asset/bathtub.png" 
                                    alt="Bathrooms" 
                                    className="w-4 h-4 object-contain"  
                                />
                                <span>4 Bathrooms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};