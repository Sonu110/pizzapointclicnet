import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_ENDPOINT from '../../../config';
import Status from '../../../pages/Status';
import Statusbox from './Status';

function Oderdetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/oderdetails/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setOrder(data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order details:', error);
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>No order found</div>;
  }

  return (
    <div>
      <section className="bg-white antialiased  dark:bg-gray-900 md:py-16 px-4">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Track the delivery of order #{order.Oddernumber}
          </h2>
          <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
            <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">
              {order.items.map((item, index) => (
                <div key={index} className="space-y-4 p-6">
                  <div className="flex items-center gap-6">
                    <a href="#" className="h-14 w-14 shrink-0">
                      <img className="h-full w-full dark:hidden"  src={`${API_ENDPOINT}/${item?.img}`}  alt={item.name} />
                      <img className="hidden h-full w-full dark:block" src={item.img} alt={item.name} />
                    </a>
                    <a href="#" className="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white">
                      {item.name}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Price and Quantity
                     </p>
                    <div className="flex items-center justify-end gap-4">
                      <p className="text-base font-normal text-gray-900 dark:text-white">x{item.quantity}</p>
                      <p className="text-xl font-bold leading-tight text-gray-900 dark:text-white">${item.price}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                      <dd className="font-medium text-gray-900 dark:text-white">${item.originalPrice}</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="font-normal text-gray-500 dark:text-gray-400">Discount</dt>
                      <dd className="text-base font-medium text-green-500">{item.discount}</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="font-normal text-gray-500 dark:text-gray-400">Total Price</dt>
                      <dd className="font-medium text-gray-900 dark:text-white">${item.price * item.quantity}</dd>
                    </dl>
                  </div>
                </div>
              ))}
              <div className="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Discount Amount</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">${order.discountAmount}</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Discounted Total</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">${order.discountedTotal}</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Order Date</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{new Date(order.orderDate).toLocaleDateString()}</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Status</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{order.status}</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Total Price</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">${order.totalPrice}</dd>
                </dl>
              </div>
            </div>

              <Statusbox status={`${order.status}`}></Statusbox>

  


          </div>












        </div>
      </section>
    </div>
  );
}

export default Oderdetails;
