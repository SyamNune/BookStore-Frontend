import React, { useState, useEffect } from 'react';
import mtslogo from '../assets/edulibrary.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import '../styles/navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Show popup after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleAdminClick = () => {
        setShowPopup(false); // close popup
        navigate('/admin');   // navigate to admin page
    };

    return (
        <>
            {/* NAVBAR */}
            <header className="external bg-opacity-70 shadow-md fixed w-full z-50">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">

                        {/* LOGO */}
                        <Link to="/">
                            <img className="h-14 w-auto object-contain" src={mtslogo} alt="MTSLOGO" />
                        </Link>

                        {/* DESKTOP MENU */}
                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li><Link className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-blue-700" to="/">Home</Link></li>
                                    <li><Link className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-blue-700" to="/about">About</Link></li>
                                    <li><Link className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-blue-700" to="/books">Books</Link></li>
                                    <li><Link className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-blue-700" to="/faq">Feedback</Link></li>
                                </ul>
                            </nav>
                        </div>

                        {/* RIGHT SIDE BUTTONS */}
                        <div className="flex items-center gap-4">
                            <SignedOut>
                                {/* Login Button */}
                                <SignInButton mode="modal">
                                    <button className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-800 transition">
                                        Login
                                    </button>
                                </SignInButton>

                                {/* Admin Button */}
                                <button
                                    onClick={handleAdminClick}
                                    className="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-gray-800 transition"
                                >
                                    Admin
                                </button>
                            </SignedOut>

                            <SignedIn>
                                <UserButton />
                            </SignedIn>

                            {/* MOBILE MENU BUTTON */}
                            <div className="block md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    {isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    <nav
                        aria-label="Global"
                        className={`fixed inset-0 bg-blue-600 transition-transform transform ${isOpen ? "translate-y-0" : "translate-y-full"} md:hidden`}
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={toggleMenu} className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ul className="flex flex-col items-end bg-blue-600 text-white mt-8 space-y-6">
                            <li className="w-full"><Link className="block px-4 py-2 text-lg hover:bg-blue-700" onClick={closeMenu} to="/">Home</Link></li>
                            <li className="w-full"><Link className="block px-4 py-2 text-lg hover:bg-blue-700" onClick={closeMenu} to="/about">About</Link></li>
                            <li className="w-full"><Link className="block px-4 py-2 text-lg hover:bg-blue-700" onClick={closeMenu} to="/books">Books</Link></li>
                            <li className="w-full"><Link className="block px-4 py-2 text-lg hover:bg-blue-700" onClick={closeMenu} to="/faq">FAQ</Link></li>
                            <SignedOut>
                                <li className="w-full">
                                    <SignInButton mode="modal">
                                        <button className="w-full px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 transition">
                                            Login
                                        </button>
                                    </SignInButton>
                                </li>
                                <li className="w-full">
                                    <button
                                        onClick={() => { closeMenu(); navigate('/admin'); }}
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-800 transition"
                                    >
                                        Admin
                                    </button>
                                </li>
                            </SignedOut>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* POPUP OUTSIDE NAVBAR */}
            <SignedOut>
                {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
                        <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login Required</h2>
                            <p className="text-gray-600 mb-6">Please login to continue browsing the site.</p>

                            <SignInButton mode="modal">
                                <button className="w-full bg-blue-700 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-800 transition">
                                    Login
                                </button>
                            </SignInButton>

                            <button
                                onClick={handleAdminClick}
                                className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
                            >
                                Admin
                            </button>
                        </div>
                    </div>
                )}
            </SignedOut>
        </>
    );
}

export default Navbar;
