import React from 'react';

const Herosection = () => {
  return (
    <section class="Herosection  section section-divider white bg-red-600  max-h-screen min-w-screen" id="home" >
    <div class="">

      <div class=" px-14 hero-content text-white gap-5  flex flex-col  items-start justify-center  min-h-screen">

        <p class="hero-subtitle  text-center text-2xl w-full  font-shadows-into-light">Eat Sleep And Enjoy</p>

        <h2 class=" hero-title mt-5 text-4xl   font-shadows-into-light "  >Supper delicious Burger in town!</h2>

        <p class="hero-text">Food is any substance consumed to provide nutritional support for an organism.</p>

        <button class=" bg-red-800 p-2 px-10  shadow-sm mt-7     transition-all duration-700  hover:p-3  hover:px-12 rounded-md ">Order Now</button>

      </div>

   

    </div>
  </section>

  );
};

export default Herosection;
