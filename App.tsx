import React, { useState } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { Card } from './components/Card';
import { InfoGrid } from './components/InfoGrid';
import { FoodDiary } from './components/FoodDiary';
import { NutritionPromptModal } from './components/NutritionPromptModal';
import { IntroPage } from './components/IntroPage';
import { EnergyCalculatorModal } from './components/EnergyCalculatorModal';
import { MacroCalculatorModal } from './components/MacroCalculatorModal';
import { VideoInstructionModal } from './components/VideoInstructionModal';
import { CASE_STUDIES } from './constants';

const App: React.FC = () => {
  const [activeStudyId, setActiveStudyId] = useState<string>('intro');
  const [isEnergyModalOpen, setIsEnergyModalOpen] = useState(false);
  const [isMacroModalOpen, setIsMacroModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const activeStudy = CASE_STUDIES.find(study => study.id === activeStudyId);

  // Helper to extract data for the calculator
  const getInitialCalculatorData = () => {
    if (!activeStudy) return {};
    
    const age = activeStudy.profileDetails.find(d => d.label === 'Age')?.value;
    const height = activeStudy.healthStats.stats.find(d => d.label === 'Height')?.value;
    const weight = activeStudy.healthStats.stats.find(d => d.label === 'Current Weight')?.value;
    
    // Simple heuristic for gender based on name/study ID for this specific app context
    // In a real app, gender would likely be a field in the data
    let gender: 'male' | 'female' = 'female';
    if (activeStudyId === 'rafael' || activeStudyId === 'yusuf') {
      gender = 'male';
    }

    return { age, height, weight, gender };
  };

  return (
    <div className="max-w-[1200px] mx-auto p-5 pb-[50px]">
      <header className="bg-gradient-to-br from-primary to-secondary text-white py-8 px-4 text-center mb-8 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-normal mb-6">Level 3 Nutrition Case Study</h1>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Instructions / Home Button */}
          <button
              onClick={() => setActiveStudyId('intro')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeStudyId === 'intro'
                  ? 'bg-accent border-accent text-white shadow-lg scale-105' 
                  : 'bg-transparent border-white text-white hover:bg-white/10'
              }`}
            >
              Instructions
            </button>

          {/* Case Study Buttons */}
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveStudyId(study.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeStudyId === study.id 
                  ? 'bg-accent border-accent text-white shadow-lg scale-105' 
                  : 'bg-transparent border-white text-white hover:bg-white/10'
              }`}
            >
              {study.name}
            </button>
          ))}
        </div>
      </header>

      {activeStudyId === 'intro' ? (
        <IntroPage />
      ) : (
        activeStudy && (
          <div key={activeStudy.id} className="animate-fade-in">
            <ProfileHeader 
              name={activeStudy.name}
              imageUrl={activeStudy.imageUrl}
              details={activeStudy.profileDetails}
            />

            <Card title="Background">
              <div className="space-y-4 text-textDark leading-relaxed">
                {activeStudy.background.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Card>

            <Card title="Dietary Habits & Lifestyle">
              <div className="space-y-6">
                <div>
                  <h3 className="text-secondary text-xl font-medium mt-6 mb-3">Current Eating Patterns:</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-textDark">
                    {activeStudy.lifestyle.eatingPatterns.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-secondary text-xl font-medium mt-6 mb-3">Lifestyle Factors:</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-textDark">
                    {activeStudy.lifestyle.lifestyleFactors.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-secondary text-xl font-medium mt-6 mb-3">Challenges:</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-textDark">
                    {activeStudy.lifestyle.challenges.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card title="Health & Wellness">
              <InfoGrid items={activeStudy.healthStats.stats} className="grid-cols-2 lg:grid-cols-5" />
              
              <div className="bg-[#fff3cd] p-4 border-l-4 border-amber-400 rounded-md mt-6 text-textDark">
                <strong className="text-primary">Main Goal:</strong> {activeStudy.healthStats.mainGoal}
              </div>
            </Card>

            {/* Calculator Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setIsEnergyModalOpen(true)}
                className="bg-secondary hover:bg-primary text-white p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-gray-600 group"
              >
                <div className="bg-white/10 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold">Calculate Energy Needs</h3>
                  <p className="text-sm text-gray-300 mt-1">Mifflin-St Jeor & Activity Multiplier</p>
                </div>
              </button>

              <button
                onClick={() => setIsMacroModalOpen(true)}
                className="bg-secondary hover:bg-primary text-white p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-gray-600 group"
              >
                <div className="bg-white/10 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold">Calculate Macro Balance</h3>
                  <p className="text-sm text-gray-300 mt-1">Determine CHO, Protein & Fat splits</p>
                </div>
              </button>
            </div>

            <FoodDiary data={activeStudy.foodDiary} />
            
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-12">
              <NutritionPromptModal />
              
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Instructions
              </button>

              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdtUkJGo3QOE2UdYUd1XSd22Dy6mSkcPvyjJMGo93soozwWNg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Answer Consultation Questions
              </a>
            </div>

            {/* Modals */}
            <EnergyCalculatorModal 
              isOpen={isEnergyModalOpen} 
              onClose={() => setIsEnergyModalOpen(false)}
              initialData={getInitialCalculatorData()}
            />
            <MacroCalculatorModal 
              isOpen={isMacroModalOpen} 
              onClose={() => setIsMacroModalOpen(false)}
            />
            <VideoInstructionModal 
              isOpen={isVideoModalOpen} 
              onClose={() => setIsVideoModalOpen(false)}
            />

          </div>
        )
      )}
    </div>
  );
};

export default App;