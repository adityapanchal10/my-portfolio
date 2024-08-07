import SocialIcons from '@/components/SocialIcons';
import { memo } from 'react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const quotes = [
  'Perfect moments can be had, but not preserved, except in memory...',
  'May the wind under your wings bear you where the sun sails and the moon walks...',
  'Life is to dip your toes in cold water and hope it brings you warmth...',
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const Footer = () => {
  const [randomQuote, setRandomQuote] = useState(getRandomQuote());
  const year: number = new Date().getFullYear();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setRandomQuote(getRandomQuote());
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className='mt-4 flex flex-col items-center py-8 font-light dark:text-white lg:py-8'>
      <SocialIcons />
      <span className='mt-4 text-xs font-light lg:mt-8 text-gray-400'>
        {randomQuote}
      </span>
      <span className='mt-4 text-xs font-light lg:mt-8'>
        &copy; {year} Adit
      </span>
    </div>
  );
};

export default memo(Footer);
