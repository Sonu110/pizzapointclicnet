import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Call from '../components/call/Call';
import Pizzaloader from '../components/Pizzaloader';

function Layout() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Pizzaloader></Pizzaloader>}>
        <Outlet />
      </Suspense>
      <Call />
      <Footer />
    </div>
  );
}

export default Layout;
