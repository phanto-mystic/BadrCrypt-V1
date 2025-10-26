import React from 'react';

export type NavItem = {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  description: string;
};

export type AppSection = 'encrypt' | 'decrypt' | 'info';