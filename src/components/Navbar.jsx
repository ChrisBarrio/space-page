import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiAlignRight, BiXCircle } from 'react-icons/bi';
import logo from '../assets/shared/logo.svg';

const linksItems = [
  {
    path: '/',
    name: 'Home',
    number: '00',
  },
  {
    path: '/destination',
    name: 'Destination',
    number: '01',
  },
  {
    path: '/crew',
    name: 'Crew',
    number: '02',
  },
  {
    path: '/technology',
    name: 'Technology',
    number: '03',
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <header
      className="flex justify-between items-center
    py-5 pl-5 relative"
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-10 select-none" />
      </Link>
      <span className="absolute left-32 w-[450px] h-[.5px] bg-slate-500 bg-opacity-40 max-[800px]:hidden"></span>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="text-white sm:hidden mr-4"
      >
        {!toggle ? <BiXCircle size={40} /> : <BiAlignRight size={40} />}
      </button>

      <nav
        className={
          !toggle
            ? `absolute container flex w-full flex-col top-20 left-0 gap-14 z-10 bg-slate-800 text-center justify-center py-7  navbar navbar-dark bg-dark text-white`
            : `container flex w-3/4 gap-14 bg-slate-400 bg-opacity-30  justify-center py-7  navbar navbar-dark bg-dark text-white max-sm:hidden `
        }
      >
        {linksItems.map((e) => (
          <div className="relative" key={e.path}>
            <Link
              to={e.path}
              className="btn btn-outline-primary font-thin peer select-none"
            >
              <span className="font-mono mr-2">{e.number}</span>
              {e.name}
            </Link>
            <span className="absolute h-[3px] bg-white left-0 -bottom-7 w-full opacity-0 peer-focus:opacity-100"></span>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
