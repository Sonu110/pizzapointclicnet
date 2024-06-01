import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import API_ENDPOINT from '../config';

function Menusrollbar() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/newmenus`);
        const data = await response.json();
        setMenuData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu data:', error);
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const pluse = () => {
    setScrollValue((prevValue) => prevValue + 200);
  };

  const minus = () => {
    if (scrollValue > 0) {
      setScrollValue(0);
    } else {
      setScrollValue((prevValue) => prevValue - 200);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <section className="w-full mt-5 p-10">
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
              Top Pizza Discount foods
            </p>

            <div className="hidden md:flex gap-7 items-center">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-10 h-10 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
                onClick={minus}
              >
                <MdChevronLeft className="text-lg text-white" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-10 h-10 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                onClick={pluse}
              >
                <MdChevronRight className="text-lg text-white" />
              </motion.div>
            </div>
          </div>

          <RowContainer data={menuData} flag={true} scrollValue={scrollValue} res={true} />
        </section>
      )}
    </div>
  );
}

export default Menusrollbar;
