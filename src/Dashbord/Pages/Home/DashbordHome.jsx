import React, { Suspense, useState } from 'react';
import DashbordHeader from '../../components/DashbordHeader';
import { Outlet } from 'react-router-dom';
import Pizzaloader from '../../../components/Pizzaloader';

function DashbordHome() {
  const [navbar, setnavbar] = useState(false);

  return (
    <>
      <DashbordHeader navbar={navbar} setnavbar={setnavbar}></DashbordHeader>

      <div id="main-content" className={`min-h-screen relative overflow-y-auto transition-all duration-300 ${navbar ? 'ml-0' : 'lg:ml-64'}`}>
        <Suspense fallback={<Pizzaloader></Pizzaloader>}>

        <Outlet></Outlet>
        </Suspense>
      </div>
    </>
  );
}

export default DashbordHome;
