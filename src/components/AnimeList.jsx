import React from 'react'

const AnimeList = ({ cardImages, animeData }) => {
    return (
        <>
            <div className="anime-list xl:w-full">
                <h2 className='xl:leading-relaxed xl:font-medium text-3xl py-5'>Recently Updated</h2>
                <div className="xl:flex xl:flex-wrap xl:w-full xl:gap-5">
                    {
                        animeData.data && animeData.data.map((anime) => (
                            <div key={anime.mal_id}>
                                <div className="anime-card xl:w-[200px] xl:h-[270px] xl:bg-red-500 xl:rounded-lg xl:overflow-hidden xl:shadow-2xl">
                                    <img src={anime.images.jpg.image_url} alt="hoshinoko" className='' />
                                </div>
                                <p className='xl:py-3 xl:font-medium xl:text-[18px] xl:w-[200px]'>{anime.title}</p>
                            </div>
                        ))}
                </div>

            </div>

        </>
    )
}

export default AnimeList