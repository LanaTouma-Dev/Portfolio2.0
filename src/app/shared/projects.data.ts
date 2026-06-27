export type Size = 'lg' | 'sm';
export type Dir = 'up' | 'down' | 'left' | 'right';

export interface Highlight {
  title: string;
  desc: string;
}

export interface ProjectData {
  slug: string;
  name: string;
  arabic?: string;
  tagline: string;
  tags: string[];
  image?: string;
  images?: string[]; // all carousel slides (use image as first if not set)
  pos?: string;
  gradient: string;
  url?: string;
  size: Size;
  from: Dir;
  draft?: boolean;
  featured?: boolean; // spans full width in the grid
  carouselBg?: string; // override dark default for light-themed screenshots
  // case study fields
  year?: string;
  role?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  tech?: string[];
  highlights?: Highlight[];
}

export const PROJECTS: ProjectData[] = [
  {
    slug: 'artisan',
    name: 'Artisan',
    arabic: 'أرتيزان',
    tagline:
      'A marketplace where Syrian artisans showcase and sell their handmade craft — every piece tells a story.',
    tags: ['Full Stack', 'E-Commerce', 'Arabic · RTL'],
    image: 'artisan1.png',
    pos: '50% 42%',
    gradient: 'linear-gradient(150deg, #b85c38, #e3b183)',
    url: '',
    size: 'lg',
    from: 'left',
    year: '2024',
    role: 'Full Stack Developer',
    overview:
      'Artisan is a bilingual Arabic/English e-commerce platform built to give Syrian artisans a proper digital storefront. Sellers list handmade products with full RTL support, manage orders, and track earnings — while buyers discover authentic craft through a culturally-aware, clean UI.',
    challenge:
      'The core challenge was building a seamless RTL/LTR bilingual experience where layout direction switches fluidly based on language without breaking the component library or the checkout flow.',
    solution:
      'I built a direction-aware design system using CSS logical properties and Angular\'s i18n, with a dedicated RTL stylesheet layer. The backend uses a modular service structure separating catalogue, orders, and auth concerns cleanly.',
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind'],
    highlights: [
      {
        title: 'Bilingual RTL/LTR',
        desc: 'Seamless Arabic/English switching with full right-to-left layout support across every component.',
      },
      {
        title: 'Seller Dashboard',
        desc: 'Artisans manage listings, fulfil orders, and track earnings from a dedicated admin panel.',
      },
      {
        title: 'Real-time Inventory',
        desc: 'Stock updates propagate instantly via WebSocket, preventing overselling during high traffic.',
      },
      {
        title: 'Custom Checkout',
        desc: 'Streamlined multi-step checkout with address validation and instant order confirmation.',
      },
    ],
  },
  {
    slug: 'journi',
    name: 'Journi',
    tagline:
      'A collaborative trip planning app — shared itineraries, packing lists, budgets, and your whole crew in one place.',
    tags: ['Frontend', 'Angular', 'Tailwind CSS'],
    image: 'Journi1.png',
    images: ['Journi1.png', 'Journi3.png', 'Journi4.png', 'Journi5.png'],
    pos: '50% 30%',
    gradient: 'linear-gradient(150deg, #FF6B6B, #FFA07A)',
    carouselBg: '#F7F3EE',
    size: 'lg',
    from: 'right',
    year: '2026',
    role: 'Frontend Developer',
    overview:
      'Journi is a collaborative trip planning web app built for groups — itineraries, packing lists, budget splits, and member management all live in one shared space. The goal was to replace scattered group chats and spreadsheets with a single, beautiful place to plan together.',
    challenge:
      'The main challenge was building a nested route architecture where a persistent trip shell (cover photo, info strip, tab nav) wraps four fully independent inner pages — each with their own reactive state — without any global state management library.',
    solution:
      'I used Angular 21 child routes with a single `<router-outlet>` inside the trip shell, and Angular signals for local reactive state in each page. Lazy-loaded components keep the initial bundle small, and computed signals replace the need for RxJS in most of the UI.',
    tech: ['Angular 21', 'Tailwind CSS', 'TypeScript', 'Angular Signals'],
    highlights: [
      {
        title: 'Day-by-Day Itinerary',
        desc: 'Per-day activity timeline with type icons, member assignments, and one-click day switching.',
      },
      {
        title: 'Shared Packing List',
        desc: 'Category-organised checklist with per-item assignees, live progress bar, and toggle-to-pack.',
      },
      {
        title: 'Budget Tracker',
        desc: 'Expense log with category icons, equal/solo split tracking, and an auto-calculated settle-up panel.',
      },
      {
        title: 'Trip Dashboard',
        desc: 'Card grid showing all trips with Unsplash cover photos, status badges, and member avatar stacks.',
      },
    ],
  },
  /* {
    slug: 'pay-it-forward',
    name: 'Pay It Forward',
    tagline:
      'Activate mobile bundles in Syria from anywhere in the world, in seconds.',
    tags: ['Full Stack', 'Fintech', 'i18n'],
    image: 'payitforward1.jpg',
    images: ['payitforward1.jpg', 'payitforward2.jpg', 'payitforward3.jpg'],
    pos: '50% 62%',
    gradient: 'linear-gradient(150deg, #6c5ce7, #b3a4f5)',
    size: 'lg',
    from: 'right',
    year: '2024',
    role: 'Full Stack Developer',
    overview:
      'Pay It Forward lets the Syrian diaspora top up mobile bundles for family back home — instantly, from anywhere in the world. The app handles cross-currency transactions, integrates directly with Syrian carrier APIs, and delivers activation in under 10 seconds.',
    challenge:
      'Integrating with Syrian telecom APIs that have no official documentation, building reliability into an inherently unstable network layer, and handling multi-currency conversions with minimal friction for the end user.',
    solution:
      'I built a resilient adapter layer wrapping each carrier API with retry logic, circuit breakers, and a fallback queue. A lightweight webhook system notifies users the moment their bundle activates, even when the initial response is delayed.',
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker', 'Redis'],
    highlights: [
      {
        title: 'Instant Activation',
        desc: 'Bundles activate in under 10 seconds on average via direct carrier API integration.',
      },
      {
        title: 'Multi-currency',
        desc: 'Supports USD, EUR, and SYP with live conversion rates applied transparently at checkout.',
      },
      {
        title: 'Resilient API Layer',
        desc: 'Retry logic and circuit breakers keep the service reliable despite unstable carrier uptime.',
      },
      {
        title: 'i18n Ready',
        desc: 'Fully localized in English and Arabic with RTL support built into the design system.',
      },
    ],
  }, */
  {
    slug: 'selene-suite',
    name: 'Selene Suite',
    tagline: 'A constellation of little apps — task tracker, focus timer, and journal built to feel as good as they work.',
    tags: ['Desktop App', 'Angular', 'Tauri'],
    image: 'SeleneSuit4.png',
    images: ['SeleneSuit4.png', 'SeleneSuit3.png', 'SeleneSuit2.png', 'SeleneSuit1.png'],
    gradient: 'linear-gradient(150deg, #2a1845, #4e2d7a)',
    size: 'lg',
    from: 'up',
    featured: true,
    year: '2025',
    role: 'Full Stack Developer',
    overview:
      'Selene is a suite of three privacy-first desktop apps — Lumina (task board), Ember (Pomodoro timer), and Fable (journal). Everything runs locally on your device: no accounts, no subscriptions, no cloud. Built with Angular for the UI and Tauri for native desktop packaging.',
    challenge:
      'Building a cohesive design system across three distinct apps — each with its own personality — while keeping them unmistakably part of the same family. The local-first constraint (SQLite, no server) also required rethinking data flows that normally rely on a backend.',
    solution:
      'I built a shared Selene design system of tokens, components, and motion that each app inherits. Tauri handles native packaging for Windows. Django serves as a lightweight local API layer for sync-adjacent features, with SQLite as the persistence layer.',
    tech: ['Angular', 'Tauri', 'Django', 'SQLite'],
    highlights: [
      { title: 'Lumina', desc: 'A kanban task board with priority levels, drag-to-reorder, and offline-first persistence.' },
      { title: 'Ember', desc: 'A Pomodoro timer with a living pixel-art flame that reacts to your focus session.' },
      { title: 'Fable', desc: 'A private journal with dated entries, colour-coded tags, and a 7-day streak counter.' },
      { title: 'Local-first', desc: 'Everything lives on your device. No accounts, no subscriptions, no cloud sync.' },
    ],
  },
  {
    slug: 'coming-1',
    name: '',
    tagline: '',
    tags: [],
    gradient: '',
    size: 'sm',
    from: 'up',
    draft: true,
  },
  {
    slug: 'coming-2',
    name: '',
    tagline: '',
    tags: [],
    gradient: '',
    size: 'sm',
    from: 'down',
    draft: true,
  },
];
