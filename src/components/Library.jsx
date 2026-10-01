import React from 'react';
import LoadedData from './LoadedData';



const getMuscle= async ()=>{
    const response= await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data=await response.json()
    return data;
}







const Library = async () => {
const musclesData= await getMuscle()

    return (
        <div className='px-8 py-4'>
<div className=''>
<h1 className='text-3xl font-bold uppercase'>the library</h1>
<p className='text-gray-500'>Twelve lifts covering every major muscle group</p>

    </div>   
    
    <div className='container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

{
    musclesData.map((muscle,ind)=>{
        return <LoadedData key={ind} muscle={muscle}></LoadedData>
    }
)}

    </div>
         </div>
    );
};

export default Library;