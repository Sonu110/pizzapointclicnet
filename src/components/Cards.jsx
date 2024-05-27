import React from 'react';

export function Cards({img, name}) {
  return (
    <div className="w-full max-w-[26rem] shadow-lg rounded-lg overflow-hidden">
      <div className="relative p-2  overflow-hidden">
        <img
          src={img}
          className="w-full rounded-lg h-52 object-cover  "
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent  via-transparent to-black/60" />
        {/*  */}
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="text-lg font-medium text-gray-900">{name}</h5>
          <div className="flex items-center gap-1.5 font-normal text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </div>
        </div>
        <p className="text-gray-700">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </p>
      <div className=' text-red-500 font-bold flex gap-2 mt-5  font-shadows-into-light'>
      ₹<span>{55}</span>

      </div>
      </div>
      <div className="p-4 pt-0">
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-black">
         Add to cart
        </button>
      </div>
    </div>
  );
}



