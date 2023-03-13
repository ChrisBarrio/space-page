import React from 'react';

import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import { TabsCrew, TabCrew } from '../components/tabs/tabsCrew';
import Ansari from '../pages/tabsCrew/Ansari';
import Glover from '../pages/tabsCrew/Glover';
import Hurley from '../pages/tabsCrew/Hurley';
import Shuttleworth from '../pages/tabsCrew/Shuttleworth';

const Crew = () => {
  return (
    <div className="bg-[url('../public/background-destination-desktop.jpg')] bg-no-repeat bg-center bg-cover">
      <Helmet>
        <title>Space || Crew</title>
        <meta name="description" content="contenido de la página crew" />
        {/* metas para SEO */}
      </Helmet>
      <Navbar />
      <section className="container min-h-screen text-white flex flex-col ">
        <div className="w-1/2 p-10  max-[800px]:w-full max-[800px]:text-center">
          <p className="text-2xl text-white">
            <span className="font-mono mr-2 text-slate-400">02</span>
            MEET YOUR CREW
          </p>
        </div>
        <div className="flex flex-col-reverse">
          <TabsCrew>
            <TabCrew component={<Hurley />}>⚪</TabCrew>
            <TabCrew component={<Shuttleworth />}>⚪</TabCrew>
            <TabCrew component={<Glover />}>⚪</TabCrew>
            <TabCrew component={<Ansari />} active>
              ⚪
            </TabCrew>
          </TabsCrew>
        </div>
      </section>
      <footer className="container text-sm text-slate-300 text-center pt-8 pb-4">
        Desarrollado por Chbwdev con ❤️
      </footer>
    </div>
  );
};

export default Crew;
