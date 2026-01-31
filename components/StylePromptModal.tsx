import React, { useState } from 'react';

export const StylePromptModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'roadmap' | 'nhs'>('roadmap');

  const roadmapPrompt = `Create a single-page nutrition infographic in UK English using ONLY the information in the Source panel. Do not add new facts; if something is missing, write “Not recorded”.

Match this visual style: “roadmap” infographic on a light grey background with a winding dotted path connecting sections; rounded white cards; pastel colour blocks; flat vector icons with soft outlines; bold sans-serif typography; clear hierarchy; friendly, coaching tone.

Layout (A4 portrait, mobile-readable):
1) Top: Large title + one-line subtitle.
2) Left and right near the top: small “START” and “GOAL” badges (use values from source if present; otherwise omit).
3) Four stacked sections along the path. Each section must be split into two columns:
   - Left column label: “PROBLEM” (warm red accent) with 1–2 short sentences.
   - Right column label: “SOLUTION” (cool green accent) with 1–2 short sentences.
   Use section headers in pill-shaped tabs (all caps): “HYDRATION HABITS”, “CARBOHYDRATE QUALITY”, “PROTEIN & FAT SOURCES”, “FRUIT, VEGETABLES & FIBRE”.
4) Bottom-right: a bordered callout box titled “YOUR NEXT STEPS” containing 3–5 short action lines derived from the source.

Text rules: short lines, no bullet symbols, no long paragraphs, UK spelling, include key quantities exactly as in the source.
Graphics rules: 1–2 small icons per section that match the content (e.g., water bottle, bread/grains, fish/chicken, fruit/veg, fibre).
Include a small footer note: “Based on recorded diary entries and UK healthy eating guidance.”`;

  const nhsPrompt = `Create a single-page nutrition infographic in UK English using ONLY the information provided in the Source panel. Do not add new foods, drinks, numbers, assumptions, or advice beyond the source; if something is missing, label it “Not recorded”.

Style: clean NHS/UK public health look; high contrast; generous whitespace; minimalist flat design; consistent spacing and alignment; clear visual hierarchy. MUST use Glyph / Monochromatic Flat / Solid icons

Colour palette (use these exact NHS colours):
Primary blues: NHS Dark Blue #003087, NHS Blue #005EB8 (primary), NHS Bright Blue #0072CE, NHS Light Blue #41B6E6, NHS Aqua Blue #00A9CE.
Neutrals: NHS Black #231F20, NHS Dark Grey #425563, NHS Mid Grey #768692, NHS Pale Grey #E8EDEE, White #FFFFFF.
Suggested use: title bar/section headers #005EB8; accents and charts #00A9CE and #41B6E6; primary text #231F20; secondary text #425563; dividers/labels #768692; page background #E8EDEE or #FFFFFF; cards/panels #FFFFFF.

Icons (MUST use Glyph / Monochromatic Flat / Solid icons):
Use only solid-filled, single-colour glyph icons that rely on silhouette shape. No gradients, no shadows, no outlines/linear icons, no bevels, no 3D, no texture, no multi-colour icons. Keep icons highly recognisable at small sizes, with consistent geometry and visual weight. Colour icons using ONLY one of the NHS palette colours per icon (e.g., #005EB8 or #00A9CE).

Layout: A4 portrait, mobile-readable. Use a top title bar, then 5 equal sections with short labels and micro-summaries: Fluids, Carbohydrates, Protein & Fats, Fruit & Vegetables, Fibre. Add a final “Recommendations” band and a small “Compared with UK healthy eating guidelines” strip.

Visuals: simple pictograms and 1–2 compact charts (e.g., progress bars or small doughnut indicators) to show relative patterns vs guidelines; include small “Evidence from diary” captions under each section quoting key items/amounts from the source.

Typography: plain sans-serif, large headings, concise text, UK spelling, no bullet lists, no long paragraphs.`;

  const currentPrompt = activeTab === 'roadmap' ? roadmapPrompt : nhsPrompt;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 bg-white text-primary font-bold py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 border border-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Get Infographic Style Prompt
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 my-8 relative flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white rounded-t-xl z-10">
              <h3 className="text-xl font-bold text-primary">NotebookLM Style Prompt</h3>
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
            
            <div className="p-6 overflow-y-auto text-left">
              <p className="text-gray-600 mb-4 font-medium">
                Select a visual style below, then copy the prompt into NotebookLM:
              </p>
              
              <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setActiveTab('roadmap')}
                    className={`px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-all flex-1 sm:flex-none ${
                        activeTab === 'roadmap' 
                        ? 'bg-accent text-white shadow-md ring-2 ring-accent ring-offset-2' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    Friendly Roadmap Style
                </button>
                <button
                    onClick={() => setActiveTab('nhs')}
                    className={`px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-all flex-1 sm:flex-none ${
                        activeTab === 'nhs' 
                        ? 'bg-primary text-white shadow-md ring-2 ring-primary ring-offset-2' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    Clean NHS Style
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-textDark whitespace-pre-wrap font-mono text-sm leading-relaxed shadow-inner">
                {currentPrompt}
              </div>
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