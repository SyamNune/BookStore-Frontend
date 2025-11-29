// import React from 'react';
// import { Link } from 'react-router-dom';
// import profile_image from '../assets/images/hero-banner-1.png';
// import '../styles/common.css';

// function Home() {
//   return (
//     <div className='padding-class bg-white relative overflow-hidden bg-gray-100'>
//       {/* Blob animations */}
//       <div className='absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
//       <div className='absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-1000'></div>
//       <div className='absolute bottom-0 left-1/2 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000'></div>

//       <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
//         <div className="min-h-screen py-16">
//           {/* Main Intro Section */}
//           <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
//             <div className="lg:w-1/2 space-y-6 mb-20">
//               <h1 className="text-5xl font-extrabold leading-snug text-gray-800">
//                 India's most <span className="text-blue-600">Prominent</span> Training Institute To Become a S/W Engineer
//               </h1>
//               <p className="text-lg text-gray-600">
//                 With point-to-point, in-depth explanation and a unique teaching style by real-time industry professionals. Contact us for demo classes and inquiries.
//               </p>
//               <div className="flex items-center space-x-4">
//                 <Link
//                   to="https://wa.me/919912280626"
//                   className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
//                 >
//                   WhatsApp (919912280626) &rarr;
//                 </Link>
//                 <p className="text-sm text-gray-500 font-semibold">
//                   Call us: <a href="tel:+919912280626" className="text-blue-600">+91 99 122 80 626</a>
//                 </p>
//               </div>
//             </div>

//             {/* Image Section */}
//             <div className="relative z-10 mt-12 lg:mt-0 flex justify-center">
//               <div className="w-80 h-84 bg-blue-500 rounded-lg shadow-lg overflow-hidden transform rotate6 transition-transform hover:rotate-12 hover:scale-110">
//                 <img
//                   src={profile_image}
//                   alt="Person 1"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Call to Action - Popular Courses */}
//           <div className="mt-32 text-center">
//             <h2 className="text-4xl font-extrabold text-gray-800">Our Popular Courses</h2>
//             <p className="text-lg text-gray-600">Check out our best-selling courses designed to get you industry-ready</p>
//             <div className="mt-8 flex justify-center space-x-4">
//               {/* Example course boxes */}
//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {/* Full Stack Development Card */}
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-blue-600 mb-2">Full Stack Development</h3>
//                     <p className="text-gray-600">Master front-end & back-end development with real projects.</p>
//                   </div>
//                 </div>

//                 {/* Data Science Bootcamp Card */}
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-blue-600 mb-2">Data Science Bootcamp</h3>
//                     <p className="text-gray-600">Become a data expert with our comprehensive bootcamp.</p>
//                   </div>
//                 </div>

//                 {/* DevOps Certification Card */}
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-blue-600 mb-2">DevOps Certification</h3>
//                     <p className="text-gray-600">Learn to automate deployments and manage infrastructure.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* View More Courses Link */}
//             <div className="mt-8">
//               <Link
//                 to="/courses"
//                 className="inline-block bg-blue-600 text-white mt-8 px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
//               >
//                 View More Courses &rarr;
//               </Link>
//             </div>
//           </div>

//           {/* Additional Perks Section */}
//           <div className="mt-32 text-center">
//             <h2 className="text-4xl font-extrabold text-gray-800">Additional Perks</h2>
//             <p className="text-lg text-gray-600">Get the most out of your learning experience with our exclusive perks</p>
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Resume Screening */}
//               <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                 <h3 className="text-xl font-bold text-blue-600 mb-2">Resume Screening</h3>
//                 <p className="text-gray-600">Our experts will help you craft a resume that gets you noticed by recruiters.</p>
//               </div>

//               {/* LinkedIn Optimization */}
//               <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                 <h3 className="text-xl font-bold text-blue-600 mb-2">LinkedIn Optimization</h3>
//                 <p className="text-gray-600">Optimize your LinkedIn profile to stand out in the professional world.</p>
//               </div>

//               {/* Personal Assistance */}
//               <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                 <h3 className="text-xl font-bold text-blue-600 mb-2">Personal Assistance</h3>
//                 <p className="text-gray-600">Get one-on-one support to clarify doubts and navigate your learning journey.</p>
//               </div>

//               {/* Referral Opportunities */}
//               <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                 <h3 className="text-xl font-bold text-blue-600 mb-2">Referral Opportunities</h3>
//                 <p className="text-gray-600">Leverage our network to get referred to top companies in the industry.</p>
//               </div>

//               {/* Resume Creation */}
//               <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                 <h3 className="text-xl font-bold text-blue-600 mb-2">Resume Creation</h3>
//                 <p className="text-gray-600">Our team helps you build a professional, industry-ready resume from scratch.</p>
//               </div>

