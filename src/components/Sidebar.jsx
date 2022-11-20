import {logo} from '../assets';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import {links} from '../assets/constants';
import {RiCloseLine} from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi';
const Sidebar = () => {
  const NavLinks = ({handleClick}) => {
    return (
      <>
      <div>
        {links.map((link)=> <NavLink key={link.name} className="flex flex-row justify-start items-center 
        font-medium text-lg my-8 text-gray-400
        hover:text-cyan-400" to={link.to} onClick={handleClick && handleClick}>
          <link.icon className='w-6 h-6 mr-2' />
          {link.name}
        </NavLink>)
        }
      </div>
      </>
    )
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return(
    <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <img className='h-14 w-full object-contain' src={logo} alt="logo" />
      <NavLinks />
    </div>
    <div className='absolute md:hidden block top-6 right-3'>
    {mobileMenuOpen? (<RiCloseLine className='w-6 h-6 text-white mr-2' onClick={()=>setMobileMenuOpen(false)} />) : 
    (<HiOutlineMenu className='w-6 h-6 text-white mr-2' onClick={()=>setMobileMenuOpen(true)} />)}
    </div>
    <div className='md:hidden block top-6 right-3 absolute'>
      {mobileMenuOpen?<RiCloseLine className='w-6 h-6 mr-2 text-white cursor-pointer' onClick={()=>setMobileMenuOpen(false)}/>: 
      <HiOutlineMenu className='w-6 h-6 mr-2 text-white cursor-pointer' onClick={()=>setMobileMenuOpen(true)} />}
    </div>
    <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl bg-slate-900
                    p-6 md:hidden z-10 smooth-transition ${mobileMenuOpen? 'left-0': '-left-full'}`}>
        <img className='h-14 w-full object-contain' src={logo} alt="logo" />
        <NavLinks handleClick={()=>setMobileMenuOpen(false)} />
      </div>
    </>
  )
  };

export default Sidebar;
