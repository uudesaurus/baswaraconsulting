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

export interface Whitepaper {
  title: string
  description: string
  fileUrl: string
  fileSize: string
  publishedDate: string
  thumbnail?: string
  category?: string
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
  whitepapers?: Whitepaper[]
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
    headline: 'Defining the path to sustainable growth in volatile markets',
    hook: 'Strategic transformation is no longer a periodic event but a continuous capability. We partner with leadership teams to navigate disruption, architect resilient business models, and capture emerging value pools in the Indonesian and global landscape.',
    serviceSuite: [
      {
        title: 'Corporate Strategy',
        description: 'Portfolio Optimization, Advantage Definition, and Resource Allocation.',
        clientProblem: 'Conglomerates and multi-business entities often struggle with portfolio misalignment, where low-growth "dogs" consume resources meant for high-potential "stars". This leads to diluted market focus and sub-optimal capital returns.',
        methodology: 'We apply rigorous market dynamics analysis and proprietary benchmarking to define your "Right to Win". Our process identifies structural advantages and reallocates capital toward high-conviction growth engines.',
        deliverable: 'A comprehensive multi-year strategic roadmap with prioritized growth pillars, specific portfolio interventions (divestitures/acquisitions), and a clear advantage definition.'
      },
      {
        title: 'Business Unit Strategy',
        description: 'Competitive Positioning, Value Proposition Redesign, and Market War Gaming.',
        clientProblem: 'Individual business units often face commoditization pressure and declining market share as competitors innovate faster or undercut pricing, eroding brand equity and margins.',
        methodology: 'Utilizing value chain analysis and competitive war-gaming simulations, we stress-test current business models against disruptive scenarios. We then co-create differentiated value propositions that resonate with evolving customer segments.',
        deliverable: 'A revitalized business model with a sharp go-to-market strategy, clear pricing levers, and a roadmap for product/service innovation.'
      },
      {
        title: 'Transformation Office (TMO)',
        description: 'Governance Setup, Value Tracking (EBITDA), and Change Engines.',
        clientProblem: 'Large-scale transformations frequently fail not due to poor strategy, but due to execution "drift"—where initiatives lose momentum, accountability is diffuse, and expected EBITDA gains never materialize.',
        methodology: 'We establish a high-rigor Transformation Management Office (TMO) that acts as the "nerve center" for change. We implement weekly value-tracking cadences and rigorous milestone gating to ensure that every initiative translates into bottom-line impact.',
        deliverable: 'A permanent transformation governance structure, an integrated value-tracking dashboard, and an institutionalized change management capability.'
      },
      {
        title: 'Digital Strategy',
        description: 'Maturity Assessment, Build vs. Buy analysis, and Business-IT Roadmaps.',
        clientProblem: 'Technology investments are often made in siloes, resulting in a fragmented digital landscape that fails to drive core business outcomes or improve customer experience.',
        methodology: 'We perform a 360-degree digital maturity assessment to identify the highest-ROI automation and data opportunities. We guide leadership through "Build vs. Buy" trade-offs, ensuring that technology architecture serves the strategic intent.',
        deliverable: 'An integrated digital transformation roadmap that aligns technology infrastructure, data governance, and talent requirements with the long-term business strategy.'
      }
    ],
    relatedIndustries: ['agro', 'mining', 'automotive', 'finance', 'ict'],
    relatedUnits: ['implementation', 'ventures']
  },
  {
    slug: 'operations',
    name: 'Operations & Supply Chain',
    headline: 'Unlocking step-change efficiency through operational excellence',
    hook: 'Operations is the bridge between strategic intent and market reality. We build lean, responsive, and resilient supply chains that serve as a competitive differentiator in complex regulatory environments.',
    serviceSuite: [
      {
        title: 'Manufacturing Excellence',
        description: 'Lean/Six Sigma implementation, OEE Optimization, and Predictive Maintenance.',
        clientProblem: 'Industrial players often face high unit costs driven by unplanned downtime, quality variations, and inefficient labor utilization, preventing them from scaling effectively.',
        methodology: 'We deploy hands-on "shop floor" diagnostics, applying Lean and Six Sigma principles to identify "hidden" waste. By optimizing Overall Equipment Effectiveness (OEE) and designing predictive maintenance protocols, we stabilize production output.',
        deliverable: 'A measurable 15-30% improvement in operational throughput and a significant reduction in per-unit manufacturing costs.'
      },
      {
        title: 'Supply Chain Resilience',
        description: 'Network Design (Hub & Spoke), Inventory Optimization, and Risk Modeling.',
        clientProblem: 'Archipelagic logistics in Indonesia create unique vulnerabilities, where stockouts and excess inventory often coexist, tying up working capital and frustrating customers.',
        methodology: 'Using advanced network optimization modeling, we redesign hub-and-spoke systems to balance lead times with transportation costs. We implement multi-echelon inventory policies to ensure the right product is in the right place at the right time.',
        deliverable: 'A modernized supply chain architecture with 20-40% reduction in inventory carrying costs and improved service levels across the network.'
      },
      {
        title: 'Strategic Procurement',
        description: 'Spend Analysis, Category Strategy, and Supplier Development.',
        clientProblem: 'Fragmented procurement across business units often leads to missed volume discounts, inconsistent supplier performance, and high tail-spend leakage.',
        methodology: 'We perform deep-dive spend analytics to categorize every dollar spent. We then design and execute category-specific sourcing strategies, including supplier negotiations and joint-development programs to drive long-term value.',
        deliverable: 'A sustainable 10-20% reduction in total procurement spend and a hardened supplier base aligned with the company\'s quality and ESG standards.'
      },
      {
        title: 'Capital Project Assurance',
        description: 'Stage-Gate Reviews, Contractor Management, and Digital Twin (4D) monitoring.',
        clientProblem: 'Mega-projects in infrastructure and mining frequently exceed budget and schedule due to poor contractor oversight, scope creep, and inadequate risk management.',
        methodology: 'We implement a rigorous stage-gate governance framework that mandates data-driven evidence before projects can proceed. We use digital monitoring tools to provide a "single source of truth" for all stakeholders.',
        deliverable: 'On-time and on-budget delivery of critical capital assets, supported by a permanent project management capability transfer to the client team.'
      }
    ],
    relatedIndustries: ['mining', 'agro', 'automotive', 'construction', 'general-industry', 'fnb', 'translog'],
    relatedUnits: ['implementation', 'x']
  },
  {
    slug: 'digital',
    name: 'Digital & Technology',
    headline: 'Harnessing data and technology to reinvent the core',
    hook: 'Digital transformation is not about adopting new tools, but about fundamentally changing how value is created. We engineer sovereign, enterprise-grade technology cores that power the modern organization.',
    serviceSuite: [
      {
        title: 'Legacy Modernization',
        description: 'Hollow-the-Core architecture, Microservices transition, and Cloud Migration.',
        clientProblem: 'Monolithic, aging systems often become "technical debt" that prevents organizations from launching new products quickly or integrating with modern digital ecosystems.',
        methodology: 'We apply a "Hollow-the-Core" strategy, gradually moving critical functionalities to microservices while maintaining operational continuity. We guide the selection and migration to secure cloud environments (AWS/Azure/Local).',
        deliverable: 'A modern, decoupled technology architecture that allows for rapid scaling and high-velocity feature deployment.'
      },
      {
        title: 'Data Architecture & Governance',
        description: 'Lakehouse Implementation, Data Fabrics, and Self-Service BI.',
        clientProblem: 'Siloed data prevents leadership from having a unified view of the business, leading to decisions based on incomplete or outdated information.',
        methodology: 'We design and implement unified data platforms (Lakehouses) that ingest data from across the enterprise. We establish the governance frameworks needed to ensure data quality, security, and accessibility.',
        deliverable: 'A single, trusted source of truth for the entire organization, supported by real-time executive and operational dashboards.'
      },
      {
        title: 'Cybersecurity & Resilience',
        description: 'Zero-Trust Architecture, Vulnerability Assessment, and Crisis War Games.',
        clientProblem: 'Increasingly sophisticated cyber threats and new data privacy regulations (PDP) require a proactive, hardened security posture that goes beyond simple firewalls.',
        methodology: 'We implement "Zero-Trust" principles across the technology stack, ensuring that every access point is verified. We conduct regular "Red Team" simulations and war games to test organizational response to breaches.',
        deliverable: 'A hardened, PDP-compliant security environment with a continuous monitoring and incident response capability.'
      },
      {
        title: 'GenAI & Intelligent Automation',
        description: 'Custom LLMs, Process Mining, and Human-in-the-Loop workflows.',
        clientProblem: 'Manual, repetitive processes continue to consume high-value human capital, while generic AI tools often fail to address specific enterprise-grade requirements.',
        methodology: 'We use process mining to identify the most impactful automation targets. We then develop custom AI solutions—including RAG-based LLMs—that are grounded in the client\'s proprietary data and operational context.',
        deliverable: 'Intelligent automation systems that deliver 40-60% efficiency gains in targeted business processes while upskilling the workforce.'
      }
    ],
    relatedIndustries: ['finance', 'ict', 'mining', 'general-industry', 'translog'],
    relatedUnits: ['x']
  },
  {
    slug: 'people',
    name: 'People & Organizational Performance',
    headline: 'Empowering organizations to move faster through human-centric design',
    hook: 'Strategy is a document; culture is a behavior. We design organizations and performance systems that align human energy with strategic objectives to drive sustained high performance.',
    serviceSuite: [
      {
        title: 'Organizational Design',
        description: 'Spans & Layers optimization, Agile Squads, and RAPID Decision Rights.',
        clientProblem: 'As organizations grow, they often become overly hierarchical, leading to slow decision-making, blurred accountability, and high administrative overhead.',
        methodology: 'We perform an organizational diagnostic to identify structural bottlenecks. We redesign the operating model—balancing spans and layers—and implement "Agile Squads" for cross-functional delivery.',
        deliverable: 'A streamlined organization structure with clear decision rights (RAPID) and a lean administrative footprint.'
      },
      {
        title: 'Strategic Talent Management',
        description: 'Workforce Planning, EVP Design, and Succession Frameworks.',
        clientProblem: 'Critical skill gaps and the loss of high-potential talent can cripple a company\'s ability to execute long-term strategies and innovate in competitive markets.',
        methodology: 'We use predictive analytics to forecast future talent needs and design an Employee Value Proposition (EVP) that attracts and retains high-performers. We build robust, evidence-based succession pipelines for leadership roles.',
        deliverable: 'A data-driven talent strategy and a succession management system that ensures leadership continuity and future-ready capabilities.'
      },
      {
        title: 'Culture & Change Leadership',
        description: 'Culture Diagnostics, Intervention Design, and Leadership Alignment.',
        clientProblem: 'Structural changes often meet with cultural resistance, where "the way we\'ve always done it" prevents the adoption of new technologies or business models.',
        methodology: 'We use proprietary diagnostic tools to map the "informal" organization. We design targeted interventions and leadership coaching programs to shift behaviors and build a culture of high performance and agility.',
        deliverable: 'A culture transformation roadmap with measurable behavioral indicators and a network of internal change champions.'
      },
      {
        title: 'Performance Management Systems',
        description: 'KPI Cascading, Incentive Modeling, and Continuous Feedback Loops.',
        clientProblem: 'Many organizations struggle with "KPI drift," where individual performance metrics are disconnected from the overall strategic goals, leading to misaligned efforts.',
        methodology: 'We build integrated performance frameworks that cascade high-level strategic objectives down to individual roles. We design incentive models that reward both "the what" (results) and "the how" (behaviors).',
        deliverable: 'A transparent, tech-enabled performance management system that drives accountability and ensures every employee understands their impact on the bottom line.'
      }
    ],
    relatedIndustries: ['finance', 'ict', 'automotive', 'general-industry'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'finance',
    name: 'Corporate Finance & Restructuring',
    headline: 'Architecting consolidation and financial stability in complex markets',
    hook: 'We provide the financial and strategic rigor needed to navigate large-scale consolidation, state-owned enterprise (BUMN) restructuring, and complex corporate turnarounds.',
    serviceSuite: [
      {
        title: 'Strategic Consolidation (Holdingisasi)',
        description: 'Holding Design, Asset Transfers (Inbreng), and Legal Entity Rationalization.',
        clientProblem: 'Large groups often operate with redundant legal entities and fragmented capital structures, preventing them from achieving scale and capturing synergies across business units.',
        methodology: 'We design optimized holding structures that consolidate capital and management control. We manage the complex process of asset transfers and entity rationalization to ensure a lean, efficient corporate footprint.',
        deliverable: 'A revitalized holding structure with clear synergy cases, optimized tax positioning, and a simplified legal entity map.'
      },
      {
        title: 'M&A & Strategic Carve-Outs',
        description: 'Commercial Due Diligence, Divestiture Strategy, and Synergy Valuation.',
        clientProblem: 'Acquisitions often fail to deliver value because the "deal thesis" was never grounded in operational reality or the integration complexity was significantly underestimated.',
        methodology: 'We perform commercial due diligence that goes beyond the numbers, testing market assumptions and identifying "hidden" operational risks. We value synergies with extreme rigor to ensure fair pricing.',
        deliverable: 'A validated deal thesis, a comprehensive commercial due diligence report, and a detailed divestiture strategy for non-core assets.'
      },
      {
        title: 'Post-Merger Integration (PMI)',
        description: 'IMO Setup, Cultural Harmonization (AKHLAK), and Rapid Value Capture.',
        clientProblem: 'The period immediately following a merger is the highest-risk phase, where cultural clashes and management distractions can lead to key talent loss and synergy leakage.',
        methodology: 'We establish an Integration Management Office (IMO) that manages the first 100 days with extreme precision. We focus on cultural harmonization—including AKHLAK alignment for BUMNs—to ensure a unified leadership team.',
        deliverable: 'A fully integrated entity with captured synergies, a unified operating model, and an institutionalized post-merger culture.'
      },
      {
        title: 'Turnaround & Debt Restructuring (PKPU)',
        description: 'Liquidity Management, Cash Flow Forecasting, and Creditor Negotiation.',
        clientProblem: 'Financial distress—often exacerbated by high debt and operational inefficiencies—threatens business continuity and requires immediate, high-rigor intervention.',
        methodology: 'We implement a 13-week "rolling" cash flow forecast to stabilize liquidity. We lead complex negotiations with creditors and stakeholders to restructure debt under PKPU or informal frameworks while driving operational turnaround.',
        deliverable: 'A stabilized capital structure, a sustainable operational turnaround plan, and restored confidence from lenders and shareholders.'
      }
    ],
    relatedIndustries: ['mining', 'forestry', 'construction', 'finance'],
    relatedUnits: ['implementation', 'ventures']
  },
  {
    slug: 'marketing',
    name: 'Marketing & Sales',
    headline: 'Putting the customer at the center of the growth engine',
    hook: 'Growth is driven by deep customer insight and precision execution. We help organizations build marketing and sales capabilities that drive market share and improve customer lifetime value.',
    serviceSuite: [
      {
        title: 'Go-to-Market (GTM) Strategy',
        description: 'Segmentation, Value Proposition design, and Channel Optimization.',
        clientProblem: 'Many companies struggle to translate generic product features into compelling value propositions that resonate with specific, high-potential customer segments.',
        methodology: 'We use data-driven segmentation to identify "best-fit" customers. We then redesign the go-to-market strategy, ensuring that the right channels—whether digital, traditional, or hybrid—are optimized for reach and conversion.',
        deliverable: 'A precise GTM strategy with clear customer targeting, optimized channel mix, and a launch roadmap for new products or markets.'
      },
      {
        title: 'Pricing & Margin Excellence',
        description: 'Elasticity Modeling, Discount Waterfall Management, and Dynamic Pricing.',
        clientProblem: 'Companies often leave significant "money on the table" due to poor pricing discipline, lack of understanding of customer price elasticity, and uncontrolled discount leakage.',
        methodology: 'We apply elasticity modeling to understand the impact of price changes on volume. We perform discount waterfall analysis to identify where margins are leaking and implement dynamic pricing algorithms.',
        deliverable: 'A measurable 3-8% improvement in total margin through optimized pricing structures and hardened discount controls.'
      },
      {
        title: 'Sales Force Effectiveness',
        description: 'Territory Planning, Incentive Redesign, and Sales Capability Building.',
        clientProblem: 'Sales teams often suffer from unequal territory distribution, misaligned incentive structures, and a lack of modern CRM and lead-management tools.',
        methodology: 'We optimize sales territories based on potential and workload. We redesign incentive models to drive the right behaviors and implement sales-training programs that focus on consultative selling and value creation.',
        deliverable: 'A high-performing sales organization with clear KPIs, optimized territories, and an incentive structure that drives high-value growth.'
      },
      {
        title: 'Customer Experience (CX) Design',
        description: 'Journey Mapping, NPS Management, and Service Blueprinting.',
        clientProblem: 'Fragmented customer experiences across touchpoints lead to higher churn, increased service costs, and a decline in brand advocacy.',
        methodology: 'We map the end-to-end customer journey to identify "moments of truth" and friction points. We design and implement Net Promoter Score (NPS) systems to continuously monitor and improve the experience.',
        deliverable: 'A comprehensive CX blueprint with prioritized service improvements and a measurable increase in customer loyalty and NPS.'
      }
    ],
    relatedIndustries: ['automotive', 'fnb', 'finance', 'ict'],
    relatedUnits: ['x', 'ventures']
  },
  {
    slug: 'sustainability',
    name: 'Sustainability & ESG',
    headline: 'Turning sustainability into a competitive license to operate',
    hook: 'Sustainability is no longer a compliance cost but a foundational requirement for capital access and market participation. We help organizations integrate ESG into their core strategy to drive long-term value.',
    serviceSuite: [
      {
        title: 'Decarbonization Roadmap',
        description: 'Carbon Baselining (Scope 1-3), Abatement Curves (MACC), and SBTi alignment.',
        clientProblem: 'Companies face increasing pressure from regulators and investors to provide a credible path to Net Zero, yet often lack the data and technical expertise to develop one.',
        methodology: 'We perform a rigorous carbon footprint assessment across the entire value chain. We develop Marginal Abatement Cost Curves (MACC) to identify the most cost-effective decarbonization initiatives.',
        deliverable: 'A science-based decarbonization roadmap (SBTi aligned) with clear abatement targets and an implementation plan for green technology adoption.'
      },
      {
        title: 'Green Business Building',
        description: 'Circular Economy design, Green Product Launch, and Carbon Credit Strategy.',
        clientProblem: 'Traditional business models often miss the opportunities presented by the emerging "Green Economy," including new customer segments and carbon-monetization pools.',
        methodology: 'We help clients identify and build new green business units, from circular economy models to renewable energy ventures. We guide the strategy for carbon credit generation and trading.',
        deliverable: 'A validated green business model with a clear commercial case, pilot design, and a roadmap for scaling sustainable products and services.'
      },
      {
        title: 'ESG Reporting & Disclosure',
        description: 'Gap Analysis, Data Infrastructure, and ISSB/GRI compliant reporting.',
        clientProblem: 'The fragmentation of ESG reporting standards and the increasing risk of "greenwashing" claims require a high level of transparency and data rigor in external disclosures.',
        methodology: 'We perform a gap analysis against international standards (ISSB/GRI/TCFD). We design the internal data infrastructure needed to collect, verify, and report ESG metrics with the same rigor as financial data.',
        deliverable: 'A comprehensive, audit-ready sustainability report and an institutionalized ESG data management capability.'
      },
      {
        title: 'Social Impact & Stakeholder Engagement',
        description: 'Social Risk Mapping, Shared Value Design, and Land Rights resolution.',
        clientProblem: 'Industrial and natural resource projects are frequently delayed or halted due to community conflicts and a failure to secure a "Social License to Operate."',
        methodology: 'We perform social risk mapping to identify potential friction points early. We design "Shared Value" programs that align community development with business objectives, ensuring long-term social stability.',
        deliverable: 'A sustainable community engagement framework, social impact assessment reports, and a de-risked operational environment.'
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
    name: 'Agriculture & Agribusiness',
    cluster: 'Natural Resources',
    hook: 'Navigating the structural tension between national food security, smallholder livelihoods, and international ESG mandates. We help agribusinesses transform from traditional plantation models into integrated, data-driven value chains capable of sustaining long-term commercial growth.',
    coreServices: ['Yield Optimization', 'Supply Chain Excellence', 'Sustainability & Certification'],
    localContext: {
      title: 'Plasma Partnership & Permentan Compliance',
      description: 'The mandatory "Plasma" requirement—the allocation of 20% of managed land to community smallholders—remains one of the most complex operational and regulatory challenges in Indonesian agribusiness. While often viewed purely as a compliance burden, we approach it as a strategic supply lever. Inconsistent management of Koperasi relationships and lack of transparency in the "Sistem Kemitraan" frequently lead to localized social friction, which can disrupt harvesting cycles and mill throughput for weeks at a time. We help clients design sophisticated partnership models that go beyond legal minimums, integrating community smallholders into the company\'s technical support and digital monitoring systems. By improving smallholder yields and ensuring fair, evidence-based pricing mechanisms, we turn a regulatory obligation into a reliable, high-yield supply buffer, securing the plantation\'s "License to Operate" while de-risking the long-term value chain.'
    },
    relatedCapabilities: ['operations', 'sustainability', 'strategy'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'forestry',
    name: 'Forestry & Paper',
    cluster: 'Natural Resources',
    hook: 'Unlocking the commercial value of conservation through landscape-level management. In an era of mandatory SVLK verification and emerging carbon markets, forestry operations must evolve from pure resource extraction to integrated landscape custodianship.',
    coreServices: ['Sustainable Forestry', 'Carbon Strategy', 'Mill Operations'],
    localContext: {
      title: 'SVLK Certification & Social Forestry Dynamics',
      description: 'Indonesia\'s SVLK (Sistem Verifikasi Legalitas Kelestarian) has evolved from a simple export requirement into a foundational benchmark for global market access and investor confidence. However, achieving and maintaining this certification requires navigating a landscape increasingly defined by "Perhutanan Sosial" (Social Forestry) programs and complex land-tenure overlaps. Forestry giants are no longer operating in isolation; they are part of a shared ecosystem where community-led management models and industrial concessions must coexist. We assist clients in navigating these nuances, facilitating land-tenure resolution and community engagement strategies that align with the Ministry of Environment and Forestry\'s (KLHK) evolving priorities. By integrating social forestry considerations into broader commercial planning, we ensure that conservation efforts and industrial output are not in conflict, but rather move in lockstep to secure long-term operational stability and market eligibility.'
    },
    relatedCapabilities: ['operations', 'sustainability', 'finance'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'mining',
    name: 'Mining & Metals',
    cluster: 'Natural Resources',
    hook: 'Architecting the critical shift from "Extraction Only" to "Value-Added Downstreaming." We partner with mining majors to navigate the dual pressures of mandatory Hilirisasi policy and the intensifying global demand for decarbonized supply chains.',
    coreServices: ['Operational Excellence', 'Downstreaming Strategy', 'Decarbonization'],
    localContext: {
      title: 'RKAB Approval & The Downstreaming (Hilirisasi) Mandate',
      description: 'The annual RKAB (Work Plan and Budget) process has become significantly more rigorous, now serving as a mechanism for the government to enforce ESG commitments and downstreaming milestones. Simultaneously, the Indonesian government\'s mandatory Hilirisasi policy is fundamentally reshaping the sector—forcing miners to move beyond raw ore exports into capital-intensive smelting and refining operations. This transition requires a fundamental rethink of the corporate business model, capital allocation strategies, and energy procurement. We provide the strategic bridge between the pit and the smelter, ensuring that downstream investments are not just compliant, but commercially viable and attractive to international financiers. Our support focuses on optimizing operational efficiency to fund the transition, while maintaining the regulatory agility and documentation rigor required for seamless annual RKAB approvals in a shifting political landscape.'
    },
    relatedCapabilities: ['operations', 'sustainability', 'digital'],
    relatedUnits: ['x', 'implementation']
  },
  {
    slug: 'automotive',
    name: 'Automotive & Mobility',
    cluster: 'Industrial',
    hook: 'Positioning Indonesia as the regional hub for the next generation of mobility. We help automotive OEMs and Tier-1 suppliers navigate the structural transition from internal combustion engines to electrified, TKDN-compliant ecosystems.',
    coreServices: ['EV Strategy', 'Manufacturing Excellence', 'Go-to-Market Transformation'],
    localContext: {
      title: 'TKDN Optimization & The EV Ecosystem Incentives',
      description: 'Local Content Requirements (TKDN) are the definitive gatekeepers to Indonesia\'s lucrative automotive incentives and massive government procurement markets. For the emerging Electric Vehicle (EV) sector, this challenge is compounded by the need to build deep, domestic supplier networks for specialized components and battery materials. We help automotive players optimize their TKDN scores through genuine value-add strategies—identifying and developing local suppliers that meet global quality standards. This isn\'t just about hitting a percentage; it\'s about building a resilient, locally-anchored production base that can weather global supply chain shocks while capturing maximum policy benefits. From navigating the complexities of "Sertifikasi TKDN" to structuring localized investment plans that qualify for tax holidays and other fiscal incentives, we ensure our clients are positioned at the core of Indonesia\'s mobility future.'
    },
    relatedCapabilities: ['strategy', 'operations', 'marketing'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'construction',
    name: 'Engineering & Construction',
    cluster: 'Industrial',
    hook: 'Accelerating the delivery of critical infrastructure through digital rigor and regulatory foresight. We help construction firms manage the extreme financial and operational complexities of mega-projects in a rapidly developing economy.',
    coreServices: ['Project Management', 'Procurement Excellence', 'Digital Construction'],
    localContext: {
      title: 'OSS-RBA Licensing & The Land Acquisition Bottleneck',
      description: 'The transition to the Risk-Based Online Single Submission (OSS-RBA) system has aimed to streamline project initiation, yet it has also intensified the scrutiny on technical compliance and environmental permits (AMDAL). Furthermore, land acquisition (Pengadaan Lahan) remains the single largest risk to project Internal Rate of Return (IRR) in Indonesia, often delayed by complex legal overlaps and community negotiations under UU No. 2/2012. We guide construction majors through these critical paths, utilizing digital project controls (4D/5D BIM) to provide the transparency needed for both government and private financiers. By combining deep local regulatory knowledge with data-driven project management, we help clients identify "shovel-ready" bottlenecks early, ensuring that massive capital projects stay on schedule and on budget while maintaining full compliance with the latest PBPG and licensing standards.'
    },
    relatedCapabilities: ['operations', 'digital', 'finance'],
    relatedUnits: ['implementation'],
    whitepapers: [
      {
        title: 'Construction Industry Research: Indonesia Market Overview',
        description: 'Comprehensive analysis of Indonesia\'s construction industry, covering infrastructure development, regulatory landscape (OSS-RBA), land acquisition strategies, and project management best practices.',
        fileUrl: '/research/construction/Construction Industry Research_Baswara Consulting.pdf',
        fileSize: '4.1 MB',
        publishedDate: 'January 2026',
        category: 'Industry Research'
      }
    ]
  },
  {
    slug: 'general-industry',
    name: 'Advanced Manufacturing',
    cluster: 'Industrial',
    hook: 'Reinventing the factory floor for the "Making Indonesia 4.0" era. We partner with manufacturers to move beyond simple labor arbitrage toward high-value, digitally-integrated, and energy-efficient production systems.',
    coreServices: ['Industry 4.0', 'Operational Excellence', 'Supply Chain Resilience'],
    localContext: {
      title: 'SNI Certification & The Evolving Industrial Relations Landscape',
      description: 'Achieving and maintaining SNI (Standar Nasional Indonesia) certification is now a baseline for market access, but the real challenge for manufacturers lies in maintaining operational continuity within an evolving labor landscape. Under the UU Cipta Kerja (Job Creation Law) framework, the mechanisms for industrial relations—including LKS Bipartit and collective bargaining—have undergone significant shifts. We help manufacturers balance the rapid adoption of Industry 4.0 technology with the realities of the Indonesian labor market. Our expertise focuses on building high-performance workforces that can operate modern, automated systems without compromising social harmony or industrial stability. We assist in designing workforce transition plans and productivity-linked incentive models that are compliant with the latest labor regulations, ensuring that automation drives genuine EBITDA improvement rather than operational friction.'
    },
    relatedCapabilities: ['operations', 'digital', 'people'],
    relatedUnits: ['x', 'implementation']
  },
  {
    slug: 'fnb',
    name: 'Consumer Goods & Retail',
    cluster: 'Industrial',
    hook: 'Winning the trust—and the share of wallet—of 280 million consumers. We help FMCG brands and retailers navigate the rapid shift from traditional trade to digital-first, Halal-compliant distribution networks.',
    coreServices: ['Portfolio Strategy', 'Route-to-Market', 'Supply Chain Excellence'],
    localContext: {
      title: 'Halal Certification (BPJPH) & End-to-End SJPH Compliance',
      description: 'The mandatory Halal certification requirement through the BPJPH is no longer just a religious preference; it is a foundational market access mandate that affects every stage of the value chain. Implementing a robust Halal Assurance System (SJPH) requires granular oversight—from the raw material origins and supplier audits to production hygiene and separate logistics. We help our clients treat Halal as a core quality and risk management standard rather than just an administrative hurdle. By integrating Halal compliance into the core ERP and supply chain monitoring systems, we ensure that our clients can confidently claim market leadership in the world\'s largest Muslim-majority economy. This approach not only secures market share but also builds a level of consumer trust that is increasingly critical as Indonesia\'s middle class becomes more discerning about product provenance and transparency.'
    },
    relatedCapabilities: ['operations', 'marketing', 'sustainability'],
    relatedUnits: ['implementation']
  },
  {
    slug: 'finance',
    name: 'Financial Services',
    cluster: 'Services',
    hook: 'Navigating the digital frontier within a world-class regulatory environment. We help financial institutions modernize their core technology and data architecture while maintaining the absolute highest standards of OJK compliance.',
    coreServices: ['Digital Banking Transformation', 'Risk & Compliance', 'Process Automation'],
    localContext: {
      title: 'OJK & BI Oversight: Navigating POJK & Antasena Mandates',
      description: 'Indonesia\'s OJK (Otoritas Jasa Jasa Keuangan) and Bank Indonesia maintain some of the most rigorous and proactive oversight frameworks in Southeast Asia. From mandatory SLIK (Sistem Layanan Informasi Keuangan) reporting and Antasena credit risk data integration to the implementation of Basel III capital adequacy standards, the compliance burden is immense and technically demanding. We assist financial institutions in building "Compliance by Design"—integrating regulatory reporting requirements directly into their core data lakehouses and automated workflows. This ensures that as banks and insurers pursue aggressive digital transformation and product innovation, their regulatory posture remains unassailable. We help leadership teams move beyond reactive compliance, using regulatory data as a strategic tool to improve risk modeling, capital allocation, and operational efficiency, ensuring that innovation and regulation move in parallel.'
    },
    relatedCapabilities: ['digital', 'operations', 'finance'],
    relatedUnits: ['x']
  },
  {
    slug: 'ict',
    name: 'Information & Communications Technology',
    cluster: 'Services',
    hook: 'Building the structural backbone of a $150B digital economy. We help ICT players navigate data sovereignty laws, infrastructure gaps, and capital deployment strategies to capture the next wave of hyper-growth.',
    coreServices: ['B2B Strategy & Enterprise Solutions', 'Network & Capex Optimization', 'Data Center Development'],
    localContext: {
      title: 'Data Sovereignty & The PP 71/2019 Regulatory Landscape',
      description: 'Government Regulation No. 71/2019 (PP 71) has introduced a transformative mandate for the ICT sector, requiring the localization of data for "Public" and "Strategic" private sector systems. This "Digital Nationalism" has triggered a massive surge in domestic data center demand, while simultaneously creating complex challenges for cross-border data flows and cloud service architectures. We guide ICT providers and large enterprises in developing data residency strategies that are fully compliant with PP 71 and the latest PDP (Personal Data Protection) laws. Our support focuses on optimizing data center investments and structuring hybrid-cloud solutions that balance high-performance global standards with the strict requirements of Indonesian law. We help clients navigate this complex landscape, ensuring they can offer sovereign, enterprise-grade technology that is both locally compliant and globally competitive.'
    },
    relatedCapabilities: ['digital', 'strategy', 'operations'],
    relatedUnits: ['x'],
    whitepapers: [
      {
        title: 'ICT Industry Research: Digital Infrastructure & Data Sovereignty',
        description: 'In-depth analysis of Indonesia\'s ICT sector, covering B2B strategies, data center development, PP 71/2019 compliance, and digital infrastructure investment opportunities in Indonesia\'s growing digital economy.',
        fileUrl: '/research/ict/ICT Industry Research_Baswara Consulting.pdf',
        fileSize: '8.0 MB',
        publishedDate: 'January 2026',
        category: 'Industry Research'
      }
    ]
  },
  {
    slug: 'translog',
    name: 'Transportation & Logistics',
    cluster: 'Services',
    hook: 'Solving the "High-Cost Logistics" puzzle in an archipelagic nation. We help operators bridge the gap between inefficient traditional networks and modern, tech-enabled, resilient logistics systems.',
    coreServices: ['Network Optimization', 'Warehouse Automation', 'Last-Mile Excellence'],
    localContext: {
      title: 'Bonded Logistics & Customs Optimization (PLB Models)',
      description: 'Indonesia\'s logistics costs—estimated at approximately 24% of GDP—are largely driven by archipelagic geography and inefficiencies in customs clearance and port "dwelling times." The Pusat Logistik Berikat (PLB) or Bonded Logistics Center model offers a powerful strategic tool for duty deferral and supply chain acceleration, but its implementation requires extreme rigor in Bea Cukai (Customs) compliance and documentation. We help logistics operators and manufacturers leverage the PLB status to build "Inland Ports," reducing the need for port-side storage and improving overall working capital. Our expertise focuses on optimizing the end-to-end customs workflow, from digital manifest integration to automated warehouse management, ensuring that increased velocity does not come at the cost of regulatory risk. We bridge the gap between traditional freight forwarding and modern, regulatory-optimized logistics services.'
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
// Add real insights/articles here when available
export const INSIGHTS: Insight[] = []

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
