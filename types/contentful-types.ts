// Types for Baswara Matrix
// The "Who" (Industry)
export interface Industry {
  slug: string;
  title: string;
  heroHeadline: string;
  heroDescription?: string;
  localContext: {
    title: string; // e.g., "RKAB & Hilirisasi"
    description: string;
  };
  // Relations
  relatedCapabilities: string[]; // slugs of Capabilities
  relatedUnits: string[]; // slugs of Units (e.g., 'baswara-x')
}

// The "What" (Capability)
export interface Capability {
  slug: string;
  title: string;
  heroHeadline?: string;
  serviceSuite: {
    title: string;
    clientProblem: string;
    methodology: string;
    deliverable?: string;
  }[];
}

// The "How" (Specialized Unit)
export interface SpecializedUnit {
  slug: string; // e.g., 'baswara-x'
  brandName: string;
  valueProp: string;
  techAssets: string[];
}
