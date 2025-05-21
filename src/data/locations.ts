export interface Location {
  name: string;
  type: 'cafeteria' | 'restaurant';
  area: 'north' | 'east' | 'west';
  priceRange: 'budget' | 'moderate' | 'premium';
  waitTime: 'short' | 'medium' | 'long';
  atmosphere: 'quiet' | 'moderate' | 'lively';
  foodTypes: string[];
}

export const locations: Location[] = [
  { 
    name: 'KAIMARU (Undergraduate Cafeteria)', 
    type: 'cafeteria', 
    area: 'north',
    priceRange: 'budget',
    waitTime: 'short',
    atmosphere: 'lively',
    foodTypes: ['korean', 'western', 'asian']
  },
  { 
    name: 'Student Cafeteria', 
    type: 'cafeteria', 
    area: 'west',
    priceRange: 'budget',
    waitTime: 'short',
    atmosphere: 'lively',
    foodTypes: ['korean', 'western']
  },
  { 
    name: 'Graduate Cafeteria', 
    type: 'cafeteria', 
    area: 'east',
    priceRange: 'budget',
    waitTime: 'short',
    atmosphere: 'quiet',
    foodTypes: ['korean', 'western']
  },
  { 
    name: 'Faculty Cafeteria', 
    type: 'cafeteria', 
    area: 'north',
    priceRange: 'moderate',
    waitTime: 'medium',
    atmosphere: 'quiet',
    foodTypes: ['korean', 'western', 'asian']
  },
  { 
    name: 'Taeulgwan', 
    type: 'cafeteria', 
    area: 'north',
    priceRange: 'budget',
    waitTime: 'short',
    atmosphere: 'moderate',
    foodTypes: ['korean']
  },
  { 
    name: 'Quiznos', 
    type: 'restaurant', 
    area: 'north',
    priceRange: 'moderate',
    waitTime: 'medium',
    atmosphere: 'moderate',
    foodTypes: ['western', 'sandwiches']
  },
  { 
    name: 'Subway', 
    type: 'restaurant', 
    area: 'east',
    priceRange: 'moderate',
    waitTime: 'medium',
    atmosphere: 'moderate',
    foodTypes: ['western', 'sandwiches']
  },
];

export interface Question {
  id: string;
  text: string;
  options: string[];
  weight: number;
}

export const questions: Question[] = [
  {
    id: 'mood',
    text: 'How are you feeling today?',
    options: ['Energetic', 'Relaxed', 'Stressed', 'Hungry', 'Adventurous'],
    weight: 2
  },
  {
    id: 'location',
    text: 'Which area do you prefer?',
    options: ['North', 'East', 'West', 'Anywhere'],
    weight: 3
  },
  {
    id: 'time',
    text: 'How much time do you have for lunch?',
    options: ['Quick (15-20 min)', 'Normal (30-45 min)', 'Leisurely (1 hour+)'],
    weight: 2
  },
  {
    id: 'budget',
    text: 'What\'s your budget for lunch?',
    options: ['Budget (under 5,000₩)', 'Moderate (5,000-10,000₩)', 'Premium (10,000₩+)'],
    weight: 2
  },
  {
    id: 'atmosphere',
    text: 'What kind of atmosphere do you prefer?',
    options: ['Quiet and Calm', 'Moderate', 'Lively and Busy'],
    weight: 1
  },
  {
    id: 'foodType',
    text: 'What type of food are you craving?',
    options: ['Korean', 'Western', 'Asian', 'Sandwiches', 'Anything'],
    weight: 2
  }
];

// Helper function to get recommendation based on answers
export const getRecommendation = (answers: Record<string, string>): Location => {
  let filteredLocations = [...locations];
  let scores = new Map<Location, number>();

  // Initialize scores
  locations.forEach(loc => scores.set(loc, 0));

  // Apply filters and calculate scores
  if (answers.location && answers.location !== 'Anywhere') {
    filteredLocations = filteredLocations.filter(loc => 
      loc.area === answers.location.toLowerCase()
    );
  }

  if (answers.time) {
    const timePreference = answers.time.toLowerCase();
    filteredLocations = filteredLocations.filter(loc => {
      if (timePreference.includes('quick')) return loc.waitTime === 'short';
      if (timePreference.includes('normal')) return loc.waitTime !== 'long';
      return true;
    });
  }

  if (answers.budget) {
    const budgetPreference = answers.budget.toLowerCase();
    filteredLocations = filteredLocations.filter(loc => {
      if (budgetPreference.includes('budget')) return loc.priceRange === 'budget';
      if (budgetPreference.includes('moderate')) return loc.priceRange !== 'premium';
      return true;
    });
  }

  if (answers.atmosphere) {
    const atmospherePreference = answers.atmosphere.toLowerCase();
    filteredLocations = filteredLocations.filter(loc => {
      if (atmospherePreference.includes('quiet')) return loc.atmosphere === 'quiet';
      if (atmospherePreference.includes('lively')) return loc.atmosphere === 'lively';
      return true;
    });
  }

  if (answers.foodType && answers.foodType !== 'Anything') {
    const foodPreference = answers.foodType.toLowerCase();
    filteredLocations = filteredLocations.filter(loc => 
      loc.foodTypes.includes(foodPreference)
    );
  }

  // If no locations match all criteria, return to original list
  if (filteredLocations.length === 0) {
    filteredLocations = locations;
  }

  // Add some randomness
  const randomIndex = Math.floor(Math.random() * filteredLocations.length);
  return filteredLocations[randomIndex];
}; 