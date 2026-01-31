import React from 'react';
import { Card } from './Card';

export const IntroPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Card title="Learner Activity Instructions">
        <div className="space-y-6 text-textDark leading-relaxed">
          <p className="text-lg">
            The purpose of this case study is to demonstrate your competency in carrying out a nutrition consultation, analyzing a client's dietary habits, and providing recommendations aligned with evidence-based healthy eating practices.
          </p>

          <p className="text-lg">
            You are required to carry out a nutrition consultation using one of four pre-written case study clients.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r shadow-sm">
            <p className="text-blue-800 font-medium mb-3">
              To complete this case study assessment, you will need to have completed the following:
            </p>
            <ol className="list-decimal list-inside text-blue-900 space-y-1 font-medium ml-1">
              <li>EdApp nutrition consultation section</li>
              <li>Reviewed the character profiles and profile food diary</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-bgLight p-6 rounded-lg border-l-4 border-accent shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-2">Section 1</h3>
              <p className="text-gray-700">Complete your name and email address.</p>
            </div>

            <div className="bg-bgLight p-6 rounded-lg border-l-4 border-accent shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-2">Section 2</h3>
              <p className="text-gray-700">Answer the nutrition consultation questions.</p>
            </div>

            <div className="bg-bgLight p-6 rounded-lg border-l-4 border-accent shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-2">Section 3</h3>
              <p className="text-gray-700">Calculate your client's total daily energy needs by using the Mifflin-St Jeor calculation and the macronutrient balance calculation by clicking on the respective buttons in each case study.</p>
            </div>

            <div className="bg-bgLight p-6 rounded-lg border-l-4 border-accent shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-2">Section 4</h3>
              <p className="text-gray-700 font-bold mb-2">Create a summary report that you could send to the client.</p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 text-sm">
                <li>Copy the prompt located at the bottom of each case study.</li>
                <li>Copy this prompt into Gemini, Chat GPT or Sider 'prompt box'.</li>
                <li>Copy the report and paste the text into the assessment response.</li>
                <li>For more information click on the video link containing instructions on how to use the prompt to create a report. This is located at the bottom of each case study.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-blue-600 p-8 rounded-xl shadow-lg border-l-8 border-blue-800 text-white flex flex-col md:flex-row items-center gap-6 transform hover:scale-[1.01] transition-transform">
            <div className="bg-white/20 p-4 rounded-full flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
               </svg>
            </div>
            <div>
               <h3 className="text-2xl font-bold mb-2 text-white">Action Required</h3>
               <p className="text-lg text-blue-50 font-medium leading-relaxed">
                 To answer the consultation questions, you need to click on the blue button that says <span className="font-bold text-white">"Answer Consultation Questions"</span> to complete them.
               </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};