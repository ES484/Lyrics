// import {Link} from 'react-router-dom';
// import {useDispatch} from 'react-redux';
// import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';

import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { useDispatch } from 'react-redux';

const SongCard = ({song, i, activeSong, isPlaying, data}) => {
  const dispatch = useDispatch();
  const handlePlayClick = () => {
    dispatch(playPause(true));
    dispatch(setActiveSong({data, i , song}));
  }
  const handlePauseClick = () => {
    dispatch(playPause(false));
  }
  return (
    <div className='flex flex-col w-[150px] p-2 bg-white bg-opacity-10 rounded-md
  animate-slideup cursor-pointer justify-center items-center'>
    <div className="relative w-full h-36 group">
      <div className={`justify-center items-center bg-black opacity-50 absolute inset-0 group-hover:flex
      ${activeSong?.title === song.title? 'flex bg-black bg-opacity-70': 'hidden'}`}>
        <PlayPause song={song} handlePlayClick={handlePlayClick} handlePauseClick={handlePauseClick} 
        isPlaying={isPlaying} activeSong={activeSong} />
      </div>
      <img src={song.images?.coverart} className="w-full h-full" />
    </div>
    <div className="mt-2 flex flex-col">
        <p className="font-semibold text-white truncate hover:text-clip w-24">
          <Link to={`/songs/${song.id}`} />
          {song.title}
        </p>
        <p className="text-gray-300 truncate text-sm mt-1 hover:text-clip w-24">
          <Link to={song.artists? `/artists/${song?.artists[0].adamid}`: `/top-artists`} />
          {song.subtitle}
        </p>
      </div>
  </div>
  )
  };

export default SongCard;
