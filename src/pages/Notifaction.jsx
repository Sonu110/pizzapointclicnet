import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import API_ENDPOINT from '../config';
import { MyContext } from '../context/context';

function Notification() {
  const { id } = useParams();
  const [notifications, setNotifications] = useState([]);
  const location = useLocation();
  const { userdata   ,setnotifications} = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/notifications/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setNotifications(data);
          setnotifications(0)
        } else {
          console.log('Failed to fetch notifications.');
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [id, userdata]);

  const handleClearAll = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}/notifications/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        setNotifications([]); // Clear notifications in the state
      }
    } catch (error) {
      console.error('Error clearing notifications:', error);
    }
  };

  // Function to categorize notifications by date
  const categorizeNotificationsByDate = (notifications) => {
    const categorizedNotifications = {
      today: [],
      yesterday: [],
      older: []
    };

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1); // Subtract 1 day to get yesterday's date

    notifications.forEach(notification => {
      const createdAt = new Date(notification.createdAt);

      if (createdAt.toDateString() === today.toDateString()) {
        categorizedNotifications.today.push(notification);
      } else if (createdAt.toDateString() === yesterday.toDateString()) {
        categorizedNotifications.yesterday.push(notification);
      } else {
        categorizedNotifications.older.push(notification);
      }
    });

    return categorizedNotifications;
  };

  // Categorize notifications
  const categorizedNotifications = categorizeNotificationsByDate(notifications);

  return (
    <div>
      <div className="w-full bg-gray-50 min-h-screen p-8 pt-28">
        <div className="flex items-center justify-between">
          <p tabIndex="0" className="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">Notifications</p>
          <span className="p-2 bg-gray-200 px-6 font-semibold cursor-pointer" onClick={handleClearAll}>Clear All</span>
        </div>

        {/* Display today's notifications */}
        <div>
          <p className="text-lg font-semibold mt-4">Today</p>
          {categorizedNotifications.today.map(notification => (
            <NotificationItem key={notification._id} notification={notification} />
          ))}
        </div>

        {/* Display yesterday's notifications */}
        <div>
          <p className="text-lg font-semibold mt-4">Yesterday</p>
          {categorizedNotifications.yesterday.map(notification => (
            <NotificationItem key={notification._id} notification={notification} />
          ))}
        </div>

        {/* Display older notifications */}
        <div>
          <p className="text-lg font-semibold mt-4">Older</p>
          {categorizedNotifications.older.map(notification => (
            <NotificationItem key={notification._id} notification={notification} />
          ))}
        </div>
      </div>
    </div>
  );
}





function NotificationItem({ notification }) {
  return (
    <div className="w-full p-3 mt-8 bg-white rounded flex flex-col">
      <div className="flex items-center">
        <div tabIndex="0" aria-label="product icon" role="img" className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00059 3.01934C9.56659 1.61334 11.9866 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09133 13.6526 8.662L7.99926 14.3233L2.34726 8.662C0.944589 7.09133 0.997256 4.67934 2.50459 3.17134C4.01459 1.662 6.42992 1.61134 8.00059 3.01934Z" fill="#EF4444" />
          </svg>
        </div>
        <div className="pl-3">
          <p tabIndex="0" className="focus:outline-none text-sm leading-none">
            Order <span className="text-indigo-700">#{notification.Oddernumber}</span>
          </p>
          <p tabIndex="0" className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">{new Date(notification.createdAt).toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-sm font-semibold">Products:</p>
        <ul className="pl-4 list-disc">
          {notification.items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
        <p className="text-sm mt-2">Total Price: ${notification.totalPrice}</p>
        <p className="text-sm mt-1">Status: {notification.status}</p>
      </div>
    </div>
  );
}




export default Notification;
