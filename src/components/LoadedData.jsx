import Image from 'next/image';
import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { MdStarOutline } from "react-icons/md";




const LoadedData = ({muscle}) => {
    return (
       <div className="card bg-transparent border border-gray-700">
  <figure>
<Image src={muscle.image} alt={muscle.name} width={500} height={400}></Image>
  </figure>
  <div className="card-body">

<div className='flex gap-3 '>
  {
    muscle.muscleGroups.map((group, ind)=>{
return <span className='bg-lime-400 text-black text-[17px] font-semibold px-3 rounded-3xl' key={ind}>{group}</span>
    }
      
  )
  }
</div>


    <h2 className="card-title text-3xl my-2">{muscle.name}</h2>
    <h5 className='text-gray-500 text-lg'>{muscle.equipment}</h5>
    <hr className='bg-gray-950 my-1' />

    <div className="card-actions my-1 flex items-center gap-6 text-lg text-gray-500">
<div className='flex items-center gap-2'>
  <FaRegClock />
<h6>{muscle.duration} min</h6>
</div>
<div className='flex items-center gap-2'>
<FaFire />
<h6>{muscle.caloriesBurned} kcal</h6>
</div>
<div className='flex items-center gap-2'>
<MdStarOutline/>
<h6>{muscle.rating}</h6>
</div>
    </div>
  </div>
</div>
    );
};

export default LoadedData;