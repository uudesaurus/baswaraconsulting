// Complete data structure for Baswara Consulting website
// Based on McKinsey/BCG-style architecture

export interface ServiceDetail {
  title: string
  description: string
  clientProblem?: string
  methodology?: string
  deliverable?: string
}

export interface Capability {
  slug: string
  name: string
  headline: string
  hook: string
  serviceSuite: ServiceDetail[]
  relatedIndustries?: string[]
  relatedUnits?: string[]
}

export interface Industry {
  slug: string
  name: string
  cluster: string
  hook: string
  coreServices: string[]
  localContext: {
    title: string
    description: string
  }
  relatedCapabilities: string[]
  relatedUnits: string[]
}

export interface Unit {
  slug: string
  name: string
  role: string
  hook: string
  tagline: string
  coreOfferings: ServiceDetail[]
  relatedIndustries?: string[]
  relatedCapabilities?: string[]
}

export interface Insight {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  industries: string[]
  capabilities: string[]
  image?: string
}

// CAPABILITIES DATA
export const CAPABILITIES: Capability[] = [
  {
    slug: 'strategy',
    name: 'Strategy & Transformation',
    headline: 'Defining the path to sustainable growth',
    hook: 'Volatility is the new normal. We partner with clients not just to survive disruption, but to seize it.',
    serviceSuite: [
      {
        title: 'Corporate Strategy',
        description: 'Market dynamics, Portfolio Review (Stars vs Dogs), Advantage Definition',
        clientProblem: 'Unclear competitive positioning and portfolio misalignment',
        methodology: 'Market analysis, competitive benchmarking, portfolio optimization frameworks',
        deliverable: 'Strategic roadmap with clear growth priorities and portfolio actions'
      },
      {
        title: 'Business Unit Strategy',
        description: 'Competitive benchmarking, Value Prop redesign, War Gaming',
        clientProblem: 'Declining market share and commoditization pressure',
        methodology: 'Value chain analysis, competitive war gaming, customer insight research',
        deliverable: 'Differentiated business model and go-to-market strategy'
      },
      {
        title: 'Transformation Office (TMO)',
        description: 'Governance setup, Value tracking (EBITDA), Change Engines',
        clientProblem: 'Transformation initiatives failing to deliver expected value',
        methodology: 'PMO setup, benefit tracking, change management protocols',
        deliverable: 'Transformation governance structure with clear accountability'
      },
      {
        title: 'Digital Strategy',
        description: 'Maturity assessment, Build vs Buy, Business-IT Roadmap',
        clientProblem: 'Technology investments not translating to business outcomes',
        methodology: 'Digital maturity assessment, technology architecture review',
        deliverable: 'Integrated digital roadmap aligned to business strategy'
      }
    ],
    relatedIndustries: ['agro', 'mining', 'automotive', 'finance', 'ict'],
    relatedUnits: ['implementation', 'ventures']
  },
  {
    slug: 'operations',
    name: 'Operations & Supply Chain',
    headline: 'Unlocking step-change efficiency',
    hook: 'Operations is a strategic differentiator. We build \'smart\' operations that are leaner, faster, and resilient.',
    serviceSuite: [
      {
        title: 'Manufacturing Excellence',
        description: 'Lean/Six Sigma, OEE Optimization, Predictive Maintenance',
        clientProblem: 'High production costs and frequent unplanned downtime',
        methodology: 'Lean diagnostics, OEE analysis, predictive maintenance models',
        deliverable: '15-30% improvement in operational efficiency'
      },
      {
        title: 'Supply Chain Resilience',
        description: 'Network Design (Hub & Spoke), Inventory Optimization, Risk Modeling',
        clientProblem: 'Stockouts and excess inventory driving working capital issues',
        methodology: 'Network optimization modeling, inventory policy redesign',
        deliverable: 'Optimized supply chain with 20-40% inventory reduction'
      },
      {
        title: 'Procurement',
        description: 'Spend Analysis, Strategic Sourcing, Supplier Development',
        clientProblem: 'Fragmented spend and limited supplier leverage',
        methodology: 'Spend analytics, category strategy, supplier negotiation',
        deliverable: '10-20% reduction in procurement costs'
      },
      {
        title: 'Capital Projects',
        description: 'Stage-Gate Reviews, Contractor Mgmt, Digital Twin (4D)',
        clientProblem: 'Capital projects over budget and behind schedule',
        methodology: 'Stage-gate governance, contractor performance management',
        deliverable: 'On-time, on-budget project delivery with digital monitoring'
      }
    ],
    relatedIndustries: ['mining', 'agro', 'automotive', 'construction', 'general-industry', 'fnb', 'translog'],
    relatedUnits: ['implementation', 'x']
  },
  {
    slug: 'digital',
    name: 'Digital & Technology',
    headline: 'Harnessing the power of data and technology',
    hook: 'Harnessing the power of data and technology to reinvent the core.',
    serviceSuite: [
      {
        title: 'Legacy Modernization',
        description: 'Hollow-the-Core, Microservices, Cloud Migration (AWS/Azure)',
        clientProblem: 'Aging systems constraining innovation and agility',
        methodology: 'Strangler pattern, API-first architecture, cloud-native design',
        deliverable: 'Modern, scalable technology platform'
      },
      {
        title: 'Data Architecture',
        description: 'Data Governance, Lakehouse Implementation, BI Dashboards',
        clientProblem: 'Siloed data preventing insights and decision-making',
        methodology: 'Data lakehouse design, governance frameworks, analytics layer',
        deliverable: 'Unified data platform with self-service analytics'
      },
      {
        title: 'Cybersecurity',
        description: 'Vulnerability Scanning, Zero Trust, War Games',
        clientProblem: 'Increasing cyber threats and regulatory requirements',
        methodology: 'Security assessment, zero-trust architecture, incident response',
        deliverable: 'Hardened security posture with continuous monitoring'
      },
      {
        title: 'GenAI & Automation',
        description: 'Process Mining, Custom LLMs, Human-in-the-Loop workflows',
        clientProblem: 'Manual processes consuming valuable resources',
        methodology: 'Process mining, AI/ML model development, automation design',
        deliverable: 'Intelligent automation with 40-60% efficiency gains'
      }
    ],
    relatedIndustries: ['finance', 'ict', 'mining', 'general-industry', 'translog'],
    relatedUnits: ['x']
  },
  {
    slug: 'people',
    name: 'People & Organizational Performance',
    headline: 'Empowering organizations to move faster',
    hook: 'Strategy fails without the right people. We build cultures that perform.',
    serviceSuite: [
      {
        title: 'Org Design',
        description: 'Spans & Layers, Agile Squads, RAPID Decision Rights',
        clientProblem: 'Slow decision-making and unclear accountability',
        methodology: 'Organization diagnostic, design principles, decision framework',
        deliverable: 'Streamlined organization with clear decision rights'
      },
      {
        title: 'Talent Management',
        description: 'Workforce Planning, EVP Design, Succession Planning',
        clientProblem: 'Critical skill gaps and high regrettable attrition',
        methodology: 'Workforce analytics, EVP development, succession frameworks',
        deliverable: 'Strategic talent plan with robust succession pipeline'
      },
      {
        title: 'Culture & Change',
        description: 'Culture Diagnostics, Intervention Design, Leadership Alignment',
        clientProblem: 'Cultural resistance blocking transformation',
        methodology: 'Culture assessment, change interventions, leadership coaching',
        deliverable: 'Aligned culture with sustainable change capability'
      },
      {
        title: 'Performance Mgmt',
        description: 'KPI Cascading, Incentive Design, Feedback Loops',
        clientProblem: 'Lack of performance accountability and alignment',
        methodology: 'KPI framework, incentive modeling, performance systems',
        deliverable: 'Performance management system driving accountability'
      }
    ],
    relatedIndustries: ['finance', 'ict', 'automotive', 'general-industry'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'finance',
    name: 'Corporate Finance, M&A & Restructuring',
    headline: 'Architecting consolidation (BUMN Focus)',
    hook: 'Architecting the consolidation of state and private capital. From \'1000 to 200\' entities.',
    serviceSuite: [
      {
        title: 'Strategic Consolidation (Holdingisasi)',
        description: 'Holding Design, Asset Transfers (Inbreng), Rationalization',
        clientProblem: 'Complex BUMN consolidation with unclear synergies',
        methodology: 'Holding structure design, legal entity rationalization',
        deliverable: 'Optimized holding structure with clear value creation'
      },
      {
        title: 'M&A & Carve-Outs',
        description: 'Commercial Due Diligence, Divestitures, Synergy Valuation',
        clientProblem: 'Unclear deal value and integration complexity',
        methodology: 'Commercial due diligence, synergy assessment, valuation',
        deliverable: 'Deal thesis with validated synergy cases'
      },
      {
        title: 'Post-Merger Integration (PMI)',
        description: 'Integration Management Office (IMO), Cultural Harmonization (AKHLAK), Value Capture',
        clientProblem: 'Mergers failing to deliver promised synergies',
        methodology: 'IMO setup, cultural integration, synergy tracking',
        deliverable: 'Integrated entity with captured value'
      },
      {
        title: 'Turnaround (PKPU)',
        description: 'Debt Restructuring, Liquidity Mgmt (13-week cash flow), Bankruptcy Avoidance',
        clientProblem: 'Financial distress threatening business continuity',
        methodology: 'Cash flow forecasting, creditor negotiation, operational turnaround',
        deliverable: 'Stabilized operations with sustainable capital structure'
      }
    ],
    relatedIndustries: ['mining', 'forestry', 'construction', 'finance'],
    relatedUnits: ['implementation', 'ventures']
  },
  {
    slug: 'marketing',
    name: 'Marketing & Sales',
    headline: 'Putting the customer at the center',
    hook: 'Putting the customer at the center of every decision.',
    serviceSuite: [
      {
        title: 'GTM Strategy',
        description: 'Segmentation, Value Prop, Channel Strategy',
        clientProblem: 'Unclear target customers and value proposition',
        methodology: 'Customer segmentation, value proposition design, channel optimization',
        deliverable: 'Focused go-to-market strategy with clear targeting'
      },
      {
        title: 'Pricing',
        description: 'Elasticity Modeling, Discount Mgmt, Dynamic Pricing',
        clientProblem: 'Leaving money on the table through poor pricing',
        methodology: 'Price elasticity analysis, discount waterfall, dynamic algorithms',
        deliverable: 'Optimized pricing delivering 3-8% margin improvement'
      },
      {
        title: 'Sales Force Effectiveness',
        description: 'Territory Planning, Incentive Redesign, Capability Building',
        clientProblem: 'Sales force not reaching full potential',
        methodology: 'Territory optimization, incentive design, sales coaching',
        deliverable: 'High-performing sales organization with clear metrics'
      },
      {
        title: 'CX',
        description: 'Journey Mapping, NPS Systems, Service Design',
        clientProblem: 'Poor customer experience driving churn',
        methodology: 'Journey mapping, NPS tracking, service blueprint design',
        deliverable: 'Enhanced customer experience with measurable NPS improvement'
      }
    ],
    relatedIndustries: ['automotive', 'fnb', 'finance', 'ict'],
    relatedUnits: ['x', 'ventures']
  },
  {
    slug: 'sustainability',
    name: 'Sustainability & ESG',
    headline: 'Turning sustainability into competitive advantage',
    hook: 'Turning sustainability from compliance cost into competitive license to operate.',
    serviceSuite: [
      {
        title: 'Decarbonization',
        description: 'Carbon Baselining (Scope 1-3), Abatement Curves (MACC), SBTi Targets',
        clientProblem: 'Regulatory pressure without clear decarbonization path',
        methodology: 'Carbon footprint assessment, MACC development, target setting',
        deliverable: 'Science-based decarbonization roadmap'
      },
      {
        title: 'Green Business Building',
        description: 'Green Product Launch, Carbon Credit Strategy, Circular Economy',
        clientProblem: 'Missing opportunities in green markets',
        methodology: 'Market assessment, business case development, pilot design',
        deliverable: 'Green business model with validated economics'
      },
      {
        title: 'ESG Reporting',
        description: 'Gap Analysis, Data Governance, Sustainability Reports (ISSB/GRI)',
        clientProblem: 'ESG reporting burden and stakeholder scrutiny',
        methodology: 'Framework assessment, data infrastructure, report preparation',
        deliverable: 'Comprehensive ESG disclosure aligned to standards'
      },
      {
        title: 'Social Impact',
        description: 'Social Risk Mapping, Shared Value, Land Rights',
        clientProblem: 'Community conflicts threatening license to operate',
        methodology: 'Stakeholder mapping, shared value design, conflict resolution',
        deliverable: 'Sustainable community engagement program'
      }
    ],
    relatedIndustries: ['mining', 'agro', 'forestry', 'fnb'],
    relatedUnits: ['implementation']
  }
]

// INDUSTRIES DATA
export const INDUSTRIES: Industry[] = [
  {
    slug: 'agro',
    name: 'Agro',
    cluster: 'Natural Resources',
    hook: 'Feeding the world sustainably',
    coreServices: ['Yield Maximization', 'Precision Farming', 'RSPO Compliance'],
    localContext: {
      title: 'Plasma Partnership & 20% Compliance',
      description: 'Managing Koperasi relationships and smallholder regulations'
    },
    relatedCapabilities: ['operations', 'sustainability', 'strategy'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'forestry',
    name: 'Forestry',
    cluster: 'Natural Resources',
    hook: 'Balancing commerce & conservation',
    coreServices: ['Wood Supply Chain', 'Carbon Credits', 'Mill Ops'],
    localContext: {
      title: 'SVLK & Social Forestry',
      description: 'Timber legality certification & resolving land tenure issues'
    },
    relatedCapabilities: ['operations', 'sustainability', 'finance'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'mining',
    name: 'Mining',
    cluster: 'Natural Resources',
    hook: 'Reshaping resources for transition',
    coreServices: ['Pit-to-Port', 'Predictive Maintenance', 'Decarbonization'],
    localContext: {
      title: 'RKAB Approval & Hilirisasi',
      description: 'Aligning mine plans with ESDM & Smelter mandates'
    },
    relatedCapabilities: ['operations', 'sustainability', 'digital'],
    relatedUnits: ['x', 'implementation']
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    cluster: 'Industrial',
    hook: 'Navigating the mobility transition',
    coreServices: ['EV Strategy', 'Lean (Kaizen)', 'Dealer Networks'],
    localContext: {
      title: 'TKDN Optimization',
      description: 'Maximizing Local Content scores for tax incentives'
    },
    relatedCapabilities: ['strategy', 'operations', 'marketing'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'construction',
    name: 'Construction',
    cluster: 'Industrial',
    hook: 'Building infrastructure of tomorrow',
    coreServices: ['PMO', 'Procurement', 'BIM/Digital Twin'],
    localContext: {
      title: 'OSS-RBA & Land Acquisition',
      description: 'Navigating licensing & Pengadaan Lahan laws'
    },
    relatedCapabilities: ['operations', 'digital', 'finance'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'general-industry',
    name: 'General Industry',
    cluster: 'Industrial',
    hook: 'The next generation of production',
    coreServices: ['Industry 4.0', 'TQM', 'Energy Efficiency'],
    localContext: {
      title: 'SNI Certification & Industrial Relations',
      description: 'Managing LKS Bipartit & Unions'
    },
    relatedCapabilities: ['operations', 'digital', 'people'],
    relatedUnits: ['x', 'implementation']
  },
  {
    slug: 'fnb',
    name: 'FnB',
    cluster: 'Industrial',
    hook: 'Innovating for the modern consumer',
    coreServices: ['Portfolio Strategy', 'Cold Chain', 'Route-to-Market'],
    localContext: {
      title: 'Halal Assurance (SJPH)',
      description: 'Full BPJPH compliance & audit preparation'
    },
    relatedCapabilities: ['operations', 'marketing', 'sustainability'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'finance',
    name: 'Finance',
    cluster: 'Services',
    hook: 'Modernizing the financial core',
    coreServices: ['Digital Banking', 'Basel III', 'RPA'],
    localContext: {
      title: 'OJK & BI Compliance',
      description: 'Navigating POJK, SLIK, and Antasena reporting'
    },
    relatedCapabilities: ['digital', 'operations', 'finance'],
    relatedUnits: ['x']
  },
  {
    slug: 'ict',
    name: 'ICT',
    cluster: 'Services',
    hook: 'Connecting the digital economy',
    coreServices: ['B2B Strategy', 'Capex Optimization', 'Data Centers'],
    localContext: {
      title: 'Data Sovereignty (PP 71/2019)',
      description: 'Public vs. Private scope data localization strategies'
    },
    relatedCapabilities: ['digital', 'strategy', 'operations'],
    relatedUnits: ['x']
  },
  {
    slug: 'translog',
    name: 'Translog',
    cluster: 'Services',
    hook: 'Moving the world faster',
    coreServices: ['Network Design', 'Warehouse Auto', 'Last-Mile'],
    localContext: {
      title: 'Bonded Logistics (PLB)',
      description: 'Optimizing Customs (Bea Cukai) & dwelling time'
    },
    relatedCapabilities: ['operations', 'digital', 'strategy'],
    relatedUnits: ['x', 'implementation']
  }
]

// UNITS DATA
export const UNITS: Unit[] = [
  {
    slug: 'x',
    name: 'Baswara X',
    role: 'The Tech Builders',
    hook: 'Engineering the digital core. Sovereign, enterprise-grade technology.',
    tagline: 'Don\'t just advise. Build.',
    coreOfferings: [
      {
        title: 'Enterprise GenAI',
        description: 'Bahasa Indonesia LLMs & RAG Engines'
      },
      {
        title: 'Industrial IoT',
        description: 'Edge/LoRaWAN for remote sites'
      },
      {
        title: 'Data Sovereignty',
        description: 'Unified Data Fabrics'
      }
    ],
    relatedIndustries: ['mining', 'general-industry', 'finance', 'ict', 'translog'],
    relatedCapabilities: ['digital']
  },
  {
    slug: 'implementation',
    name: 'Baswara Implementation',
    role: 'The Doers',
    hook: 'Bridging the gap between ambition and results. Shared accountability.',
    tagline: 'Don\'t just plan. Make it happen.',
    coreOfferings: [
      {
        title: 'Holistic Turnaround',
        description: 'Interim Mgmt/IMO'
      },
      {
        title: 'Institutional Capability Building',
        description: 'Field & Forum'
      },
      {
        title: 'Capital Project Assurance',
        description: 'PMO'
      }
    ],
    relatedIndustries: ['agro', 'forestry', 'mining', 'automotive', 'construction', 'general-industry', 'fnb', 'translog'],
    relatedCapabilities: ['operations', 'strategy', 'finance', 'people', 'sustainability']
  },
  {
    slug: 'ventures',
    name: 'Baswara Ventures',
    role: 'The Builders',
    hook: 'Creating the next generation of growth engines. Strategic Co-founding.',
    tagline: 'Create new growth engines.',
    coreOfferings: [
      {
        title: 'Corporate Venture Building',
        description: 'Concept to Cash'
      },
      {
        title: 'Digital Ecosystems',
        description: 'UMKM/SME Platforms'
      },
      {
        title: 'Strategic JVs',
        description: 'BUMN Partnerships'
      }
    ],
    relatedIndustries: ['finance', 'ict'],
    relatedCapabilities: ['strategy', 'marketing', 'finance']
  }
]

// INSIGHTS DATA
export const INSIGHTS: Insight[] = [
  {
    slug: 'future-nickel-downstreaming',
    title: 'The Future of Nickel Downstreaming in Indonesia',
    excerpt: 'Indonesia\'s hilirisasi policy has transformed the global nickel industry. We analyze the next phase of value chain development and investment opportunities.',
    date: 'November 2024',
    readTime: '12 min read',
    category: 'Mining & Metals',
    industries: ['mining'],
    capabilities: ['strategy', 'sustainability'],
    image: '/images/insights/nickel.jpg'
  },
  {
    slug: 'enterprise-ai-indonesia',
    title: 'State of Enterprise AI in Indonesia',
    excerpt: 'From pilot purgatory to production: How Indonesian enterprises can leverage generative AI for tangible business outcomes.',
    date: 'December 2024',
    readTime: '15 min read',
    category: 'Digital & Technology',
    industries: ['finance', 'ict'],
    capabilities: ['digital'],
    image: '/images/insights/ai.jpg'
  },
  {
    slug: 'palm-oil-sustainability',
    title: 'Plasma Partnership Models in Indonesian Palm Oil',
    excerpt: 'Navigating the 20% plasma compliance requirement while building sustainable smallholder partnerships that create shared value.',
    date: 'October 2024',
    readTime: '10 min read',
    category: 'Sustainability & Agro',
    industries: ['agro'],
    capabilities: ['sustainability', 'operations'],
    image: '/images/insights/palm.jpg'
  },
  {
    slug: 'bumn-consolidation',
    title: 'BUMN Holdingisasi: From 1000 to 200 Entities',
    excerpt: 'Strategic approaches to BUMN consolidation, from holding structure design to post-merger integration and value capture.',
    date: 'September 2024',
    readTime: '18 min read',
    category: 'M&A & Corporate Finance',
    industries: ['finance', 'mining', 'construction'],
    capabilities: ['finance', 'strategy'],
    image: '/images/insights/bumn.jpg'
  },
  {
    slug: 'ev-manufacturing-indonesia',
    title: 'Building Indonesia\'s EV Manufacturing Ecosystem',
    excerpt: 'TKDN optimization strategies and supplier development approaches for automotive OEMs entering Indonesia\'s EV market.',
    date: 'November 2024',
    readTime: '14 min read',
    category: 'Automotive & Manufacturing',
    industries: ['automotive'],
    capabilities: ['operations', 'strategy'],
    image: '/images/insights/ev.jpg'
  },
  {
    slug: 'digital-banking-ojk',
    title: 'Navigating OJK\'s Digital Banking Regulations',
    excerpt: 'Compliance roadmap for digital banks: From licensing to ongoing regulatory reporting and risk management.',
    date: 'October 2024',
    readTime: '11 min read',
    category: 'Financial Services',
    industries: ['finance'],
    capabilities: ['digital', 'operations'],
    image: '/images/insights/banking.jpg'
  },
  {
    slug: 'supply-chain-resilience',
    title: 'Building Supply Chain Resilience in ASEAN',
    excerpt: 'Network optimization and inventory strategies to navigate disruption while maintaining service levels and controlling costs.',
    date: 'September 2024',
    readTime: '13 min read',
    category: 'Operations & Supply Chain',
    industries: ['translog', 'fnb', 'automotive'],
    capabilities: ['operations'],
    image: '/images/insights/supply-chain.jpg'
  },
  {
    slug: 'carbon-credits-forestry',
    title: 'Monetizing Carbon Credits in Indonesian Forestry',
    excerpt: 'SVLK compliance and carbon credit generation: Building dual revenue streams while ensuring timber legality.',
    date: 'August 2024',
    readTime: '12 min read',
    category: 'Forestry & Sustainability',
    industries: ['forestry'],
    capabilities: ['sustainability', 'finance'],
    image: '/images/insights/forestry.jpg'
  }
]

// Helper function to get insights by context
export function getInsightsByIndustry(industrySlug: string, limit: number = 3): Insight[] {
  return INSIGHTS.filter(insight => insight.industries.includes(industrySlug)).slice(0, limit)
}

export function getInsightsByCapability(capabilitySlug: string, limit: number = 3): Insight[] {
  return INSIGHTS.filter(insight => insight.capabilities.includes(capabilitySlug)).slice(0, limit)
}

export function getInsightsByUnit(unitSlug: string, limit: number = 3): Insight[] {
  const unit = UNITS.find(u => u.slug === unitSlug)
  if (!unit) return []
  
  // Get insights related to unit's industries and capabilities
  const relatedInsights = INSIGHTS.filter(insight => 
    insight.industries.some(ind => unit.relatedIndustries?.includes(ind)) ||
    insight.capabilities.some(cap => unit.relatedCapabilities?.includes(cap))
  )
  
  return relatedInsights.slice(0, limit)
}
