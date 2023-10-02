import React from 'react'
import { NavHashLink } from "react-router-hash-link"

const Menu = () => {
  return (
    <aside className='w-[100px] lg:block lg:fixed lg:inset-y-0 bg-fuchsia-100 hidden'>
      <div className='w-full inline-flex py-2 px-2 justify-center content-center border-b border-fuchsia-300'>
          <a href="" className="w-[90%]">
              <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/logo.svg" alt="paul logo" />
          </a>
      </div>
      <div className='flex flex-col justify-center items-center gap-8 antialiased mt-6 text-sm font-medium transition duration-300'>
        <NavHashLink to='/#home' className='flex flex-col items-center gap-2'>
          <BsHouseDoor size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
          <p>Home</p>
        </NavHashLink>
        <NavHashLink to='/#about' className='flex flex-col items-center gap-2'>
          <BsPerson size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
            <p>About</p>
        </NavHashLink>
            <NavHashLink to='/#services' className='flex flex-col items-center gap-2'>
                <BsBriefcase size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                <p>Services</p>
            </NavHashLink>
            <NavHashLink to='/#portfolio' className='flex flex-col items-center gap-2'>
                <BsColumns size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                <p>Portfolio</p>
            </NavHashLink>
            <NavHashLink to='/#testimonials' className='flex flex-col items-center gap-2'>
                <MdOutlineReviews size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                <p>ratings</p>
            </NavHashLink>
            <NavHashLink to='/#contact' className='flex flex-col items-center gap-2'>
                <BsTelephone size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                <p>Contact</p>
            </NavHashLink>
      </div>
    {/* <button className='absolute w-full bottom-0 flex justify-center'>
        <BsCircleHalf size={16} className='pt-2  px-4 box-content bg-fuchsia-300 rounded-t-lg'/>
    </button> */}
    </aside>
  )
}

export default Menu