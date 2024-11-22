'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ListHouse = () => {
    const houses = [
        { 
            id: 1, 
            location: "Pandeyan, Yogyakarta", 
            title: "BASE 1", 
            bedrooms: 2, 
            description: "Our flagship model encompasses all the essentials. It's compact yet spacious, efficient yet adaptable.",
            imageLink: "https://s3-alpha-sig.figma.com/img/4f07/106b/84c6d418f131f18a0cde32de6a27dde2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdDPfFWBKWK3eQ-YH~seayejBkZZu80MboeS8C5rjF0Ew72S9R9qRCYni99XP-dU1SEyPn2gho-nRNNPw5guZ9Nw2T4kMvFEmadCT5mN7D3szZnd4kWpAu7ax-e4fqz~ZJbEHjBuMvZHLZbJ~WxssJ7p01j7cvml6yk7IjLNUdzQY1RlOuOMfhQ2u7bJGPex~mdgUWXAxV6-3huFmKLKhH4hHVNd9yxVafsRtu~Ps9umCj2~pLBSX1CQnL1Xuj70WGz-hL25xw6vzAmnQmOQDvQpeYAg50WZ4tt3PUVVaSwEmmrtmf5nVC3uvHS~BgU87s6HhIor8NG7iplmU63GvA__"
        },
        { 
            id: 2, 
            location: "Ngaglik, Yogyakarta", 
            title: "BASE 2", 
            bedrooms: 3, 
            description: "Our flagship model encompasses all the essentials. It's compact yet spacious, efficient yet adaptable.",
            imageLink: "https://s3-alpha-sig.figma.com/img/2d8e/ec90/c0c797102ef7e7899d0836f1ad9366fc?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lo05xwXoR1xF98EDVydxs7mwJoFQ6OLNsryY7nQwxNhJqW-bKkwEZ3XZEpmhTA64VvMA7K0gHDrLPwXyTYEhB4fi5hqdF6zU~RsmkUxTQQ8ROJDd8Xl6NOqFW8WcvmPneQe~zogGyCYhqfD0RxHIqn7SxqLSdqryrq-UUWW-MLTwrcN-2PHdSn0jTvJg1WyEE1z8ICyG2QakaELymGOr-Y79gdT5zdH0AQFVY4vlJ7WliCVvmMiEXReba3AsshC5ddcZ95UDxPOcluO17d5nJwG3LXag6GoeCw3nHTq7SD7QVQ~UpiG6WInbJVJws75VYCZ4DUVXleewaWFBps9wGA__"
        },
        { 
            id: 3, 
            location: "Pandeyan, Yogyakarta", 
            title: "BASE 3", 
            bedrooms: 4, 
            description: "Our flagship model encompasses all the essentials. It's compact yet spacious, efficient yet adaptable.",
            imageLink: "https://s3-alpha-sig.figma.com/img/f6d9/15f3/2a9950559621fd1ce5611e5c0dddd7f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bym7fIoqLNliIZgqq2yTVNDLlSWs3iJ000foJsZiGb0y4WtxlgRAlCcgkyp4MwlcWiOaSYkobuIwgQP-0Cx0c9Xo3I1kCNtmISU6SMNJb6-OHBFn8BeVaUsnhtsU3VOUN~1GkhGXXmcU1Cw5vUPA0DE8FxD97rK~XxjpGmRGpwJFdPlnheQOqgdvhjUMmwcBjvQTzn8o1KCw1tv2Gbrk2X1TU3FV9j2lnHTQa7EP3YCwGSJnS07gQFR3MfrruV7rYfUMNM6f0q2DeL4c0SWCpgDhJ3C8LrvPhS~gOKdbRRVRcgQUbO4uyL5ZQBKogaV87gx8JiIL7iiGSmKdHt6w3w__"
        },
        { 
            id: 4, 
            location: "Pandeyan, Yogyakarta", 
            title: "BASE 3", 
            bedrooms: 4, 
            description: "Our flagship model encompasses all the essentials. It's compact yet spacious, efficient yet adaptable.",
            imageLink: "https://s3-alpha-sig.figma.com/img/c2d0/2344/afd662e493c81a7cddfc38c3bc76b294?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsnBPH1viZ3XiPG3KbdfP~BCd9aTwzxzcxkKzjsmMqEHdt0WisZR0-NRoC2Zt27Euc1efqL-LPOB2iwavHKwGjh72KpuLm92t5Q4ytWhCZvgm3GfNv4vPYTQDX1O~R8-xjl5jDfoUOi09znttTDgr6nwUQCr-9BD3QvLPByfoO0f5TKaCsnFyOJs7Ygo6ehVs3trAAl3ZerKMZ-lHv~wnwFoxcHMxle8Lo8lFMTptCJr~JVEKiLeOHfX14y4tN-t8BqfhfB4eHcmSn~SBwSHESXky9aQCSzkrrICURpNWPQw4SQwBhdKDgKTZukOPC62vFnNm9kJitrbHXgfyI4UTA__"
        },
        { 
            id: 5, 
            location: "Pandeyan, Yogyakarta", 
            title: "BASE 3", 
            bedrooms: 4, 
            description: "Our flagship model encompasses all the essentials. It's compact yet spacious, efficient yet adaptable.",
            imageLink: "https://s3-alpha-sig.figma.com/img/4f07/106b/84c6d418f131f18a0cde32de6a27dde2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdDPfFWBKWK3eQ-YH~seayejBkZZu80MboeS8C5rjF0Ew72S9R9qRCYni99XP-dU1SEyPn2gho-nRNNPw5guZ9Nw2T4kMvFEmadCT5mN7D3szZnd4kWpAu7ax-e4fqz~ZJbEHjBuMvZHLZbJ~WxssJ7p01j7cvml6yk7IjLNUdzQY1RlOuOMfhQ2u7bJGPex~mdgUWXAxV6-3huFmKLKhH4hHVNd9yxVafsRtu~Ps9umCj2~pLBSX1CQnL1Xuj70WGz-hL25xw6vzAmnQmOQDvQpeYAg50WZ4tt3PUVVaSwEmmrtmf5nVC3uvHS~BgU87s6HhIor8NG7iplmU63GvA__"
        }
    ];
    
    const totalCards = houses.length;

    return (
        <div className="min-h-screen bg-white items-center px-4 sm:px-16 gap-16 mt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-[50px] mb-10">
                <h1 className="text-4xl font-bold mb-4 whitespace-nowrap">Upgrade Your Model.</h1>
                <p className="text-base mb-8 text-gray-500">Enhance your model with pre-designed add-ons like the Base Deck and the Base Deck+. Additional items are also available through key partnerships.</p>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                centeredSlides={false}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5, 
                    },
                    768: {
                        slidesPerView: 2, 
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3, 
                    },
                }}
                className="mySwiper"
            >
                {houses.map((house) => (
                    <SwiperSlide key={house.id}>
                        <div className="w-full max-w-[622px] flex-shrink-0 inline-block mb-10">
                            <div className="flex flex-col h-full">
                                <div className="h-[350px] overflow-hidden rounded-t-lg">
                                    <img 
                                        src={house.imageLink} 
                                        alt={`Modern two-story house ${house.title}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        <p className="text-gray-500 text-sm">{house.location}</p>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-2">{house.title}</h2>

                                        <div className="mt-4 flex flex-col">
                                            <div className="flex flex-col md:flex-row items-start justify-between">
                                                <div className="flex-1">
                                                    <p className="text-lg text-gray-700 font-semibold whitespace-nowrap">
                                                        {house.bedrooms} Bedrooms
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1 whitespace-nowrap">
                                                        Pre-launch: Prices TBA
                                                    </p>
                                                </div>
                                                <p className="mt-1 md:ml-4 text-sm text-gray-500 break-words whitespace-normal max-w-full">
                                                    {house.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
