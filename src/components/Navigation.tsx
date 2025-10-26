import React from 'react';
import { NavItem, AppSection } from '../types/navigation';

interface NavigationProps {
  activeSection: AppSection;
  onSectionChange: (section: AppSection) => void;
  navItems: NavItem[];
}

export default function Navigation({ activeSection, onSectionChange, navItems }: NavigationProps) {
  return (
    <nav className="glass-card p-2 w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id as AppSection)}
              className={`nav-item ${isActive ? 'nav-item-active' : 'nav-item-inactive'}`}
            >
              <Icon size={20} />
              <span className="whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}