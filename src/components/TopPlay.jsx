import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';
import {useGetTopChartsQuery} from '../redux/services/shazamCore';
import 'swiper/css';
import 'swiper/css/free-mode';
const TopChartCard = ({song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => <div className='flex flex-row items-center justify-start'>
  <h3 className='font-bold text-base text-white mr-3'>{i + 1}.</h3>
  <div className='flex-1 flex flex-row justify-between items-center'>
    <img className='w-20 h-20 rounded-lg' src={song?.images?.coverart} alt={song?.title} />
    <div className='flex-1 flex flex-col justify-center items-center mx-3'>
      <Link to={`/songs/${song.key}`}>
        <p className='text-xl font-bold text-white'>{song?.title}</p>
      </Link>
      <Link to={`/artists/${song.artists[0].adamid}`}>
        <p className='text-base text-gray-300 mt-1'>{song?.subtitle}</p>
      </Link>
    </div>
  </div>
  <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song}
  handlePauseClick={handlePauseClick} handlePlayClick={()=>handlePlayClick(song,i)} />
</div>
const TopPlay = () => {
  const DivRef = useRef(null);
  useEffect(()=>{DivRef.current.scrollIntoView({behavior: 'smooth'})});
  const dispatch = useDispatch();
  const {activeSong, isPlaying} = useSelector((state)=>state.player);
  const {data} = useGetTopChartsQuery();
  
  const topPlays = data?.slice(0,5);
  const handlePlayClick = (song,i) => {
    dispatch(playPause(true));
    dispatch(setActiveSong({data, i , song}));
  }
  const handlePauseClick = () => {
    dispatch(playPause(false));
  }
  return (
    <div ref={DivRef}
    className='xl:ml-6 ml-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col'>
      <div className='flex-1 flex-col'>
        <div className='w-full flex flex-col'>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='capitalize text-2xl text-white font-bold'>top charts</h2>
            <Link to='/top-Charts'>
              <p className='text-gray-300 cursor-pointer text-base'>see more</p>
            </Link>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
              {topPlays?.map((song, i)=><TopChartCard key={song.key} song={song} i={i} 
              activeSong={activeSong}
              isPlaying={isPlaying}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
              />)}
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='capitalize text-2xl text-white font-bold'>top artists</h2>
            <Link to='/top-Charts'>
              <p className='text-gray-300 cursor-pointer text-base'>see more</p>
            </Link>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
              <Swiper
             slidesPerView='auto'
             spaceBetween={15}
             freeMode
             centeredSlides
             centeredSlidesBounds
             modules={[FreeMode]}
             className="mt-4"
              >
                {topPlays?.map((song,i)=><SwiperSlide key={song.key}
                className='shadow-lg rounded-full animate-slideright'
                style={{width: '25%', height: 'auto'}}
                >
                  <Link to={`/artists/${song?.artists[0].adamid}`}>
                    <img src={song?.images.background} alt='name' className='w-full rounded-full object-cover' />
                  </Link>
                </SwiperSlide>)}
              </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPlay;
