
import React from 'react';
import { Book, Bell, Smartphone, Pencil, Play, Signal, Heart, User, Globe, Folder, FileText } from 'lucide-react';

const icons = [Book, Bell, Smartphone, Pencil, Play, Signal, Heart, User, Globe, Folder, FileText];

const FloatingIcons = () => {
  const positions = [
    { top: '8%', left: '5%' },
    { top: '12%', right: '8%' },
    { top: '20%', left: '3%' },
    { top: '28%', right: '6%' },
    { top: '35%', left: '7%' },
    { top: '42%', right: '12%' },
    { top: '50%', left: '4%' },
    { top: '58%', right: '5%' },
    { top: '65%', left: '9%' },
    { top: '72%', right: '10%' },
    { top: '80%', left: '6%' },
    { top: '85%', right: '7%' },
    { top: '15%', left: '50%' },
    { top: '75%', left: '48%' },
    { top: '90%', right: '45%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hero-icons-only">
      {icons.map((Icon, index) => {
        const position = positions[index % positions.length];
        return (
          <div
            key={index}
            className="absolute floating-icon opacity-30"
            style={{
              ...position,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <Icon size={28} className="text-bright-turquoise drop-shadow-lg" />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
