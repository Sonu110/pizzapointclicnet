import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MyContext } from '../context/context';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { SlBell } from "react-icons/sl";
import API_ENDPOINT from '../config';
import { memo } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';

function Navbar() {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menusideOpen, setMenusideOpen] = useState(false);
  
const {userdata,   logout , notifications, setnotifications} = useContext(MyContext)
const cart = useSelector(state => state.cart.items);
const handleScroll = useCallback(() => {
  const position = window.scrollY;
  setScrollPosition(position);
}, []);

const toggleMenu = useCallback(() => {
  setMenuOpen(prevMenuOpen => !prevMenuOpen);
}, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  const isHomeOrMenu = location.pathname === '/' || location.pathname === '/menu';


  useEffect(() => {
    if (userdata._id) {
      const socket = io(API_ENDPOINT);

      socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
        socket.emit('joinRoom', { UserId: userdata._id });
      });

      socket.on('CountUpdated', ({ count }) => {
        toast.success("new   notifaction ");
        setnotifications(count);
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from Socket.IO server');
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [userdata]);




  
  return (
    <header>
      <nav
        className={`flex-wrap flex z-50 transition-all duration-1000 ${
          menuOpen || !isHomeOrMenu || scrollPosition > 100 ? 'bg-white text-black' : 'bg-transparent text-white'
        } fixed left-0 right-0 top-0 shadow-sm border-solid border-b-2 border-white   md:px-10 py-4 items-center justify-between`}
      >
        <Link to={'/'} className="logo font-bold text-2xl md:text-3xl px-5 ">Pizza.Point</Link>
        <div className=' flex gap-3 items-center'>
      

        <div className={`navlist flex flex-col md:flex-row md:flex gap-6 items-center font-semibold md:static absolute w-full md:w-auto transition-all duration-300 ease-in-out ${
          menuOpen ? 'top-16  bg-white  pb-8  left-0' : 'top-[-490px] md:top-0 left-0'
        }`}>
          <Link to="/" className="focus:text-lg focus:text-blue-500 hover:border-b-2 border-blue-900 p-2 md:p-0">Home</Link>
          <Link to="/about" className="focus:text-lg focus:text-blue-500 hover:border-b-2 border-blue-900 p-2 md:p-0">About</Link>
          <Link to="/menu" className="focus:text-lg focus:text-blue-500 hover:border-b-2 border-blue-900 p-2 md:p-0">Menu</Link>
          <Link to="/contact" className="focus:text-lg focus:text-blue-500 hover:border-b-2 border-blue-900 p-2 md:p-0">Contact</Link>
         {
          userdata.length!==0  ?null
         : <Link to="/login" className="bg-blue-500 p-2 px-5 text-white rounded-md cursor-pointer hover:bg-blue-900"  >Login</Link>
        
        }
        </div>
      
        {
            userdata.Name  ?
        <>











        <div className=' text-3xl hover:bg-blue-800 cursor-pointer rounded-full   p-1  '>
          
          <span className=' relative flex items-center gap-1  hover:text-white' onClick={()=> setMenusideOpen(!menusideOpen)}>
          <span className={`text-md    flex items-center justify-center w-8 h-8 rounded-full    ${
          menuOpen || !isHomeOrMenu || scrollPosition > 100 ? 'bg-black text-white' : 'bg-transparent  bg-white  text-black'
        }  `}>
           
           <span  className={` -mt-2  font-shadows-into-light   `}> {userdata.Name[0]}
            </span>
            </span>
          </span>



        
          <div className={` ${menusideOpen ?"flex":"hidden"}  container absolute shadow-2xl  flex-col  text-sm bg-white text-black  items-start  gap-3 pb-3 right-10 left-[70%] md:left-[85%] lg:left-[91%] top-16  w-60  p-1 min-w-10  rounded-md    font-semibold `}>

            {
              userdata.rolls==='Admin'?  <Link to={'/dashboard'} className=' hover:bg-blue-600  w-full rounded-lg  hover:text-white  p-2'  >Dashboard</Link>
              :
              <Link  to={'/odertable'} className=' hover:bg-blue-600  w-full rounded-lg  hover:text-white  p-2'  onClick={()=> setMenusideOpen(!menusideOpen)}>Order</Link>
            }
           
            
            
            <div   className=' hover:bg-blue-600  w-full rounded-lg  hover:text-white  p-2'   onClick={()=>
         

              logout()
                 
            }>Logout</div>

          </div>
        
        

        
        </div>

        <Link to={`/notifaction/${userdata._id}`} className='relative text-xl p-2 cursor-pointer hover:text-white hover:bg-blue-700 rounded-full'>
      <SlBell></SlBell>
      {notifications > 0 && (
        <span className='absolute text-[0.8rem] -top-1 -right-1 px-1  h-4 rounded-full bg-red-700  ring-2 ring-green-400'>
          <span className='absolute inset-0 bg-red-700 rounded-full animate-ping'></span>
          <span className='relative text-white  -top-2'>
            {notifications}
          </span>
        </span>
      )}
    </Link>

    

          <Link to={'/cart'} className=' relative text-xl p-2 cursor-pointer  hover:text-white hover:bg-blue-700 rounded-full '>
         
            <FaShoppingCart></FaShoppingCart>
            <span className=' absolute text-[0.8rem] -top-1  -right-1  px-1 h-4 rounded-full bg-red-700'>
              <span className='  relative -top-2  text-white'>

{

              cart.length
}
              </span>
              
              </span>
          
          </Link>


        </>    
        

        :null
          }

          



       



          <div className="md:hidden mr-4" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        </div>
        
      </nav>
      <ToastContainer></ToastContainer>
    </header>
  );
}

export default memo( Navbar);
