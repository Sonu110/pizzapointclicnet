import React, { useEffect, useState } from 'react';
import API_ENDPOINT from '../../../config';
import Loader from '../../components/Loader';

function Userlist() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper function to extract date from a datetime string
  const extractDate = (datetime) => {
    const date = new Date(datetime);
    return date.toISOString().split('T')[0]; // Extract "YYYY-MM-DD"
  };

  useEffect(() => {
    const profile = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        setLoading(true); // Set loading to true before starting fetch
        try {
          const response = await fetch(`${API_ENDPOINT}/userdata`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUsers(data.data);
          } else {
            console.log('Failed to fetch profile data.');
          }
        } catch (error) {
          console.log('Error fetching profile data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    profile();
  }, []);

  return (

    <>

    {
      loading ? <Loader></Loader>:

    <div className="mx-auto max-w-screen px-4 py-8 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">User Accounts</h2>
          <span className="text-xs text-gray-500">View accounts of registered users</span>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-y-scroll h-screen">
          <table className="w-full ">
            <thead>
              <tr className="   bg-slate-700 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">S.no</th>
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Roll</th>
                <th className="px-5 py-3">Number of login</th>
                <th className="px-5 py-3">Created</th>
              </tr>
            </thead>
            <tbody className="text-black ">
              {users.map((i, index) => (
                <tr key={i._id} className='font-semibold'>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-md">
                    <p className="whitespace-no-wrap">{index + 1}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-md">
                    <div className="flex items-center">
                      
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">{i.Name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-md">
                    <p className="whitespace-no-wrap">{i.email}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-md">
                    <p className="whitespace-no-wrap">{i.rolls}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-md">
                    <p className="whitespace-no-wrap">{i.visitHistory.length}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-md">
                    <p className="whitespace-no-wrap">{extractDate(i.createdAt)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm"> Showing {users.length} Entries </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
    }
    </>
    
  );
}

export default Userlist;
