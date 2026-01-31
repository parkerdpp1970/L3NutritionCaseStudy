import React, { useState } from 'react';

export const NutritionPromptModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const promptText = `Please review the client's food diary and provide a summary and recommendations report of the client’s current eating habits and comparing them to current UK healthy eating guidelines. The report must be in UK English only, written in paragraph format with no bullet points and contain no more than 180 words. Write the report in second person point of view.

The report must answer the following questions as part of your output:

Fluid Intake: How much fluid is the client consuming daily, and what are the main sources (e.g., water, tea, coffee, soda)?

Carbohydrate Types and Quality: Describe the types, quantities, and quality of carbohydrates consumed. Are they mostly refined or whole-grain sources?

Protein and Fat Intake: Evaluate the sources of protein and fats in the diet. Note whether they include lean proteins, processed meats, natural fats, or high amounts of saturated fats.

Fruit and Vegetable Consumption: List the amount and variety of fruits and vegetables consumed. Is the client meeting the guideline of at least 5 portions per day?

Fibre Intake: Estimate if the client is meeting the recommended daily fibre intake of 30g. Highlight any adjustments needed.

Then, provide specific advice to help the client progress from their starting goal of [insert starting goal, e.g., current weight, body fat percentage, muscle mass, strength, aerobic fitness] to their desired goal of [insert desired goal, e.g., target weight, desired body composition, muscle mass increase, or maintenance of body composition and weight, strength or aerobic fitness]. Address the following considerations:

Caloric Adjustment: Recommend whether to reduce, maintain, or increase caloric intake, and specify by how much to align with their transition from starting to desired goal.

Macronutrient Balance: Suggest an ideal balance of carbohydrates, proteins, and fats that will support the progression to their desired goal, whether it is fat reduction, muscle gain, or maintenance.

Body Composition Maintenance: If the goal is to maintain current body composition and weight, identify strategies to balance caloric intake with energy expenditure and ensure nutrient needs are met for sustaining lean mass and health.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
        <button
            onClick={() => setIsOpen(true)}
            className="bg-accent hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Get Nutrition Report Prompt
        </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 my-8 relative flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white rounded-t-xl z-10">
              <h3 className="text-xl font-bold text-primary">Nutrition Report Prompt</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <p className="text-gray-600 mb-4 italic">
                Copy the prompt below and paste it into the AI prompt field.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-textDark whitespace-pre-wrap font-mono text-sm leading-relaxed">
                {promptText}
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">
                * Note: Once the prompt has been copied across, please ensure you fill in the bracketed information with the relevant details to ensure the output is correct.
              </p>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl flex justify-end gap-3 sticky bottom-0">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-lg font-bold text-white transition-all duration-300 flex items-center gap-2 shadow-sm ${
                  copied ? 'bg-green-600' : 'bg-primary hover:bg-secondary'
                }`}
              >
                {copied ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Copied!
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        Copy Prompt
                    </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};