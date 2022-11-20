import React from 'react';
import {useSelector} from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import { useParams } from 'react-router-dom';
const Search = () => {
    const {activeSong, isPlaying} = useSelector((state)=>state.player);
    const {searchTerm} = useParams();
    const {data, isFetching, error} = useGetSongsBySearchQuery(searchTerm);
    const songs = data?.tracks?.hits?.map((song)=>song.track)
    if(isFetching) return <Loader title="Search songs around you" />
    if(error) return <Error />
    return (
        <div>
            <h2 className='capitalize text-2xl font-bold text-white'>
              Showing results for <span className='font-black'>{searchTerm}</span>
            </h2>
            <div className='flex flex-wrap gap-8 sm:justify-start justify-center'>
                {songs?.map((song, i)=><SongCard
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

export default Search;
