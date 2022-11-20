import React from 'react';
import {useSelector} from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
const TopCharts = () => {
    const {activeSong, isPlaying} = useSelector((state)=>state.player);
    const {data, isFetching, error} = useGetTopChartsQuery();
    if(isFetching) return <Loader title="Search songs around you" />
    if(error) return <Error />
    return (
        <div>
            <h2 className='capitalize text-2xl font-bold text-white mt-2 mb-4'>top charts</h2>
            <div className='flex flex-wrap gap-8 sm:justify-start justify-center'>
                {data?.map((song, i)=><SongCard
                key={song.key}
                data={data}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                />)}
            </div>
        </div>
    )
}

export default TopCharts;
