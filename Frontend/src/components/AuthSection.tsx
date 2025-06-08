import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AuthSection = () => {
  const navigate = useNavigate();

  return (
    <section id="auth" className="py-24 bg-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-cyan-800 mb-8">
            Join the Platform
          </h2>
          <p className="text-xl text-cyan-700/80 max-w-4xl mx-auto leading-relaxed">
            Get started with Ekatra and transform education delivery in your community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Button 
            onClick={() => navigate('/login')}
            className="h-20 bg-cyan-600 hover:bg-cyan-700 text-white text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Login
          </Button>
          
          <Button 
            onClick={() => navigate('/signup')}
            className="h-20 bg-white hover:bg-cyan-50 text-cyan-600 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-cyan-600"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
