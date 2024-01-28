import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
const Home = () => {
    const baseURL = "https://api.jikan.moe/v4/anime/1/full";

    const defaultValue = [];
    const [dataAnime, setDataAnime] = useState(defaultValue);

    // function to collect data
    const getAnimeApiData = async () => {
        try {
            const response = await fetch(baseURL)
            if (!response.ok) {
                throw new Error("not ok")
            }
            const data = await response.json();
            console.log("🚀 ~ getAnimeApiData ~ data:", data)
        
            setDataAnime(data);
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    };
    
    useEffect(() => {
        getAnimeApiData();
    }, []);

    return (
        <>
            <Navbar />
        </>
    );
};

export default Home;
