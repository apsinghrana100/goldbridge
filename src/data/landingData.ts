export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
  stats?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: string;
  features: string[];
  metrics: string;
}

export interface StatItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  metrics: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const TRUSTED_COMPANIES = [
  { name: 'Google', logo: 'G' },
  { name: 'Microsoft', logo: 'MSFT' },
  { name: 'Amazon', logo: 'AMZN' },
  { name: 'Adobe', logo: 'ADBE' },
  { name: 'Slack', logo: 'SLK' },
  { name: 'Spotify', logo: 'SPOT' },
];

export const WHY_CHOOSE_CARDS: FeatureCard[] = [
  {
    id: 'investment',
    title: 'Investment Planning',
    description: 'Professional advisors helping maximize long-term returns through intelligent risk-adjusted portfolio management.',
    iconName: 'TrendingUp',
    highlight: '+18.4% Avg Annual ROI',
    stats: 'Tailored Asset Allocation',
  },
  {
    id: 'tax',
    title: 'Tax Optimization',
    description: 'Reduce tax liabilities legally and efficiently with proactive fiscal strategies for growing businesses.',
    iconName: 'ReceiptText',
    highlight: 'Up to 32% Tax Saved',
    stats: 'Zero-Penalty Guarantee',
  },
  {
    id: 'accounting',
    title: 'Business Accounting',
    description: 'Accurate bookkeeping with automated real-time financial reporting and instant compliance readiness.',
    iconName: 'Calculator',
    highlight: '100% Automated Audit',
    stats: 'Real-time Ledger Sync',
  },
  {
    id: 'risk',
    title: 'Risk Management',
    description: 'Protect your enterprise assets and cash flow through AI-driven liquidity analysis and predictive hedging.',
    iconName: 'ShieldCheck',
    highlight: 'Bank-Grade Security',
    stats: '24/7 Threat Protection',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'consulting',
    title: 'Business Consulting',
    shortDesc: 'Strategic business advisory for scaling revenue models and capital efficiency.',
    fullDesc: 'Work with executive financial strategists to streamline operational margins, optimize capital allocation, and navigate market expansion.',
    iconName: 'Briefcase',
    category: 'Strategy',
    features: ['Capital Structure Optimization', 'Merger & Acquisition Advisory', 'Burn Rate Reduction'],
    metrics: '3.2x Revenue Velocity',
  },
  {
    id: 'investment-advisory',
    title: 'Investment Advisory',
    shortDesc: 'Data-backed wealth growth algorithms tailored for corporate funds.',
    fullDesc: 'Multi-asset class management leveraging private equity, bonds, index funds, and structured treasury yields.',
    iconName: 'LineChart',
    category: 'Wealth',
    features: ['Automated Yield Farming', 'ESG Compliant Portfolios', 'Liquidity Management'],
    metrics: '99.9% Uptime Analytics',
  },
  {
    id: 'tax-filing',
    title: 'Tax Filing & Prep',
    shortDesc: 'End-to-end corporate tax compliance and multi-jurisdictional filings.',
    fullDesc: 'Seamless automated tax calculations, deduction discovery, and direct e-filing with revenue authorities.',
    iconName: 'FileSpreadsheet',
    category: 'Compliance',
    features: ['R&D Tax Credit Claims', 'Cross-Border VAT Handling', 'Audit Defense Representation'],
    metrics: '$2.4M Saved in 2025',
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    shortDesc: 'Global compliant payroll processing with automated tax withholding.',
    fullDesc: 'Pay team members in 140+ currencies with instant direct deposits, benefit administration, and local tax filings.',
    iconName: 'Wallet',
    category: 'Operations',
    features: ['Multi-currency Payouts', 'Automated Contractor 1099/W2', 'Instant Direct Deposit'],
    metrics: '0.01% Error Threshold',
  },
  {
    id: 'analytics',
    title: 'Financial Analytics',
    shortDesc: 'Real-time financial intelligence, custom KPI dashboards, and forecasting.',
    fullDesc: 'Unify bank accounts, ERPs, and stripe transactions into custom real-time metrics with predictive runway modeling.',
    iconName: 'PieChart',
    category: 'Technology',
    features: ['Custom SQL & BI Export', 'Runway Scenario Planning', 'Live Cashflow Dashboards'],
    metrics: 'Real-Time Telemetry',
  },
  {
    id: 'compliance',
    title: 'Corporate Compliance',
    shortDesc: 'SOC2, ISO27001, and regulatory governance for modern enterprises.',
    fullDesc: 'Continuous automated compliance tracking, entity management, and institutional risk governance.',
    iconName: 'Scale',
    category: 'Governance',
    features: ['Automated Entity Renewal', 'Board Governance Tooling', 'Institutional KYC/AML'],
    metrics: '100% Audit Readiness',
  },
];

