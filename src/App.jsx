import React from 'react';

// Main App component that orchestrates the entire landing page
function App() {
  // Data array for the kettlebell tracking applications
  // Updated descriptions and button texts to reflect the monetization strategy
  const apps = [
    {
      id: 'my-kettlebell-tracker',
      name: 'My Kettlebell Tracker Pro',
      description: 'Your comprehensive hub for logging workouts, tracking PRs, and visualizing progress across all your kettlebell sessions. Unlock advanced analytics and insights.',
      link: 'https://www.mykettlebelltracker.com/',
      icon: '📊', // Bar chart emoji
      buttonText: 'Start your Free Trial' // New button text
    },
    {
      id: '10k-swing-challenge',
      name: '10,000 Swing Challenge Tracker',
      description: 'Conquer the iconic Dan John 10K Swing Challenge with dedicated logging, real-time analytics, and achievement tracking. Start your journey to swing mastery.',
      link: 'https://www.10kswingchallenge.com/',
      icon: '💪', // Flexed biceps emoji
      buttonText: 'Start Your Free Trial' // New button text
    },
    {
      id: 'armor-building-complex',
      name: 'Armor Building Complex Tracker',
      description: 'Master the foundational Armor Building Complex by precisely tracking sets, reps, and weight. Optimize your strength and resilience with guided progression.',
      link: 'https://armor-building-complex.web.app/dashboard',
      icon: '🛡️', // Shield emoji
      buttonText: 'Start your Free Trial' // New button text
    },
    {
      id: 'ksk-snatch-tracker',
      name: 'KSK Snatch Tracker',
      description: 'Optimize your Master Geoff Neupert\'s King-Sized Killer snatch sessions with precise logging, detailed progress visualization, and program adherence tools.',
      link: 'https://www.kettlebellsnatchtracker.com/',
      icon: '⚡', // High voltage emoji
      buttonText: 'Start your Free Trial' // New button text
    },
  ];

  return (
    // Main container for the entire application, setting base styles
    // Changed background to a darker, more modern gray
    <div className="min-h-screen bg-gray-950 font-inter antialiased text-gray-200">
      {/* Hero Section: The top-most, attention-grabbing part of the landing page */}
      <HeroSection />

      {/* App Showcase Section: Displays the grid of individual application cards */}
      <section id="trackers" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Updated text color for better contrast on dark background */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-50 text-center mb-12 leading-tight">
          Explore Our Powerful Kettlebell Trackers
        </h2>
        {/* Grid layout for app cards, responsive across different screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {apps.map(app => (
            // Render an AppCard component for each app in the data array
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* About Section: Provides information about the creator's mission */}
      <AboutSection />

      {/* Footer Section: Contains copyright and other general information */}
      <Footer />
    </div>
  );
}

// HeroSection Component: Displays the main title and tagline
const HeroSection = () => {
  return (
    // Updated gradient and shadow for a sleeker look
    <header className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 sm:py-24 lg:py-32 overflow-hidden shadow-2xl rounded-b-3xl">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Simple SVG pattern for background aesthetics */}
        <svg className="h-full w-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.05)" /> {/* Subtler circles */}
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Refined text shadows for depth */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-shadow-lg">
          Your Ultimate Kettlebell Training Hub
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 opacity-90 text-shadow-md">
          Master your kettlebell journey with our suite of specialized tracking tools.
        </p>
        {/* Call to Action button - links to the trackers section */}
        <a
          href="#trackers"
          className="inline-block bg-teal-500 text-gray-900 hover:bg-teal-400 px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
        >
          Explore Our Trackers
        </a>
      </div>
    </header>
  );
};

// AppCard Component: Displays information and a link for a single application
const AppCard = ({ app }) => {
  return (
    // Updated background, border, and shadow for a sleeker card appearance
    <div className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 flex flex-col items-center text-center border border-gray-700">
      {/* Application icon (emoji) with updated background color */}
      <div className="text-5xl mb-4 p-3 bg-teal-600 rounded-full text-white shadow-md">
        {app.icon}
      </div>
      {/* Application name */}
      <h3 className="text-2xl font-bold text-gray-50 mb-3">{app.name}</h3>
      {/* Application description */}
      <p className="text-gray-300 mb-6 flex-grow">{app.description}</p>
      {/* Link button to the actual application with updated color and hover */}
      <a
        href={app.link}
        target="_blank" // Opens link in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
        className="inline-block bg-teal-500 text-gray-900 px-6 py-3 rounded-full text-md font-semibold shadow-md hover:bg-teal-400 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
      >
        {app.buttonText} {/* Dynamically set button text */}
      </a>
    </div>
  );
};

// AboutSection Component: Provides information about the project's mission
const AboutSection = () => {
  return (
    // Updated background and shadow for consistency
    <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-inner-lg">
      <div className="max-w-4xl mx-auto text-center">
        {/* Updated text color */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-50 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          As passionate kettlebell practitioners ourselves, we understand the dedication it takes to master this powerful tool.
          We created these trackers to provide fellow athletes with the precise, intuitive tools needed to log progress,
          stay motivated, and ultimately achieve their kettlebell goals. Our mission is to empower your journey to strength and resilience.
        </p>
      </div>
    </section>
  );
};

// Footer Component: Displays copyright information
const Footer = () => {
  return (
    // Updated background for a seamless dark theme
    <footer className="bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8 text-center rounded-t-lg">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Placeholder for social media links if desired in the future */}
          {/* <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Instagram</a> */}
        </div>
      </div>
    </footer>
  );
};

// Default export of the main App component
export default App;
