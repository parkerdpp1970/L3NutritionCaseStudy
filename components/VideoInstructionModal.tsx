import React from 'react';

interface VideoInstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoInstructionModal: React.FC<VideoInstructionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-black rounded-xl shadow-2xl max-w-4xl w-full mx-4 relative flex flex-col">
        <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900 rounded-t-xl">
          <h3 className="text-xl font-bold text-white">How to use the Prompt</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="relative pt-[56.25%] bg-black rounded-b-xl overflow-hidden">
          <iframe 
            src="https://player.vimeo.com/video/1152911440?h=ec8c6c9e0d&title=0&byline=0&portrait=0" 
            className="absolute top-0 left-0 w-full h-full" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Instruction Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};