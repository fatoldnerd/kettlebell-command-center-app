import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';
import {
  Sparkles,
  Target,
  TrendingUp,
  Clock,
  Flame,
  ExternalLink,
  Star,
  BarChart3,
  Trophy,
  Mail,
  Shield,
  FileText,
  ChevronDown
} from 'lucide-react';

function App() {
  const [defaultApp, setDefaultApp] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // App data with updated structure for new design
  const apps = [
    {
      id: 'tracker-pro',
      name: 'My Kettlebell Tracker Pro',
      description: 'Your comprehensive hub for logging workouts, tracking PRs, and visualizing progress across all your kettlebell sessions. Unlock advanced analytics and insights.',
      url: 'https://www.mykettlebelltracker.com/',
      icon: BarChart3,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: '10k-swing',
      name: '10,000 Swing Challenge Tracker',
      description: 'Conquer the iconic Dan John 10K Swing Challenge with dedicated logging, real-time analytics, and achievement tracking. Start your journey to swing mastery.',
      url: 'https://www.10kswingchallenge.com/',
      icon: Target,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      id: 'armor-complex',
      name: 'Armor Building Complex Tracker',
      description: 'Master the foundational Armor Building Complex by precisely tracking sets, reps, and weight. Optimize your strength and resilience with guided progression.',
      url: 'https://armor-building-complex.web.app',
      icon: Trophy,
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 'ksk-snatch',
      name: 'KSK Snatch Tracker',
      description: 'Optimize your Master Geoff Neupert\'s King-Sized Killer snatch sessions with precise logging, detailed progress visualization, and program adherence tools.',
      url: 'https://www.kettlebellsnatchtracker.com/',
      icon: Flame,
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  // Initialize Firebase
  const initFirebase = () => {
    try {
      if (typeof window !== 'undefined' && window.__firebase_config && window.__app_id) {
        const app = initializeApp(window.__firebase_config);
        const db = getFirestore(app);
        const auth = getAuth(app);
        return { db, auth };
      }
    } catch (error) {
      console.error('Firebase initialization failed:', error);
    }
    return null;
  };

  // Load default app from localStorage on component mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kbcc_default_app');
      if (saved) {
        setDefaultApp(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading default app:', error);
    }
  }, []);

  // Save default app to localStorage
  const handleSetDefault = (app) => {
    const appData = { id: app.id, url: app.url };
    setDefaultApp(appData);
    localStorage.setItem('kbcc_default_app', JSON.stringify(appData));
  };

  // Handle quick launch
  const handleQuickLaunch = () => {
    if (defaultApp?.url) {
      window.open(defaultApp.url, '_blank', 'noopener');
    }
  };

  // Handle app launch and remember as default if none set
  const handleAppLaunch = (app) => {
    if (!defaultApp) {
      handleSetDefault(app);
    }
    window.open(app.url, '_blank', 'noopener');
  };

  // Handle newsletter signup
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous messages
    setSubmitMessage('');
    setMessageType('');
    
    // Validate email
    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);

    const firebase = initFirebase();
    
    if (!firebase) {
      setSubmitMessage('Service temporarily unavailable');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Sign in anonymously to get write permissions
      await signInAnonymously(firebase.auth);
      
      // Add email to Firestore collection (using email as document ID to prevent duplicates)
      await setDoc(doc(firebase.db, 'subscribers', email), {
        email: email,
        timestamp: new Date().toISOString(),
      });

      setSubmitMessage('Thanks for subscribing! You are all set.');
      setMessageType('success');
      setEmail('');
    } catch (error) {
      setSubmitMessage('There was an error. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans antialiased text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-100">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-60 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2000&auto=format&fit=crop)',
            maskImage: 'radial-gradient(60% 50% at 50% 20%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(60% 50% at 50% 20%, black, transparent)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120rem] h-[40rem] bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-neutral-900 ring-1 ring-white/10">
              <span className="text-emerald-400 font-semibold tracking-tight text-lg leading-none">KB</span>
            </div>
            <span className="hidden sm:inline text-sm text-neutral-300 font-semibold">Kettlebell Command Center</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
            <a href="#apps" className="hover:text-white transition-colors">Apps</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleQuickLaunch}
              disabled={!defaultApp}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="w-4 h-4" />
              Quick Launch
            </button>
            <a href="#apps" className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transition">
              <Target className="w-4 h-4" />
              Browse Apps
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/5 text-xs text-neutral-300 mb-5">
                <Sparkles className="text-emerald-400 w-4 h-4" />
                Transform Your Training Today
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Frustration and a Fuzzy Picture of Progress
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-300 mb-8">
                You're in the gym, kettlebells in hand, but you're still not sure if you're truly moving forward. Was that set of 20 snatches faster than last week? Did you hit a new PR? Did you best your time on this last round of 500 Swings? You're left with a nagging doubt that keeps you from feeling truly confident in your gains.
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-400 mb-4">
                The Bridge to Your True Potential
              </h2>
              
              <p className="text-base md:text-lg text-neutral-300 mb-8">
                You've always known that consistency is key, but you also know that discipline without data is just guesswork. You need a system that translates your effort into undeniable progress. This is where the <strong className="text-white">Kettlebell Command Center</strong> comes in. We are the bridge between where you are now, unseen progress and fragmented data, and where you want to be.
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-400 mb-4">
                Clarity, Confidence, and Unstoppable Progress
              </h2>
              
              <p className="text-base md:text-lg text-neutral-300 mb-10">
                Imagine this: you finish a brutal workout, but instead of uncertainty, you feel a wave of confidence. You log your session in your dedicated tracker, and instantly you see the results. Your total volume for the month has increased by 15%. You've officially crushed your previous PR. The data validates your effort, and that feeling of knowing exactly how far you've come is a powerful motivator.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleQuickLaunch}
                  disabled={!defaultApp}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Flame className="w-4 h-4" />
                  Quick Launch Default
                </button>
                <a href="#apps" className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm text-neutral-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition">
                  <Target className="w-4 h-4" />
                  Open App Launcher
                </a>
              </div>
            </div>
            
            {/* Kettlebell Snatch Image */}
            <div className="lg:col-span-4 order-first lg:order-last">
              <div className="relative">
                <img 
                  src="/KettlebellSnatch.png" 
                  alt="Kettlebell snatch exercise demonstration" 
                  className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative" id="features">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-white/10 mb-3 text-blue-400">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24</div>
              <div className="text-sm text-white/70">Total Workouts</div>
            </div>
            <div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-white/10 mb-3 text-orange-400">
                <Flame className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">7 days</div>
              <div className="text-sm text-white/70">Current Streak</div>
            </div>
            <div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-white/10 mb-3 text-green-400">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">18:32</div>
              <div className="text-sm text-white/70">Best Time</div>
            </div>
            <div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-white/10 mb-3 text-purple-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">+12%</div>
              <div className="text-sm text-white/70">Progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Choose Your Kettlebell Tracker</h2>
              <p className="mt-2 text-neutral-300 text-sm md:text-base">Launch any app below. Set one as default for instant starts.</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-300">
              <Target className="w-4 h-4" />
              You can change your default anytime
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <div key={app.id} className="group rounded-xl overflow-hidden bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${app.gradient}`}>
                      <app.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{app.name}</h3>
                          <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                            {app.description}
                          </p>
                        </div>
                        <button 
                          onClick={() => handleSetDefault(app)}
                          className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 hover:bg-white/5 transition ${
                            defaultApp?.id === app.id 
                              ? 'bg-emerald-500/15 ring-emerald-500/40 text-emerald-300' 
                              : 'text-neutral-300'
                          }`}
                        >
                          <Star className="w-4 h-4" />
                          Default
                        </button>
                      </div>
                      <button
                        onClick={() => handleAppLaunch(app)}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Start your Free Trial</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Explore Our Powerful Kettlebell Trackers</h2>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Each tracker is designed to transform your kettlebell training from guesswork into precision. 
              Whether you're conquering the 10K Swing Challenge, mastering the Armor Building Complex, 
              or optimizing your KSK snatch sessions, we provide the tools to turn your effort into undeniable progress.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative">
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Questions, answered</h2>
          <div className="mt-8 space-y-3">
            <details className="group rounded-lg ring-1 ring-white/10 open:ring-white/20 bg-neutral-900/60 open:bg-neutral-900/70 transition">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm">
                <span>How does setting a default app work?</span>
                <ChevronDown className="transition duration-200 group-open:rotate-180 w-4 h-4" />
              </summary>
              <div className="px-5 pb-4 pt-0 text-sm text-neutral-300">
                Pick any tracker and hit "Default." Your Quick Launch buttons will open that app instantly. You can change this anytime.
              </div>
            </details>
            <details className="group rounded-lg ring-1 ring-white/10 open:ring-white/20 bg-neutral-900/60 open:bg-neutral-900/70 transition">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm">
                <span>Will my data stay in sync across apps?</span>
                <ChevronDown className="transition duration-200 group-open:rotate-180 w-4 h-4" />
              </summary>
              <div className="px-5 pb-4 pt-0 text-sm text-neutral-300">
                Core training signals (time, sets, volume, RPE, HR) can sync via connected health services. Some app‑specific fields may not sync.
              </div>
            </details>
            <details className="group rounded-lg ring-1 ring-white/10 open:ring-white/20 bg-neutral-900/60 open:bg-neutral-900/70 transition">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm">
                <span>Do I need a paid plan to use this hub?</span>
                <ChevronDown className="transition duration-200 group-open:rotate-180 w-4 h-4" />
              </summary>
              <div className="px-5 pb-4 pt-0 text-sm text-neutral-300">
                No. Launching and switching apps is free. Some trackers offer optional Pro features.
              </div>
            </details>
            <details className="group rounded-lg ring-1 ring-white/10 open:ring-white/20 bg-neutral-900/60 open:bg-neutral-900/70 transition">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm">
                <span>Which platforms are supported?</span>
                <ChevronDown className="transition duration-200 group-open:rotate-180 w-4 h-4" />
              </summary>
              <div className="px-5 pb-4 pt-0 text-sm text-neutral-300">
                Web, iOS, and Android across the listed trackers. Deep links open the app if installed, otherwise the website.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-md bg-neutral-900 ring-1 ring-white/10">
                    <span className="text-emerald-400 font-semibold tracking-tight text-lg leading-none">KB</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">Get Kettlebell Playbooks</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-300">Weekly flows, density blocks, and templates you can import anywhere.</p>
              </div>
              <div className="space-y-3">
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="you@domain.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-neutral-950/60 ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Mail className="w-4 h-4" />
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                {submitMessage && (
                  <p className={`text-sm ${messageType === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6 h-px bg-white/10"></div>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Kettlebell Command Center. All rights reserved.</p>
              <div className="flex items-center gap-4 text-neutral-300">
                <a href="#" className="inline-flex items-center gap-1 text-xs hover:text-white transition">
                  <Shield className="w-4 h-4" />
                  Privacy
                </a>
                <a href="#" className="inline-flex items-center gap-1 text-xs hover:text-white transition">
                  <FileText className="w-4 h-4" />
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
