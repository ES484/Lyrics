import { Loader, Error, SongCard } from '../components';
import {genres} from '../assets/constants';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { useSelector, useDispatch } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice';
const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong, isPlaying, genreListId} = useSelector((state)=>state.player);
    const {data, isFetching, error} = useGetSongsByGenreQuery(genreListId || 'POP');
    console.log(genreListId)
    
    if(isFetching){return<Loader title="Loading..." />}
    if(error){return<Error/>}
    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='capitalize text-bold text-white text-3xl'>discover</h2>
                <select className='text-gray-300 bg-black rounded-lg p-1' onChange={(e)=>dispatch(selectGenreListId(e.target.value.toUpperCase()))}
                value={genreListId ||'pop'}>
                    {genres.map((genera)=><option  key={genera.value}>{genera.title}</option>)}
                </select>
            </div>
            <div className='flex flex-wrap gap-8'>
                {data?.map((song, i)=> <SongCard 
                song={song} 
                i={i} 
                key={song.key}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                />
                )}
            </div>
        </div>
    )
}

export default Discover;
