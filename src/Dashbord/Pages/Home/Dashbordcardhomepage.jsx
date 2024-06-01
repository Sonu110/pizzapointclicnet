import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_ENDPOINT from '../../../config';

function Dashbordcardhomepage() {
  const [data, setData] = useState({
    userCount: 0,
    productCount: 0,
    orderCount: 0,
  });
  const [loading, setLoading] = useState(true);
  console.log(data);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/dashboard`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const items = [
    {
      id: 1,
      name: "Products",
      path: "/dashboard/menu",
      num: data.productCount,
    },
    {
      id: 2,
      name: "Orders",
      path: "/dashboard/order",
      num: data.orderCount,
    },
    {
      id: 3,
      name: "Users",
      path: "/dashboard/users",
      num: data.userCount,
    }
  ];

  const loadingItems = [1, 2, 3];

  return (
    <main>
      <div className="pt-6 px-4">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {loading
              ? loadingItems.map((item) => (
                <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500" key={item}>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white shadow-indigo-50 shadow-md">
                    <div>
                      <div className="animate-pulse bg-gray-300 h-6 w-32 mb-2 rounded"></div>
                      <div className="animate-pulse bg-gray-300 h-6 w-24 mb-6 rounded"></div>
                      <div className="animate-pulse bg-gray-300 h-8 w-32 rounded"></div>
                    </div>
                    <div className="bg-gray-300 w-32 h-32 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))
              : items.map((item) => (
                <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500" key={item.id}>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white shadow-indigo-50 shadow-md">
                    <div>
                      <h2 className="text-gray-900 text-lg font-bold">Total {item.name}</h2>
                      <h3 className="mt-2 text-xl font-bold text-blue-500 text-left">+ {item.num}</h3>
                      <Link to={item.path}>
                        <button className="text-sm mt-6 px-4 py-2 bg-blue-400 text-white rounded-lg tracking-wider hover:bg-blue-300 outline-none">Click To See</button>
                      </Link>
                    </div>
                    <div className="bg-gradient-to-tr from-blue-500 to-blue-400 w-32 h-32 rounded-full shadow-2xl shadow-blue-400 border-white border-dashed border-2 flex justify-center items-center">
                      <div>
                        <h1 className="text-white text-2xl">{item.name}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashbordcardhomepage;
