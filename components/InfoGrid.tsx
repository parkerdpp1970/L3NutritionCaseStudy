import React from 'react';
import { InfoItemProps } from '../types';

interface InfoGridProps {
  items: InfoItemProps[];
  className?: string;
}

export const InfoGrid: React.FC<InfoGridProps> = ({ items, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="bg-bgLight p-3 rounded border-l-4 border-accent">
          <strong className="block text-primary mb-1">{item.label}:</strong>
          <span className="text-textDark">{item.value}</span>
        </div>
      ))}
    </div>
  );
};