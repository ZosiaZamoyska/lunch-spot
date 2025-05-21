# KAIST Lunch Spot Randomizer

A fun and intuitive web application that helps KAIST students and staff find their perfect lunch spot based on their mood and preferences.

## Features

- 🎯 Smart recommendation system based on mood and preferences
- 🎨 Modern, dark-themed UI with glassmorphism effects
- 📱 Responsive design for all devices
- ♿ Accessibility features included
- 🔄 Dynamic progress tracking
- 🎲 Randomization to keep recommendations fresh
- 🗺️ Interactive map to locate lunch spots

## How It Works

1. Answer a series of questions about your:
   - Current mood
   - Food preferences
   - Location preferences
   - Time constraints
   - Budget considerations

2. The app uses a smart algorithm to:
   - Filter locations based on your preferences
   - Consider your mood for appropriate recommendations
   - Add randomization to keep suggestions fresh
   - Balance between cafeterias and restaurants

3. Get your personalized lunch spot recommendation!

## Available Locations

### Cafeterias
- North: KAIMARU (Undergraduate Cafeteria)
- West: Student Cafeteria
- East: Graduate Cafeteria
- North: Faculty Cafeteria
- North: Taeulgwan

### Restaurants
- North: Quiznos
- East: Subway

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Maps API key

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the Maps JavaScript API in your Google Cloud project
   - Add your API key to the `.env` file
4. Start the development server:
   ```bash
   npm run dev
   ```

### Technologies Used
- React
- TypeScript
- Tailwind CSS
- Vite
- Google Maps API

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for your own purposes.