export const STATS_DATA: StatItem[] = [
  {
    label: 'Happy Clients',
    value: 5000,
    prefix: '',
    suffix: '+',
    description: 'Trusted by high-growth startups and global enterprises',
  },
  {
    label: 'Assets Managed',
    value: 800,
    prefix: '$',
    suffix: 'M+',
    description: 'Active corporate treasuries under management',
  },
  {
    label: 'Client Satisfaction',
    value: 98,
    prefix: '',
    suffix: '%',
    description: 'Verified positive NPS rating across active accounts',
  },
  {
    label: 'Support',
    value: 24,
    prefix: '',
    suffix: '/7',
    description: 'Dedicated financial advisors & account reps',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    subtitle: 'Financial Audit & Health Assessment',
    description: 'We analyze your current balance sheet, tax structure, software stack, and cashflow dynamics to identify immediate growth bottlenecks.',
    deliverables: ['360° Financial Audit Report', 'Deduction & Tax Savings Map', 'Runway Diagnostics'],
  },
  {
    step: '02',
    title: 'Planning',
    subtitle: 'Tailored Financial Roadmap',
    description: 'Our senior strategists design a customized financial ecosystem with automated workflows, tax reduction plans, and yield optimization.',
    deliverables: ['Custom Financial Architecture', 'Budget & Expense Targets', 'Yield Strategy Setup'],
  },
  {
    step: '03',
    title: 'Execution',
    subtitle: 'Seamless Integration & Onboarding',
    description: 'We connect your bank accounts, accounting systems, and payroll into our unified BusinessCare platform with dedicated advisor support.',
    deliverables: ['1-on-1 Advisor Assignment', 'Automated Data Pipeline', 'Staff Training & Onboarding'],
  },
  {
    step: '04',
    title: 'Growth',
    subtitle: 'Continuous Optimization & Wealth Scale',
    description: 'Receive real-time insights, quarterly tax reviews, and strategic guidance to continuously accelerate profit margins and business value.',
    deliverables: ['Monthly Board-Ready Reports', 'Quarterly Tax Optimization', '24/7 Concierge Support'],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Chief Executive Officer',
    company: 'Vanguard Dynamics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    quote: 'BusinessCare completely revolutionized our treasury management. We saved over $140k in corporate taxes in our first year alone, while automating all payroll operations.',
    rating: 5,
    metrics: '+240% Growth Efficiency',
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Head of Finance',
    company: 'HyperScale AI',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
    quote: 'The real-time financial analytics and proactive tax optimization are unbelievable. The dashboard feels like Linear meets Mercury. Hands down the best financial partner we have used.',
    rating: 5,
    metrics: '99.8% Accuracy Score',
  },
  {
    id: '3',
    name: 'Elena Rostova',
    role: 'Co-Founder & COO',
    company: 'Nexus Capital Partners',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    quote: 'From corporate compliance to international payroll, BusinessCare handles every complex detail seamlessly. Their senior advisors feel like an extended part of our C-suite.',
    rating: 5,
    metrics: '10x Faster Monthly Close',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for early-stage startups and small teams.',
    monthlyPrice: 299,
    annualPrice: 239,
    features: [
      'Automated Bookkeeping & Categorization',
      'Real-Time Cashflow Dashboard',
      'Basic Tax Preparation & Filing',
      'Payroll up to 10 Employees',
      'Standard Email & Chat Support',
      'Monthly Financial Statements',
    ],
    cta: 'Start 14-Day Free Trial',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Perfect for growing companies needing dedicated financial scale.',
    monthlyPrice: 599,
    annualPrice: 479,
    popular: true,
    features: [
      'Everything in Starter',
      'Dedicated Senior Financial Advisor',
      'Advanced Multi-State Tax Optimization',
      'Payroll up to 50 Employees',
      'Custom KPI & Runway Modeling',
      'R&D Tax Credit Maximization',
      '24/7 Priority Support & Slack Channel',
    ],
    cta: 'Get Started Now',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For mid-market and large enterprises requiring custom governance.',
    monthlyPrice: 1299,
    annualPrice: 1039,
    features: [
      'Everything in Professional',
      'Dedicated C-Suite Fractional CFO',
      'Global Payroll & 140+ Currency Support',
      'M&A & Treasury Yield Management',
      'Custom API & ERP Integrations',
      'Unlimited Subsidiaries & Entities',
      'Institutional SLA & Security Audit',
    ],
    cta: 'Contact Sales',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can we start?',
    answer: 'Onboarding takes less than 24 hours. Once registered, our automated data pipelines connect directly with your existing bank accounts, Stripe, QuickBooks, or Xero to immediately compile your financial dashboard.',
    category: 'Onboarding',
  },
  {
    id: 'faq-2',
    question: 'Do you provide tax support?',
    answer: 'Yes! BusinessCare provides full end-to-end tax support including quarterly estimated taxes, R&D tax credit claims, multi-state corporate tax filings, and proactive deduction discovery led by certified CPAs.',
    category: 'Taxation',
  },
  {
    id: 'faq-3',
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. All our standard plans operate on flexible monthly or annual commitments with no long-term lock-in or cancellation penalties. You maintain full ownership of all exportable financial data.',
    category: 'Billing',
  },
  {
    id: 'faq-4',
    question: 'Is data secure?',
    answer: 'We utilize bank-grade 256-bit AES encryption at rest and TLS 1.3 in transit. Our system is SOC 2 Type II certified, GDPR compliant, and audited quarterly by third-party cybersecurity firms.',
    category: 'Security',
  },
  {
    id: 'faq-5',
    question: 'Can BusinessCare integrate with our current accounting stack?',
    answer: 'Yes, we integrate seamlessly with over 2,000+ financial tools including Stripe, Plaid, Ramp, Mercury, QuickBooks, NetSuite, Gusto, Rippling, and major global banks.',
    category: 'Integrations',
  },
];
