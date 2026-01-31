import React, { useState } from 'react';

interface MacroCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MacroCalculatorModal: React.FC<MacroCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [tdee, setTdee] = useState<string>('2000');
  const [carbsPct, setCarbsPct] = useState<string>('50');
  const [proteinPct, setProteinPct] = useState<string>('20');
  const [fatPct, setFatPct] = useState<string>('30');

  const tdeeVal = parseFloat(tdee) || 0;
  const cPct = parseFloat(carbsPct) || 0;
  const pPct = parseFloat(proteinPct) || 0;
  const fPct = parseFloat(fatPct) || 0;
  
  const totalPct = cPct + pPct + fPct;
  const isValid = totalPct === 100;

  const calculateMacro = (pct: number, kcalPerGram: number) => {
    const calories = Math.round(tdeeVal * (pct / 100));
    const grams = Math.round(calories / kcalPerGram);
    return { calories, grams };
  };

  const carbs = calculateMacro(cPct, 4);
  const protein = calculateMacro(pPct, 4);
  const fat = calculateMacro(fPct, 9);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative flex flex-col">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
          <h3 className="text-xl font-bold text-primary">Macronutrient Balance Calculator</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Daily Calories (TDEE)</label>
                <div className="flex items-center">
                    <input 
                        type="number" 
                        value={tdee} 
                        onChange={(e) => setTdee(e.target.value)}
                        className="w-full max-w-xs border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent font-bold text-lg"
                    />
                    <span className="ml-2 text-gray-500">kcal</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Carbs %</label>
                    <input 
                        type="number" 
                        value={carbsPct} 
                        onChange={(e) => setCarbsPct(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Protein %</label>
                    <input 
                        type="number" 
                        value={proteinPct} 
                        onChange={(e) => setProteinPct(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fat %</label>
                    <input 
                        type="number" 
                        value={fatPct} 
                        onChange={(e) => setFatPct(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent focus:border-accent"
                    />
                </div>
            </div>

            <div className={`text-sm mb-6 font-medium text-right ${isValid ? 'text-green-600' : 'text-red-500'}`}>
                Total: {totalPct}% {isValid ? '✓' : '(Must equal 100%)'}
            </div>

            <div className="overflow-x-auto border rounded-lg">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="p-3 font-semibold text-gray-700">Macronutrient</th>
                            <th className="p-3 font-semibold text-gray-700 text-center">%</th>
                            <th className="p-3 font-semibold text-gray-700 text-right">Calories</th>
                            <th className="p-3 font-semibold text-gray-700 text-right">Grams</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="p-3 font-medium text-blue-800">Carbohydrate (4kcal/g)</td>
                            <td className="p-3 text-center bg-gray-50">{cPct}%</td>
                            <td className="p-3 text-right">{carbs.calories}</td>
                            <td className="p-3 text-right font-bold">{carbs.grams}g</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3 font-medium text-green-800">Protein (4kcal/g)</td>
                            <td className="p-3 text-center bg-gray-50">{pPct}%</td>
                            <td className="p-3 text-right">{protein.calories}</td>
                            <td className="p-3 text-right font-bold">{protein.grams}g</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium text-yellow-800">Fat (9kcal/g)</td>
                            <td className="p-3 text-center bg-gray-50">{fPct}%</td>
                            <td className="p-3 text-right">{fat.calories}</td>
                            <td className="p-3 text-right font-bold">{fat.grams}g</td>
                        </tr>
                    </tbody>
                    <tfoot className="bg-gray-50 font-bold">
                         <tr>
                            <td className="p-3 text-gray-800">TOTAL</td>
                            <td className="p-3 text-center">{totalPct}%</td>
                            <td className="p-3 text-right">{carbs.calories + protein.calories + fat.calories}</td>
                            <td className="p-3 text-right">-</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
};