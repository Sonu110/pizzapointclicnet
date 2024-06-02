import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const Herosection = () => {
  // Create a ref for the cursor element
  const cursorRef = useRef(null);

  useEffect(() => {
    // Options for Typed.js instance
    const options = {
      strings: ["Supper delicious Burger in town!", "Another text you want to display"],
      typeSpeed: 50, // Typing speed in milliseconds
      loop: true, // Whether to loop through the strings indefinitely
      backDelay: 2000, // Delay in milliseconds before starting to backspace
      backSpeed: 30, // Backspacing speed in milliseconds
      // Pass the cursor element to Typed.js
      cursorChar: '',
      cursorElement: '|', // Cursor element
    };

    // Initialize Typed.js
    const typed = new Typed('.hero-title', options);

    // Manipulate the cursor element
    if (cursorRef.current) {
      cursorRef.current.classList.add('typed-cursor'); // Add class to style the cursor
    }

    // Cleanup function to destroy Typed.js instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="Herosection section section-divider white  h-screen min-w-screen" id="home">
      <div className="">

        <div className=" px-3 md:px-14 hero-content text-white gap-5 flex flex-col items-start justify-center min-h-screen">

          <p className="hero-subtitle text-center text-2xl w-full font-shadows-into-light">Eat Sleep And Enjoy</p>

          <div className='flex items-center'>
            <h2 className="hero-title mt-5 text-4xl font-shadows-into-light inline"></h2>
            {/* Render the cursor element using the ref */}
            <span ref={cursorRef}></span>
          </div>

          <p className="hero-text text-sm ">Food is any substance consumed to provide nutritional support for an organism.</p>

          <Link to={'/menu'} className="bg-red-800 p-2 px-10 shadow-sm mt-7 transition-all duration-700 hover:p-3 hover:px-12 rounded-md">Order Now</Link>

        </div>

      </div>
    </section>
  );
};

export default Herosection;
