import React from 'react';

import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import { TabsTech, TabTech } from '../components/tabs/tabsTech';
import LaunchVehicle from '../pages/tabsTech/LaunchVehicle';
import SpaceCapsule from '../pages/tabsTech/SpaceCapsule';
import Spaceport from '../pages/tabsTech/Spaceport';

const Technology = () => {
  return (
    <div className="bg-[url('../public/background-technology-desktop.jpg')] bg-no-repeat bg-center bg-cover">
      <Helmet>
        <title>Space || Technology</title>
        <meta name="description" content="contenido de la página technology" />
        {/* metas para SEO */}
      </Helmet>
      <Navbar />
      <section className="container min-h-screen text-white flex flex-col">
        <div className="w-1/2 p-10  max-[800px]:w-full max-[800px]:text-center">
          <p className="text-2xl text-white">
            <span className="font-mono mr-2 text-slate-400">03</span>
            SPACE LAUNCH 101
          </p>
        </div>
        <div className="flex max-sm:flex-col">
          <TabsTech>
            <TabTech component={<LaunchVehicle />} active>
              1
            </TabTech>
            <TabTech component={<SpaceCapsule />}>2</TabTech>
            <TabTech component={<Spaceport />}>3</TabTech>
          </TabsTech>
        </div>
      </section>
      <footer className="container text-sm text-slate-300 text-center py-4">
        Desarrollado por Chbwdev con ❤️
      </footer>
    </div>
  );
};

export default Technology;
