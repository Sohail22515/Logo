import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // this fetch loads when  I am on the page(some some lag)
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Sohail22515')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // })

   const data= useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        {/* GitHub followers:{data.followers} */}
        GitHub: <a className='md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-1 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300' href={'https://github.com/Sohail22515?tab=repositories'} target={'_blank'}>Repositories</a>
        <img src={data.avatar_url} alt="Git Picture" width={300}></img>
    </div>
  )
} 

export default GitHub

export const gitHubInfoLoader=async()=>{ // this fetch works when i not on the page and i am hovering over the page icon, it reduces the lag
    const response =await fetch('https://api.github.com/users/Sohail22515')
    return response.json();
}