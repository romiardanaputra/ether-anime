import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { images } from "../assets";
const Home = () => {
    const baseURLEndpoint = "https://api.jikan.moe/v4/anime";

    const [animeData, setAnimeData] = useState({ data: [], pagination: [] });

    // function to collect data
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


    // useEffect(() => {
    //     fetchAnime();
    // }, []);

    // destructure the object
    // const { data } = dataAnime;

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
            ))}

            {
                console.log(animeData.pagination)
            } */}
            <div className="xl:container xl:mx-auto xl:py-10 xl:max-w-screen-xl">
                <div className="xl:bg-red xl:grid xl:grid-rows-1 xl:grid-flow-col xl:h-[600px] xl:space-x-10">
                    <div className="xl:h-[600px] xl:w-[900px]">
                        <img src={images.BgImageOshi} alt="Hosinoko" className="xl:rounded-2xl xl:w-full xl:h-full object-cover" />
                    </div>
                    <div className=" xl:w-full xl:flex xl:leading-relaxed xl:flex-col xl:items-end xl:h-[600px] xl:justify-center">
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
            </div>
        </>
    );
};

export default Home;
