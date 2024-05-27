import React, { useContext } from 'react';
import { Navigate, Outlet} from 'react-router-dom';

function Protexted({ children, user }) {
  console.log("this  is  new",user.rolls);
  if (!user||user.length!=0) {
      return <Outlet></Outlet>;
  }


  if(user.rolls==='Admin')
    {
        return children
    }

  return <Navigate to="/login" />;
}

export default Protexted;