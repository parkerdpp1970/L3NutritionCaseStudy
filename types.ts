export interface MealEntry {
    time: string;
    food: string[];
    portion: string[];
}

export interface DayLog {
    day: number;
    meals: MealEntry[];
}

export interface InfoItemProps {
    label: string;
    value: string;
}

export interface CaseStudy {
    id: string;
    name: string;
    imageUrl: string;
    profileDetails: InfoItemProps[];
    background: string[];
    lifestyle: {
        eatingPatterns: string[];
        lifestyleFactors: string[];
        challenges: string[];
    };
    healthStats: {
        stats: InfoItemProps[];
        mainGoal: string;
    };
    foodDiary: DayLog[];
}