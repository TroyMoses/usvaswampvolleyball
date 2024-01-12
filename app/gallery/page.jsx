'use client';

import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../components/images/logo1.png';
import recentTourna1 from '../../components/images/recent_tourna.jpg';
import recentTourna2 from '../../components/images/recent_tourna2.jpg';
import recentTourna3 from '../../components/images/recent_tourna3.jpg';
import recentTourna4 from '../../components/images/recent_tourna4.jpg';
import recentTourna5 from '../../components/images/recent_tourna5.jpg';
import recentTourna6 from '../../components/images/recent_tourna6.jpg';
import recentTourna7 from '../../components/images/recent_tourna7.jpg';
import recentTourna8 from '../../components/images/recent_tourna8.jpg';
import recentTourna9 from '../../components/images/recent_tourna9.jpg';
import tourna1 from '../../components/images/tourna1.jpg';
import tourna2 from '../../components/images/tourna2.jpg';
import tourna3 from '../../components/images/tourna3.jpg';
import tourna4 from '../../components/images/tourna4.jpg';
import tour1 from '../../components/images/tour1.jpg';
import tour2 from '../../components/images/tour2.jpg';
import tour3 from '../../components/images/tour3.jpg';
import tour4 from '../../components/images/tour4.jpg';
import tour5 from '../../components/images/tour5.jpg';
import tour6 from '../../components/images/tour6.jpg';
import tour7 from '../../components/images/tour7.jpg';
import tour8 from '../../components/images/tour8.jpg';
import tour9 from '../../components/images/tour9.jpg';
import tour10 from '../../components/images/tour10.jpg';
import tour11 from '../../components/images/tour11.jpg';
import tour12 from '../../components/images/tour12.jpg';


import Anime from '../../components/Anime.jsx';
import ReadMore from '../../components/ReadMore.jsx';
import ReadLess from '../../components/ReadLess.jsx';

