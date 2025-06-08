
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Mobile header */}
        <div className="lg:hidden bg-card border-b border-border p-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-accent rounded-lg"
          >
            <Menu size={20} />
          </button>
        </div>
        
        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
