import React, { useEffect, useState } from 'react';
import API_ENDPOINT from '../config';
import { Link } from 'react-router-dom';

function Odertable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch order details from the API
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/oderdetails`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <div className="w-auto min-h-screen mt-10 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-2 py-10">
          <div className="mt-4 w-full">
            <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
              <form className="relative flex w-full max-w-2xl items-center">
                <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input type="text" name="search" className="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2" placeholder="Search by Order ID, Date, Customer" />
              </form>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
            {loading ? (
              // Display loading message or spinner
              <div className="py-4 text-center text-sm text-gray-600">Loading...</div>
            ) : (
              <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
                <thead className="hidden border-b lg:table-header-group">
                  <tr>
                    <td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Order Date
                      <svg xmlns="http://www.w3.org/2000/svg" className="float-right mt-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Order ID</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Product Name</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Payment Mode</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Quantity</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                      Price
                      <svg xmlns="http://www.w3.org/2000/svg" className="float-right mt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Status</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Details</td>
                  </tr>
                </thead>

                <tbody className="bg-white lg:border-gray-300">
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <tr key={order._id} className="border-solid border-orange-800 border-b-2">
                        <Link to={`/odertrack/${order?._id}`}>
                          <td className="whitespace-no-wrap py-8 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                            {new Date(order.orderDate).toLocaleDateString()}
                            <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                              {order.items.map((item, index) => (
                                <div className="flex items-center" key={index}>
                                  <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                  </div>
                                  <span>{item.name}</span>
                                </div>
                              ))}
                              {order.items.map((item, index) => (
                                <div className="flex items-center" key={index}>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                  </svg>
                                  <span>{item.quantity} Kg, </span>
                                </div>
                              ))}
                            </div>
                          </td>
                        </Link>
                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order?.Oddernumber}</td>
                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                          <span className="flex flex-wrap gap-2">
                            {order.items.map((item, index) => (
                              <span key={index}>{item.name} <span className="font-extrabold text-lg">,</span></span>
                            ))}
                          </span>
                        </td>
                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                          {order.paymentMode ? "Online Payment" : "Cash on Delivery"}
                        </td>
                        <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                          {order.items.map((item, index) => (
                            <span key={index}>{item.quantity} Kg, </span>
                          ))}
                        </td>
                        <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                          <span>${order?.totalPrice}</span>
                          <span className="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">{order.status}</span>
                        </td>
                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                          <span className="ml-2 mr-3 whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-purple-800">{order.status}</span>
                        </td>
                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                          <Link to={`/odertrack/${order?._id}`} className="bg-blue-800 p-2 px-8 text-white rounded-lg">Click</Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="py-4 text-center text-sm text-gray-600">
                        No orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Odertable;
