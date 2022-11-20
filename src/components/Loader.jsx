import {loader} from '../assets'
const Loader = ({title}) => (
  <div className='w-full flex flex-col justify-center items-center'>
    <img src={loader} alt="loader" title="loading" className='w-32 h-32' />
    <h2 className='text-white text-2xl'>{title || "Loading"}</h2>
  </div>
);

export default Loader;
