import React, { useEffect, Suspense, lazy, useState, useMemo } from 'react';
import MenuContainer from '../components/MenuContainer';
import Pizzaloader from '../components/Pizzaloader';
import { Cards } from '../components/Cards';
import API_ENDPOINT from '../config';
import { useSelector } from 'react-redux';
import Selectonloader from '../components/Selectonloader';
import Loader from '../Dashbord/components/Loader';


const Menuvideo = lazy(() => import('../components/Menuvideo'));

function Menuhomepage() { 
  const [categories, setCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [selectcatgory , setCategorie] = useState('Burrger')
  const filterdata = useMemo(() => {
    return selectcatgory === 'All' ? menuItems : menuItems.filter((value) => value.category === selectcatgory);
  }, [menuItems, selectcatgory]);
  const filteredItems = menuItems.filter(item =>
    item.ProductName.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Fetch existing categories from the server
    const fetchCategories = async () => {
        try {
            const response = await fetch(`${API_ENDPOINT}/categories`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            const data = await response.json();
            setCategories(data);
            setLoadingCategories(false); // Set loading to false once categories are fetched
        } catch (error) {
            console.error('Error fetching categories:', error);
            setLoadingCategories(false); // Set loading to false if an error occurs
        }
    };
    fetchCategories();
}, []);


  useEffect(() => {
    const fetchMenuItems = async () => {
        try {
            const response = await fetch(`${API_ENDPOINT}/menu`);
            const data = await response.json();
            setMenuItems(data);
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching menu items:', error);
            setLoading(false); // Set loading to false if an error occurs
        }
    };

    fetchMenuItems();
}, []); // Run only once when the component mounts
      
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

  return (
    <>
      <Suspense fallback={<Loader></Loader>}>
        <Menuvideo  searchQuery={searchQuery}  setSearchQuery={setSearchQuery} filteredItems={filteredItems} />
      </Suspense>
      <div>
        <MenuContainer users={categories} setcatgory= { setCategorie}   />
    
    
    {
      
     
     
      loading? <div  className=' grid grid-cols-1 px-10 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>


<Selectonloader></Selectonloader>

<Selectonloader></Selectonloader>

<Selectonloader></Selectonloader>

<Selectonloader></Selectonloader>

</div>:

     ( 
<div className='  grid  gap-4 px-2 md:px-14     sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center'>
      {

      
      
filterdata.map((i,index)=>
        
<Cards key={index} _id={i._id} discount={i.discount}  originalPrice={i.originalPrice}  name={i.ProductName}  img={i.image} des={i.Description} price={i.price}></Cards>
)
}

</div>      
)

}








      </div>
    </>
  );
}

export default Menuhomepage;
