import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {DetailsHeader, Error, Loader, RelatedSongs} from '../components';
import {setActiveSong, playPause} from '../redux/features/playerSlice';
import { useGetRelatedSongsQuery, useGetSongDetailsQuery } from '../redux/services/shazamCore';
const SongDetails = () => {
    const {songid} = useParams();
    const dispatch = useDispatch();
    const {activeSong, isPlaying} = useSelector((state)=>state.player);
    const {data:songData, isFetching: isFetchingSongDetails, error: songError} = useGetSongDetailsQuery({songid});
    const {data:relatedSong, isFetching: isFetchingRelatedSong, error: relatedSongError} = useGetRelatedSongsQuery({songid});
    console.log({relatedSong});
    const handlePlayClick = (song, i) => {
        dispatch(playPause(true));
        dispatch(setActiveSong({data, i , song}));
      }
      const handlePauseClick = () => {
        dispatch(playPause(false));
      }
    if(isFetchingSongDetails || isFetchingRelatedSong) <Loader title="Searching for song details" /> 
    if(songError || relatedSongError) <Error />
    return(
        <div className='flex flex-col'>
            <DetailsHeader artistId="" songData={songData} />
            <div className='mb-10'>
                <h2 className='text-white text-3xl font-bold'>Lyrics</h2>
                <div className='mt-5'>
                    {songData?.sections[1].type==='LYRICS'?songData.sections[1].text.map((line,i)=><p key={i} className='text-gray-400 text-base my-1'>{line}</p>):<p>Sorry no lyrics found!</p>}
                </div>
            </div>
            <RelatedSongs 
            artistId=""
            relatedSong={relatedSong}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
            title='related songs'
            />
        </div>
    )
}

export default SongDetails;
