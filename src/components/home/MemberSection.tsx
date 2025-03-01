'use client';

import { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

interface Member {
  name: string;
  image: string;
  description: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

const members: Member[] = [
  {
    name: 'Joyjit Ghosh ',
    image: 'https://i.ibb.co/tHtWRJP/Joyjit-Sacred-Reach-Picture.png',
    description: '',
    social: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/joyjitghoshofficial/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in',
      github: 'https://github.com/',
    },
  },
  {
    name: 'Subhajit Hara',
    image: 'https://i.ibb.co/hXSXG89/Subho-Sacred-Reach-Picture.png',
    description: '',
    social: {
      twitter: 'https://x.com/hara_subhojit',
      linkedin: 'https://www.linkedin.com/in/subhajit-hara-987819264/?originalSubdomain=in',
      github: 'https://github.com/Subhojithara',
    },
  },
];

const socialIcons: Record<string, JSX.Element> = {
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
};

const MemberSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-8 my-8">
      {members.map((member, index) => (
        <div
          key={index}
          className={`relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden shadow-lg cursor-pointer transition-transform duration-500 rounded-full ${
            hoveredIndex === index ? 'transform -translate-y-2' : ''
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-full object-cover transition-transform duration-500 rounded-full ${
              hoveredIndex === index ? 'scale-110' : ''
            }`}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-500 p-4 ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-center text-lg sm:text-xl font-semibold mb-2 text-white">{member.name}</h3>
            <p className="mb-4 text-center text-xs sm:text-sm text-white">{member.description}</p>
            <div className="flex gap-4">
              {Object.entries(member.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl transition-transform duration-300 transform hover:translate-y-1 text-white"
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberSection;