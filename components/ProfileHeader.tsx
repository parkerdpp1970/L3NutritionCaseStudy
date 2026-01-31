import React from 'react';
import { InfoGrid } from './InfoGrid';
import { InfoItemProps } from '../types';

interface ProfileHeaderProps {
  name: string;
  imageUrl: string;
  details: InfoItemProps[];
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, imageUrl, details }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
      <img 
        src={imageUrl}
        alt={`${name} Profile`} 
        className="w-[200px] h-[200px] rounded-xl object-cover border-4 border-accent bg-gray-300 mx-auto md:mx-0 shadow-sm"
      />
      <div className="text-center md:text-left w-full">
        <h2 className="text-primary text-3xl mb-4 font-normal">{name}</h2>
        <InfoGrid items={details} className="lg:grid-cols-2" />
      </div>
    </div>
  );
};