import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", title }) => {
  return (
    <section className={`bg-white p-8 rounded-xl shadow-md mb-8 border-t-0 ${className}`}>
      {title && (
        <h2 className="text-primary text-2xl font-normal mb-5 pb-2 border-b-[3px] border-accent">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};