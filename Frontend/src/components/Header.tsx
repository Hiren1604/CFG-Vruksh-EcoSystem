
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, User, ArrowLeft } from "lucide-react";

interface HeaderProps {
  currentView: 'educator' | 'admin';
  onViewChange: (view: 'educator' | 'admin') => void;
  onBackToMain: () => void;
}

const Header = ({ currentView, onViewChange, onBackToMain }: HeaderProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in-down">
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={onBackToMain}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <Button
          variant={currentView === 'educator' ? 'default' : 'outline'}
          onClick={() => onViewChange('educator')}
          className={`${
            currentView === 'educator'
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          } transition-all duration-300`}
        >
          <User className="mr-2 h-4 w-4" />
          Educator
        </Button>
        <Button
          variant={currentView === 'admin' ? 'default' : 'outline'}
          onClick={() => onViewChange('admin')}
          className={`${
            currentView === 'admin'
              ? 'bg-black border-2 border-white text-white hover:bg-gray-900'
              : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          } transition-all duration-300`}
        >
          <Shield className="mr-2 h-4 w-4" />
          Admin
        </Button>
      </div>
    </div>
  );
};

export default Header;
