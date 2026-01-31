import React, { useState, useEffect } from 'react';

interface EnergyCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    weight?: string;
    height?: string;
    age?: string;
    gender?: 'male' | 'female';
  };
}

export const EnergyCalculatorModal: React.FC<EnergyCalculatorModalProps> = ({ isOpen, onClose, initialData }) => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [activityLevel, setActivityLevel] = useState<number>(1.2);
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen && initialData) {
      if (initialData.weight) setWeight(initialData.weight.replace(/[^0-9.]/g, ''));
      if (initialData.height) setHeight(initialData.height.replace(/[^0-9.]/g, ''));
      if (initialData.age) setAge(initialData.age.replace(/[^0-9.]/g, ''));
      if (initialData.gender) setGender(initialData.gender);
    }
  }, [isOpen, initialData]);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a)) return;

    // Mifflin-St Jeor Equation
    let calculatedBmr = (10 * w) + (6.25 * h) - (5 * a);
    if (gender === 'male') {
      calculatedBmr += 5;
    } else {
      calculatedBmr -= 161;
    }

    setBmr(Math.round(calculatedBmr));
    setTdee(Math.round(calculatedBmr * activityLevel));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 relative flex flex-col">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
          <h3 className="text-xl font-bold text-primary">Energy Needs Calculator</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age (years)</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
              <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Activity Level</label>
            <select 
              value={activityLevel} 
              onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent"
            >
              <option value={1.2}>Sedentary (little or no exercise)</option>
              <option value={1.375}>Lightly active (light exercise 1-3 days/week)</option>
              <option value={1.55}>Moderately active (moderate exercise 3-5 days/week)</option>
              <option value={1.725}>Very active (hard exercise 6-7 days/week)</option>
              <option value={1.9}>Extra active (very hard exercise & physical job)</option>
            </select>
          </div>

          <button 
            onClick={calculate}
            className="w-full bg-accent text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Calculate
          </button>

          {bmr !== null && tdee !== null && (
            <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">BMR (Mifflin-St Jeor):</span>
                <span className="font-bold text-primary text-lg">{bmr} kcal</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-blue-200">
                <span className="text-gray-700 font-medium">TDEE (Maintenance):</span>
                <span className="font-bold text-primary text-xl">{tdee} kcal</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};