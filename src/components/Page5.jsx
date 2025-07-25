import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Page5() {
  const photographyRef = useRef(null);
  const videographyRef = useRef(null);
  const visualRef = useRef(null);

  

  return (
    <div className="w-full min-h-screen bg-black flex flex-col z-20 text-white px-4 sm:px-6 md:px-10 py-10 sm:py-14 gap-16 sm:gap-20 border-b-2 border-b-gray-700">

      <h1 className="uppercase sticky top-16 sm:top-24 font-extrabold bebas-font text-center tracking-widest text-orange-500 text-3xl sm:text-5xl md:text-6xl mt-6 sm:mt-8 mb-32 sm:mb-40 z-10 bg-black">
         our <span className="inline-block">services</span>
      </h1>

      <div
        ref={photographyRef}
        className="border-t sticky top-[9rem] sm:top-[12rem] border-white pt-6 sm:pt-8 text-gray-600 transition-colors duration-300 bg-black"
      >
        <h2 className="text-xl text-orange-400 sm:text-2xl font-bold uppercase mb-4 sm:mb-6">Photography</h2>
        <div className="grid grid-cols-1 text-white sm:grid-cols-2 md:grid-cols-3 gap-y-2 text-sm font-mono">
          <span>Commercial Photography</span>
          <span>Event Photography</span>
          <span>Product Photography</span>
          <span>Model Shoot </span>
          <span>Food Photography</span>
          <span>Wedding Photography</span>
        </div>
      </div>

      <div
        ref={videographyRef}
        className="border-t sticky top-[9rem] sm:top-[12rem] border-gray-800 pt-6 sm:pt-8 text-gray-600 transition-colors duration-300 bg-black"
      >
        <h2 className="text-xl sm:text-2xl font-bold uppercase mb-4 text-orange-400 sm:mb-6">Videography</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 text-sm font-mono text-white">
          <span>Corporate Video Shoot</span>
          <span>Digital Ad Film</span>
          <span>Podcast Shoot</span>
          <span>Documentary Film Shoot</span>
          <span>Event Shoot (Weddings & Shows)</span>
          <span>Music Video Production</span>
        </div>
      </div>

      <div
        ref={visualRef}
        className="border-t sticky top-[9rem] sm:top-[12rem] border-gray-800 pt-6 sm:pt-8 text-gray-600 transition-colors duration-300 bg-black"
      >
        <h2 className="text-xl sm:text-2xl font-bold uppercase mb-4 sm:mb-6 text-orange-400">Pre & Post Production</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 text-sm font-mono text-white">
          <span>Ghost Writing </span>
          <span>Screenplay Development</span>
          <span>Talent Handling</span>
          <span>Video Editing</span>
          <span>Reel Editing</span>
          <span>Color Correction & Color Grading</span>
        </div>
      </div>
    </div>
  );
}

export default Page5;
