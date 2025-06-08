import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Lock, LogIn, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  title: string;
  description: string;
  onSignupClick?: () => void;
  showSignupButton?: boolean;
  isAdmin?: boolean;
}

const LoginForm = ({ title, description, onSignupClick, showSignupButton = true, isAdmin = false }: LoginFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-4">
      <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 text-cyan-700 hover:bg-cyan-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-md border-cyan-200 shadow-2xl animate-fade-in-up">
        <CardHeader className="space-y-2 text-center">
          
          <CardTitle className="text-2xl font-bold text-cyan-800">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-cyan-700 font-medium">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-cyan-500" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="pl-10 bg-white/80 border-cyan-300 text-cyan-800 placeholder-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-cyan-700 font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-cyan-500" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="pl-10 bg-white/80 border-cyan-300 text-cyan-800 placeholder-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className={`w-full transition-all duration-300 transform hover:scale-105 ${
                isAdmin 
                  ? 'bg-cyan-700 text-white hover:bg-cyan-800' 
                  : 'bg-cyan-600 text-white hover:bg-cyan-700'
              } shadow-lg`}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </form>
          
          {showSignupButton && (
            <div className="text-center pt-4 border-t border-cyan-200">
              <p className="text-gray-600 mb-3">Don't have an account?</p>
              <Button 
                variant="outline" 
                onClick={() => navigate('/signup')}
                className="w-full border-cyan-300 text-cyan-700 hover:bg-cyan-50 transition-all duration-300"
              >
                Create Account
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
