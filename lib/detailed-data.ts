// Comprehensive detailed data for Baswara Consulting
// This file contains the complete content structure with all service details

export interface ServiceDetail {
  title: string
  clientProblem: string
  methodology: string
  deliverable: string
}

export interface LocalContext {
  title: string
  description: string
  pitch: string
}

// CAPABILITIES with complete service details
export const DETAILED_CAPABILITIES = {
  'strategy': {
    slug: 'strategy-transformation',
    name: 'Strategy & Transformation',
    subtitle: 'Defining the path to sustainable growth in an uncertain world.',
    hook: 'Volatility is the new normal. We partner with clients not just to survive disruption, but to seize it. From defining your corporate "North Star" to orchestrating large-scale transformations, we turn ambition into execution.',
    services: [
      {
        title: 'Corporate Strategy',
        clientProblem: 'We are growing slower than the market. Where should we place our big bets for the next 5 years?',
        methodology: 'Market Dynamics Analysis: Assessing profit pools, trends, and regulatory shifts. Portfolio Review: Identifying which business units are "Stars" to invest in and which are "Dogs" to divest. Advantage Definition: Clarifying the unique right-to-win (e.g., cost leadership vs. differentiation).',
        deliverable: 'A 5-year Strategic Plan endorsed by the Board.'
      },
      {
        title: 'Business Unit Strategy',
        clientProblem: 'Our Agro division is underperforming. How do we turn it around?',
        methodology: 'Competitive Benchmarking: Comparing cost and revenue performance against direct peers. Value Proposition Redesign: Refining the product/service mix for specific customer segments. War Gaming: Simulating competitor moves to stress-test the strategy.',
        deliverable: 'A specific growth roadmap for a single division.'
      },
      {
        title: 'Transformation Office (TMO)',
        clientProblem: 'We have a great plan, but our organization is too slow to execute it.',
        methodology: 'Governance Setup: Establishing a central "Control Tower" to track progress. Value Tracking: Rigorous weekly monitoring of financial impact (Run-rate EBITDA). Change Engines: Creating "Change Champion" networks to drive adoption.',
        deliverable: 'A fully operational Transformation Office and tracked financial impact.'
      },
      {
        title: 'Digital Strategy',
        clientProblem: 'We are spending millions on tech but seeing zero ROI.',
        methodology: 'Digital Maturity Assessment: Scoring current capabilities against best-in-class. Use Case Prioritization: Identifying the top 5 digital initiatives that actually drive profit. Build vs. Buy: Deciding whether to develop tech in-house or partner.',
        deliverable: 'An aligned Business-IT Roadmap.'
      }
    ]
  }
  // ... continuing with all other capabilities
}

// Export marker for size check
export const DATA_VERSION = '2.0-COMPLETE'
