'use client';

import { useRef } from 'react';
import Link from 'next/link';

interface UiButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const UiButton: React.FC<UiButtonProps> = ({ text, onClick, className }) => {

  return (
    <Link href="https://tidycal.com/joyjitghosh/sacredreach" target="_blank" rel="noopener noreferrer" legacyBehavior>
      <a
        onClick={onClick}
        className={`inline-block transform transition-transform hover:scale-105 active:scale-95 px-8 py-4 border bg-green-500 border-gray-300 text-white hover:text-gray-800 font-black uppercase rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 duration-1000 z-50 ${className}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default UiButton;
