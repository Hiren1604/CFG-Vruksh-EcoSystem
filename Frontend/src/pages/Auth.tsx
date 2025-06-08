
import React, { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm';
import { Leaf, User, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentView, setCurrentView] = useState<'main' | 'educator' | 'admin'>('main');
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleBackToLogin = () => {
    setShowSignup(false);
  };

  const handleViewChange = (view: 'educator' | 'admin') => {
    setCurrentView(view);
    setShowSignup(false);
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setShowSignup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-300/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-100/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-200/30 rounded-full animate-bounce"></div>
      </div>

      {/* Admin button - always visible */}
      <div className="fixed top-4 right-4 z-50 animate-fade-in-down">
        <Button
          variant={currentView === 'admin' ? 'default' : 'outline'}
          onClick={() => handleViewChange('admin')}
          className={`${
            currentView === 'admin'
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-white/80 border-green-300 text-green-700 hover:bg-green-50'
          } transition-all duration-300 shadow-lg backdrop-blur-sm`}
        >
          <Shield className="mr-2 h-4 w-4" />
          Admin
        </Button>
      </div>

      {/* Back button for non-main views */}
      {currentView !== 'main' && (
        <div className="fixed top-4 left-4 z-50 animate-fade-in-down">
          <Button
            variant="outline"
            onClick={handleBackToMain}
            className="bg-white/80 border-green-300 text-green-700 hover:bg-green-50 transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            ← Back to Main
          </Button>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 lg:gap-16">
          
          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up max-w-2xl">
            {/* Logo and Heading */}
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="p-4 bg-green-600 rounded-full animate-pulse-glow shadow-lg">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-5xl lg:text-7xl font-bold text-green-800 tracking-tight leading-tight">
                    VRUKSH
                  </h1>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-green-600 -mt-2">
                    EKATRA
                  </h2>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 font-medium animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Learning Platform for Innovation & Growth
              </p>
            </div>

            {/* Main page educator login option */}
            {currentView === 'main' && (
              <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Welcome to Vruksh Ekatra</h3>
                  <p className="text-gray-600 mb-6">Empowering NGOs and educators to democratize knowledge sharing</p>
                  
                  <Button
                    onClick={() => handleViewChange('educator')}
                    className="w-full h-14 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold shadow-lg"
                  >
                    <User className="mr-3 h-6 w-6" />
                    Login as Educator
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Authentication Forms */}
          {currentView !== 'main' && (
            <div className="flex-shrink-0 w-full max-w-md animate-slide-in-right">
              {showSignup ? (
                <SignupForm onBackClick={handleBackToLogin} />
              ) : (
                <LoginForm 
                  title={currentView === 'admin' ? 'Admin Portal' : 'Educator Login'}
                  description={
                    currentView === 'admin' 
                      ? 'Administrative access to manage courses and NGOs' 
                      : 'Welcome back! Please sign in to continue your learning journey'
                  }
                  onSignupClick={handleSignupClick}
                  showSignupButton={currentView !== 'admin'}
                  isAdmin={currentView === 'admin'}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center animate-fade-in-up" style={{animationDelay: '1s'}}>
        <p className="text-green-600 text-sm font-medium">
          Innovation • Incubation • Mentoring • Maker • Entrepreneurship
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Enabling impact-driven innovations in emerging economies
        </p>
      </div>
    </div>
  );
};

export default Index;
