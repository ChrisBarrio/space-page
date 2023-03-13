import React from 'react';
import dataTech from '@/data/data.json';

import ImagePng from '@/assets/technology/image-spaceport-portrait.jpg';

const Spaceport = () => {
  const data = dataTech.technology[1];

  return (
    <section className="flex justify-center gap-8 max-[800px]:flex-col">
    <div className="flex flex-col gap-8 w-2/4 max-[800px]:w-full max-[800px]:text-center">
      <p className="text-lg font-thin uppercase font-serif text-slate-400 ">
        {data.subtitle}
      </p>
      <h2 className="text-slate-300 text-5xl uppercase">{data.name}</h2>
      <p className="text-sm text-slate-400 pr-28 max-[800px]:pr-0">{data.description}</p>
    </div>
    <div className='flex justify-center'>
      <img
        src={ImagePng}
        alt="anousheh-ansari"
        className="w-3/4 max-[800px]:w-10/12 object-contain"
      />
    </div>
  </section>
  );
};

export default Spaceport;