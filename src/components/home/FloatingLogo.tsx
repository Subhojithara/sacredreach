import React from 'react';
import { IconType } from 'react-icons';

interface FloatingLogoProps {
    Icon: IconType;
    className?: string;
}

const FloatingLogo: React.FC<FloatingLogoProps> = ({ Icon, className }) => {
    return (
        <div className={`floating-logo bg-white p-2 rounded-full text-black ${className}`}>
            <Icon className="lg:size-14 size-8" />
        </div>
    );
};

export default FloatingLogo;