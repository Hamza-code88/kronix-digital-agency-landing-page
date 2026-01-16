import type { Brand, NavItem, ProcessStep, PortfolioItem, Testimonial, PricingPlan, BlogPost, FAQItem, FooterLink, ContactInfo , } from '../types';
import { 
  Infinity as InfinityIcon, // FIX: Renamed to avoid conflict with JS 'Infinity'
  Zap, PenTool, CalendarDays, 
  BadgeDollarSign, Settings, Search, Crown, Facebook, Instagram, Linkedin, Globe, 
} from 'lucide-react';

// --- Icons Imports ---
import { LayersIcon } from '../components/svg/LawyerIcon';
import circle from '../components/svg/circle';
import quetion from '../components/svg/quetion';
import hour from '../components/svg/hour';
import command from '../components/svg/command';
import b1Icon from '../components/svg/b1'; // Renamed to lowercase standard

// --- Images Imports (TOP PAR IMPORT KARNA ZAROORI HAI) ---
// Works Images
import w1 from '../assets/works/w1.png';
import w2 from '../assets/works/w2.png';
import w3 from '../assets/works/w3.png';
import w4 from '../assets/works/w4.png';
import w5 from '../assets/works/w5.png';
import w6 from '../assets/works/w6.png';
import w7 from '../assets/works/w7.png';
import w8 from '../assets/works/w8.png';
import w9 from '../assets/works/w9.png';
import w10 from '../assets/works/w10.png';
import w11 from '../assets/works/w11.png';
import w12 from '../assets/works/w12.png';

// Customer Images
import c1 from '../assets/customar/c1.png';

// Blog Images
import bl1 from '../assets/blogs/bl1.png';
import bl2 from '../assets/blogs/bl2.png';
import bl3 from '../assets/blogs/bl3.png';
import bl4 from '../assets/blogs/bl4.png';
import bl5 from '../assets/blogs/bl5.png';
import bl6 from '../assets/blogs/bl6.png';

export const MOCK_NAV_ITEMS: NavItem[] = [
  { id: 'n1', label: 'Process', href: '#process' },
  { id: 'n2', label: 'Benefits', href: '#benefits' },
  { id: 'n3', label: 'Services', href: '#services' },
  { id: 'n4', label: 'Portfolio', href: '#portfolio' },
  { id: 'n5', label: 'FAQ', href: '#faq' },
];

export const MOCK_BRANDS: Brand[] = [
  { id: 'b1', name: 'Layers', Icon: LayersIcon  },
  { id: 'b3', name: 'Circooles', Icon: quetion },
  { id: 'b2', name: 'Quotient', Icon: circle },
  { id: 'b4', name: 'Hourglass', Icon: hour },
  { id: 'b5', name: 'Command+R', Icon: command },
];

export const MOCK_PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'p1',
    title: 'Subscribe & get started',
    description: 'Submit as many design tasks as you need without worrying about individual project fees.',
    icon: 'rocket',
  },
  {
    id: 'p2',
    title: 'Polished designs - on time',
    description: 'Our designers get to work to deliver your request. Receive your design within a few days.',
    icon: 'pen',
  },
  {
    id: 'p3',
    title: 'Revisions made simple',
    description: 'Custom designs, prompt replies and as many revisions as you need.',
    icon: 'refresh',
  },
];

export const MOCK_PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 'pf1', title: 'Abstract 3D', imageUrl: w1 },
  { id: 'pf2', title: 'Modern Building', imageUrl: w2 },
  { id: 'pf3', title: 'Colorful Waves', imageUrl: w3 },
  { id: 'pf4', title: 'Creative Studio', imageUrl: w4 },
  { id: 'pf5', title: 'Digital Art', imageUrl: w5 },
  { id: 'pf6', title: 'Neon Vibes', imageUrl: w6 },
  { id: 'pf7', title: 'Future Tech', imageUrl: w7 },
  { id: 'pf8', title: 'Minimal Design', imageUrl: w8 },
  { id: 'pf9', title: 'Geometric Shapes', imageUrl: w9 },
  { id: 'pf10', title: 'Brand Identity', imageUrl: w10 },
  { id: 'pf11', title: 'Product Showcase', imageUrl: w11 },
  { id: 'pf12', title: 'Visual Experience', imageUrl: w12 },
];

export const MOCK_CAPABILITIES = [
  "Web design & UI",
  "Social media visuals",
  "Infographics",
  "Design system",
  "Email design",
  "Stationery",
  "Icons",
  "Packaging & merch",
  "Signage",
  "Brochures",
  "Logos & branding",
  "Digital ads",
  "Wireframes",
];

