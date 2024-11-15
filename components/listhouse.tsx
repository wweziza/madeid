<<<<<<< HEAD
'use client';
=======
'use client'
>>>>>>> af8608d (first commit)
import React, { useState, useRef, useEffect } from 'react';

export const ListHouse = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
<<<<<<< HEAD
    
    const houses = [
        { id: 1, location: "Pandeyan, Yogyakarta", title: "BASE 1", bedrooms: 2, description: "Detailed description for BASE 1" },
        { id: 2, location: "Pandeyan, Yogyakarta", title: "BASE 2", bedrooms: 3, description: "Detailed description for BASE 2" },
        { id: 3, location: "Pandeyan, Yogyakarta", title: "BASE 3", bedrooms: 4, description: "Detailed description for BASE 3" }
    ];
    
    const totalCards = houses.length;
=======
    const totalCards = 3;
>>>>>>> af8608d (first commit)

    const handleNext = () => {
        if (currentPage < totalCards - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: currentPage * containerRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    }, [currentPage]);

    return (
        <div className="min-h-screen bg-white items-center px-16 gap-16 mt-10">
            <div className="flex justify-between items-center space-x-[50px]">
                <h1 className="text-4xl font-bold mb-4 whitespace-nowrap mr-[15px]">Upgrade Your Model.</h1> 
                <p className="text-base mb-8 text-gray-500 ml-[15px]">Enhance your model with pre-designed add-ons like the Base Deck and the Base Deck+. Additional items are also available through key partnerships.</p>
            </div>
            
            <div 
                ref={containerRef}
                className="overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth no-scrollbar"
                style={{ 
                    scrollBehavior: 'smooth',
                    overscrollBehaviorX: 'contain'
                }}
            >
                <div className="inline-flex space-x-8 w-full">
<<<<<<< HEAD
                    {houses.map((house) => (
                        <div 
                            key={house.id} 
=======
                    {[1, 2, 3].map((item) => (
                        <div 
                            key={item} 
>>>>>>> af8608d (first commit)
                            className="w-[622px] h-[565px] flex-shrink-0 inline-block"
                        >
                            <div className="h-full flex flex-col">
                                <div className="h-[350px] overflow-hidden rounded-t-lg">
                                    <img 
                                        src="https://placehold.co/800x600" 
<<<<<<< HEAD
                                        alt={`Modern two-story house ${house.title}`}
=======
                                        alt={`Modern two-story house ${item}`}
>>>>>>> af8608d (first commit)
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex-grow flex flex-col justify-between">
                                    <div>
<<<<<<< HEAD
                                        <p className="text-gray-500 text-sm">{house.location}</p>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-2">{house.title}</h2>
=======
                                        <p className="text-gray-500 text-sm">Pandeyan, Yogyakarta</p>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-2">BASE {item}</h2>
>>>>>>> af8608d (first commit)
                                        
                                        <div className="mt-4">
                                            <div className="flex items-start">
                                                <div>
                                                    <p className="text-lg text-gray-700 font-semibold whitespace-nowrap">
<<<<<<< HEAD
                                                        {house.bedrooms} Bedrooms
=======
                                                        {item + 1} Bedrooms
>>>>>>> af8608d (first commit)
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1 whitespace-nowrap">
                                                        Pre-launch: Prices TBA
                                                    </p>
                                                </div>
                                                <p className="ml-20 text-sm text-gray-500">
<<<<<<< HEAD
                                                    {house.description}
=======
                                                    Detailed description for BASE {item}
>>>>>>> af8608d (first commit)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
<<<<<<< HEAD
                                </ div>
=======
                                </div>
>>>>>>> af8608d (first commit)
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <button 
                    onClick={handlePrev} 
                    disabled={currentPage === 0}
<<<<<<< HEAD
                    aria-label="Previous house"
=======
>>>>>>> af8608d (first commit)
                    className={`bg-white border border-gray-300 text-gray-500 rounded-full p-2 mx-1 
                        ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                    onClick={handleNext} 
                    disabled={currentPage === totalCards - 1}
<<<<<<< HEAD
                    aria-label="Next house"
=======
>>>>>>> af8608d (first commit)
                    className={`bg-white border border-gray-300 text-gray-500 rounded-full p-2 mx-1 
                        ${currentPage === totalCards - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
<<<<<<< HEAD
        </div>
    );
};
=======


        </div>
    );
};
>>>>>>> af8608d (first commit)
