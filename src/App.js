import React, { useContext, lazy } from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Protexted from './Protected/Protexted';
import { MyContext } from './context/context';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Menuhomepage = lazy(() => import('./pages/Menuhomepage'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const DashbordHome = lazy(() => import('./Dashbord/Pages/Home/DashbordHome'));
const Dashbordcardhomepage = lazy(() => import('./Dashbord/Pages/Home/Dashbordcardhomepage'));
const Menulist = lazy(() => import('./Dashbord/Pages/Menus/Menulist'));
const Orderslists = lazy(() => import('./Dashbord/Pages/Orders/Orderslist'));
const Userlist = lazy(() => import('./Dashbord/Pages/Users/Userlist'));
const CartTwo = lazy(() => import('./pages/Cart/Cart'));
const Menuform = lazy(() => import('./Dashbord/Pages/Menus/Menufrom'));
const Menuupdateform = lazy(() => import('./Dashbord/Pages/Menus/Menuupdateform'));
const Odertracker = lazy(() => import('./pages/Odertracker'));
const Odertable = lazy(() => import('./pages/Odertable'));
const Oderdetails = lazy(() => import('./Dashbord/Pages/Orders/Oderdetails'));
const Notification = lazy(() => import('./pages/Notifaction'));

function App() {
  const { userdata } = useContext(MyContext);

  console.log(userdata);

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menuhomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartTwo />} />
        <Route path="/odertrack/:id" element={<Odertracker />} />
        <Route path="/odertable" element={<Odertable />} />
        <Route path="/notifaction/:id" element={<Notification />} />
      </Route>

      <Route path='/dashboard' element={<Protexted user={userdata.rolls}><DashbordHome /></Protexted>}>
        <Route index element={<Dashbordcardhomepage />} />
        <Route path='menu' element={<Menulist />} />
        <Route path='newmenu' element={<Menuform />} />
        <Route path='editmenu/:id' element={<Menuupdateform />} />
        <Route path='order' element={<Orderslists />} />
        <Route path="odertrack/:id" element={<Oderdetails />} />
        <Route path='users' element={<Userlist />} />
      </Route>
    </>
  ));

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