export const MOCK_BENEFITS = [
  {
    id: 'b1',
    number: '01',
    title: 'On-demand requests',
    description: "Put all your requests in the design queue in Trello, and we'll knock them out 1 by 1.",
    icon: InfinityIcon, // FIX: Using renamed Icon
  },
  {
    id: 'b2',
    number: '02',
    title: 'Top-notch quality',
    description: "High-end work from a dedicated team of senior designers that's always available when you need it.",
    icon: Zap,
  },
  {
    id: 'b3',
    number: '03',
    title: 'Powered by - Webflow',
    description: "We build every site on Webflow, making them dynamic, accessible, and easily scalable.",
    icon: b1Icon,
  },
  {
    id: 'b4',
    number: '04',
    title: 'Fast. Responsive. Reliable.',
    description: "Get regular updates on your projects and can expect to receive your designs within 2-3 days.",
    icon: PenTool,
  },
  {
    id: 'b5',
    number: '05',
    title: 'No Lock-in contracts',
    description: "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.",
    icon: CalendarDays,
  },
  {
    id: 'b6',
    number: '06',
    title: 'Great value for money',
    description: "Get the power of dedicated design team at fraction of the cost of full-time employee.",
    icon: BadgeDollarSign,
  },
  {
    id: 'b7',
    number: '07',
    title: 'Customized for you',
    description: "We design and build custom for you. We're never starting from a template unless you want that!",
    icon: Settings,
  },
  {
    id: 'b8',
    number: '08',
    title: 'Creative paying',
    description: "We're here when you need us and not on payroll when you don't.",
    icon: Search,
  },
  {
    id: 'b9',
    number: '09',
    title: 'Expert turnovers',
    description: "You're getting 10+ years of design experience with every request. No hand-holding required.",
    icon: Crown,
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    companyName: 'Gymstory',
    headline: 'Kornix is the best digital agency i have ever seen! Highly Recommended!',
    text: "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    authorName: 'Diana Loreza',
    authorRole: 'Director of GYMSTORY',
    authorImage: c1, // FIX: Using imported image variable
  },
  {
    id: 't2',
    companyName: 'TechFlow',
    headline: 'Incredible attention to detail and clean code principles.',
    text: "The transition from design to development was seamless. They understood our brand identity perfectly and delivered a high-performance site that our customers love.",
    authorName: 'Sarah Jenkins',
    authorRole: 'CTO at TechFlow',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  }
];

// ... imports

export const MOCK_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'price_1',
    name: 'Standard',
    description: 'One request at a time.', 
    price: '$2,995',
    Pline: 'Pause or cancel anytime', // Alag field
    buttonText: 'Get Started',
    badge: 'Most Popular',
    isHighlighted: true,
    features: [
      { text: 'One request at a time', included: true },
      { text: 'Average 48 hour delivery', included: true },
      { text: 'Unlimited brands', included: true },
      { text: 'Unlimited users', included: true },
      { text: 'Easy credit-card payments', included: true },
      { text: 'Pause or cancel anytime', included: true },
      { text: 'Webflow development', included: false },
    ],
  },
  {
    id: 'price_2',
    name: 'Growth',
    description: 'Double the requests. Limited spots.',
    price: '$4,795',
    Pline: 'Pause or cancel anytime', // Alag field
    buttonText: 'Get Started',
    badge: 'Best Value',
    isHighlighted: false,
    features: [
      { text: 'Two requests at a time', included: true },
      { text: 'Average 24 hour delivery', included: true },
      { text: 'Priority support', included: true },
      { text: 'Unlimited brands', included: true },
      { text: 'Unlimited users', included: true },
      { text: 'Easy credit-card payments', included: true },
      { text: 'Webflow development', included: true },
    ],
  },
  {
    id: 'price_3',
    name: 'Basic - Weekly',
    description: 'Perfect if you want to try the subscription out.',
    price: '$890',
    Pline: 'Paid per weekly', // Alag field
    buttonText: 'Contact Us',
    features: [
      { text: 'Custom requests limit', included: true },
      { text: 'Real-time Slack communication', included: true },
      { text: 'Design systems & CI/CD', included: true },
      { text: 'Dedicated project manager', included: true },
      { text: 'Unlimited brands', included: true },
      { text: 'Invoice payments', included: true },
      { text: 'Custom NDA', included: true },
    ],
  },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    tag: 'BRANDING',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and...',
    imageUrl: bl1, // FIX: Using imported image
    link: '#',
  },
  {
    id: 'blog2',
    tag: 'TIKTOK',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and...',
    imageUrl: bl2,
    link: '#',
  },
  {
    id: 'blog3',
    tag: 'LOGO DESIGN',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and...',
    imageUrl: bl3,
    link: '#',
  },
  {
    id: 'blog4',
    tag: 'FB', 
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and...',
    imageUrl: bl4,
    link: '#',
  },
  {
    id: 'blog5',
    tag: 'AI',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and...',
    imageUrl: bl5,
    link: '#',
  },
  {
    id: 'blog6',
    tag: 'NFT',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and...',
    imageUrl: bl6,
    link: '#',
  },
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Do you have specific pricing plans to show?',
    answer: 'Yes, we have tailored pricing plans suited for startups, agencies, and enterprises. Check our pricing section above for details.'
  },
  {
    id: 'faq2',
    question: 'How many years of experience do you have?',
    answer: 'Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.'
  },
  {
    id: 'faq3',
    question: 'What companies have you worked with?',
    answer: 'We have worked with over 50+ companies ranging from YC-backed startups to Fortune 500 enterprises.'
  },
  {
    id: 'faq4',
    question: 'Am I safe leaving my company in your hands?',
    answer: 'Absolutely. We prioritize security and confidentiality. We sign NDAs and ensure your intellectual property is safe with us.'
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'info@ideapeel.com',
  phone: '(001) 1231 3435',
  socials: [
    { id: 's1', icon: Facebook, link: '#' },
    { id: 's2', icon: Instagram, link: '#' },
    { id: 's3', icon: Linkedin, link: '#' },
    { id: 's4', icon: Globe, link: '#' },
  ]
};

export const FOOTER_LINKS: FooterLink[] = [
  { id: 'f1', label: 'Process', href: '#process' },
  { id: 'f2', label: 'Benefits', href: '#benefits' },
  { id: 'f3', label: 'Services', href: '#services' },
  { id: 'f4', label: 'Portfolio', href: '#portfolio' },
  { id: 'f5', label: 'FAQ', href: '#faq' },
];