import {useNavigate} from 'react-router-dom';
const ArtistCard = ({track}) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/artists/${track?.artists[0].adamid}`)
  }
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer'
    onClick={clickHandler}>
      <img className='w-full rounded-lg h-56' src={track?.images?.coverart} />
      <p className='mt-4 text-lg truncate font-semibold text-white'>{track?.subtitle}</p>
    </div>
  )
}

export default ArtistCard;
