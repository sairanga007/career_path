import React, { useState } from 'react';
import { FiCheckCircle, FiXCircle, FiAward } from 'react-icons/fi';

const MOCK_QUESTIONS = [
  {
    id: 1,
    role: 'Frontend',
    question: 'What is the Virtual DOM in React?',
    options: [
      'A direct copy of the real DOM used for faster rendering.',
      'A lightweight JavaScript representation of the DOM.',
      'A browser API for manipulating HTML elements.',
      'A CSS technique for rendering hidden elements.'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    role: 'Frontend',
    question: 'Which hook is used to perform side effects in a functional component?',
    options: [
      'useState',
      'useContext',
      'useEffect',
      'useReducer'
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    role: 'HR',
    question: 'Tell me about a time you had a conflict with a team member.',
    isBehavioral: true,
    tips: [
      'Use the STAR method (Situation, Task, Action, Result).',
      'Focus on how you resolved the conflict professionally.',
      'Never speak negatively about former colleagues.'
    ]
  }
];

const MockInterview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [interviewType, setInterviewType] = useState('Frontend');

  const filteredQuestions = MOCK_QUESTIONS.filter(q => q.role === interviewType || q.role === 'HR');

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (!filteredQuestions[currentQuestion].isBehavioral) {
      if (selectedAnswer === filteredQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }

    if (currentQuestion + 1 < filteredQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const restartInterview = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const technicalQuestions = filteredQuestions.filter(q => !q.isBehavioral).length;
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="card p-10 bg-gradient-to-br from-white to-primary-50 dark:from-dark-surface dark:to-slate-800 border-primary-100 dark:border-slate-700">
          <FiAward className="mx-auto text-primary-500 mb-6" size={64} />
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Interview Complete!</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            You scored <span className="font-bold text-primary-600 dark:text-primary-400">{score}</span> out of <span className="font-bold">{technicalQuestions}</span> on the technical portion.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            Keep practicing the behavioral questions using the STAR method!
          </p>
          <button onClick={restartInterview} className="btn-primary py-3 px-8 text-lg">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const question = filteredQuestions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 flex justify-between items-end border-b border-slate-200 dark:border-dark-border pb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Mock Interview Prep</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Practice technical and behavioral questions.</p>
        </div>
        <select 
          className="input-field w-auto"
          value={interviewType}
          onChange={(e) => {
            setInterviewType(e.target.value);
            restartInterview();
          }}
        >
          <option value="Frontend">Frontend React</option>
          <option value="Backend">Backend Node.js</option>
        </select>
      </div>

      <div className="card p-8">
        <div className="flex justify-between items-center mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
          <span className="uppercase tracking-wider px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
            {question.role} Question
          </span>
          <span>Question {currentQuestion + 1} of {filteredQuestions.length}</span>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          {question.question}
        </h2>

        {question.isBehavioral ? (
          <div className="space-y-6">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
              <h3 className="font-bold text-amber-800 dark:text-amber-400 mb-2">Tips for answering:</h3>
              <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
                {question.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
            <textarea 
              className="input-field min-h-[150px]" 
              placeholder="Practice typing your answer here (optional)..."
            ></textarea>
          </div>
        ) : (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index 
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300' 
                    : 'border-slate-200 dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700 text-slate-700 dark:text-slate-300 bg-white dark:bg-dark-surface'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedAnswer === index ? 'border-primary-500' : 'border-slate-300 dark:border-slate-600'}`}>
                    {selectedAnswer === index && <div className="w-2.5 h-2.5 rounded-full bg-primary-500"></div>}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <button 
            onClick={handleNextQuestion}
            disabled={!question.isBehavioral && selectedAnswer === null}
            className="btn-primary py-2 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion + 1 === filteredQuestions.length ? 'Finish Interview' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
