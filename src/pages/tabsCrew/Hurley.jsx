import React from 'react'
import dataCrew from '@/data/data.json';

import ImagePng from '@/assets/crew/image-douglas-hurley.png';

const Hurley = () => {
  const data = dataCrew.crew[0];


  return (
    <section className="flex justify-around max-[800px]:flex-col">
      <div className="flex flex-col gap-8 w-1/3 max-[800px]:w-full max-[800px]:text-center max-[800px]:mt-6">
        <p className="text-2xl font-thin uppercase font-serif text-slate-400 ">
          {data.role}
        </p>
        <h2 className="text-slate-300 text-5xl uppercase">{data.name}</h2>
        <p className="text-sm text-slate-400 pr-28 max-[800px]:pr-0">
          {data.bio}
        </p>
      </div>
      <div className="flex justify-center max-[800px]:mt-8">
        <img
          src={ImagePng}
          alt="anousheh-ansari"
          className="max-[800px]:w-1/2 max-sm:w-full h-[400px] object-contain"
        />
      </div>
    </section>
  )
}

export default Hurley