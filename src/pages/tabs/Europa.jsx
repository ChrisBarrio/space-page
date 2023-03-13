import React from 'react'
import dataDestination from '@/data/data.json';

import ImagePng from '../../assets/destination/image-europa.png'


const Europa = () => {
  const data = dataDestination.destinations[2];
  
  
  return (
    <section className="flex justify-around max-[800px]:flex-col">
      <div className="flex justify-center">
        <img src={ImagePng} alt="moon" />
      </div>
      <div className="flex flex-col gap-8 w-1/3 max-[800px]:mt-6 max-[800px]:w-full max-[800px]:text-center">
        <h2 className=" text-4xl font-thin uppercase font-serif ">
          {data.name}
        </h2>
        <p className="text-slate-300">{data.description}</p>
        <span className="h-[1px] w-full bg-slate-300"></span>
        <div className="flex">
          <div className="w-1/2 uppercase">
            <p className="text-slate-300 text-xs">avg distace</p>
            <p className="text-lg">{data.distance}</p>
          </div>
          <div className="w-1/2 uppercase">
            <p className="text-slate-300 text-xs">est. travel time</p>
            <p className="text-lg">{data.travel}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Europa