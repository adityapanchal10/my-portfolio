import SocialIcons from '@/components/SocialIcons';
import { memo } from 'react';

const quotes = [
  "Perfect moments can be had, but not preserved, except in memory.",
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const Footer = () => {
  const randomQuote = getRandomQuote();
  const year: number = new Date().getFullYear();

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
