
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  BookOpen, 
  Settings, 
  User, 
  MessageSquare,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const navItems = [
    { to: '/ngo-dashboard', icon: BarChart3, label: 'Dashboard' },
    { to: '/ngo-courses', icon: BookOpen, label: 'Courses' },
    { to: '/ngo-requests', icon: MessageSquare, label: 'Requests' },
    { to: '/ngo-analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/ngo-settings', icon: Settings, label: 'Settings' },
    { to: '/ngo-profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 h-full bg-card border-r border-border z-50 transition-transform duration-300 ease-in-out",
        "w-64 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-semibold text-lg">Vruksh NGO</span>
            </div>
            <button 
              onClick={toggleSidebar}
              className="lg:hidden p-1 hover:bg-accent rounded"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive 
                    ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500" 
                    : "text-muted-foreground"
                )}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    toggleSidebar();
                  }
                }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
