import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa';
const PlayPause = ({song, handlePlayClick, handlePauseClick, activeSong, isPlaying}) => (
  isPlaying && activeSong?.title === song.title? 
  (<FaPauseCircle size={35} className="text-white" onClick={handlePauseClick} />) 
  : 
  (<FaPlayCircle size={35} className="text-white" onClick={handlePlayClick} />)
);

export default PlayPause;
