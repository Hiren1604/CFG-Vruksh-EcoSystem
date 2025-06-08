import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock, UserPlus, ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface SignupFormProps {
  onBackClick: () => void;
}

const SignupForm = ({ onBackClick }: SignupFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signup attempt:', formData);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-md border-cyan-200 shadow-2xl animate-slide-in-right">
        <CardHeader className="space-y-2 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 text-cyan-700 hover:bg-cyan-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <CardTitle className="text-2xl font-bold text-cyan-800">Create Account</CardTitle>
          <CardDescription className="text-gray-600">
            Join the Vruksh Ekatra learning community
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-cyan-700 font-medium">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-cyan-500" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="pl-10 bg-white/80 border-cyan-300 text-cyan-800 placeholder-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  required
                />
              </div>
            </div>
            
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
              <Label htmlFor="phone" className="text-cyan-700 font-medium">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-cyan-500" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
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
                  placeholder="Create a password"
                  className="pl-10 bg-white/80 border-cyan-300 text-cyan-800 placeholder-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-cyan-700 font-medium">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-cyan-500" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="pl-10 bg-white/80 border-cyan-300 text-cyan-800 placeholder-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-cyan-600 text-white hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Create Account
            </Button>
          </form>
          
          <div className="text-center pt-4 border-t border-cyan-200">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="text-cyan-700 hover:bg-cyan-50 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
