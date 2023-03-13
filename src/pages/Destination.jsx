import React from 'react';

import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import { Tabs, Tab } from '../components/tabs/index';
import Moon from '../pages/tabs/Moon';
import Mars from '../pages/tabs/Mars';
import Europa from '../pages/tabs/Europa';
import Titan from '../pages/tabs/Titan';

const Destination = () => {
  return (
    <div className="bg-[url('../public/background-destination-desktop.jpg')] bg-no-repeat bg-center bg-cover">
      <Helmet>
        <title>Space || Destination</title>
        <meta name="description" content="contenido de la página destination" />
        {/* metas para SEO */}
      </Helmet>
      <Navbar />
      <section className="container min-h-screen text-white flex flex-col">
        <div className="w-1/2 p-10 sm:w-full">
          <p className="text-2xl text-white">
            <span className="font-mono mr-2 text-slate-400">01</span>
            PICK YOUR DESTINATION
          </p>
        </div>
        <div className="flex flex-col">
          {/* tabs entre destinos, ver archivo components/tabs/index */}
          <Tabs>
            <Tab component={<Moon />}>Moon</Tab>
            <Tab component={<Mars />} active>
              Mars
            </Tab>
            <Tab component={<Europa />}>Europa</Tab>
            <Tab component={<Titan />}>Titan</Tab>
          </Tabs>
        </div>
      </section>
      <footer className="container text-sm text-slate-300 text-center pt-8 pb-4">
        Desarrollado por Chbwdev con ❤️
      </footer>
    </div>
  );
};

export default Destination;
