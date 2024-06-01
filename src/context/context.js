import React, { createContext, useEffect, useState } from 'react';
import Pizzaloader from '../components/Pizzaloader';
import API_ENDPOINT from '../config';
import {  useDispatch } from 'react-redux';
import {  emptycart } from '../Redux/reducers/Cartslier';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const [notifications , setnotifications] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    const profile = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        setLoading(true); // Set loading to true before starting fetch
        try {
          const response = await fetch(`${API_ENDPOINT}/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUserdata(data.data);
            setnotifications(data.data.Notification.length)
          } else {
            console.log('Failed to fetch profile data.');
          }
        } catch (error) {
          console.log('Error fetching profile data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    profile();
  }, [update]);





  const logout = () => {
   
    localStorage.removeItem('token');
    localStorage.removeItem('cartState');
    dispatch(emptycart());
    
    
    setUserdata([]);
    setUpdate(prev => !prev); // Trigger an update to re-fetch data
  };

  return (
    <MyContext.Provider value={{ userdata, setUpdate,setUserdata, logout ,notifications, setnotifications }}>
      {loading ? (
        <Pizzaloader />
      ) : (
        children
      )}
    </MyContext.Provider>
  );
}

export { MyContext, MyProvider };
