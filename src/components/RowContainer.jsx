import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../assets/img/NotFound.svg';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import API_ENDPOINT from '../config';

const RowContainer = ({ flag, data, scrollValue, cat, res }) => {
  return (
    <div className={`w-full flex items-center gap-3 my-12 scroll-smooth ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`} id="scrolling">
      {data && data.length > 0 ? (
        data.map((item,index) => (
            <div key={index} className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
              <div className="w-full flex items-center justify-between">
                <motion.div className="  overflow-hidden w-40 h-40   drop-shadow-xl " whileHover={{ scale: 1.1 }}>
                  <img   src={`${API_ENDPOINT}/${item?.image}`}  alt="" className="w-40 min-h-40 rounded-lg   object-cover" />
                </motion.div>

                <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8">
                  <MdShoppingBasket className="text-white" />
                <p className=" text-sm text-white">{item?.discount}</p>
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor font-semibold text-base md:text-lg">{item?.ProductName}</p>
              
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    {item?.price && <span className="text-sm text-red-500">$ {item.price}</span>}
                  </p>
                </div>
              </div>
            </div>
         
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="max-h-60" alt="Not Found" />
          <p className="text-xl text-headingColor font-semibold my-2">Items Not Available</p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
