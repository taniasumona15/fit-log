import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center lg:w-[90%] container mx-auto height-[85vh] bg-[#1A1A1A] my-10 p-8 lg:p-16 rounded-2xl gap-10'>
            <div className='banner-heading lg:w-[43%]'>
                <h6 className='text-lime-400 uppercase'>Workout Library</h6>
                <h1 className='text-6xl uppercase font-extrabold leading-20'>Train with Intent. Log every set.</h1>
                <p className='text-gray-500 my-8'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <button className='bg-lime-400 text-black py-5 px-7 font-bold rounded-xl uppercase hover:border border-lime-400 hover:bg-transparent hover:text-lime-400'>Browse workouts</button>
            </div>
            <div className='banner-iamge lg:w-[43%] flex justify-end'>
                <Image src='/assets/banner.png' height={400} width="400" alt="bannner-img"></Image>
            </div>
        </div>
    );
};

export default Banner;