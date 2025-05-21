import { useState } from 'react'
import { questions, locations, getRecommendation } from './data/locations'
import { getMenuForCafeteria } from './data/menus'
import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex]
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }))

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResult(false)
  }

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100

  if (showResult) {
    const recommendation = getRecommendation(answers)
    const menu = recommendation.type === 'cafeteria' ? getMenuForCafeteria(recommendation.name) : undefined

    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-4 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="question-card rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Your Lunch Spot!</h2>
          <div className="bg-gray-700/50 rounded-xl p-6 mb-6 border border-gray-600">
            <p className="text-2xl font-semibold text-purple-400">{recommendation.name}</p>
            <p className="text-gray-300 mt-2 capitalize">{recommendation.type}</p>
            <div className="mt-4 text-sm text-gray-400">
              <p>📍 {recommendation.area.charAt(0).toUpperCase() + recommendation.area.slice(1)} Area</p>
              <p>💰 {recommendation.priceRange.charAt(0).toUpperCase() + recommendation.priceRange.slice(1)} Price Range</p>
              <p>⏱️ {recommendation.waitTime.charAt(0).toUpperCase() + recommendation.waitTime.slice(1)} Wait Time</p>
              <p>🎯 {recommendation.atmosphere.charAt(0).toUpperCase() + recommendation.atmosphere.slice(1)} Atmosphere</p>
            </div>

            {menu && (
              <div className="mt-6 pt-6 border-t border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Today's Menu</h3>
                <div className="space-y-2">
                  {menu.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-purple-400">{item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">Menu for {new Date(menu.date).toLocaleDateString()}</p>
              </div>
            )}
          </div>
          <button
            onClick={resetQuiz}
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-4 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="question-card rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6">{currentQuestion.text}</h2>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="option-button w-full text-white font-semibold py-3 px-4 rounded-xl transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar at the bottom */}
      <div className="progress-container">
        <div className="progress-track">
          <div 
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span className="visually-hidden">{progressPercentage}% Complete</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
