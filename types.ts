import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RuleItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  description?: string;
}

export interface GroupCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  name: string;
  type: 'T-Shirt' | 'Hoodie';
  price: string;
  description: string;
  image: string;
  sizes: string[];
}