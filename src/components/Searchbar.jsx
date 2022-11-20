import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';
const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
  }
  return (
    <form onSubmit={handleSubmit} autoComplete='off' className='p-2 mt-3 text-xl text-gray-400 focus-within:text-gray-600'>
      <label htmlFor='search-field'></label>
      <div className='flex flex-row justify-start items-center'>
        <FiSearch className='ml-2 mr-2 w-6 h-6' />
        <input 
        className='border-none outline-none text-white placeholder-gray-400 text-base flex-1 bg-transparent'
        name='search-field' 
        autoComplete='off'
        id='search-field'
        placeholder='Search'
        type='search'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
         />
      </div>
    </form>
  )
}
export default Searchbar;
