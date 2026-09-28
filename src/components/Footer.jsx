import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center p-4 bg-black'>
            <div className='flex justify-between items-center'>
                <Image src="/assets/logo.png" width="30" height="30" alt='dumble'/>
                <h2 className="btn btn-ghost text-xl">FitLog</h2>
            </div>
            <div>
                <p>@ 2026 FitLog - Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;