export default function GalleryPage() {
    
    return (
        <div className="relative mx-auto h-screen w-screen">

            {/* Navbar */}
            <nav className="fixed w-screen mt-0 top-0 mx-auto px-6 bg-gray-300">

                {/* Flex Container */}
                <div className="flex w-screen items-center justify-between rounded-3xl px-4 pb-2 -mx-4">

                    {/* Logo */}
                    <div className="flex space-x-6 mt-4 md:ml-24 ml-8">
                        <div>
                            <Image className='rounded-full w-24 flex h-24' src={logoImage} alt="Logo goes here" />
                        </div>
                        <div className='text-lg font-serif'>
                            <h1>UGANDA</h1> 
                            <h1>SWAMP VOLLEYBALL</h1>
                            <h1>ASSOCIATION</h1>
                        </div>
                    </div>

                    {/* Menue Items */}
                    <div className="hidden text-lg font-medium font-serif space-x-10 items-center md:mr-20 md:flex">                        
                        <Link href="/" className='hover:text-brightRed'>Home</Link>                        
                        <Link href="/articles" className='hover:text-brightRed'>Articles</Link>                        
                        <Link href="/events" className='hover:text-brightRed'>Events/Tournaments</Link>
                        <Link href="/gallery" className='text-brightRed'>Gallery</Link>
                        <Link href="/media" className='hover:text-brightRed'>USVA Media</Link>
                        
                    </div>

                    {/* Hamburger Icon */}
                    <button id="menu-btn" onClick={Anime} className="block hamburger md:hidden outline-none mr-2">
                       <span className="hamburger-top"></span> 
                       <span className="hamburger-middle"></span> 
                       <span className="hamburger-bottom"></span> 
                    </button>
                </div>

                {/* Mobile Menue */}
                <div className="md:hidden">
                    <div id="menu" className="absolute flex-col items-center 
                    self-end hidden rounded-3xl py-4 mt-2 space-y-2 font-bold 
                    bg-gray-300 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">                        
                        <Link href="/" className='hover:text-brightRed'>Home</Link>                                        
                        <Link href="/articles" className='hover:text-brightRed'>Articles</Link>                                        
                        <Link href="/events" className='hover:text-brightRed'>Events/Tournaments</Link>                      
                        <Link href="/gallery" className='text-brightRed'>Gallery</Link>                      
                        <Link href="/media" className='hover:text-brightRed'>USVA Media</Link>                      
                    </div>
                </div>
            </nav>

            {/* Articles Section */}
            <section className='my-2 px-2 mt-32 font-serif'>
                <input id='ch' type="checkbox" />
                <h1 className="text-xl font-bold text-center py-4">EXPLORE THE LIFE IN VOLLEYBALL</h1>
                <p className='read-more-container md:px-40 px-5'>
                    Step onto the vibrant court of our volleyball gallery and immerse yourself in 
                    the captivating world of this exhilarating sport. Here, we invite you to witness 
                    the energy, passion, and camaraderie that define volleyball. From the 
                    exhilarating serves to the gravity-defying spikes, our gallery captures 
                    the very essence of life in volleyball... 
                </p>
                <div className='read-more-text'>
                    <p className='px-5 md:px-40'>
                        Experience the heart-pounding moments, 
                        the triumphant victories, and the unbreakable team spirit that unite players 
                        and fans alike. Let our collection of images take you on a visual journey, 
                        celebrating the dynamic athleticism and the unforgettable memories that make 
                        volleyball more than just a game – it's a way of life.
                    </p>
                    <label htmlFor='ch' className='text-center pl-5 md:pl-40 text-blue-600'>
                        Show Less...
                    </label>
                </div>
                <label htmlFor='ch' className='text-center pl-5 md:pl-40 text-blue-600'>
                    <p className='text-center'>
                        Read More...
                    </p>
                </label>
                <br />
                <hr className='py-2'/>
                <div className="md:flex-row mt-2 px-5 md:px-20">
                    <h1 className='text-lg text-center font-semibold'>
                        Recent Tournaments
                    </h1><br />
                    <div className='grid grid-cols-2 px-4 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between'>
                        
                        <Image 
                            className='w-auto h-auto' 
                            src={recentTourna2} />
                        <Image 
                            className='w-auto h-auto' 
                            src={recentTourna4} />
                        <Image 
                            className='w-auto h-auto' 
                            src={recentTourna5} />
                        <Image 
                            className='w-auto h-auto' 
                            src={recentTourna7} />
                        <Image 
                            className='w-auto h-auto' 
                            src={recentTourna8} />
                        <Image 
                            className='w-auto h-auto' 
                            src={tourna1} />
                        <Image 
                            className='w-auto -mt-12 md:-mt-0 h-auto' 
                            src={tourna3} />
                        <Image 
                            className='w-auto h-auto' 
                            src={tourna2} />
                        <Image 
                            className='w-auto -mt-12 md:-mt-32 h-auto' 
                            src={tourna4} />
                        <Image 
                            className='w-auto md:-mt-20 md:h-80 md:w-60 h-auto' 
                            src={recentTourna1} />
                        <Image 
                            className='w-auto -mt-20 md:-mt-0 md:h-80 md:w-60 h-auto' 
                            src={recentTourna6} />
                        <Image 
                            className='w-auto h-auto md:h-80 md:w-60' 
                            src={recentTourna9} />
                    </div>
                </div>

                <div className="md:flex-row mt-2 px-5 md:px-20">
                    <h1 className='text-lg text-center font-semibold'>
                        Tour To Tanzania
                    </h1><br />
                    <div className='grid grid-cols-2 px-4 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between'>
                        <Image 
                            className='w-auto h-auto md:h-40' 
                            src={tour5} />
                        <Image 
                            className='w-auto h-auto md:h-40' 
                            src={tour6} />
                        <Image 
                            className='w-auto h-auto md:h-40' 
                            src={tour7} />
                        <Image 
                            className='w-auto h-auto md:h-40' 
                            src={tour8} />
                        <Image 
                            className='w-auto h-auto md:h-40' 
                            src={tour1} />
                        <Image 
                            className='w-auto h-auto md:h-40' 
                            src={tour3} />
                        <Image 
                            className='w-auto h-auto md:h-80 md:w-56' 
                            src={tour2} />
                        <Image 
                            className='w-auto h-auto md:h-80 md:w-48' 
                            src={tour4} />
                        
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 w-screen mt-4 pr-16 md:pr-0 mx-auto">               

                {/* Flex Section */}
                <div className="flex w-screen flex-col-reverse justify-between px-6 py-10 mt-6 my-4 space-y-8 md:mr-40 md:flex-row md:space-y-0">

                    {/* Logo */}
                    <div className="flex justify-center ml-16 mt-8 md:mt-0 md:space-y-0 md:ml-6">
                        <div>
                            <Image className='rounded-full w-48 h-48 border-white flex items-center md:ml-16' src={logoImage} alt="Logo goes here" />
                        </div>
                    </div>

                    {/* List Container */}
                    <div className="flex flex-col md:flex-row space-x-16 text-center md:text-left space-y-5 md:space-y-0 md:space-x-32">
                        <div className="flex flex-col space-y-3 md:pl-16 text-white">                            
                            <Link href="/" className="hover:text-brightRed">Home</Link>
                            <Link href="articles" className="hover:text-brightRed">Articles</Link>
                            <Link href="/events" className="hover:text-brightRed">Events/Tournaments</Link>
                            
                        </div>

                        <div className="hidden flex-col space-y-2 text-white md:flex">
                            <Link href="/media" className="hover:text-brightRed">Media</Link>
                            <Link href="/gallery" className="hover:text-brightRed">Gallery</Link>
                        </div>

                        {/* Contacts */}
                        <div className="flex flex-col space-y-1 pr-10 text-gray-500">
                            <h2 className='text-xl text-gray-200'>Contacts:</h2>
                            <div className='flex flex-col'>
                                <h6 className='text-gray-400'>Mr. Andrew</h6>
                                +256753820513<br/>
                                +256780659679
                                <h6 className='text-gray-400'>Ms. Flavia</h6>
                                +256775818208<br/>                                
                                <h6 className='text-gray-400'>Mr. Kassujja</h6>
                                +256778569282<br/>                                
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center text-amber-700 pb-4 ml-20 md:ml-0">
                    Copyright &copy;USVA 2023, All Rights Reserved
                </div>
            </footer>
        </div>
    )
};
