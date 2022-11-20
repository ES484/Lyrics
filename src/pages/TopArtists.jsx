import React from 'react';
import {useSelector} from 'react-redux';
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
const TopArtists = () => {
    const {activeSong, isPlaying} = useSelector((state)=>state.player);
    const {data, isFetching, error} = useGetTopChartsQuery();
    if(isFetching) return <Loader title="Search songs around you" />
    if(error) return <Error />
    return (
        <div>
            <h2 className='capitalize text-2xl font-bold text-white mt-2 mb-4'>top artists</h2>
            <div className='flex flex-wrap gap-8 sm:justify-start justify-center'>
                {data?.map((track)=><ArtistCard
                track={track}
                key={track.key}
                />)}
            </div>
        </div>
    )
}

export default TopArtists;
