import React, { useContext } from 'react';
import { Navigate, Outlet} from 'react-router-dom';

function Protexted({ children, user }) {
 
  // if (user==='user') {
  //     return <Outlet></Outlet>;
  // }


  if(user==='Admin')
    {
      return children
    }

   

      return <Navigate to="/login" />;
     
}

export default Protexted;