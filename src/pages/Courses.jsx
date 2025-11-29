import React from 'react';
import BookCard from './BookCard'; // Ensure you create/rename this component (see below)
// import "../styles/common.css";

function Courses() {
    const bookList = [
        {
          imageUrl: 'https://i.postimg.cc/1X3CMqZH/Designer-1.jpg', 
          link: '/borrow',
          category: "Textbook",
          title: 'Advanced Mathematics',
          description: 'A comprehensive textbook covering calculus, algebra, and geometry for engineering students.',
        },
        {
          imageUrl: 'https://i.postimg.cc/DZjdvptr/Designer-2.jpg',
          link: '/borrow',
          category: "Textbook",
          title: 'Physics Fundamentals',
          description: 'Essential concepts of physics including mechanics, thermodynamics, and electromagnetism.',
        },
        {
          imageUrl: 'https://i.postimg.cc/cCPRYg16/Designer-3.jpg',
          link: '/borrow',
          category: "Textbook",
          title: 'Modern Chemistry',
          description: 'In-depth exploration of organic and inorganic chemistry with practical lab examples.',
        },

        // --- Resource Papers ---
        {
          imageUrl: 'https://i.postimg.cc/rphQsp4R/Designer-1.jpg',
          link: '/view-paper',
          category: "Resource Paper",
          title: 'AI Innovations 2025',
          description: 'A research paper detailing the latest advancements in Artificial Intelligence and Neural Networks.',
        },
        {
          imageUrl: 'https://i.postimg.cc/63kV44pq/Designer-2.jpg',
          link: '/view-paper',
          category: "Resource Paper",
          title: 'Sustainable Energy',
          description: 'Academic research on green innovations, solar power efficiency, and future energy solutions.',
        },
        {
          imageUrl: 'https://i.postimg.cc/cLL3HBBT/Designer-3.jpg',
          link: '/view-paper',
          category: "Resource Paper",
          title: 'Cybersecurity Trends',
          description: 'A detailed report on emerging cyber threats and modern defense mechanisms.',
        },

        // --- Study Guides ---
        {
          imageUrl: 'https://i.postimg.cc/VNbdrGr9/Designer-4.jpg',
          link: '/download-guide',
          category: "Study Guide",
          title: 'Java Quick Notes',
          description: 'Concise study material for last-minute revision of Core Java and OOPs concepts.',
        },
        {
          imageUrl: 'https://i.postimg.cc/RhPMbKJV/Designer-5.jpg',
          link: '/download-guide',
          category: "Study Guide",
          title: 'Data Science Roadmap',
          description: 'Step-by-step guide to mastering data science, including cheat sheets for Python libraries.',
        },
        {
          imageUrl: 'https://i.postimg.cc/dtrFyb4V/Designer-6.jpg',
          link: '/download-guide',
          category: "Study Guide",
          title: 'History Timeline',
          description: 'A summarized timeline of major historical events designed for easy memorization.',
        },
    ];
      
  return (
    <div className="padding-class courses-padding relative overflow-hidden min-h-screen bg-gray-50">
            <div className="relative p-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-32">
                    {/* Updated Heading */}
                    <h1 className="text-6xl font-bold text-gray-800">Library Catalog</h1>
                </div>
                
                {/* Grid Layout */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {bookList.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))}
                </div>
            </div>
        </div>
    
  );
}

export default Courses;
