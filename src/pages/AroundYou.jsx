import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongByCountryQuery } from '../redux/services/shazamCore';
const CountryTracks = () => {
    const [country, setCoutry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong, isPlaying} = useSelector((state)=>state.player);
    const {data, isFetching, error} = useGetSongByCountryQuery(country);
    console.log({data})
    // API Key: at_8ygDGN4an1AHct54J02YtPgL549Ie
    useEffect(()=>{
       const location = axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_8ygDGN4an1AHct54J02YtPgL549Ie&ipAddress=8.8.8.8`)
       .then((res)=>setCoutry(res?.data?.location?.country))
       .catch((err)=>console.log(err))
       .finally(()=>setLoading(false));
    },[]);
    if(isFetching) return <Loader title="Search songs around you" />
    if(error) return <Error />
    return (
        <div>
            <h2 className='capitalize text-2xl font-bold text-white'>around you</h2>
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

export default CountryTracks;
