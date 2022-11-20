import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {DetailsHeader, Error, Loader, RelatedSongs} from '../components';
import {useGetArtistDetailsQuery} from '../redux/services/shazamCore';
const ArtistDetails = () => {
    const {id:artistId} = useParams();
    const {activeSong, isPlaying} = useSelector((state)=>state.player);
    const {data: artistData, isFetching, error} = useGetArtistDetailsQuery(artistId);
    if(isFetching) return <Loader title="Searching for song details" /> 
    if(error) return <Error />
    return(
        <div className='flex flex-col'>
            <DetailsHeader artistId={artistId} artistData={artistData} />
            <RelatedSongs 
            artistId={artistId}
            relatedSong={Object.values(artistData?.songs)}
            activeSong={activeSong}
            isPlaying={isPlaying}
            title='related artist'
            />
        </div>
    )
}

export default ArtistDetails;
