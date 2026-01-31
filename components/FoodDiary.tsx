import React from 'react';
import { Card } from './Card';
import { DayLog } from '../types';

interface FoodDiaryProps {
  data: DayLog[];
}

export const FoodDiary: React.FC<FoodDiaryProps> = ({ data }) => {
  return (
    <Card title="3-Day Food Diary">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-5 mb-8 min-w-[600px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-3 text-left font-semibold w-[15%]">Time</th>
              <th className="p-3 text-left font-semibold w-[60%]">Food/Drink</th>
              <th className="p-3 text-left font-semibold w-[25%]">Portion Size</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dayLog) => (
              <React.Fragment key={dayLog.day}>
                <tr className="bg-[#d1dce5] text-primary font-bold text-lg uppercase tracking-wide border-l-4 border-accent">
                  <td colSpan={3} className="p-3">Day {dayLog.day}</td>
                </tr>
                {dayLog.meals.map((meal, index) => (
                  <tr 
                    key={`${dayLog.day}-${index}`} 
                    className="hover:bg-bgLight odd:bg-white even:bg-[#fdfdfd] border-b border-borderColor last:border-0"
                  >
                    <td className="p-3 align-top text-sm font-medium text-gray-600">{meal.time}</td>
                    <td className="p-3 align-top">
                      {meal.food.map((item, i) => (
                        <div key={i}>{item}</div>
                      ))}
                    </td>
                    <td className="p-3 align-top">
                      {meal.portion.map((item, i) => (
                        <div key={i}>{item}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};