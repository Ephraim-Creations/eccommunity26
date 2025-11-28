import { 
  Code2, 
  Lightbulb, 
  Users, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  Facebook, 
  Youtube, 
  Video,
  Heart,
  Globe,
  Smile
} from 'lucide-react';
import { BenefitItem, GroupCard, NavItem, Product, RuleItem, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Store', path: '/store' },
  { label: 'Guidelines', path: '/guidelines' },
];

export const COMMUNITY_GROUPS: GroupCard[] = [
  {
    title: 'Devs Hub',
    description: 'A dedicated space for developers to share code, debug together, and collaborate on open-source projects.',
    icon: Code2,
  },
  {
    title: 'Insights Room',
    description: 'Deep discussions on tech trends, career advice, and industry news. Share your knowledge and learn from peers.',
    icon: Lightbulb,
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Networking',
    description: 'Connect with like-minded individuals and industry professionals.',
    icon: Users,
  },
  {
    title: 'Growth',
    description: 'Access exclusive resources, workshops, and mentorship opportunities.',
    icon: Zap,
  },
  {
    title: 'Safe Space',
    description: 'A moderated, respectful environment focused on constructive feedback.',
    icon: ShieldCheck,
  }
];

export const RULES: RuleItem[] = [
  {
    id: 1,
    title: 'Be Respectful',
    description: 'Treat everyone with kindness. Harassment, hate speech, and bullying are strictly prohibited.',
    icon: Heart,
  },
  {
    id: 2,
    title: 'No Spam',
    description: 'Keep the chat clean. Avoid excessive self-promotion or irrelevant links.',
    icon: MessageCircle,
  },
  {
    id: 3,
    title: 'Stay on Topic',
    description: 'Post content in the appropriate channels to keep discussions organized.',
    icon: Globe,
  },
  {
    id: 4,
    title: 'Constructive Feedback',
    description: 'Critique ideas, not people. Offer help and suggestions rather than just judgment.',
    icon: Smile,
  }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: 'TikTok',
    url: '#',
    icon: Video, // Approximation for TikTok
    description: 'Short-form tech tips and community highlights.',
  },
  {
    platform: 'Facebook',
    url: '#',
    icon: Facebook,
    description: 'Official announcements and event pages.',
  },
  {
    platform: 'YouTube',
    url: '#',
    icon: Youtube,
    description: 'In-depth tutorials, podcasts, and session recordings.',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'EC Classic Tee (White)',
    type: 'T-Shirt',
    price: 'KES 1,500',
    description: 'The official community t-shirt in crisp white. Made from 100% premium cotton with the EC logo on the chest.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '2',
    name: 'Devs Hub Hoodie (Black)',
    type: 'Hoodie',
    price: 'KES 3,500',
    description: 'Stay warm while you code. This heavy-blend hoodie features the Devs Hub insignia and a kangaroo pocket.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'Insights Room Tee (Black)',
    type: 'T-Shirt',
    price: 'KES 1,500',
    description: 'For the thinkers and strategists. A sleek black tee featuring a minimalist bulb design.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '4',
    name: 'Binary Flow Hoodie (Navy)',
    type: 'Hoodie',
    price: 'KES 3,500',
    description: 'Inspired by data streams. Deep navy hoodie with subtle binary code patterns on the sleeve.',
    image: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '5',
    name: 'Code & Coffee Tee',
    type: 'T-Shirt',
    price: 'KES 1,500',
    description: 'The essential fuel for every developer. High-quality print on a soft grey cotton tee.',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: '6',
    name: 'Debug Mode Hoodie (Grey)',
    type: 'Hoodie',
    price: 'KES 3,500',
    description: 'Perfect for late-night debugging sessions. Comfortable, durable, and stylish.',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '7',
    name: 'EC Minimalist Tee',
    type: 'T-Shirt',
    price: 'KES 1,500',
    description: 'Less is more. A small, embroidered logo on the left chest. Available in earth tones.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '8',
    name: 'Community First Hoodie',
    type: 'Hoodie',
    price: 'KES 3,500',
    description: 'Represent the movement. Large back print listing our core values.',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961d289?auto=format&fit=crop&q=80&w=800',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: '9',
    name: 'Hello World Tee',
    type: 'T-Shirt',
    price: 'KES 1,500',
    description: 'Where it all begins. A classic retro-style terminal font print.',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '10',
    name: 'Syntax Error Hoodie',
    type: 'Hoodie',
    price: 'KES 3,500',
    description: 'Embrace the chaos. A glitched text design for the edgy coder.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '11',
    name: 'Creator Vibe Tee',
    type: 'T-Shirt',
    price: 'KES 1,500',
    description: 'For the designers and artists in the community. Soft peach fabric.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0815a046baf?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: '12',
    name: 'Night Owl Hoodie',
    type: 'Hoodie',
    price: 'KES 3,500',
    description: 'Black on black print. Subtle, stealthy, and super warm.',
    image: 'https://images.unsplash.com/photo-1578587018452-892bace13f48?auto=format&fit=crop&q=80&w=800',
    sizes: ['M', 'L', 'XL'],
  }
];