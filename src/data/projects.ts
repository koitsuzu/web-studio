export type Category = 'Corporate' | 'E-Commerce' | 'Portfolio' | 'Landing Page' | 'Web App';
export type Color = 'Blue' | 'Dark' | 'Light' | 'Colorful' | 'Monochrome';

export interface Project {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  categories: Category[];
  color: Color;
  addedAt: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: '02',
    title: '髮型分析 (Hairstyle Analysis)',
    url: 'https://opal.google/app/1AIP68p2roPsyZNFnMAEcm8lSz32cN-7w',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    categories: ['Web App'],
    color: 'Light',
    addedAt: '2026-05-01',
    description: 'AI-powered hairstyle analysis and recommendation tool. Modern, clean, and interactive.'
  },
  {
    id: '01',
    title: '請款單 (Invoice App)',
    url: 'https://opal.google/app/1A0ZYDC4SrbIpIZfFcDCx9kf7DNB2845K',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    categories: ['Web App'],
    color: 'Light',
    addedAt: '2026-05-01',
    description: 'A clean, modern, minimalist web application interface for a billing and invoice management system.'
  },
  {
    id: '0',
    title: 'doda SPORTS',
    url: 'https://dodasports.doda.jp/shigotozukan/2026/',
    imageUrl: 'https://dodasports.doda.jp/shigotozukan/2026/assets/images/ogp.jpg',
    categories: ['Corporate', 'Landing Page'],
    color: 'Light',
    addedAt: '2026-05-01',
    description: 'Professional sports recruitment landing page with Japanese corporate aesthetics.'
  },
  {
    id: '1',
    title: 'Fintech Dashboard',
    url: 'https://example.com/fintech',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    categories: ['Web App', 'Corporate'],
    color: 'Dark',
    addedAt: '2023-10-01',
    description: 'Dark-themed financial technology dashboard for data analytics and trading.'
  },
  {
    id: '2',
    title: 'Modern E-Commerce',
    url: 'https://example.com/shop',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    categories: ['E-Commerce'],
    color: 'Light',
    addedAt: '2023-09-15',
    description: 'Minimalist e-commerce shop specializing in lifestyle and fashion products.'
  },
  {
    id: '3',
    title: 'Creative Agency Portfolio',
    url: 'https://example.com/agency',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    categories: ['Portfolio', 'Landing Page'],
    color: 'Monochrome',
    addedAt: '2023-09-10',
    description: 'Monochrome portfolio for a creative agency, bold typography and brutalist style.'
  },
  {
    id: '4',
    title: 'SaaS Analytics',
    url: 'https://example.com/saas',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200',
    categories: ['Web App'],
    color: 'Colorful',
    addedAt: '2023-08-22',
    description: 'Vibrant and colorful analytics platform for software-as-a-service companies.'
  },
  {
    id: '5',
    title: 'Minimalist Blog',
    url: 'https://example.com/blog',
    imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200',
    categories: ['Corporate', 'Landing Page'],
    color: 'Light',
    addedAt: '2023-08-11',
    description: 'Clean, typography-focused minimalist blog layout. Contains American style elements.'
  },
  {
    id: '6',
    title: 'Dark Mode Crypto App',
    url: 'https://example.com/crypto',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200',
    categories: ['Web App', 'Landing Page'],
    color: 'Dark',
    addedAt: '2023-08-01',
    description: 'Cryptocurrency trading application with a sleek dark mode design and neon accents.'
  },
  {
    id: '7',
    title: 'Fashion Storefront',
    url: 'https://example.com/fashion',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    categories: ['E-Commerce'],
    color: 'Colorful',
    addedAt: '2023-07-19',
    description: 'High-end fashion e-commerce storefront with colorful, engaging visual elements. Bold American style.'
  },
  {
    id: '8',
    title: 'Developer Portfolio',
    url: 'https://example.com/dev',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    categories: ['Portfolio'],
    color: 'Dark',
    addedAt: '2023-07-05',
    description: 'Personal portfolio for a software developer showcasing projects and skills. Cyberpunk vibes.'
  },
  {
    id: '9',
    title: 'Real Estate Platform',
    url: 'https://example.com/realestate',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    categories: ['Corporate', 'Web App'],
    color: 'Blue',
    addedAt: '2023-06-25',
    description: 'Trustworthy and professional real estate platform featuring a calming blue color palette.'
  },
  {
    id: '10',
    title: 'Tech Conference Site',
    url: 'https://example.com/conference',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    categories: ['Landing Page'],
    color: 'Blue',
    addedAt: '2023-06-15',
    description: 'Landing page for a technology conference, designed to drive ticket sales and showcase speakers.'
  },
  {
    id: '11',
    title: 'Organic Food Shop',
    url: 'https://example.com/organic',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
    categories: ['E-Commerce'],
    color: 'Colorful',
    addedAt: '2023-06-02',
    description: 'E-commerce platform for organic food and groceries, featuring natural and vibrant colors.'
  },
  {
    id: '12',
    title: 'Designer Showcase',
    url: 'https://example.com/designer',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    categories: ['Portfolio', 'Landing Page'],
    color: 'Light',
    addedAt: '2023-05-20',
    description: 'Minimalist showcase for interior and graphic designers to display their works gracefully.'
  }
];

export const CATEGORIES: Category[] = ['Corporate', 'E-Commerce', 'Portfolio', 'Landing Page', 'Web App'];
export const COLORS: Color[] = ['Blue', 'Dark', 'Light', 'Colorful', 'Monochrome'];
