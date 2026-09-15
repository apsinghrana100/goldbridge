export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyAction: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  review: string;
  image?: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const COMPANY_DETAILS = {
  name: 'Gold Bridge Capital Solution',
  motto: 'Your Trust, Our Strength',
  category: 'Trade Finance & Structured Banking Consultancy',
  consultantName: 'Mr. Mitesh Mehta',
  consultantTitle: 'Senior Business Consultant',
  consultantPhoto: '/images/mitesh-mehta.png',
  phone: '+91 98242 91055',
  phoneClean: '+919824291055',
  whatsappUrl: 'https://wa.me/919824291055',
  email: 'goldbridge2026@gmail.com',
  address: 'A 504, Center Point, Near Civil #, Ring Road Surat, Gujarat, India-395010',
  workingHours: 'Monday - Saturday: 9:00 AM - 7:00 PM (IST)',
};

export const TRUSTED_SECTORS = [
  { name: 'Importers', description: 'Cross-border procurement facilitation' },
  { name: 'Exporters', description: 'Global trade payment guarantee support' },
  { name: 'Manufacturers', description: 'Raw material trade instrument guidance' },
  { name: 'International Traders', description: 'Multi-jurisdictional trade consultancy' },
  { name: 'Corporate Businesses', description: 'Institutional banking channel advisory' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bg-facilitation',
    title: 'BG (Bank Guarantee)',
    shortDesc: 'Comprehensive advisory for obtaining financial and performance Bank Guarantees (BG) via top-tier banks.',
    fullDesc: 'We assist corporate clients and international traders in securing Bank Guarantees (BG) from top-rated banking institutions to satisfy counterparty risk requirements and back high-value trade transactions.',
    iconName: 'ShieldCheck',
    category: 'Banking Instrument',
    features: ['Financial & Performance BG', 'Issuing Bank Coordination', 'MT760 Transmission Support'],
  },
  {
    id: 'pbg-facilitation',
    title: 'PBG (Performance Bank Guarantee)',
    shortDesc: 'Specialized facilitation for Performance Bank Guarantees (PBG) to secure project and contract execution.',
    fullDesc: 'Our team guides contractors, exporters, and suppliers in structuring Performance Bank Guarantees (PBG) that ensure contractual obligations are fulfilled while safeguarding commercial reputation.',
    iconName: 'Award',
    category: 'Banking Instrument',
    features: ['Contract Performance Protection', 'Tender & Commercial Audit', 'SWIFT Verification Protocol'],
  },
  {
    id: 'emd-facilitation',
    title: 'EMD Guarantee (Earnest Money Deposit)',
    shortDesc: 'Facilitation of Earnest Money Deposit (EMD) guarantees and tender bid bonds for competitive bidding.',
    fullDesc: 'We provide structured documentation and banking channel facilitation for EMD (Earnest Money Deposit) guarantees, allowing clients to participate in major tenders and international procurements without locking up cash flow.',
    iconName: 'Building2',
    category: 'Trade Instrument',
    features: ['Bid Bond & EMD Advisory', 'Rapid Turnaround Processing', 'Capital Efficiency Support'],
  },
  {
    id: 'fdi-facilitation',
    title: 'FDI (Foreign Direct Investment)',
    shortDesc: 'Strategic advisory and channel facilitation for Foreign Direct Investments across global markets.',
    fullDesc: 'We guide cross-border corporate investors, institutional capital funds, and expanding enterprises in structuring Foreign Direct Investment (FDI) frameworks in compliance with regulatory and international banking standards.',
    iconName: 'Globe2',
    category: 'Structured Finance',
    features: ['Cross-Border Capital Structuring', 'Regulatory Compliance Check', 'Institutional Investor Channeling'],
  },
  {
    id: 'ppp-advisory',
    title: 'PPP (Private Placement Program)',
    shortDesc: 'Institutional consultancy for structured Private Placement Programs and high-yield asset strategies.',
    fullDesc: 'Exclusive advisory services connecting institutional clients and qualified trade entities to verified Private Placement Program (PPP) platforms and institutional capital instruments.',
    iconName: 'TrendingUp',
    category: 'Structured Finance',
    features: ['Qualified Platform Matching', 'Asset Verification Audit', 'Confidential Execution Protocol'],
  },
  {
    id: 'sblc-facilitation',
    title: 'SBLC (Standby Letter of Credit)',
    shortDesc: 'Expert guidance in obtaining Standby Letters of Credit via premier international banking channels.',
    fullDesc: 'We assist importers, exporters, and corporate entities in structuring and securing Standby Letters of Credit (SBLC) through top-tier rated international banking partners to guarantee payment performance.',
    iconName: 'ShieldCheck',
    category: 'Banking Instrument',
    features: ['Top-Tier Bank Coordination', 'Compliance & Terms Review', 'Performance Guarantee Advisory'],
  },
  {
    id: 'sloc-assistance',
    title: 'SLOC Assistance',
    shortDesc: 'Professional facilitation for Sight & Usance Letters of Credit for international trade.',
    fullDesc: 'Comprehensive advisory for Sight and Usance Letters of Credit (SLOC) to protect buyer and seller interests, streamline document presentation, and minimize commercial trade risk.',
    iconName: 'FileText',
    category: 'Trade Instrument',
    features: ['Document Alignment & Audit', 'UCP 600 Compliance Check', 'Issuing Bank Coordination'],
  },
  {
    id: 'documentation-guidance',
    title: 'Documentation & Process Support',
    shortDesc: 'Meticulous preparation and verification of BG, PBG, EMD, SBLC & SLOC trade documents.',
    fullDesc: 'Avoid costly rejections with our zero-defect documentation reviews. We audit contracts, tender agreements, invoices, and instrument drafts to ensure 100% compliance.',
    iconName: 'CheckCircle2',
    category: 'Compliance & Turnkey',
    features: ['Instrument Draft Audits', 'Contractual Term Review', 'Zero-Rejection Protocol'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Free Consultation',
    subtitle: 'Initial Discovery & Requirement Audit',
    description: 'We discuss your international trade deal, counterparty expectations, and specific banking instrument needs in a strictly confidential setting.',
    keyAction: 'Confidential Session',
  },
  {
    step: '02',
    title: 'Requirement Analysis',
    subtitle: 'Transaction Feasibility Evaluation',
    description: 'Our trade specialists evaluate contract terms, shipping schedules, and financial viability to select the optimal banking instrument.',
    keyAction: 'Feasibility Audit',
  },
  {
    step: '03',
    title: 'Documentation Review',
    subtitle: 'Zero-Defect Paperwork Preparation',
    description: 'We meticulously verify all supporting documentation, draft instruments, and trade agreements to ensure full compliance with UCP 600 standards.',
    keyAction: 'Document Optimization',
  },
  {
    step: '04',
    title: 'Banking Channel Coordination',
    subtitle: 'Premier Partner Alignment',
    description: 'We submit and coordinate your file through verified international banking channels and SWIFT protocol pathways.',
    keyAction: 'Channel Integration',
  },
  {
    step: '05',
    title: 'Processing',
    subtitle: 'Instrument Verification & Swift Transmission',
    description: 'Continuous monitoring of SWIFT MT799 pre-advice and MT760 issuance protocols until issuing bank confirmation.',
    keyAction: 'SWIFT Telemetry Tracking',
  },
  {
    step: '06',
    title: 'Successful Facilitation',
    subtitle: 'Deal Execution & Delivery',
    description: 'The SBLC or SLOC is successfully issued to your beneficiary bank, allowing your trade deal to proceed with total security.',
    keyAction: 'Trade Instrument Issued',
  },
];

export const WHY_CHOOSE_US: TrustPillar[] = [
  {
    title: 'Professional Banking Guidance',
    description: 'Deep domain expertise in international banking instruments, SWIFT standards, and global trade compliance.',
    iconName: 'Award',
  },
  {
    title: 'Trusted Banking Network',
    description: 'Established relationships with top-tier international issuing banks and financial institutions worldwide.',
    iconName: 'Network',
  },
  {
    title: 'Experienced Consultants',
    description: 'Direct guidance from veteran trade consultants with proven records in complex cross-border trade execution.',
    iconName: 'Users',
  },
  {
    title: 'Fast Documentation Support',
    description: 'Rapid turnaround times on document verification and draft preparation to meet tight shipping deadlines.',
    iconName: 'Zap',
  },
  {
    title: '100% Confidential Process',
    description: 'Strict non-disclosure agreements and institutional data privacy protocols protecting your trade secrets.',
    iconName: 'Lock',
  },
  {
    title: 'Transparent Communication',
    description: 'Clear, honest feedback on transaction feasibility with no hidden fees or false promises.',
    iconName: 'MessageSquareCheck',
  },
  {
    title: 'Dedicated Relationship Manager',
    description: 'A single point of executive contact ensuring personalized attention for your entire trade lifecycle.',
    iconName: 'UserCheck',
  },
];

export const INDUSTRIES_WE_SERVE: IndustryItem[] = [
  {
    id: 'importers',
    name: 'Importers',
    description: 'Securing import trade instruments to guarantee overseas seller payment upon compliant delivery.',
    iconName: 'Ship',
  },
  {
    id: 'exporters',
    name: 'Exporters',
    description: 'Advising on export payment guarantees to eliminate international buyer default risks.',
    iconName: 'Container',
  },
  {
    id: 'manufacturers',
    name: 'Manufacturers',
    description: 'Facilitating procurement instruments for heavy machinery, raw metals, and bulk industrial inputs.',
    iconName: 'Factory',
  },
  {
    id: 'trading-companies',
    name: 'Trading Companies',
    description: 'Flexible trade instrument advisory for high-frequency commodity brokers and merchant traders.',
    iconName: 'Briefcase',
  },
  {
    id: 'logistics-businesses',
    name: 'Logistics Businesses',
    description: 'Supporting freight forwarders and maritime transport operators with contractual performance guarantees.',
    iconName: 'Truck',
  },
  {
    id: 'international-owners',
    name: 'International Business Owners',
    description: 'Comprehensive financial advisory for global conglomerates expanding cross-border commerce.',
    iconName: 'Building',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar Singhania',
    company: 'Karan Trade Logistics',
    role: 'Managing Director',
    review: 'Gold Bridge Capital Solution provided impeccable guidance in securing our SBLC for a $4.2M scrap metal import contract. Mr. Mitesh Mehta’s attention to detail and banking network made all the difference.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Vikramaditya Patel',
    company: 'Lifeguard Industrial Machinery Corp',
    role: 'Chief Operating Officer',
    review: 'Navigating international SLOC requirements used to take us months. With Gold Bridge’s documentation audit, our issuing process was seamless. Highly recommended for serious international traders.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ananya Sharma',
    company: 'Gold Commodity Exports',
    role: 'Head of Gold Commodity Exports',
    review: '100% confidential and highly professional. Gold Bridge helped us structure complex trade guarantees across European issuing banks without any hassle. True partners in global commerce.',
    rating: 5,
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-0',
    question: 'What Structured Banking & Trade Finance solutions do you specialize in?',
    answer: 'We specialize in Foreign Direct Investment (FDI) advisory, Private Placement Program (PPP) facilitation, Standby Letter of Credit (SBLC / SLOC), Bank Guarantees (BG), Performance Bank Guarantees (PBG), and Earnest Money Deposit (EMD) guarantees through premier international banking channels.',
  },
  {
    id: 'faq-bg',
    question: 'What is a BG (Bank Guarantee)?',
    answer: 'A Bank Guarantee (BG) is an irrevocable commitment issued by a financial institution guaranteeing that a debtor’s liabilities will be met if they fail to perform specified obligations. It is widely used in global trade and project finance.',
  },
  {
    id: 'faq-pbg',
    question: 'What is a PBG (Performance Bank Guarantee)?',
    answer: 'A Performance Bank Guarantee (PBG) ensures that a contractor or supplier fulfills their contractual performance requirements. If performance milestones are breached, the beneficiary can claim compensation under the PBG.',
  },
  {
    id: 'faq-emd',
    question: 'What is an EMD (Earnest Money Deposit) Guarantee / Bid Bond?',
    answer: 'An EMD Guarantee is a tender security instrument provided by a bank on behalf of a bidder to ensure they fulfill tender commitments if awarded the contract. It prevents contractors from withdrawing bid offers while preserving liquidity.',
  },
  {
    id: 'faq-1',
    question: 'What is an SBLC (Standby Letter of Credit)?',
    answer: 'A Standby Letter of Credit (SBLC) is a legal commitment issued by a bank that guarantees payment to a beneficiary if the buyer fails to fulfill contractual obligations. It serves as a financial safety net in international commerce.',
  },
  {
    id: 'faq-2',
    question: 'What is an SLOC (Sight/Usance Letter of Credit)?',
    answer: 'A Letter of Credit (SLOC) is a financial document issued by an issuing bank assuring that a seller will receive payment on time and for the correct amount upon presentation of compliant shipping documents.',
  },
  {
    id: 'faq-3',
    question: 'Who needs BG, PBG, EMD, and SBLC Consultancy?',
    answer: 'Tender bidders, project contractors, importers, exporters, manufacturers, and international commodity traders who need to secure contract performance, satisfy bidding requirements, and protect capital in cross-border trade deals.',
  },
  {
    id: 'faq-4',
    question: 'How long does the facilitation process take?',
    answer: 'The timeframe typically ranges from 5 to 10 business days, depending on the completeness of your trade documentation, counterparty verification, and issuing bank processing speed.',
  },
  {
    id: 'faq-5',
    question: 'What documents are required to start?',
    answer: 'Basic requirements include a signed Commercial Invoice, Sales Contract or Tender Notice, Proforma Invoice, Buyer & Seller Company Profiles, KYC documentation, and draft instrument specifications.',
  },
];
