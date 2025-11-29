// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles/contact.css';

// const DisplayData = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:8000/api/data');
//             const jsonData = await response.json();

//             setData(jsonData); // set data as-is
//             console.log("Fetched data:", jsonData); // log raw data
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             toast.error(<p>Error fetching data.</p>, {
//                 position: "top-center",
//                 autoClose: 3000,
//                 hideProgressBar: true,
//                 className: "toast-custom",
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container mx-auto p-8 pt-12 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//             <h1 className="text-5xl mt-20 mb-20 font-bold text-center text-blue-600">
//                 Book Catalog
//             </h1>

//             {loading ? (
//                 <div className="flex justify-center items-center h-64">
//                     <div className="flex space-x-2">
//                         <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce"></div>
//                         <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce delay-200"></div>
//                         <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce delay-400"></div>
//                     </div>
//                 </div>
//             ) : data.length === 0 ? (
//                 <div className="flex flex-col justify-center items-center">
//                     <img
//                         src="https://i.ibb.co/cXtvhLm/Designer-1.jpg"
//                         alt="No data"
//                         className="mt-12 mb-8"
//                     />
//                     <p className="text-blue-600 font-bold text-2xl">
//                         No books found
//                     </p>
//                 </div>
//             ) : (
//                 <div className="overflow-x-auto mt-16">
//                     <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                         <thead>
//                             <tr className="bg-blue-600 text-white text-left">
//                                 <th className="py-3 px-6 font-semibold text-sm uppercase">Book Name</th>
//                                 <th className="py-3 px-6 font-semibold text-sm uppercase">Category</th>
//                                 <th className="py-3 px-6 font-semibold text-sm uppercase">Author</th>
//                                 <th className="py-3 px-6 font-semibold text-sm uppercase">Download</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map((item) => (
//                                 <tr key={item._id} className="even:bg-blue-50">
//                                     <td className="py-4 px-6 border-b border-blue-200">{item.book_name}</td>
//                                     <td className="py-4 px-6 border-b border-blue-200">{item.book_category}</td>
//                                     <td className="py-4 px-6 border-b border-blue-200">{item.book_author}</td>
//                                     <td className="py-4 px-6 border-b border-blue-200">
//                                         <a
//                                             href={item.book_link}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//                                         >
//                                             Download
//                                         </a>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}

//             <ToastContainer />
//         </div>
//     );
// };

// export default DisplayData;


import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser, useSignIn } from '@clerk/clerk-react';
import '../styles/contact.css';

const DisplayData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isSignedIn } = useUser(); // check if user is signed in
    const { openSignIn } = useSignIn(); // Clerk modal trigger

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/data');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error("Error fetching data.", { position: "top-center", autoClose: 3000 });
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = (link) => {
        if (!isSignedIn) {
            toast.info("Please sign in to download the book.", {
                position: "top-center",
                autoClose: 3000,
            });
            openSignIn(); // Open Clerk Sign-In modal
            return;
        }

        // If user is signed in, open the link
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="container mx-auto p-8 pt-12 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-5xl mt-20 mb-20 font-bold text-center text-blue-600">
                Book Catalog
            </h1>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="flex space-x-2">
                        <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce"></div>
                        <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce delay-200"></div>
                        <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce delay-400"></div>
                    </div>
                </div>
            ) : data.length === 0 ? (
                <div className="flex flex-col justify-center items-center">
                    <img
                        src="https://i.ibb.co/cXtvhLm/Designer-1.jpg"
                        alt="No data"
                        className="mt-12 mb-8"
                    />
                    <p className="text-blue-600 font-bold text-2xl">No books found</p>
                </div>
            ) : (
                <div className="overflow-x-auto mt-16">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-blue-600 text-white text-left">
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Book Name</th>
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Category</th>
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Author</th>
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item._id} className="even:bg-blue-50">
                                    <td className="py-4 px-6 border-b border-blue-200">{item.book_name}</td>
                                    <td className="py-4 px-6 border-b border-blue-200">{item.book_category}</td>
                                    <td className="py-4 px-6 border-b border-blue-200">{item.book_author}</td>
                                    <td className="py-4 px-6 border-b border-blue-200">
                                        <button
                                            onClick={() => handleDownload(item.book_link)}
                                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                                        >
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default DisplayData;
