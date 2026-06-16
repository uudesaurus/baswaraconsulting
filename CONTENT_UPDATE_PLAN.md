# Comprehensive Content Update Plan

## Status: Ready for Implementation

You've provided extremely detailed content for all capabilities, industries, and specialized units. This document outlines how to integrate this content into the existing website structure.

---

## What's Been Provided

### Capabilities (Complete Detail)
1. **Strategy & Transformation** - 4 service areas with client problem/methodology/deliverable
2. **Operations & Supply Chain** - 4 service areas with full details
3. **Digital & Technology** - 4 service areas with full details  
4. **People & Organizational Performance** - 4 service areas with full details
5. **Corporate Finance, M&A & Restructuring** - 4 service areas with BUMN-specific focus
6. **Marketing & Sales** - 4 service areas with full details

### Industries (Complete with Indonesian Context)

**Natural Resources Cluster:**
- **Agro**: Plasma Partnership & 20% Compliance (Permentan regulations, Koperasi setup)
- **Forestry**: SVLK & Social Forestry (Perhutanan Sosial, land tenure)
- **Mining**: RKAB Approval & Hilirisasi Strategy (ESDM requirements, downstreaming)

**Industrial Cluster:**
- **Automotive**: TKDN Optimization (Local Content Requirements for EV incentives)
- **Construction**: OSS-RBA & Land Acquisition (Pengadaan Lahan, UU No. 2/2012)
- **General Industry**: SNI Certification & Industrial Relations (LKS Bipartit, UU Cipta Kerja)
- **FnB**: Halal Assurance System (SJPH, BPJPH compliance)

**Services Cluster:**
- **Finance**: OJK & BI Compliance (POJK, SLIK, Antasena reporting)
- **ICT**: Data Sovereignty (PP 71/2019, onshore data centers)
- **Translog**: Bonded Logistics (PLB, Bea Cukai, Tol Laut)

### Specialized Units (Complete Detail)
1. **Baswara X** - 3 service areas with technical depth
2. **Baswara Implementation** - 3 service areas with execution focus  
3. **Baswara Ventures** - 3 service areas with venture building detail

---

## Integration Approach

### Phase 1: Update Data Structure (lib/data.ts)

The current data structure needs to be expanded to include:

```typescript
export interface ServiceDetail {
  title: string
  clientProblem: string      // NEW
  methodology: string         // EXPANDED
  deliverable: string         // NEW
}

export interface LocalContext {
  title: string
  description: string
  pitch: string              // NEW - The full service pitch
}
```

### Phase 2: Update Capability Pages

Each capability page template already supports displaying:
- Client Problem
- Methodology  
- Deliverable

The content just needs to be populated in the data file.

**Example for Strategy & Transformation:**

```typescript
{
  slug: 'strategy',
  name: 'Strategy & Transformation',
  subtitle: 'Defining the path to sustainable growth in an uncertain world.',
  hook: 'Volatility is the new normal. We partner with clients not just to survive disruption, but to seize it...',
  serviceSuite: [
    {
      title: 'Corporate Strategy',
      clientProblem: 'We are growing slower than the market. Where should we place our big bets for the next 5 years?',
      methodology: 'Market Dynamics Analysis: Assessing profit pools, trends, and regulatory shifts. Portfolio Review: Identifying which business units are "Stars" to invest in and which are "Dogs" to divest...',
      deliverable: 'A 5-year Strategic Plan endorsed by the Board.'
    },
    // ... 3 more services
  ]
}
```

### Phase 3: Update Industry Pages

Each industry page needs the "Local Champion Service" added:

```typescript
{
  slug: 'agro',
  name: 'Agro',
  localContext: {
    title: 'Plasma Partnership & 20% Compliance',
    description: 'In Indonesia, plantations must allocate 20% of land to community smallholders (Plasma). This is often a source of conflict.',
    pitch: 'Ensuring compliant and productive relationships with Plasma smallholders. We manage the end-to-end scheme—from cooperative (Koperasi) setup to agronomy training—ensuring you meet Permentan regulations while securing FFB supply from local communities.'
  },
  services: [
    {
      title: 'Yield Maximization & Estate Management',
      clientProblem: 'Our yields per hectare are stagnant despite rising fertilizer costs.',
      methodology: 'Agronomy diagnostics, fertilizer regime optimization, and "Best Management Practice" (BMP) implementation in the field.',
      deliverable: '10-15% increase in Fresh Fruit Bunch (FFB) or crop yield.'
    },
    // ... more services
  ]
}
```

### Phase 4: Update Unit Pages

Each specialized unit needs expanded service details:

```typescript
{
  slug: 'x',
  name: 'Baswara X',
  subtitle: 'Advanced Analytics & Digital Engineering',
  headline: 'Engineering the digital core of the future enterprise.',
  valueProp: 'We move beyond strategy into the engineering of proprietary digital assets...',
  services: [
    {
      title: 'Enterprise Generative AI & Knowledge Architecture',
      executiveContext: 'Global models lack the nuance of specific industrial and local regulatory contexts.',
      offering: 'Development of Sovereign Enterprise LLMs (Large Language Models) architected for strict data governance. We engineer secure RAG (Retrieval-Augmented Generation) environments...',
      deliverable: 'Proprietary, air-gapped AI environments for strategic decisioning.'
    },
    // ... more services
  ]
}
```

