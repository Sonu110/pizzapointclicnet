import React, { useState, useEffect } from "react";
import { IoFastFood } from "react-icons/io5";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";

const MenuContainer = ({ users, setcatgory }) => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setcatgory(filter);
  }, [filter, setcatgory]);

  const categories = ["All", ...users];

  return (
    <section className="w-full p-5 md:p-12 " id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </p>

        <div
          className="w-full flex items-center justify-start md:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none"
          id="scrolling"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileTap={{ scale: 0.75 }}
              className={`group ${
                filter === category ? "bg-cartNumBg" : "bg-card"
              } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg`}
              onClick={() => setFilter(category)}
            >
              <div
                className={`w-10 h-10 rounded-full shadow-lg ${
                  filter === category ? "bg-white" : "bg-cartNumBg"
                } group-hover:bg-white flex items-center justify-center`}
              >
                <IoFastFood
                  className={`${
                    filter === category ? "text-textColor" : "text-white"
                  } group-hover:text-textColor text-lg`}
                />
              </div>
              <p
                className={`text-sm ${
                  filter === category ? "text-white" : "text-textColor"
                } group-hover:text-white`}
              >
                {category}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="w-full">
          {/* Render filtered data based on selected category */}
          {/* Example: */}
          {/* {filter === "All"
            ? <RowContainer flag={false} data={allData} />
            : <RowContainer flag={false} data={filteredData} cat={filter} />
          } */}
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
