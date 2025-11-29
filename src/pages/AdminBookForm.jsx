// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminBookForm = () => {
//   const [formData, setFormData] = useState({
//     book_name: "",
//     book_category: "Textbook",
//     book_author: "",
//     book_link: ""
//   });

//   const [showAuthPopup, setShowAuthPopup] = useState(false);
//   const [authUsername, setAuthUsername] = useState("");
//   const [authPassword, setAuthPassword] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowAuthPopup(true); // Show auth popup on submit
//   };

//   const handleFinalAuth = () => {
//     if (authUsername === "admin" && authPassword === "admin@123$") {
//       toast.success(`Book "${formData.book_name}" added successfully!`);
//       // Reset form
//       setFormData({
//         book_name: "",
//         book_category: "Textbook",
//         book_author: "",
//         book_link: ""
//       });
//       setShowAuthPopup(false);
//       setAuthUsername("");
//       setAuthPassword("");
//     } else {
//       toast.error("Invalid credentials! Submission failed.");
//     }
//   };

//   return (
//     <div className="pt-20">
//       <div className="padding-class relative flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
//         <form
//           onSubmit={handleSubmit}
//           className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-md md:p-10 border border-white border-opacity-30"
//         >
//           <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin: Add a New Book</h2>

//           <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2">Book Name</label>
//             <input
//               type="text"
//               name="book_name"
//               value={formData.book_name}
//               onChange={handleChange}
//               placeholder="Enter book name"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2">Book Category</label>
//             <select
//               name="book_category"
//               value={formData.book_category}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
//               required
//             >
//               <option value="Textbook">Textbook</option>
//               <option value="Research Paper">Research Paper</option>
//               <option value="Study Guide">Study Guide</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2">Author</label>
//             <input
//               type="text"
//               name="book_author"
//               value={formData.book_author}
//               onChange={handleChange}
//               placeholder="Enter author name"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-white text-sm font-bold mb-2">Book Link</label>
//             <input
//               type="text"
//               name="book_link"
//               value={formData.book_link}
//               onChange={handleChange}
//               placeholder="Enter book link"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className={`w-full bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-800`}
//           >
//             Submit
//           </button>
//         </form>

//         {/* Authentication Popup */}
//         {showAuthPopup && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-8 rounded-lg shadow-xl w-96">
//               <h2 className="text-2xl font-bold mb-4">Admin Authentication</h2>
//               <p className="text-gray-600 mb-4">Enter username and password to confirm submission.</p>

//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={authUsername}
//                 onChange={(e) => setAuthUsername(e.target.value)}
//                 className="w-full border border-gray-300 p-2 rounded-md mb-4"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={authPassword}
//                 onChange={(e) => setAuthPassword(e.target.value)}
//                 className="w-full border border-gray-300 p-2 rounded-md mb-4"
//               />

//               <div className="flex justify-end gap-4">
//                 <button
//                   onClick={() => setShowAuthPopup(false)}
//                   className="py-2 px-4 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleFinalAuth}
//                   className="py-2 px-4 rounded-md bg-blue-700 text-white hover:bg-blue-800 transition"
//                 >
//                   Authenticate
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//       </div>
//     </div>
//   );
// };

// export default AdminBookForm;


import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminBookForm = () => {
  const [formData, setFormData] = useState({
    book_name: "",
    book_category: "Textbook",
    book_author: "",
    book_link: ""
  });

  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [authUsername, setAuthUsername] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAuthPopup(true); // Show authentication popup
  };

  const handleFinalAuth = async () => {
    if (authUsername === "admin" && authPassword === "admin@123$") {
      setIsSubmitting(true);
      try {
        // Send data to backend
        const response = await axios.post("http://localhost:8000/api/submit", formData);

        toast.success(response.data.message || `Book "${formData.book_name}" added successfully!`);

        // Reset form
        setFormData({
          book_name: "",
          book_category: "Textbook",
          book_author: "",
          book_link: ""
        });

        setShowAuthPopup(false);
        setAuthUsername("");
        setAuthPassword("");
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Failed to add the book.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error("Invalid credentials! Submission failed.");
    }
  };

  return (
    <div className="pt-20">
      <div className="padding-class relative flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-md md:p-10 border border-white border-opacity-30"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin: Add a New Book</h2>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Book Name</label>
            <input
              type="text"
              name="book_name"
              value={formData.book_name}
              onChange={handleChange}
              placeholder="Enter book name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Book Category</label>
            <select
              name="book_category"
              value={formData.book_category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              required
            >
              <option value="Textbook">Textbook</option>
              <option value="Research Paper">Research Paper</option>
              <option value="Study Guide">Study Guide</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Author</label>
            <input
              type="text"
              name="book_author"
              value={formData.book_author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Book Link</label>
            <input
              type="text"
              name="book_link"
              value={formData.book_link}
              onChange={handleChange}
              placeholder="Enter book link"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-800`}
          >
            Submit
          </button>
        </form>

        {showAuthPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96">
              <h2 className="text-2xl font-bold mb-4">Admin Authentication</h2>
              <p className="text-gray-600 mb-4">Enter username and password to confirm submission.</p>

              <input
                type="text"
                placeholder="Username"
                value={authUsername}
                onChange={(e) => setAuthUsername(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md mb-4"
              />

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowAuthPopup(false)}
                  className="py-2 px-4 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFinalAuth}
                  className={`py-2 px-4 rounded-md bg-blue-700 text-white hover:bg-blue-800 transition ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Authenticate"}
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
};

export default AdminBookForm;
