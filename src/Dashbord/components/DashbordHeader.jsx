import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaClipboardList, FaUsers, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { MyContext } from '../../context/context';
import API_ENDPOINT from '../../config';

import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DashbordHeader({ navbar, setnavbar }) {
  const navigate = useNavigate();
  const {logout  , setnotifications  ,notifications  , userdata } = useContext(MyContext)

  const handleLogoutClick = (event) => {
    event.preventDefault();

    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      logout()
    }
  };
  useEffect(() => {
    if (userdata._id) {
      const socket = io(API_ENDPOINT);

      socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
        socket.emit('joinRoom', { UserId: userdata._id });
      });

      socket.on('Countneworder', ({ count }) => {
        toast.success("new  order ");
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









  const menuItems = [
    { id: 1, name: "Dashboard", path: "", icon: <FaTachometerAlt /> },
    { id: 2, name: "Menu", path: "menu", icon: <FaClipboardList /> },
    { id: 3, name: "Users", path: "users", icon: <FaUsers /> },
    { id: 4, name: "Order", path: "order", orderCount: notifications   , icon: <FaShoppingCart /> },
    { id: 5, name: "Logout", path: "/", icon: <FaSignOutAlt />, onClick: handleLogoutClick }
  ];

  return (
    <div>
      <nav className="bg-white border-b border-gray-200 p-2 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                onClick={() => setnavbar(!navbar)}
                aria-expanded="true"
                aria-controls="sidebar"
                className="mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className={`w-6 h-6 ${navbar ? 'hidden' : 'block'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className={`w-6 h-6 ${navbar ? 'block' : 'hidden'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div className="text-xl font-bold flex items-center lg:ml-2.5">
                <span className="self-center whitespace-nowrap">Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex overflow-hidden bg-white pt-16">
        <aside
          id="sidebar"
          className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75`}
          aria-label="Sidebar"
        >
          <div className={`  ${navbar ? 'hidden' : ''} relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0`}>
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto ">
              <div className="flex-1 px-3 bg-white divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  {menuItems.map(item => (
                    <li key={item.id}>
                      {item.name === "Logout" ? (
                        <a
                          href="/"
                          onClick={item.onClick}
                          className="text-base hover:text-white text-gray-900 font-semibold cursor-pointer rounded-lg flex items-center p-2 hover:bg-blue-500 group"
                        >
                          <span className='p-2 rounded-full text-white bg-blue-500'>
                            {item.icon}
                          </span>
                          <span className="ml-3">{item.name}</span>
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className="text-base hover:text-white text-gray-900 font-semibold cursor-pointer rounded-lg flex items-center p-2 hover:bg-blue-500 group"
                        >
                          <span className='p-2 rounded-full text-white bg-blue-500'>
                            {item.icon}
                          </span>
                          <span className="ml-3">{item.name}</span>
                          {item.name === "Order" &&   item.orderCount !== undefined  && item.orderCount >0  && (
                            <span className="ml-auto bg-red-500 text-white text-sm font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded-full">
                              {item.orderCount}
                            </span>
                          )}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          
            <ToastContainer
        position="top-right"
        className={'  mt-20'}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999 }} // Ensure the ToastContainer is on top
      />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default DashbordHeader;
