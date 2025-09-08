import React from 'react';
import {
  Timer,
  Plus,
  BarChart3,
  Trophy,
  Settings,
  Target,
  TrendingUp,
  Clock,
  Flame,
  ExternalLink
} from 'lucide-react';

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
      icon: BarChart3,
      gradient: 'from-blue-400 to-cyan-500',
      buttonText: 'Start your Free Trial'
    },
    {
      id: '10k-swing-challenge',
      name: '10,000 Swing Challenge Tracker',
      description: 'Conquer the iconic Dan John 10K Swing Challenge with dedicated logging, real-time analytics, and achievement tracking. Start your journey to swing mastery.',
      link: 'https://www.10kswingchallenge.com/',
      icon: Target,
      gradient: 'from-green-400 to-emerald-500',
      buttonText: 'Start Your Free Trial'
    },
    {
      id: 'armor-building-complex',
      name: 'Armor Building Complex Tracker',
      description: 'Master the foundational Armor Building Complex by precisely tracking sets, reps, and weight. Optimize your strength and resilience with guided progression.',
      link: 'https://armor-building-complex.web.app',
      icon: Trophy,
      gradient: 'from-orange-400 to-red-500',
      buttonText: 'Start your Free Trial'
    },
    {
      id: 'ksk-snatch-tracker',
      name: 'KSK Snatch Tracker',
      description: 'Optimize your Master Geoff Neupert\'s King-Sized Killer snatch sessions with precise logging, detailed progress visualization, and program adherence tools.',
      link: 'https://www.kettlebellsnatchtracker.com/',
      icon: Flame,
      gradient: 'from-purple-400 to-pink-500',
      buttonText: 'Start your Free Trial'
    },
  ];

  const quickStats = [
    { label: 'Total Workouts', value: '24', icon: Target, color: 'text-blue-400' },
    { label: 'Current Streak', value: '7 days', icon: Flame, color: 'text-orange-400' },
    { label: 'Best Time', value: '18:32', icon: Clock, color: 'text-green-400' },
    { label: 'Progress', value: '+12%', icon: TrendingUp, color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen gradient-bg relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10">
          <div className="glass backdrop-blur-xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <img 
                    src="/New_Kettlebell.png" 
                    alt="Kettlebell Icon" 
                    className="w-8 h-8 object-contain"
                  />
                  <h1 className="text-white font-bold text-xl">Kettlebell Command Center</h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-2">
                  {apps.map((app) => (
                    <a
                      key={app.id}
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all hover:bg-white/10 hover:backdrop-blur-sm text-white/80 hover:text-white"
                    >
                      <app.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{app.name.split(' ')[0]}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-shadow mb-4">
              Frustration and a Fuzzy Picture of Progress
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
              You're in the gym, kettlebell in hand, but you're still not sure if you're truly moving forward. Was that set of 20 snatches faster than last week? Did you hit a new PR? Did you best your time on this last round of 500 Swings? You're left with a nagging doubt that keeps you from feeling truly confident in your gains.
            </p>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">
              The Bridge to Your True Potential
            </h2>
            <p className="text-lg text-white/80 max-w-4xl mx-auto mb-8">
              You've always known that consistency is key, but you also know that discipline without data is just guesswork. You need a system that translates your effort into undeniable progress. This is where the <strong>Kettlebell Command Center</strong> comes in. We are the bridge between where you are now—unseen progress and fragmented data—and where you want to be.
            </p>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">
              Clarity, Confidence, and Unstoppable Progress
            </h2>
            <p className="text-lg text-white/80 max-w-4xl mx-auto mb-8">
              Imagine this: you finish a brutal workout, but instead of uncertainty, you feel a wave of confidence. You log your session in your dedicated tracker, and instantly you see the results. Your total volume for the month has increased by 15%. You've officially crushed your previous PR. The data validates your effort, and that feeling of knowing exactly how far you've come is a powerful motivator.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {quickStats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className={`inline-flex p-3 rounded-full bg-white/10 mb-3 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* App Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <div key={app.id} className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className={`icon-chip bg-gradient-to-r ${app.gradient}`}>
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{app.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{app.description}</p>
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>{app.buttonText}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="mt-16">
            <div className="glass-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Explore Our Powerful Kettlebell Trackers</h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
                Each tracker is designed to transform your kettlebell training from guesswork into precision. 
                Whether you're conquering the 10K Swing Challenge, mastering the Armor Building Complex, 
                or optimizing your KSK snatch sessions, we provide the tools to turn your effort into undeniable progress.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="glass border-t border-white/10 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} Kettlebell Command Center. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