//               {/* Doubts Clarification */}
//               <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
//                 <h3 className="text-xl font-bold text-blue-600 mb-2">Doubts Clarification</h3>
//                 <p className="text-gray-600">Never feel lost—our mentors are always available to clarify your doubts.</p>
//               </div>
//             </div>
//           </div>

//           {/* Online Support Section */}
//           <div className="mt-16 text-center">
//             <div className="inline-block bg-white px-6 py-4 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src="path/to/support-icon.png"
//                   alt="Support"
//                   className="w-12 h-12"
//                 />
//                 <div className="text-left">
//                   <p className="text-lg font-bold text-blue-600">ONLINE SUPPORT</p>
//                   <p className="text-gray-600 font-medium">+91 99 122 80 626</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Testimonials or Success Stories Section */}
//           <div className="mt-16 text-center">
//             <h2 className="text-3xl font-extrabold text-gray-800">Success Stories</h2>
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Example Testimonials */}
//               <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
//                 <p className="text-gray-600">"This institute changed my career!" - <span className="font-bold">Amit</span></p>
//               </div>
//               <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
//                 <p className="text-gray-600">"The courses were practical and to the point." - <span className="font-bold">Sneha</span></p>
//               </div>
//               <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
//                 <p className="text-gray-600">"Great teachers and amazing experience." - <span className="font-bold">Rahul</span></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import edu_image from '../assets/homeimg.jpg';
import '../styles/common.css';

function Home() {
  return (
    <div className='padding-class bg-white relative overflow-hidden bg-gray-100'>
      {/* Blob animations */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
      <div className='absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-1000'></div>
      <div className='absolute bottom-0 left-1/2 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000'></div>

      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className="min-h-screen py-16">
          
          {/* Main Intro Section */}
          <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 space-y-6 mb-20">
              <h1 className="text-5xl font-extrabold leading-snug text-gray-800">
                Welcome To <span className="text-blue-600">EDU-LIBRARY</span>
              </h1>
              <p className="text-lg text-gray-600">
                Your one-stop destination for academic excellence. Access a vast collection of Textbooks, Resource Papers, and curated Study Guides designed to help you succeed.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Join Library &rarr;
                </Link>
                <p className="text-sm text-gray-500 font-semibold">
                  Need Help? <a href="tel:+919912280626" className="text-blue-600">Contact Support</a>
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative z-10 mt-12 lg:mt-0 flex justify-center">
              <div className="w-80 h-84 bg-blue-500 rounded-lg shadow-lg overflow-hidden transform rotate6 transition-transform hover:rotate-12 hover:scale-110">
                <img
                  src={edu_image}
                  alt="Edu Library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Library Categories Section */}
          <div className="mt-32 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800">Explore Our Collection</h2>
            <p className="text-lg text-gray-600">Everything you need for your research and studies</p>
            
            <div className="mt-8 flex justify-center">
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Text Books Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Text Books</h3>
                    <p className="text-gray-600">Access a comprehensive library of academic textbooks across all subjects.</p>
                  </div>
                </div>

                {/* Resource Papers Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Resource Papers</h3>
                    <p className="text-gray-600">Dive into research with our extensive collection of academic papers.</p>
                  </div>
                </div>

                {/* Study Guides Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Study Guides</h3>
                    <p className="text-gray-600">Simplified guides and notes to help you prepare for exams effectively.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* View More Link */}
            <div className="mt-8">
              <Link
                to="/catalog"
                className="inline-block bg-blue-600 text-white mt-8 px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
              >
                View Full Catalog &rarr;
              </Link>
            </div>
          </div>

          {/* Library Features Section */}
          <div className="mt-32 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800">Library Features</h2>
            <p className="text-lg text-gray-600">Tools to enhance your learning experience</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Instant Access</h3>
                <p className="text-gray-600">Read materials online instantly without any waiting period.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">PDF Downloads</h3>
                <p className="text-gray-600">Download study guides and papers for offline reading.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Smart Search</h3>
                <p className="text-gray-600">Find exactly what you need with our advanced filtering system.</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Citation Helper</h3>
                <p className="text-gray-600">Tools to help you cite resource papers correctly for your projects.</p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Expert Reviews</h3>
                <p className="text-gray-600">Resources vetted by academic professionals for accuracy.</p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-blue-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Our librarians are available to help you find materials anytime.</p>
              </div>
            </div>
          </div>

          {/* Online Support Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white px-6 py-4 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="text-left">
                  <p className="text-lg font-bold text-blue-600">LIBRARY HELPDESK</p>
                  <p className="text-gray-600 font-medium">+91 99 122 80 626</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-extrabold text-gray-800">Student Reviews</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <p className="text-gray-600">"The Study Guides helped me ace my finals!" - <span className="font-bold">Student A</span></p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <p className="text-gray-600">"Found rare resource papers here for my thesis." - <span className="font-bold">Researcher B</span></p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <p className="text-gray-600">"Great collection of textbooks." - <span className="font-bold">Student C</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;