---

## Implementation Steps

### Step 1: Backup Current Data
```bash
cp lib/data.ts lib/data.ts.backup
```

### Step 2: Create Full Content File

Create a new comprehensive data file with ALL the detailed content provided. This will be approximately 2,000+ lines of TypeScript.

### Step 3: Update Page Templates

The existing page templates in:
- `app/capabilities/[slug]/page.tsx`
- `app/industries/[slug]/page.tsx`  
- `app/units/[slug]/page.tsx`

Already support displaying all these fields. They just need the data populated.

### Step 4: Test Each Page

Navigate to each URL and verify:
- ✓ All service details display correctly
- ✓ Local context appears prominently
- ✓ Indonesian regulatory terms are visible
- ✓ Cross-links work properly

---

## Content Mapping

### Capabilities URLs

1. `/capabilities/strategy-transformation` ✓
2. `/capabilities/operations` ✓
3. `/capabilities/digital-technology` ✓
4. `/capabilities/people-organization` ✓
5. `/capabilities/finance-restructuring` ✓ (NEW - update from 'finance' to 'finance-restructuring')
6. `/capabilities/marketing-sales` ✓
7. `/capabilities/sustainability` ✓

### Industries URLs

**Natural Resources:**
- `/industries/agriculture` ✓
- `/industries/forestry` ✓
- `/industries/mining` ✓

**Industrial:**
- `/industries/automotive` ✓
- `/industries/construction` ✓
- `/industries/general-manufacturing` ✓
- `/industries/fnb` ✓

**Services:**
- `/industries/financial-services` ✓
- `/industries/ict` ✓
- `/industries/transport-logistics` ✓

### Specialized Units URLs

- `/units/x` ✓
- `/units/implementation` ✓
- `/units/ventures` ✓

---

## Key Indonesian Terms to Highlight

Make sure these terms appear prominently in the UI with proper styling:

### Regulatory & Legal
- RKAB (Work Plan and Budget)
- Hilirisasi (Downstreaming)
- SVLK (Timber Legality System)
- OSS-RBA (Risk-Based Online Single Submission)
- TKDN (Local Content Requirements)
- SJPH (Halal Assurance System)
- POJK (OJK Regulations)
- PP 71/2019 (Data Sovereignty)
- PLB (Bonded Logistics Center)
- UU Cipta Kerja (Job Creation Law)

### Organizations
- ESDM (Ministry of Energy and Mineral Resources)
- OJK (Financial Services Authority)
- BPJPH (Halal Product Assurance Organizing Agency)
- Bea Cukai (Customs)
- BKPM (Investment Coordinating Board)

### Programs
- Perhutanan Sosial (Social Forestry)
- Tol Laut (Sea Toll Road)
- PROPER Rating (Environmental Rating)
- AKHLAK (BUMN Core Values)

---

## Design Considerations

### 1. Indonesian Context Boxes

Create a special styled component for Indonesian context:

```tsx
<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border-2 border-amber-200">
  <div className="text-xs  text-amber-900 uppercase mb-2">
    Indonesia Context
  </div>
  <h3 className="text-2xl  mb-3">{localContext.title}</h3>
  <p className="text-slate-700 mb-4">{localContext.description}</p>
  <div className="p-4 bg-white/60 rounded-lg">
    <span>Baswara's Service:</span> {localContext.pitch}
  </div>
</div>
```

### 2. Service Detail Cards

Enhance the service cards to show all three elements:

```tsx
<div className="bg-white p-6 rounded-xl border-2">
  <h4 className="text-xl  mb-3">{service.title}</h4>
  
  <div className="mb-4">
    <span className="text-xs  text-red-600 uppercase">The Client Problem</span>
    <p className="text-sm mt-1">{service.clientProblem}</p>
  </div>
  
  <div className="mb-4">
    <span className="text-xs  text-blue-600 uppercase">The Methodology</span>
    <p className="text-sm mt-1">{service.methodology}</p>
  </div>
  
  <div className="p-3 bg-green-50 rounded">
    <span className="text-xs  text-green-800 uppercase">The Deliverable</span>
    <p className="text-sm  mt-1">{service.deliverable}</p>
  </div>
</div>
```

---

## File Size Estimate

The complete data file will be approximately:
- **Capabilities**: 7 × 4 services × 150 words = ~4,200 words
- **Industries**: 10 × 3 services × 100 words = ~3,000 words
- **Units**: 3 × 3 services × 150 words = ~1,350 words
- **Total**: ~8,550 words or ~60,000 characters

This is manageable in a single TypeScript file.

---

## Next Actions

1. ✅ **Backup current data**
2. ⏳ **Create comprehensive data file** with ALL content
3. ⏳ **Update page templates** to display new fields
4. ⏳ **Test all pages** for content accuracy
5. ⏳ **Add Indonesian context styling**
6. ⏳ **Update navigation** if any slugs changed
7. ⏳ **Build and deploy**

---

## Notes

- All the content you provided is **production-ready**
- The page structure already supports this level of detail
- Main work is data entry into the TypeScript file
- No significant code changes needed to templates
- Focus on making Indonesian regulatory terms stand out visually

---

**Status**: Ready to implement
**Estimated Time**: 4-6 hours for complete data entry
**Risk**: Low - structure already supports this content
**Next Step**: Systematically populate lib/data.ts with all detailed content

