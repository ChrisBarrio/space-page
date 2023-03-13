import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="bg-[url('../public/background-home-desktop.jpg')] bg-no-repeat bg-center bg-cover">
      <Helmet>
        <title>Space || Home</title>
        <meta name="description" content="contenido de la página principal" />
        {/* metas para SEO */}
      </Helmet>
      <Navbar />
      <section className="container text-white flex gap-8 max-[800px]:flex-col min-h-screen">
        <div className="w-1/2 max-[800px]:w-full max-[800px]:text-center flex flex-col justify-center gap-8 max-sm:p-0 p-24">
          <p className="text-2xl text-slate-400 font-thin">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-8xl">SPACE</h1>
          <p className="text-lg text-slate-400 font-thin select-none ">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a trully out this
            world experience!
          </p>
        </div>
        <div className="w-1/2 max-[800px]:w-full max-[800px]:text-center flex justify-center items-center">
          <div className="flex justify-center items-center h-60 w-60 bg-slate-50 text-black rounded-full ">
            <Link to="/destination" className="text-2xl font-thin ">
              EXPLORE
            </Link>
          </div>
        </div>
      </section>
      <footer className="container text-sm text-slate-300 text-center py-4">
        Desarrollado por Chbwdev con ❤️
      </footer>
    </div>
  );
};

export default Home;
