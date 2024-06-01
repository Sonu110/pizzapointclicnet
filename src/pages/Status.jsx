import React from 'react';
import { useParams } from 'react-router-dom';

function Status({ status , setcancel , id}) {

    console.log(typeof(status));


  return (

       <div class="mt-6 grow sm:mt-8 lg:mt-0">
        <div class="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Order history</h3>

            
            {
                getlist(status)
            }

          <div class="gap-4 sm:flex sm:items-center">
            <button type="button" class="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" onClick={()=> setcancel(id , status)}>Cancel the order</button>

          
          </div>
        </div>
      </div>
  );
}







function getlist(status) {
    if (status === "Successfull") {
        return (
            <ol class="relative ms-3 border-s border-gray-200 dark:border-gray-700">
           
            


            <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800  bg-green-700 text-white">
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                  </svg>
                </span>
                <h4 class="mb-0.5 font-semibold text-green-700">Odder succsfully </h4>
                <p class="text-sm text-green-600">Products in Succsefuuly odder</p>
              </li>
  
              
              <li class="mb-10 ms-6 ">
                <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full   ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800   bg-orange-600  text-white animate-text bg-gradient-to-r from-teal-500 via-orange-500 to-orange-500">
                  <svg class="h-4 w-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                  </svg>
                </span>
                <h4 class="animate-text bg-gradient-to-r from-teal-500 via-orange-500 to-orange-500 bg-clip-text text-transparent text-lg   font-semibold text-gray-900 dark:text-white ">Shiping </h4>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Products being delivered</p>
              </li> 
              
              
             
              <li class="mb-10 ms-6">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full   ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800   bg-orange-600  text-white animate-text bg-gradient-to-r from-teal-500 via-orange-500 to-orange-500">
                  <svg class="h-4 w-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                  </svg>
                </span>
                <h4 class="animate-text bg-gradient-to-r from-teal-500 via-orange-500 to-orange-500 bg-clip-text text-transparent text-lg   font-semibold text-gray-900 dark:text-white ">Delivered</h4>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Products delivered</p>
              </li>
  
  
             
  
             
            </ol>
        );
    }

    if (status === 'Shipping') {
        return (
            <ol class="relative ms-3 border-s border-gray-200 dark:border-gray-700">
               
                
    
    
            <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                     <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800  bg-green-700 text-white">
                       <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                       </svg>
                     </span>
                     <h4 class="mb-0.5 font-semibold text-green-700">Odder succsfully </h4>
                     <p class="text-sm text-green-600">Products in Succsefuuly odder</p>
                   </li>
       
                   
                   <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                     <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800  bg-green-700 text-white">
                       <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                       </svg>
                     </span>
                     <h4 class="mb-0.5 font-semibold text-green-700">Shipping  </h4>
                     <p class="text-sm text-green-600">Products in Shipping odder</p>
                   </li>
       
                   
                
                   
                   
                  
                   <li class="mb-10 ms-6">
                   <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full   ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800   bg-orange-600  text-white animate-text bg-gradient-to-r from-teal-500 via-orange-500 to-orange-500">
                       <svg class="h-4 w-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                       </svg>
                     </span>
                     <h4 class="animate-text bg-gradient-to-r from-teal-500 via-orange-500 to-orange-500 bg-clip-text text-transparent text-lg   font-semibold text-gray-900 dark:text-white ">Delivered</h4>
                     <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Products delivered</p>
                   </li>
       
       
                  
       
                  
                 </ol>
        );
    }

    if (status === 'Delivered') {
        return (
            <ol class="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                   
                    
        
        
                   <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                            <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800  bg-green-700 text-white">
                              <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                              </svg>
                            </span>
                            <h4 class="mb-0.5 font-semibold text-green-700">Odder succsfully </h4>
                            <p class="text-sm text-green-600">Products in Succsefuuly odder</p>
                          </li>
              
                          
                          <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                            <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800  bg-green-700 text-white">
                              <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                              </svg>
                            </span>
                            <h4 class="mb-0.5 font-semibold text-green-700">Shipping  </h4>
                            <p class="text-sm text-green-600">Products in Shipping odder</p>
                          </li>
              
                          
                       
                          
                          
                         
                          <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                            <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800  bg-green-700 text-white">
                              <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                              </svg>
                            </span>
                            <h4 class="mb-0.5 font-semibold text-green-700">Delivered </h4>
                            <p class="text-sm text-green-600">Products in Delivered odder</p>
                          </li>
              
                         
              
                         
                        </ol>
        );
    }


    if (status === 'cancel') {
        return (
            <ol class="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                   
                    
        
        
                   <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                   <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full   ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800   bg-orange-300  text-white animate-text bg-gradient-to-r from-red-500 via-orange-300 to-orange-500">
                              <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                              </svg>
                            </span>
                            <h4 class="animate-text bg-gradient-to-r from-red-500 via-orange-300 to-orange-300 bg-clip-text text-transparent text-lg   font-semibold text-gray-900 dark:text-white ">cancel Odder succsfully </h4>
                            <p class="text-sm text-red-600">Products in cancel odder</p>
                          </li>
              
                          
                         
              
                         
              
                         
                        </ol>
        );
    }


    return "Pading......";
}


export default Status

