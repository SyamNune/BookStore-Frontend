// import React, { useState } from 'react';
// import '../styles/faq.css';

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What courses do you offer?",
//       answer: "We offer a variety of courses in software development, data science, and more."
//     },
//     {
//       question: "How can I enroll?",
//       answer: "You can enroll directly through our website or contact us for assistance."
//     },
//     {
//       question: "What is the duration of the courses?",
//       answer: "The duration varies by course, typically ranging from a few weeks to several months."
//     },
//     {
//       question: "Do you offer certifications?",
//       answer: "Yes, upon completion of the course, you will receive a certificate."
//     },
//     {
//       question: "Is there any financial aid available?",
//       answer: "Yes, we offer various financial aid options. Please contact us for more details."
//     }
//   ];

//   const toggleFAQ = index => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-section bg-white py-16">
//       <div className="pt-40 container mx-auto px-4">
//         <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-8">Frequently Asked Questions</h2>
//         <div className="faq-list">
//           {faqs.map((faq, index) => (
//             <div key={index} className="faq-item mb-4">
//               <div className="faq-question bg-blue-200 p-4 rounded-lg cursor-pointer" onClick={() => toggleFAQ(index)}>
//                 <h3 className="text-lg font-semibold text-blue-800">{faq.question}</h3>
//               </div>
//               {activeIndex === index && (
//                 <div className="faq-answer bg-blue-100 p-4 rounded-lg mt-2">
//                   <p className="text-gray-700">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
import React, { useState } from 'react';
import '../styles/faq.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send data to backend
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="faq-section bg-white py-16">
      <div className="pt-40 container mx-auto px-4">
        
        <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
          We Value Your Feedback
        </h2>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            // Success Message View
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-8 rounded-lg text-center shadow-lg">
              <p className="font-bold text-xl">Thank you!</p>
              <p>Your feedback has been submitted successfully.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-blue-600 underline hover:text-blue-800"
              >
                Submit another response
              </button>
            </div>
          ) : (
            // Form View
            <form onSubmit={handleSubmit} className="bg-blue-50 p-8 rounded-lg shadow-lg border border-blue-200">
              
              {/* Name Field */}
              <div className="mb-6">
                <label className="block text-blue-800 text-lg font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-blue-800 text-lg font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-blue-800 text-lg font-semibold mb-2" htmlFor="message">
                  Your Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Share your thoughts with us..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;