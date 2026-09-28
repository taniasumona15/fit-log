import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const links= <> 
  <li><Link href="/">Workouts</Link></li>
    <li><Link href="/myplan">My plan</Link></li>

  </>
    return (
        <div className="max-lg:collapse lg:mb-48 p-4 bg-black">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div className='flex justify-center items-center'>
                      <Image src="/assets/logo.png" width="30" height="30" alt='dumble'/>

              <h2 className="btn btn-ghost text-xl">FitLog</h2>

      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {links}
      </ul>
    </div>
    <div className="navbar-end flex gap-4 ">
     <h3>Plan</h3>
     <span className='py-1 px-3 rounded-full font-bold border bg-transparent hover:bg-lime-400 hover:border-none hover:text-black'>0</span>
     <h3>Saved</h3>
     <span className='py-1 px-3 rounded-full font-bold border bg-transparent hover:bg-lime-400 hover:border-none hover:text-black'>0</span>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
          {links}

    </ul>
  </div>
  <hr className='bg-gray-800 m-2' />
</div>
    );
};

export default Navbar;