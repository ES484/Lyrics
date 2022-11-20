import SongBar from "./SongBar";

const RelatedSongs = ({relatedSong, activeSong, isPlaying, handlePlayClick, handlePauseClick, artistId, title}) => {
  return (
    <div className="flex flex-col">
    <h2 className="text-white font-bold text-2xl capitalize">{title}</h2>
    <div className="flex flex-col">
      {relatedSong?.map((song,i)=><SongBar
      key={`${song?.key}-${artistId}`}
      song={song}
      i={i}
      artistId={artistId}
      activeSong={activeSong}
      isPlaying={isPlaying}
      handlePlayClick={handlePlayClick}
      handlePauseClick={handlePauseClick}
      />)}
    </div>
  </div>
  )
}

export default RelatedSongs;
