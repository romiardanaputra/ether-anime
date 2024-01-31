import React, { useEffect, useState } from "react";
import { Navbar, AnimeList } from "../components";
import { images } from "../assets";
const Home = () => {
    const baseURLEndpoint = "https://api.jikan.moe/v4/anime";

    const [animeData, setAnimeData] = useState({ data: [], pagination: [] });

    // function to collect data
    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const response = await fetch(baseURLEndpoint)
                if (!response.ok) {
                    throw new Error("not ok")
                }
                const data = await response.json();
                console.log("🚀 ~ getAnimeApiData ~ data:", data)

                setAnimeData(data);
            } catch (error) {
                console.error('Error fetching anime data:', error);
            }
        };
        fetchAnime();
    }, [])

    // destructure the object
    // const { data } = animeData;

    return (
        <>
            <Navbar />
            {/* <h1>Anime List</h1>
            {animeData.data.map((anime) => (
                <div key={anime.mal_id}>
                    <h2>{anime.title}</h2>
                    <img src={anime.images.jpg.image_url} alt="" />
                    <p>URL: {anime.url}</p>
                </div>
            ))} */}
            {/* 
            {
                console.log(animeData.pagination)
            } */}


            {/* carousel section start*/}
            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={images.BgImageOshi} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={images.BgImageOshi} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={images.BgImageOshi} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* slider indicator */}
                    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>

                    {/* slider control */}
                    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
            {/* carousel section end */}
            <div className="xl:container xl:mx-auto xl:py-10 xl:max-w-screen-2xl">
                <div className="xl:bg-red xl:grid xl:grid-rows-1 xl:grid-flow-col xl:h-[600px] xl:space-x-10">
                    <div className="xl:h-[600px] xl:w-[900px]">
                        <img src={images.BgImageOshi} alt="Hosinoko" className="xl:rounded-2xl xl:w-full xl:h-full object-cover" />
                    </div>
                    <div className=" xl:w-full xl:flex xl:leading-relaxed xl:flex-col xl:h-[600px] xl:justify-center">
                        <div className="xl:text-[18px] ">
                            <div className="xl:space-y-5">
                                <h1 className="xl:text-5xl xl:font-medium xl:leading-tight xl:pb-10 ">Hoshinoko</h1>
                                <p>Duration: 1 Hour 28 Minutes</p>
                                <p>Status : On Going</p>
                                <p>Rating : 9.5</p>
                                <p>Producers : Producers name</p>
                                <p>Genre:</p>
                                <div className="badge-genre xl:flex xl:gap-3 xl:flex-wrap xl:w-3/4 xl:justify-start">
                                    <p className="xl:border-2 xl:border-solid xl:border-blue-500 xl:rounded-full xl:p-2 xl:px-4">superhero</p>
                                    <p className="xl:border-2 xl:border-solid xl:border-blue-500 xl:rounded-full xl:p-2 xl:px-4">Action</p>
                                    <p className="xl:border-2 xl:border-solid xl:border-blue-500 xl:rounded-full xl:p-2 xl:px-4">Fantasy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AnimeList cardImages={images} animeData={animeData} />
            </div>
        </>
    );
};

export default Home;
