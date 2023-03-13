import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LayoutPublic = () => {
  return (
    <div className="bg-[url('../public/background-home-desktop.jpg')] bg-no-repeat bg-center bg-cover">
      <Navbar />
      <main className="container min-h-screen">
        <Outlet />
      </main>
      <footer className="container text-sm text-slate-300 text-center py-4">Desarrollado por Chbwdev con ❤️</footer>
    </div>
  );
};
export default LayoutPublic;
