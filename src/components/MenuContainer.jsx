import React, { useContext, useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";


const MenuContainer = ({users}) => {
  
  const [filter, setFilter] = useState("icecreams");

  return (
    <section className="w-full  p-12" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none" id="scrolling">
          {
            users.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                
                className={`group ${
                  filter ===  category.name ? " bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => setFilter(category)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter ===   category.name
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.name
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg  `}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter ===  category.name
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  { category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
        {/* {userWithPizza ? (
            <RowContainer flag={false} data={userWithPizza} cat={filter}/>
          ) : (
            <p>No items found for the selected category.</p>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
