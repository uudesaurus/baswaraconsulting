import { Industry, Capability, SpecializedUnit } from '@/types/contentful-types'

export const CAPABILITIES: Capability[] = [
  {
    slug: 'operations',
    title: 'Operations & Supply Chain',
    heroHeadline: 'Unlocking step-change efficiency and resilience.',
    serviceSuite: [
      {
        title: 'Pit-to-Port Optimization',
        clientProblem: 'Bottlenecks moving between pit, crusher, and port.',
        methodology: 'Integrated system modeling and dispatch logic.',
        deliverable: 'Increased export tonnage without new capex.'
      },
      {
        title: 'Supply Chain Resilience',
        clientProblem: 'Frequent stockouts and long lead times.',
        methodology: 'Network redesign and inventory optimization.',
        deliverable: 'Reduced stockouts and lower working capital.'
      }
    ]
  },
  {
    slug: 'sustainability',
    title: 'Sustainability & ESG',
    heroHeadline: 'Turning sustainability into a competitive license to operate.',
    serviceSuite: [
      {
        title: 'Decarbonization Roadmaps',
        clientProblem: 'Lack of credible net-zero planning.',
        methodology: 'Abatement curves and scenario modeling.',
        deliverable: 'Deliverable-grade Net Zero plan.'
      }
    ]
  },
  {
    slug: 'digital',
    title: 'Digital & Technology',
    heroHeadline: 'Reinventing the core with data and tech.',
    serviceSuite: [
      {
        title: 'Legacy Modernization',
        clientProblem: 'Aging core systems blocking agility.',
        methodology: 'Strangulation patterns and cloud migration.',
        deliverable: 'Modern architecture and migration roadmap.'
      }
    ]
  }
]

export const INDUSTRIES: Industry[] = [
  {
    slug: 'mining',
    title: 'Mining & Metals',
    heroHeadline: 'Reshaping resources for the energy transition.',
    heroDescription: 'Mining faces unprecedented scrutiny. We help miners unlock productivity while meeting new ESG expectations.',
    localContext: {
      title: 'RKAB Approval & Hilirisasi Strategy',
      description: 'Securing license to operate by aligning mine plans with ESDM requirements and embedding downstream value capture (hilirisasi).'
    },
    relatedCapabilities: ['operations', 'sustainability', 'digital'],
    relatedUnits: ['baswara-x', 'implementation']
  }
]

export const UNITS: SpecializedUnit[] = [
  {
    slug: 'baswara-x',
    brandName: 'Baswara X',
    valueProp: 'Engineering the digital core of the future enterprise.',
    techAssets: ['Sovereign Enterprise LLMs', 'Industrial IoT & LoRaWAN']
  },
  {
    slug: 'implementation',
    brandName: 'Baswara Implementation',
    valueProp: 'Driving results on the ground via interim leadership and capability building.',
    techAssets: ['Site Turnaround Playbooks', 'Field Coaching Framework']
  }
]
