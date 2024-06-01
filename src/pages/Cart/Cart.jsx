import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, emptycart, removeItem } from '../../Redux/reducers/Cartslier';
import { MyContext } from '../../context/context';
import { Navigate, json, useNavigate } from 'react-router-dom';
import API_ENDPOINT from '../../config';
import Odersucessfull from './Odersucessfull';

export function CartTwo() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const discountAmount = useSelector(state => state.cart.discountAmount);
  const discountedTotal = useSelector(state => state.cart.discountedTotal);

  const [previousCart, setPreviousCart] = useState(0);
  const [loading , setloading] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false);
  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const data = async () => {
    
    const cartdata = {
      items: JSON.stringify(cart),
      totalPrice: totalPrice,
      discountAmount: discountAmount,
      discountedTotal: discountedTotal,
      status:"Successfull"
    };

    setloading(true)
    try {
      const response = await fetch(`${API_ENDPOINT}/order`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        method: 'POST',
        body: new URLSearchParams(cartdata)
      });

      const responseData = await response.json();
      if(response.ok)
        {
          setOrderSuccess(true)
          setloading(false)
          dispatch(emptycart())

          console.log("the  value is ",responseData);
          setPreviousCart(responseData.totalPrice)
        }
        else

        {
          console.log("error");
        }
    } catch (error) {
      console.error('Error:', error);
    }
    finally
    {
      setloading(false)
    }
  };

  const handleCheckout = async () => {
    // Check if there are changes in the cart before posting
    console.log(totalPrice , previousCart);
    if ( totalPrice !==  previousCart) {
      console.log("Posting new order...");
      await data();
    } else {
      console.log("No changes detected in the cart. Skipping order post.");
    }
  };



  const { userdata } = useContext(MyContext);

  if (userdata.length === 0 && userdata) {
    return <Navigate to={'/login'} />;
  }

  return (
      <>
      
      {
        orderSuccess ? (
          <Odersucessfull setoder={setOrderSuccess}></Odersucessfull>
        )
        :
        (
    <div className="mx-auto max-w-7xl px-5">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {cart.map((product) => (
                <div key={product._id} className="">
                  <li className="flex py-6 sm:py-6">
                    <div className="flex-shrink-0 h-20 overflow-hidden">
                      <img
                        src={`${API_ENDPOINT}/${product.img}`}
                        alt={product.name}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a href={product.href} className="font-semibold text-black">
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex items-center gap-1">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              ₹{product.originalPrice || product[6]}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              ₹{product.price || product[5]}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">{product.discount}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex">
                    <div className="min-w-24 flex">
                      <button type="button" className="h-7 w-7" onClick={() => handleRemove(product._id)}>
                        -
                      </button>
                      <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        value={product.quantity}
                        readOnly
                      />
                      <button type="button" className="flex h-7 w-7 items-center justify-center" onClick={() => handleAdd(product)}>
                        +
                      </button>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0" onClick={() => handleRemove(product._id)}>
                        <span className="text-xs font-medium text-red-500">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
            <h2 id="summary-heading" className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
              Price Details
            </h2>
            <div>
              <dl className="space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price ({cart.length} item{cart.length > 1 ? 's' : ''})</dt>
                  <dd className="text-sm font-medium text-gray-900">₹{totalPrice}</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">-₹{discountAmount}</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">₹{discountedTotal}</dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹{discountAmount} on this order
              </div>
              <div className='p-3 cursor-pointer  hover:p-4 transition-all   bg-black  text-white  font-shadows-into-light text-center rounded-md' onClick={handleCheckout} >{loading ?"Odering....":"Checkout"}</div>
            </div>
          </section>
        </form>
      </div>
    </div>
        )

      }
      </>
  );
}
