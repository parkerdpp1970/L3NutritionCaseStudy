import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ama',
    name: 'Ama Mensah',
    imageUrl: 'https://res.cloudinary.com/dlshlye2v/image/upload/v1766468728/Ama_amprht.jpg',
    profileDetails: [
      { label: "Age", value: "35 years old" },
      { label: "Occupation", value: "Elementary School Teacher" },
      { label: "Location", value: "Accra, Ghana" },
      { label: "Origin", value: "Kumasi, Ghana" },
    ],
    background: [
      "Meet Ama Mensah, a confident, happy, and bubbly single woman from Kumasi, Ghana. Ama is a 35-year-old elementary school teacher who brings her upbeat energy to the classroom every day while raising her two lively children, Nana (10) and Kofi (7). Known for her extroverted nature, she is always happy to give things a go and is a well-loved figure in her community. She prepares traditional Ghanaian cuisine with a passion for cooking; she especially enjoys cooking for her family and children and hates seeing good food go to waste.",
      "Since moving to Accra for her job, Ama has lived a more sedentary lifestyle due to the busy city life. While she remains a naturally joyful and positive individual, she is increasingly unhappy with the weight she has gained during this transition. She spends much of her day grading papers, attending parent-teacher meetings, and managing her household. Lately, she has started to feel the physical effects of this weight gain, noticing she becomes slightly out of breath when climbing stairs, which has motivated her desire to get fit and regain her characteristic vitality.",
      "Ama is acutely aware that her inactivity is the primary cause of her physical changes. Although she remains confident in her personality, she finds herself frustrated with how her current clothes fit and is unhappy about being overweight. She knows these factors are direct results of her declining fitness levels, and these realisations have pushed her to take action with her typical \"can-do\" attitude.",
      "Ama joined her local gym three months ago and, despite her busy schedule, is now committed to a consistent routine of three sessions per week. She particularly looks forward to her Thursday evening Zumba class, where her bubbly personality truly shines. While the gym is a new environment and she currently lacks experience with free weights, she is eager to build her skills and confidence in this new area of training."
    ],
    lifestyle: {
      eatingPatterns: [
        "Passionate about preparing and sharing traditional dishes like Jollof, Banku, and Okra stew.",
        "Breakfast often consists of Koko (millet porridge) or oats.",
        "Lunch and Dinner usually feature substantial staples such as Fufu, Waakye, or Tuo Zaafi.",
        "Social eating is a highlight, though she has noticed an increase in convenience snacking due to work pressure.",
        "Dislikes food waste and often finishes portions to ensure nothing is thrown away."
      ],
      lifestyleFactors: [
        "Confident and extroverted professional role as a teacher.",
        "Committing to three gym sessions per week.",
        "Highly active social and community life.",
        "Enthusiastic participant in Zumba every Thursday evening."
      ],
      challenges: [
        "Finding time for self-care while balancing single parenthood and full-time teaching.",
        "Learning to navigate the free-weight area of the gym.",
        "Establishing a consistent fitness routine amidst a hectic city lifestyle.",
        "Managing physical frustration (e.g. breathlessness on stairs) without losing her upbeat outlook.",
        "Dealing with frustration regarding the fit of her clothes and her current weight."
      ]
    },
    healthStats: {
      stats: [
        { label: "Height", value: "170 cm" },
        { label: "Current Weight", value: "80 kg" },
        { label: "Physical Activity", value: "Gym 3x/week (inc. Thursday Zumba)" },
        { label: "Stress Level", value: "Moderate" },
        { label: "Starting Goal", value: "Weight Loss (15 kg target)" },
      ],
      mainGoal: "Ama wants to lose 15 kg to regain her vitality and serve as a positive, energetic role model for her children and students. She also aims to build her technical confidence using free weights."
    },
    foodDiary: [
      {
        day: 1,
        meals: [
          {
            time: "6:45 am",
            food: ["Koko (millet porridge)", "Koose (fried bean cakes)", "Black coffee"],
            portion: ["Approx. 2 cups (480ml)", "2 pieces", "1 cup (200ml)"]
          },
          {
            time: "10:45 am",
            food: ["Fresh pineapple slices", "Chocolate cookies", "Coke"],
            portion: ["1 cup (150g)", "30g", "330ml"]
          },
          {
            time: "12:30 pm",
            food: ["Banku (corn flour dough)", "Okra stew (with palm oil)", "Grilled Tilapia", "Water"],
            portion: ["Approx. 1 cup (250g)", "Around 1 cup (240ml)", "140g", "230ml"]
          },
          {
            time: "3:45 pm",
            food: ["Roasted plantain", "Groundnuts (peanuts)", "Small bag of crisps", "Unsweetened hibiscus tea (Sobolo)"],
            portion: ["1 medium", "Handful (30g)", "30g", "230ml"]
          },
          {
            time: "7:15 pm",
            food: ["Vegetable soup (with meat stock)", "Fufu (pounded yam)", "Unsweetened hibiscus tea"],
            portion: ["Approx. 2 cups (480ml)", "2 small pieces (total 1 cup/200g)", "230ml"]
          },
          {
            time: "9:00 pm",
            food: ["Small chocolate bar"],
            portion: ["50g"]
          }
        ]
      },
      {
        day: 2,
        meals: [
          {
            time: "7:00 am",
            food: ["Porridge oats (cooked)", "Full-fat milk", "Sliced banana", "Hint of honey", "Fresh orange juice", "Black coffee"],
            portion: ["1 cup (240ml)", "200ml", "1 medium", "1 tsp", "240ml", "240ml"]
          },
          {
            time: "10:45 am",
            food: ["Mango", "Small bag of crisps"],
            portion: ["1 medium (200g)", "1 ounce (28g)"]
          },
          {
            time: "12:30 pm",
            food: ["Jollof rice", "Grilled chicken", "Steamed vegetables", "Unsweetened hibiscus tea"],
            portion: ["Approx. 1.5 cups (360ml)", "140g", "1 cup (240ml)", "240ml"]
          },
          {
            time: "4:15 pm",
            food: ["Bofrot (fried yeasted dough)", "Packet of sugar-coated peanuts", "Cup of water"],
            portion: ["2 pieces (85g each)", "28g", "240ml"]
          },
          {
            time: "7:15 pm",
            food: ["Grilled tilapia", "Tomato and cucumber salad", "Sweetened iced tea"],
            portion: ["140g", "1.5 cups (360ml)", "240ml"]
          }
        ]
      },
      {
        day: 3,
        meals: [
          {
            time: "7:15 am",
            food: ["Whole wheat bread", "Avocado spread", "Boiled eggs", "Black coffee", "Glass of water"],
            portion: ["Approx. 80g", "2 tbsp (30g)", "2 medium", "240ml", "230ml"]
          },
          {
            time: "10:30 am",
            food: ["Red grapes", "Salted cashews", "Can of Sprite"],
            portion: ["1 cup (150g)", "30g", "330ml"]
          },
          {
            time: "12:45 pm",
            food: ["Waakye (rice and beans)", "Grilled mackerel", "Tomato and onion sauce", "Bottle of water"],
            portion: ["Approx. 1.5 cups (360g)", "120g", "3/4 cup (180ml)", "500ml"]
          },
          {
            time: "3:30 pm",
            food: ["Kelewele (spiced fried plantains)", "Small cup Greek yogurt", "Unsweetened hibiscus tea"],
            portion: ["1 medium", "150g", "240ml"]
          },
          {
            time: "7:30 pm",
            food: ["Tuo zaafi (millet dough)", "Ayoyo soup with beef", "Steamed garden eggs", "Glass of water"],
            portion: ["Approx. 1 cup (240g)", "1.5 cups (360ml)", "1/2 cup (100g)", "230ml"]
          },
          {
            time: "9:15 pm",
            food: ["Small coconut candy", "Cup of warm milk"],
            portion: ["40g", "240ml"]
          }
        ]
      }
    ]
  },
  {
    id: 'rafael',
    name: 'Rafael Ferreira',
    imageUrl: 'https://res.cloudinary.com/dlshlye2v/image/upload/v1766471453/Rafael_yhd388.jpg',
    profileDetails: [
      { label: "Age", value: "21 years old" },
      { label: "Occupation", value: "Footballer (Inverness Caledonian Thistle FC)" },
      { label: "Location", value: "Scotland" },
      { label: "Origin", value: "Brazilian/Scottish" },
    ],
    background: [
      "Meet Rafael Ferreira, a fusion of Brazilian flair and Scottish grit. Born to a Brazilian father and a Scottish mother, Rafael moved to Scotland at three. His football skills show a distinct touch of Brazilian flair. At 21, Rafael stands 1.75 m and weighs 65 kg. He plays for Inverness Caledonian Thistle FC, a Scottish league division one football club, but is currently in the reserves team. He aims to earn a regular spot in the first team.",
      "He was once a rising star known for his nimble feet and Brazilian style. Scouts from English Premiership teams watched him closely. However, last season was marred by injuries and lacklustre performances, leaving him on the reserve bench this season. Rafael knows his setbacks are due to declining fitness. On the pitch, he lacks tenacity in aerial duels and tackles. Improvement is essential.",
      "With the off-season ahead, Rafael is determined to turn things around. He wants to increase his muscle mass, strength, and stamina. His goal is to increase his muscle mass and weight to 75 kg. Rafael admits he’s no Gordon Ramsay and has poor cooking skills. He feels his diet is okay but would appreciate guidance on optimal meal timing around training and advice on protein requirements.",
      "He has trained in the gym for 16 years and is confident using weights, but sessions have been sporadic lately. He also desires an in-season programme to prepare for the upcoming season’s kick-off in a few months. Able to train 5-6 sessions each week, he is ready to follow expert guidance."
    ],
    lifestyle: {
      eatingPatterns: [
        "Admits to poor cooking skills; reliance on convenience and takeaway foods.",
        "Meal timing around training sessions is currently sporadic and unplanned.",
        "Diet consists of high-calorie, processed items including frequent takeaway pizzas.",
        "Requires guidance on protein requirements and optimal nutrient timing."
      ],
      lifestyleFactors: [
        "Able to commit to 5-6 training sessions per week.",
        "Highly experienced in the gym (16 years) and confident with weights.",
        "Seeking an in-season programme to prepare for the upcoming season.",
        "Needs to improve tenacity in aerial duels and physical tackles."
      ],
      challenges: [
        "Recovering from recent injuries and declining fitness.",
        "Reliance on convenience and fast foods due to poor cooking skills.",
        "Sporadic meal timing affecting training quality.",
        "Need to gain 10kg to improve physicality for aerial duels.",
        "Balancing high training load with poor nutritional habits."
      ]
    },
    healthStats: {
      stats: [
        { label: "Height", value: "1.75 m" },
        { label: "Current Weight", value: "65 kg" },
        { label: "Physical Activity", value: "Professional Football" },
        { label: "Stress Level", value: "Low" },
        { label: "Desired Weight", value: "75 kg" },
      ],
      mainGoal: "Rafael wants to increase his muscle mass and body weight to 75 kg. He requires specific guidance on optimal meal timing around training and high-quality protein requirements to support hypertrophy. Beyond his current club, his ultimate aspiration is to play in the English Premier League."
    },
    foodDiary: [
      {
        day: 1,
        meals: [
          {
            time: "9:15 am",
            food: ["Frosties Cereal", "Full-fat milk", "Tea with semi-skimmed milk"],
            portion: ["140g (2 large bowls)", "450ml", "200ml"]
          },
          {
            time: "10:45 am",
            food: ["Crisps", "Orange juice", "Apple"],
            portion: ["30g", "230ml", "1 medium"]
          },
          {
            time: "12:30 pm",
            food: ["Ham and cheese sandwiches (white bread)", "Potato chips", "Fanta"],
            portion: ["2 sandwiches", "30g", "355ml"]
          },
          {
            time: "4:15 pm",
            food: ["Chocolate bar", "Pretzels", "Water"],
            portion: ["50g", "30g", "240ml"]
          },
          {
            time: "8:00 pm",
            food: ["Dominos Pepperoni Pizza", "Sweetened iced tea"],
            portion: ["750g (12-inch)", "240ml"]
          }
        ]
      },
      {
        day: 2,
        meals: [
          {
            time: "9:15 am",
            food: ["Frosties Cereal", "Full-fat milk", "Tea with semi-skimmed milk"],
            portion: ["140g (2 large bowls)", "450ml", "200ml"]
          },
          {
            time: "10:45 am",
            food: ["Pineapple chunks", "Apple", "Water"],
            portion: ["300g", "180g", "240ml"]
          },
          {
            time: "12:30 pm",
            food: ["Ham and cheese sandwiches (white bread)", "Walkers ready salted crisps", "Fanta"],
            portion: ["2 sandwiches", "30g", "355ml"]
          },
          {
            time: "6:15 pm",
            food: ["Chicken korma", "Basmati rice", "Sweetened iced tea"],
            portion: ["340g (1.5 cups)", "240ml (1 cup)", "240ml"]
          },
          {
            time: "9:40 pm",
            food: ["Protein shake (with water)"],
            portion: ["40g protein / 400ml"]
          }
        ]
      },
      {
        day: 3,
        meals: [
          {
            time: "9:00 am",
            food: ["White toast with jam", "Scrambled eggs", "Bacon", "Tea with semi-skimmed milk"],
            portion: ["120g (3 slices)", "100g (2 medium)", "45g (3 strips)", "200ml"]
          },
          {
            time: "11:00 am",
            food: ["Banana", "Doritos", "Orange juice"],
            portion: ["120g (1 medium)", "30g", "230ml"]
          },
          {
            time: "12:30 pm",
            food: ["McDonald's Big Mac", "Medium fries", "Coca-Cola"],
            portion: ["219g (1 burger)", "114g", "355ml"]
          },
          {
            time: "4:00 pm",
            food: ["Chocolate digestive biscuits", "Jelly beans", "Water"],
            portion: ["36g (2 biscuits)", "40g", "240ml"]
          },
          {
            time: "8:30 pm",
            food: ["Fish and chips (takeaway)", "Mushy peas", "Buttered white bread", "Fanta"],
            portion: ["450g (large portion)", "150g", "80g (2 slices)", "355ml"]
          },
          {
            time: "10:15 pm",
            food: ["Protein shake (with milk)"],
            portion: ["40g protein / 400ml"]
          }
        ]
      }
    ]
  },
  {
    id: 'yusuf',
    name: 'Yusuf Ozturk',
    imageUrl: 'https://res.cloudinary.com/dlshlye2v/image/upload/v1766471453/Yusuf_dywb1w.jpg',
    profileDetails: [
      { label: "Age", value: "41 years old" },
      { label: "Occupation", value: "Programmer / Team Manager" },
      { label: "Location", value: "Istanbul, Turkey" },
      { label: "Family", value: "Married, Father of three" },
    ],
    background: [
      "At 1.76 m tall, Yusuf Ozturk, a 41-year-old computer programmer and team manager residing just outside Istanbul, Turkey, wants to regain his fitness. Once an accomplished long-distance runner in his twenties, Yusuf’s athletic pursuits took a backseat to the demands of a thriving career and a growing family. Married and a father of three, his life is full and busy. However, his physical activity has significantly diminished over the past decade, and he has not exercised regularly. He has never been a gym-goer, preferring to be outside, hitting the streets and running for miles.",
      "Yusuf's professional role is highly stressful; he is often in the office before 8 a.m. every day and frequently stays late to manage his team and project deadlines. He admits that when stress levels are high, he can go an entire day without eating anything, only to gorge on large amounts of food once he finally returns home. This erratic cycle of fasting and overeating has become a major concern for him.",
      "He now wants to return to running for personal fulfilment and to connect with his children, who are active in the local athletics club. He hopes to improve his fitness so he can comfortably run with them and possibly complete a half marathon. Yusuf values maintaining muscle mass as he ages but dislikes gyms and weight training, seeking alternative guidance. He also wants to lose weight, having risen from 70kg to around 80kg.",
      "Although Yusuf does not have much free time, balancing long working hours with his duties as a \"taxi service\" for his children’s athletics, he is committed to establishing a routine of three to four sessions per week. He finds that weekends are generally the most reliable time for these sessions, along with early mornings, as his evenings are typically occupied by his children's training meets if he is home in time.",
      "Yusuf feels his diet is generally balanced, with most meals prepared at home by his wife. However, he acknowledges a tendency towards large portions and the aforementioned \"gorging\" habit, which may contribute to his current fitness and weight. Yusuf seeks advice on portion control, consistent meal timing, and nutritional adjustments to support his fitness goals."
    ],
    lifestyle: {
      eatingPatterns: [
        "High-stress workplace often leads to skipping meals entirely during the day.",
        "Tendency to \"gorge\" on large portions late in the evening following a day of fasting.",
        "Most meals are home-cooked and Mediterranean-style but lack portion control.",
        "Weekend eating is frequently excessive compared to the work week."
      ],
      lifestyleFactors: [
        "Dislikes gyms and weight training; prefers the outdoors and street running.",
        "Committed to 3-4 sessions per week (1 hour each), prioritising weekends and early mornings.",
        "Seeking athletic fulfilment and connection with his children through their athletics club.",
        "Interested in maintaining muscle mass without traditional weight training."
      ],
      challenges: [
        "Long working hours, frequently starting before 8 a.m. and finishing late.",
        "Stress-induced irregular eating habits (skipping lunch and overeating at dinner).",
        "Hectic family schedule serving as transport for three children's athletic commitments.",
        "Limited free time in the evenings due to work and family logistics."
      ]
    },
    healthStats: {
      stats: [
        { label: "Height", value: "1.76 m" },
        { label: "Current Weight", value: "80 kg" },
        { label: "Physical Activity", value: "Outdoor Running" },
        { label: "Stress Level", value: "High" },
        { label: "Goal Weight", value: "70 kg" },
      ],
      mainGoal: "Yusuf wants to lose 10 kg, improve cardiovascular fitness for a half marathon, and break the cycle of stress-induced overeating through better portion control and consistent meal timing."
    },
    foodDiary: [
      {
        day: 1,
        meals: [
          {
            time: "10:00 am",
            food: ["Dried apricots (Kuru Kayısı)", "Turkish coffee (with 1 tsp sugar)"],
            portion: ["50g (5 pieces)", "60ml (1 small cup)"]
          },
          {
            time: "2:00 pm",
            food: ["İmam Bayıldı (stuffed eggplant)", "Pilav (rice pilaf - cooked)", "Shepherd's salad (Çoban Salatası)", "Ayran (yogurt drink)", "Fanta (Orange soda)", "Packet of local potato crisps", "Baklava (Sugary snack)"],
            portion: ["200g (1 large)", "300g (approx. 1.5 cups)", "250g (approx. 1.5 cups)", "240ml (1 cup)", "330ml (1 can)", "45g (1 standard bag)", "140g (4 pieces)"]
          },
          {
            time: "6:30 pm",
            food: ["Fresh figs", "Turkish tea (Çay) (with 1 tsp sugar)", "Ülker Milk Chocolate bar"],
            portion: ["300g (6 medium)", "240ml (1 cup)", "60g (1 bar)"]
          },
          {
            time: "10:00 pm",
            food: ["Fresh pomegranate seeds", "Turkish coffee (with 1 tsp sugar)"],
            portion: ["150g (1 bowl)", "60ml (1 small cup)"]
          }
        ]
      },
      {
        day: 2,
        meals: [
          {
            time: "11:45 am",
            food: ["Fresh apricots", "Corn crisps (Peynirli Mısır Cipsi)", "Turkish tea (Çay) (with 1 tsp sugar)"],
            portion: ["250g (7 medium)", "50g", "240ml (1 cup)"]
          },
          {
            time: "1:30 pm",
            food: ["Chicken shish kebab (Tavuk Şiş)", "Grilled vegetables", "Tabbouleh (Kısır - cooked)", "Large Coca-Cola", "Eti Biskrem (Chocolate-filled biscuits)"],
            portion: ["300g (3 skewers)", "150g", "180g (approx. 1 cup)", "500ml", "100g (1 packet)"]
          },
          {
            time: "4:30 pm",
            food: ["Filter coffee (semi-skimmed milk)", "Fresh watermelon", "Lokma (Sugary snack)"],
            portion: ["230ml", "150g (approx. 1 cup)", "150g (approx. 8 pieces)"]
          },
          {
            time: "7:45 pm",
            food: ["Grilled sea bass (Levrek)", "Boiled potatoes", "Water"],
            portion: ["250g", "200g", "240ml"]
          },
          {
            time: "10:30 pm",
            food: ["Fresh watermelon", "Turkish coffee (with 1 tsp sugar)"],
            portion: ["150g (approx. 1 cup)", "60ml (1 small cup)"]
          }
        ]
      },
      {
        day: 3,
        meals: [
          {
            time: "10:30 am",
            food: ["Simit with cream cheese", "Fresh cherries", "Turkish coffee (with 1 tsp sugar)"],
            portion: ["180g (2 pieces)", "150g (1 cup)", "60ml"]
          },
          {
            time: "2:15 pm",
            food: ["Mercimek Çorbası (lentil soup)", "Pide (meat and cheese)", "Fruko (Sugary soda)", "Çiziviç (Cheese crackers)", "Ayran"],
            portion: ["300ml (1 bowl)", "400g (2 pieces)", "330ml (1 can)", "82g (1 packet)", "240ml (1 cup)"]
          },
          {
            time: "5:00 pm",
            food: ["Turkish delight (Lokum)", "Mixed salted nuts"],
            portion: ["100g (approx. 6 pieces)", "60g"]
          },
          {
            time: "8:00 pm",
            food: ["Dolma (stuffed vine leaves)", "Adana kebab", "Cacık (yogurt/cucumber dip)", "Bulgur pilaf (cooked)", "Turkish tea (Çay) (with 1 tsp sugar)", "Sütlaç (Rice pudding dessert)"],
            portion: ["180g (6 pieces)", "300g (2 skewers)", "240ml (1 cup)", "300g (approx. 1.5 cups)", "480ml (2 cups)", "200g (1 bowl)"]
          },
          {
            time: "10:45 pm",
            food: ["Orange slices", "Pistachios", "Turkish coffee (with 1 tsp sugar)"],
            portion: ["150g (1 medium)", "60g", "60ml (1 small cup)"]
          }
        ]
      }
    ]
  },
  {
    id: 'julie',
    name: 'Julie Jones',
    imageUrl: 'https://res.cloudinary.com/dlshlye2v/image/upload/v1766471453/Julie_krijs0.jpg',
    profileDetails: [
      { label: "Age", value: "29 years old" },
      { label: "Occupation", value: "Part-time Administrator" },
      { label: "Location", value: "UK" },
      { label: "Family", value: "Mother of two (Zak & Sofia)" },
    ],
    background: [
      "Julie Jones is a 29-year-old mother, wife, and part-time administrator. At 1.65 m and 80 kg, she’s been struggling with her self-image, which has affected her confidence. Growing up, Julie always had an aversion to physical activity; she hated sport at school as it made her feel incredibly self-conscious and exposed. This deep-seated lack of confidence has followed her into adulthood, often manifesting as a general sense of anxiety. Julie admits to not being very 'socially inclusive', often finding social interactions daunting and preferring to keep to herself.",
      "Julie starts her day early, ensuring her children, Sofia (8) and Zak (5), are ready for school. After dropping them off, she heads to her part-time administrative job, which is scheduled around her children’s needs. She finishes work by 2:30 pm, just in time to pick them up. Julie’s husband, Ed, is the primary breadwinner with a demanding sales job and often works long hours. This ensures the family’s financial stability, especially given the high cost of living and Julie’s part-time work.",
      "Managing work, motherhood, and household duties, Julie has gained weight in recent years, affecting her self-esteem. She acknowledges that she feels constantly stressed and admits that she needs to organise herself better to cope with the mounting pressures of her schedule. Despite her history with athletics, she recently joined a gym, driven by a desire to lose 15 kg of body weight and improve her self-image.",
      "Julie’s ultimate goal is a physical transformation and regaining a sense of order and control in her life. She knows she prefers quick and simple meals and has a sweet and savoury palate, leading her to seek professional meal-planning guidance. Although Julie is new to the gym and struggles with anxiety in new environments, she believes a focused fitness regimen will enhance her well-being, energy levels, and confidence."
    ],
    lifestyle: {
      eatingPatterns: [
        "Prefers quick and simple meals.",
        "Has a sweet and savoury palate, leading to frequent snack consumption.",
        "Uses coffee with milk as a primary fluid source throughout the day."
      ],
      lifestyleFactors: [
        "Part-time administrator juggling work and motherhood.",
        "Mother of two young children (ages 8 and 5).",
        "Recently joined a gym despite having a history of aversion to sports.",
        "Husband works long hours, placing more household responsibility on her."
      ],
      challenges: [
        "Highly demanding schedule balancing work and motherhood.",
        "Husband often works long hours to support the family.",
        "Generally disorganised with poor time management.",
        "Low energy levels due to weight and irregular activity.",
        "New to the gym environment with no sports background.",
        "Low confidence level and feelings of social anxiety."
      ]
    },
    healthStats: {
      stats: [
        { label: "Height", value: "1.65 m" },
        { label: "Current Weight", value: "80 kg" },
        { label: "Physical Activity", value: "Beginner Gym Goer" },
        { label: "Stress Level", value: "High" },
        { label: "Goal Weight", value: "65 kg" },
      ],
      mainGoal: "Julie's goal is a physical transformation through a focused fitness regimen. She wants to lose 15 kg and regain a sense of order, control, and self-confidence."
    },
    foodDiary: [
      {
        day: 1,
        meals: [
          {
            time: "10:30 am",
            food: ["Large chocolate croissant", "Filter coffee (with full-fat milk and 2 tsp sugar)"],
            portion: ["120g", "300ml"]
          },
          {
            time: "12:30 pm",
            food: ["Ham, cheese and mayo baguette (white bread)", "Large portion of French fries", "Coke (Regular)"],
            portion: ["1 large baguette", "200g", "330ml"]
          },
          {
            time: "4:30 pm",
            food: ["Filter coffee (with milk and 1 tsp sugar)", "Large bowl of strawberries with double cream"],
            portion: ["230ml", "1 cup berries / 50ml cream"]
          },
          {
            time: "7:45 pm",
            food: ["Homemade beef lasagne (large portion)", "Garlic bread", "Side salad"],
            portion: ["450g serving", "3 slices", "1 cup"]
          },
          {
            time: "10:30 pm",
            food: ["Filter coffee (with milk and 1 tsp sugar)", "Milk chocolate digestive biscuits"],
            portion: ["230ml", "4 biscuits"]
          }
        ]
      },
      {
        day: 2,
        meals: [
          {
            time: "11:00 am",
            food: ["Dairy Milk sharing bar (half eaten)", "Coke Zero"],
            portion: ["55g bar", "355ml"]
          },
          {
            time: "12:30 pm",
            food: ["Tesco Coronation Chicken Sandwich", "Grab-bag of Cheese and Onion Crisps", "Apple", "Coke Zero"],
            portion: ["1 pack", "50g", "180g", "355ml"]
          },
          {
            time: "4:30 pm",
            food: ["Filter coffee (with milk and 1 tsp sugar)", "Pork scratchings"],
            portion: ["230ml", "40g bag"]
          },
          {
            time: "7:00 pm",
            food: ["Roasted pork chops (fat on)", "Large portion mashed potato with butter", "Peas with butter", "Thick brown gravy"],
            portion: ["2 large chops", "350g", "100g", "150ml"]
          },
          {
            time: "9:30 pm",
            food: ["Milk chocolate cookies", "Rosé wine"],
            portion: ["2 large cookies", "2 glasses (175ml each)"]
          }
        ]
      },
      {
        day: 3,
        meals: [
          {
            time: "10:45 am",
            food: ["Large vanilla yogurt with honey granola", "Filter coffee (with milk and 2 tsp sugar)", "Digestive biscuits"],
            portion: ["300g yogurt / 50g granola", "230ml", "4 biscuits"]
          },
          {
            time: "1:00 pm",
            food: ["Tesco Chicken Caesar Wrap", "Sharing bag of Salt & Vinegar Crisps", "Diet Pepsi"],
            portion: ["1 pack (240g)", "100g bag", "500ml"]
          },
          {
            time: "4:15 pm",
            food: ["Filter coffee (with milk and 1 tsp sugar)", "Kit Kat Chunky bar", "Large banana"],
            portion: ["230ml", "40g bar", "120g"]
          },
          {
            time: "7:15 pm",
            food: ["Spaghetti Bolognese (large portion with extra cheese)", "Garlic bread with extra cheese", "Mixed salad with dressing"],
            portion: ["500g serving", "4 slices", "1 cup"]
          },
          {
            time: "9:45 pm",
            food: ["Dairy Milk chocolate bar", "Rosé wine"],
            portion: ["45g bar", "2 large glasses (250ml each)"]
          }
        ]
      }
    ]
  }
];