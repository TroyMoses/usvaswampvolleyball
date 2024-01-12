'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import logoImage from '../components/images/logo1.png';
import ritahImage from '../components/images/ritah.png';
import fb_icon from '../components/images/fb_icon.png';
import insta_icon from '../components/images/insta_icon.png';
import tiktok_icon from '../components/images/tiktok_icon.png';
import twitter_icon from '../components/images/twitter_icon.png';
import wa_icon from '../components/images/wa_icon.png';
import youtube_icon from '../components/images/youtube_icon.png';
import proImage from '../components/images/pro.png';
import teamImage from '../components/images/team.png';
import fitnessImage from '../components/images/fitness.png';
import tourna2Image from '../components/images/tourna2.png';
import trainImage from '../components/images/train.png';
import girlsImage from '../components/images/girls.png';
import trophieImage from '../components/images/trophie.png';
import andyImage from '../components/images/andy.png';
import testyImage from '../components/images/testy.png';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Anime from '../components/Anime.jsx';

export default function Home() {

    const router = useRouter();

    const [updatesEmail, setUpdatesEmail] = React.useState({
        email:''
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatesEmail)
            });
            const data = await res.json();
            router.push('/');
            setUpdatesEmail({
                email: ''
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="relative mx-auto h-screen w-screen bg-gray-100">

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
                        <Link href="/" className='text-brightRed'>Home</Link>                        
                        <Link href="/articles" className='hover:text-brightRed'>Articles</Link>                        
                        <Link href="/events" className='hover:text-brightRed'>Events/Tournaments</Link>
                        <Link href="/gallery" className='hover:text-brightRed'>Gallery</Link>
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
                        <Link href="/" className='text-brightRed'>Home</Link>                                        
                        <Link href="/articles" className='hover:text-brightRed'>Articles</Link>                                        
                        <Link href="/events" className='hover:text-brightRed'>Events/Tournaments</Link>                      
                        <Link href="/gallery" className='hover:text-brightRed'>Gallery</Link>                      
                        <Link href="/media" className='hover:text-brightRed'>USVA Media</Link>                      
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className='mx-auto'>

                {/* Flex Container */}
                <div className="flex flex-col justify-between items-center px-6 mx-4 pt-40 space-y-0 md:mx-14 md:space-y-0 md:flex-row">

                    {/* Left Item */}
                    <div className='flex flex-col mb-20 space-y-12 md:mt-10 md:ml-14 md:w-1/2'>
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-4xl md:text-left">
                            Volleyball builds friendship and brings us all together
                        </h1>
                        <p className="max-w-sm text-lg text-center text-gray-800 md:text-left">
                            USVA Swamp Volleyball Association is the future of Ugandan volleyball, 
                            as its goals are to develop the talent to the best.
                        </p>
                        <div className="flex justify-center md:flex md:justify-start">
                            <Link href='/subscribe' className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-red-600">
                                Join Us Now
                            </Link>
                        </div>
                    </div>

                    {/* Right Item */}
                    <div className='md:1/2 md:mr-10'>
                        <Image className='h-auto md:h-96 w-full' src={proImage} alt="Hero Image" />
                    </div>
                </div>
            </section>

            <section id="about_us" className='mx-auto'>
                {/* About Us Section */}
                <div className='justify-center rounded-lg mb-20 py-2 mx-4 space-y-12 mt-10'>
                    <div>
                        <h2 className="text-4xl font-bold text-center">
                            About Us.
                        </h2>
                    </div>
                    <div className='flex justify-center flex-col md:flex-row'>
                        <div className='p-4 mx-2 md:w-1/2 md:px-10'>
                            <h1 className='text-xl font-bold text-center pb-2'>
                                Background
                            </h1>
                            Uganda Swamp Volleyball Association (USVA) started off 
                            in 2020 in lockdown, after the deadly pandemic COVID-19. 
                            It started in Kazo Fairway Secondary School. USVA has promoted 
                            many clubs like Ethans Volleyball Club that is based in Mbarara, 
                            main offices at GBK Building, Mpanga Tonny being the Chief Executive 
                            Officer (CEO). 
                            <div>                                
                                <h1 className='text-lg font-bold text-center py-2'>
                                    Values
                                </h1>
                                <ol className='flex-col md:flex-row text-center md:justify-between'>                                
                                    <li>Respect</li>
                                    <li>Discipline</li>
                                    <li>Equality</li>
                                    <li>Fairness</li>
                                    <li>Inclusion</li>
                                    <li>Fun</li>
                                </ol>
                            </div>

                        </div>
                        <div className='flex flex-col mx-2 px-4 md:w-1/2'>
                            <div className='mb-2 md:px-10'>                            
                                <h1 className='text-xl font-bold text-center pb-2'>
                                    Mission
                                </h1>
                                To be welcoming to all ages, abilities and backgrounds by creating 
                                on family and provide an environment that empowers confidence, develop 
                                character and help the youth to acquire the skills needed to achieve 
                                their fullest potential in becoming productive, community productive, 
                                responsible adults, all through volleyball as a sport.
                            </div>
                            <div className='md:px-10'>                            
                                <h1 className='text-xl font-bold text-center pb-2'>
                                    Vision
                                </h1>
                                To create a safe, supportive and fun-filled learning environment 
                                that fosters the development of volleyball skills and where each 
                                participant strengthens their love of the game. 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className='mx-auto'>
                {/* Container to heading and services blocks */}
                <div className="max-w-6xl px-5 mx-auto mt-10 text-center">

                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-center">
                        Services We Offer
                    </h2>

                    {/* Services Container */}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">

                        {/* Service 1 */}
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 mx-6 md:mx-0 md:w-1/3">

                            <Image src={trainImage} className='w-full -mt-6' alt="" />

                            <h5 className="text-lg font-bold">Professional Volleyball Training</h5>

                            <p className="text-md text-gray-700">
                                Our association offers professional volleyball training programs 
                                for individuals of all ages and skill levels. From beginners 
                                looking to learn the basics to advanced players aiming to refine 
                                their techniques, our expert coaches provide comprehensive 
                                training sessions tailored to individual needs.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">

                            <Image src={tourna2Image} className='w-96 h-52 -mt-6' alt="" />

                            <h5 className="text-lg font-bold">Volleyball Equipment and Gear</h5>

                            <p className="text-md text-gray-700">
                                We provide a wide range of high-quality volleyball equipment and 
                                gear, including balls, nets, knee pads, shoes, apparel, and 
                                training accessories. Our selection ensures that players have 
                                access to the best equipment to enhance their performance and 
                                enjoyment of the game.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">

                            <Image src={teamImage} className='w-96 h-52 -mt-6' alt="" />

                            <h5 className="text-lg font-bold">Team Coaching and Consultation</h5>

                            <p className="text-md text-gray-700">
                                Our experienced coaches provide team coaching and consultation 
                                services for schools, clubs, and organizations. We work closely 
                                with teams to enhance their tactical understanding, teamwork, 
                                and overall performance. Through strategic planning, training 
                                sessions, and game analysis, we help teams reach their full 
                                potential.
                            </p>
                        </div>
                    </div>

                    {/* Services Container */}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">

                        {/* Service 4 */}
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 mx-6 md:mx-0 md:w-1/3">

                            <Image src={trophieImage} className='w-96 h-52 -mt-6' alt="" />

                            <h5 className="text-lg font-bold">Volleyball Camps and Clinics</h5>

                            <p className="text-md text-gray-700">
                                Join our exciting volleyball camps and clinics designed to offer 
                                a fun and immersive learning experience. These programs combine 
                                skill development sessions, friendly competitions, team-building 
                                activities, and guest appearances by professional players and 
                                coaches, providing a memorable and enriching volleyball journey.
                            </p>
                        </div>

                        {/* Service 5 */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">

                            <Image src={fitnessImage} className='w-96 h-52 -mt-6' alt="" />

                            <h5 className="text-lg font-bold">Physical Conditioning and Fitness</h5>

                            <p className="text-md text-gray-700">
                                We recognize the importance of physical conditioning for 
                                volleyball players. Our association offers specialized fitness 
                                training programs designed to improve strength, agility, speed, 
                                endurance, and flexibility. Our fitness trainers create 
                                personalized plans to optimize players' physical capabilities 
                                and minimize the risk of injuries.
                            </p>
                        </div>

                        {/* Service 6 */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">

                            <Image src={girlsImage} className='w-96 h-52 -mt-6' alt="" />

                            <h5 className="text-lg font-bold">Scouting and Talent Identification</h5>

                            <p className="text-md text-gray-700">
                                USVA is committed to discovering and nurturing volleyball talent 
                                in Uganda. We conduct scouting programs and talent identification 
                                events to identify promising players and provide them with 
                                opportunities to showcase their skills to a wider audience, 
                                including national and international scouts.
                            </p>
                        </div>
                    </div>                    

                    {/* Button */}
                    <div className="mb-10 mt-8 md:my-16">
                        <Link href="/partner" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-red-600">Partner With Us Now</Link>
                    </div>
                </div>

            </section>

            {/* Features Section */}
            <section id="features" className='mx-auto'>

                {/* Flex Section */}
                <div className="flex flex-col px-4 mt-5 space-y-12 md:space-y-0 md:mx-20 md:flex-row">
                    {/* Why Join USVA */}
                    <div className='flex text-center flex-col space-y-6 md:w-1/2'>
                        <h2 className="max-w-md flex text-4xl font-bold md:text-left">
                            Why Choose To Join USVA?
                        </h2>
                        <h2 className="max-w-md text-lg font-bold text-center md:text-left">
                            We build an all-round athlete
                        </h2>
                        <p className="max-w-sm text-center text-gray-800 ml-8 md:ml-0 md:text-left">
                            USVA provides the best facilities and experience needed to uplift 
                            the volleyball sport in Uganda. Our services are sport-building-centerd. 
                            A player's fitness doesn't have to be only physical 
                            but mental too. So at USVA we train the player to 
                            not only be physically fit but mentally fit too. 
                            A player's fitness doesn't have to be only physical 
                            but mental too. So at USVA we train the player to 
                            not only be physically fit but mentally fit too.
                        </p>
                        <p className="hidden max-w-sm text-center text-gray-800 ml-8 md:ml-0 md:text-left md:flex">
                            USVA boasts top-notch training facilities equipped with the 
                            latest amenities to optimize your training experience. 
                            Our state-of-the-art volleyball courts, strength and conditioning 
                            areas, and recovery facilities create the perfect environment for 
                            your development. With access to cutting-edge equipment and 
                            resources, you'll have everything you need to maximize your 
                            potential, elevate your performance, and take your game to the 
                            next level.
                        </p>
                        <p className="hidden max-w-sm text-center text-gray-800 ml-8 md:ml-0 md:text-left md:flex">
                            USVA offers ample opportunities to test your skills and compete 
                            against top-level opponents. Our association organizes regular 
                            tournaments, leagues, and friendly matches where you can showcase 
                            your talent and gain invaluable experience. Whether you aspire to 
                            represent your country or simply enjoy the thrill of competitive 
                            play, USVA provides a platform that fosters growth, sportsmanship, 
                            and the joy of volleyball at its highest level.
                        </p>

                    </div>

                    {/* Numbered List */}
                    <div className='flex flex-col space-y-8 mx-4 md:mx-0 md:w-1/2'>
                        
                        {/* List item 1 */}
                        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                            
                            {/* Heading */}
                            <div className="rounded-l-full bg-red-100 md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-600 md:mt-28">
                                        01
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Expert Coaching for Unleashing Your Potential
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block md:mt-28">
                                    Expert Coaching for Unleashing Your Potential
                                </h3>                                
                                <p className="text-gray-800 flex flex-col items-center">
                                    At USVA, we take pride in our team of highly skilled and 
                                    experienced coaches who are dedicated to nurturing 
                                    volleyball talent. Our coaches have a proven track record 
                                    of guiding players at every level, from beginners to aspiring 
                                    professionals. With personalized training programs, 
                                    state-of-the-art facilities, and a focus on individual 
                                    development, we ensure that you receive the best coaching 
                                    to unlock your true potential on the volleyball court.
                                </p>
                            </div>
                        </div>

                        {/* List item 2 */}
                        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                            
                            {/* Heading */}
                            <div className="rounded-l-full bg-red-100 md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-600">
                                        02
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Elevate Your Game with Comprehensive Skill Training
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Elevate Your Game with Comprehensive Skill Training
                                </h3>
                                <p className="text-gray-800">
                                    Joining USVA means gaining access to a comprehensive skill 
                                    development program designed to enhance every aspect of 
                                    your game. From refining fundamental techniques to advanced 
                                    tactical strategies, our structured curriculum covers all 
                                    facets of volleyball. With a focus on building a strong 
                                    foundation, improving athleticism, and honing game intelligence, 
                                    you'll gain the skills and knowledge necessary to excel in every 
                                    match and reach new heights in your volleyball journey.
                                </p>
                            </div>
                        </div>

                        {/* List item 3 */}
                        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                            
                            {/* Heading */}
                            <div className="rounded-l-full bg-red-100 md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-600">
                                        03
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Supportive Community and Networking
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Supportive Community and Networking
                                </h3>
                                <p className="text-gray-800">
                                    USVA is more than just a volleyball association; 
                                    it's a tightly knit community of passionate individuals 
                                    who share the love for the sport. By joining USVA, 
                                    you become part of a supportive network of players, 
                                    coaches, and enthusiasts who are united in their 
                                    dedication to volleyball. Forge lifelong friendships, 
                                    collaborate with like-minded individuals, and surround 
                                    yourself with a community that motivates and inspires 
                                    you to achieve your goals on and off the court.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className='mx-auto'>

                {/* Container to heading and testm blocks */}
                <div className="max-w-6xl px-5 mx-auto mt-16 text-center">

                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-center">
                        What's Different About USVA?
                    </h2>

                    {/* Testimonial Container */}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">

                        {/* Testimonial 1 */}
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">

                            <Image src={ritahImage} className='w-28 -mt-14 rounded-full' alt="" />

                            <h5 className="text-lg font-bold">Flavia Bae</h5>

                            <p className="text-md text-gray-700">
                                "USVA has managed to uplift the youths' talent of volleyball. 
                                The ability to develop an all round physically and mentally 
                                fit volleyballer is what we need in the volleyball sport. And 
                                USVA has provided it."
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">

                            <Image src={andyImage} className='w-28 h-28 -mt-14 rounded-full' alt="" />

                            <h5 className="text-lg font-bold">Andy Tyga</h5>

                            <p className="text-md text-gray-700">
                                "I have managed to participate in very many 
                                competitions and through these, i have won counless medals 
                                and trophies. Most of these have been possible through the 
                                help of USVA."
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">

                            <Image src={testyImage} className='w-28 h-28 -mt-14 rounded-full' alt="" />

                            <h5 className="text-lg font-bold">Anonymous</h5>

                            <p className="text-md text-gray-700">
                                "USVA is like home to me, there is always someone to look 
                                up to, either for help or for mentorship. The whole team
                                 is determined to offer endless support in the name of the support."
                            </p>
                        </div>
                    </div>
                </div>

            </section>           

            <section className='flex justify-center my-5 rounded-3xl p-4 mx-auto'>
                <div>                
                    {/* Social links container */}
                    <div className='flex justify-center pl-10 pb-6 text-3xl font-bold md:pl-0'>
                        <h3>Follow Us:</h3>
                    </div>
                    <div className="flex justify-center space-x-6 ml-10 md:ml-0">

                        {/* Link 1 */}
                        <a href="www.facebook.com">
                            <Image src={fb_icon} alt="" className="h-8 w-8 rounded-full" />
                        </a>

                        {/* Link 2 */}
                        <a href="www.youtube.com">
                            <Image src={youtube_icon} alt="" className="h-8 w-8" />
                        </a>

                        {/* Link 3 */}
                        <a href="www.twitter.com">
                            <Image src={twitter_icon} alt="" className="h-8 w-8 rounded-full" />
                        </a>

                        {/* Link 4 */}
                        <a href="www.instagram.com">
                            <Image src={insta_icon} alt="" className="h-8 w-8 rounded-full" />
                        </a>

                        {/* Link 5 */}
                        <a href="www.whatsapp.com">
                            <Image src={wa_icon} alt="" className="h-8 w-8 rounded-full" />
                        </a>

                        {/* Link 6 */}
                        <a href="www.tiktok.com">
                            <Image src={tiktok_icon} alt="" className="h-8 w-8 rounded-full" />
                        </a>
                    </div>
                    <div className='flex justify-center pt-6 pb-6 text-3xl font-bold pl-10 md:pl-0'>
                        <h3>Email Us:</h3>
                    </div>
                    <div className='flex justify-center text-slate-800 pt-1 pl-10 text-lg md:pl-0'>
                        <h3 className='text-gray-500'><a href="mailto:usvaswampvolleyball@gmail.com">usvaswampvolleyball@gmail.com</a></h3>
                    </div>
                </div>
            </section>

            {/* News Letter */}
            <section id="news_letter" className="bg-brightRed mx-6 rounded-3xl">

                {/* Flex container */}
                <div className="container flex flex-col items-center justify-between px-4 py-16 mx-auto space-y-12 md:flex-row md:space-y-0 md:ml-10">

                    {/* Heading */}
                    <h2 className="text-4xl font-bold leading-tight text-center text-white md:max-w-xl md:text-left">
                        Subscribe To Our News Letter<br/>
                        <span className='text-white text-xl'>
                            Get all updates in your inbox.
                        </span>
                    </h2>

                    {/* Input container */}
                    <div className="flex justify-between text-md md:m-5">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col space-x-3 md:flex-row">
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder='Enter Email Address' 
                                    className="flex-1 px-4 py-2 rounded-full w-64 h-20 mb-3 md:mb-0 md:h-10 md:py-2" 
                                    onChange={(e) => setUpdatesEmail({...updatesEmail, email:e.target.value})}/>
                                <button type='submit' className="px-3 py-2 text-white rounded-full bg-gray-500 hover:bg-gray-400 focus:outline-none">
                                    Submit
                                </button>
                            </div>
                        </form>
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
}
