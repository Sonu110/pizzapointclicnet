import React, { useState, useEffect } from 'react';
import API_ENDPOINT from '../../../config';

function Menuform() {
    const [ProductName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [Description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false);

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

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true); // Set loading to true before submitting data

        // Check if category or newCategory is provided
        if (!category && !newCategory) {
            setMessage('Please select an existing category or add a new category.');
            setLoadingSubmit(false); // Set loading to false after checking
            return;
        }
        if (100>= Description.length) {
            setMessage('Description must be at least 100 words.');
            setLoadingSubmit(false); // Set loading to false after checking
            return;
        }

        // Create form data
        const formData = new FormData();
        formData.append('ProductName', ProductName);
        formData.append('Description', Description);
        formData.append('price', price);
        formData.append('originalPrice', originalPrice);
        formData.append('discount', discount);
        formData.append('category', newCategory || category); // Use new category if provided
        formData.append('image', image[0]);

        try {
            // Send POST request to backend
            const response = await fetch(`${API_ENDPOINT}/menu`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                method: 'POST',
                body: formData,
            });

            // Handle response
            const data = await response.json();
            if (data.status) {
                setMessage(data.message);
                // Clear form fields after successful submission
                setProductName('');
                setCategory('');
                setDescription('');
                setPrice('');
                setOriginalPrice('');
                setDiscount('');
                setImage(null);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setLoadingSubmit(false); // Set loading to false after submitting data
    };
    useEffect(() => {
        // Calculate net price when originalPrice or discount changes
        if (originalPrice && discount) {
            const discountAmount = (parseFloat(originalPrice) * parseFloat(discount)) / 100;
            const netPrice = parseFloat(originalPrice) - discountAmount;
            setPrice(netPrice.toString());
        }
    }, [originalPrice, discount]);

    const handleAddCategory = () => {
        setShowNewCategoryInput(true);
        setCategory('');
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <h2 className="font-semibold text-xl text-gray-600 mb-4">Menu Create Form</h2>
                    {message && <p>{message}</p>}
                    {loadingCategories ? (
                        <div>Loading categories...</div>
                    ) : (
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div className="lg:col-span-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                    
                                


                                        <div className="md:col-span-5">
                                            <label htmlFor="ProductName">Product Name</label>
                                            <input
                                                type="text"
                                                name="ProductName"
                                                id="ProductName"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Enter the product name"
                                                value={ProductName}
                                                onChange={(e) => setProductName(e.target.value)}
                                            />
                                        </div>
                                        {!showNewCategoryInput && (
                                            <div className="md:col-span-5">
                                                <label htmlFor="category">Category</label>
                                                <select
    name="category"
    id="category"
    className="h-10 border mt-1  rounded px-4   w-full bg-gray-50"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
>
    <option value="" className='' >Select Category</option>
    {categories.map((cat) => (
        <option key={cat._id} value={cat._id} className='  font-shadows-into-light ' >
            {cat}
        </option>
    ))}
</select>

                                                <button
                                                    type="button"
                                                    className="mt-2 text-blue-500 hover:text-blue-700"
                                                    onClick={handleAddCategory}
                                                >
                                                    Add New Category
                                                </button>
                                            </div>
                                        )}
                                        {showNewCategoryInput && (
                                            <div className="md:col-span-5">
                                                <label htmlFor="newCategory">New Category</label>
                                                <input
                                                    type="text"
                                                    name="newCategory"
                                                    id="newCategory"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    placeholder="Enter new category name"
                                                    value={newCategory}
                                                    onChange={(e) => setNewCategory(e.target.value)}
                                                />
                                            </div>
                                        )}
                                        <div className="md:col-span-5">
                                            <label htmlFor="Description">Description</label>
                                            <textarea
                                                name="Description"
                                                id="Description"
                                                className="h-28 border mt-1 rounded px-4 w-full bg-gray-50 relative"
                                                value={Description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                            
                                            <span className=' absolute  right-20  top-[48%] bg-white'>More than  <span className=' text-red-500'>{ ( 100 - Description.length >=0) ? 100 - Description.length:<span className=' text-green-600  font-bold'>correct</span>} </span> words</span>
                                        </div>
                                       
                                        <div className="md:col-span-2">
                                            <label htmlFor="originalPrice">Original Price</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input
                                                    type="number"
                                                    name="originalPrice"
                                                    id="originalPrice"
                                                    placeholder="Original Price"
                                                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                    value={originalPrice}
                                                    onChange={(e) => setOriginalPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-1">
                                            <label htmlFor="discount">Discount</label>
                                            <input
                                                type="number"
                                                name="discount"
                                                id="discount"
                                                className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Discount"
                                                value={discount}
                                                onChange={(e) => setDiscount(e.target.value)}
                                            />

                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="price">Net Price</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input
                                                    type="number"
                                                    name="price"
                                                    id="price"
                                                    placeholder="net Price"
                                                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-5">
                                            <label className="block text-sm font-medium">Home Image</label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="image"
                                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input
                                                                id="image"
                                                                name="image"
                                                                type="file"
                                                                className="sr-only"
                                                                onChange={(e) => setImage(e.target.files)}
                                                                accept="image/*"
                                                            />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">

                                            {loadingSubmit ? (
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            disabled
                                        >
                                            Submitting...
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Submit
                                        </button>
                                    )}      </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

)}
                    <a className="md:absolute bottom-0 right-0 p-4 float-right" href="https://www.buymeacoffee.com/your-link">
                        <img
                            src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
                            alt="Buy Me A Coffee"
                            className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Menuform;
