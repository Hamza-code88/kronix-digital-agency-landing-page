import React from 'react';
// "import type" use karna zaroori hai jab hum sirf types import kar rahe hon
import type { LucideIcon } from 'lucide-react';

// --- Shared Types ---
export interface ApiResponse<T> {
  data: T;
}

// --- Navigation ---
export interface NavItem {
  id: string;
  label: string;
  href: string; // 'href' add kiya kyunki Navbar mein use ho raha hai
}

// --- Brands (Trusted By) ---
export interface Brand {
  id: string;
  name: string;
  // 'React.ElementType' add kiya taaki Custom SVGs bhi support hon
  Icon: LucideIcon | React.ElementType; 
}

// --- Process Section ---
export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: 'rocket' | 'pen' | 'refresh';
}

// --- Portfolio Section ---
export interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
}

// --- Benefits Section ---
export interface Benefit {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

// --- Testimonials Section ---
export interface Testimonial {
  id: string;
  companyName: string;
  headline: string;
  text: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

// --- Pricing Section ---
export interface PricingFeature {
  text: string;
  included: boolean;
 
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
   Pline : string;
  badge?: string;
  isHighlighted?: boolean;
  features: PricingFeature[];
  buttonText: string;
}

// --- Blog Section ---
export interface BlogPost {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

// --- FAQ Section ---
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// --- Footer Section ---
export interface SocialLink {
  id: string;
  icon: LucideIcon;
  link: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  socials: SocialLink[];
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}