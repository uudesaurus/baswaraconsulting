# Insights Engine Component - Implementation Examples

## Overview

The **Insights Engine** is a dynamic, context-aware component that appears on every Industry, Capability, and Unit page. It serves as the proof point of Baswara's thought leadership by displaying relevant research and analysis based on the current page context.

---

## Component Purpose

### Strategic Goals:
1. **Prove Thought Leadership**: Show we're not just service providers—we're knowledge leaders
2. **Increase Engagement**: Give users reason to stay and explore
3. **Cross-Linking**: Create pathways from service pages to content
4. **SEO Value**: Keep content fresh and interconnected

### User Value:
- "Show me you understand my industry/challenge"
- "Give me insights I can use even before hiring you"
- "Prove your expertise through research"

---

## Component Structure

### Visual Layout:
```
┌─────────────────────────────────────────────────┐
│ [Badge: Thought Leadership]                     │
│ Our Latest Insights                             │
│ Deep-dive research and analysis from our        │
│ consultants                                     │
│ Insights relevant to {Context}                  │
│                                                 │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│ │ Card 1  │  │ Card 2  │  │ Card 3  │         │
│ │         │  │         │  │         │         │
│ └─────────┘  └─────────┘  └─────────┘         │
│                                                 │
│ [View All Insights →]                          │
└─────────────────────────────────────────────────┘
```

### Card Structure:
```
┌──────────────────────────────┐
│ [Image/Gradient Background]  │
│ [Category Badge]             │
├──────────────────────────────┤
│ Date • Read Time             │
│ Insight Title                │
│ Excerpt (3 lines)...         │
│ Read More →                  │
└──────────────────────────────┘
```

---

## Example 1: Finance Industry Page

### Context:
User is on `/industries/finance` learning about financial services expertise

### Insights Engine Display:

```
╔═══════════════════════════════════════════════════════════╗
║  [Badge: Thought Leadership]                              ║
║                                                           ║
║  Our Latest Insights                                      ║
║  Research and analysis specific to this industry          ║
║  💡 Insights relevant to Finance                         ║
║                                                           ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
║  │ Financial Svcs  │  │ Financial Svcs  │  │ M&A & Finance   │
║  │                 │  │                 │  │                 │
║  │ Navigating OJK's│  │ State of        │  │ BUMN           │
║  │ Digital Banking │  │ Enterprise AI   │  │ Holdingisasi    │
║  │ Regulations     │  │ in Indonesia    │  │                 │
║  │                 │  │                 │  │                 │
║  │ Oct 2024        │  │ Dec 2024        │  │ Sep 2024        │
║  │ 11 min read     │  │ 15 min read     │  │ 18 min read     │
║  │                 │  │                 │  │                 │
║  │ Compliance road-│  │ From pilot      │  │ Strategic       │
║  │ map for digital │  │ purgatory to    │  │ approaches to   │
║  │ banks: From     │  │ production: How │  │ BUMN consol...  │
║  │ licensing to... │  │ Indonesian...   │  │                 │
║  │                 │  │                 │  │                 │
║  │ Read More →     │  │ Read More →     │  │ Read More →     │
║  └─────────────────┘  └─────────────────┘  └─────────────────┘
║                                                           ║
║  [View All Insights →]                                   ║
╚═══════════════════════════════════════════════════════════╝
```

### Why These Insights?
- **OJK Regulations**: Tagged with `industries: ['finance']`
- **Enterprise AI**: Tagged with `industries: ['finance', 'ict']`
- **BUMN Holdingisasi**: Tagged with `industries: ['finance', 'mining', 'construction']`

### User Takeaway:
"Baswara understands OJK compliance, digital transformation in banking, and BUMN consolidation—they're not generic consultants"

---

## Example 2: Agro Industry Page

### Context:
User is on `/industries/agro` learning about agriculture expertise

### Insights Engine Display:

```
╔═══════════════════════════════════════════════════════════╗
║  [Badge: Thought Leadership]                              ║
║                                                           ║
║  Our Latest Insights                                      ║
║  Research and analysis specific to this industry          ║
║  💡 Insights relevant to Agro                            ║
║                                                           ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
║  │ Sustainability  │  │ Operations      │  │ Sustainability  │
║  │ & Agro          │  │ & Supply Chain  │  │ & Forestry      │
║  │                 │  │                 │  │                 │
║  │ Plasma          │  │ Building Supply │  │ Monetizing      │
║  │ Partnership     │  │ Chain Resilience│  │ Carbon Credits  │
║  │ Models          │  │ in ASEAN        │  │                 │
║  │                 │  │                 │  │                 │
║  │ Oct 2024        │  │ Sep 2024        │  │ Aug 2024        │
║  │ 10 min read     │  │ 13 min read     │  │ 12 min read     │
║  │                 │  │                 │  │                 │
║  │ Navigating the  │  │ Network optim-  │  │ SVLK compliance │
║  │ 20% plasma      │  │ ization and     │  │ and carbon      │
║  │ compliance...   │  │ inventory...    │  │ credit gen...   │
║  │                 │  │                 │  │                 │
║  │ Read More →     │  │ Read More →     │  │ Read More →     │
║  └─────────────────┘  └─────────────────┘  └─────────────────┘
║                                                           ║
║  [View All Insights →]                                   ║
╚═══════════════════════════════════════════════════════════╝
```

### Why These Insights?
- **Plasma Partnership**: Tagged with `industries: ['agro']`
- **Supply Chain**: Tagged with `industries: ['translog', 'fnb', 'automotive']` but relevant to agro operations
- **Carbon Credits**: Tagged with `industries: ['forestry']` but relevant to sustainable agro practices

### User Takeaway:
"Baswara knows the specifics of plasma partnerships, understands supply chain challenges in commodities, and can help with sustainability"

---

## Example 3: Digital Capability Page

### Context:
User is on `/capabilities/digital` learning about digital transformation services

### Insights Engine Display:

```
╔═══════════════════════════════════════════════════════════╗
║  [Badge: Thought Leadership]                              ║
║                                                           ║
║  Our Latest Insights                                      ║
║  Deep-dive research and thought leadership                ║
║  💡 Insights relevant to Digital & Technology            ║
║                                                           ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
║  │ Digital &       │  │ Financial Svcs  │  │ Operations      │
║  │ Technology      │  │                 │  │ & Digital       │
║  │                 │  │                 │  │                 │
║  │ State of        │  │ Navigating OJK's│  │ Building Supply │
║  │ Enterprise AI   │  │ Digital Banking │  │ Chain Resilience│
║  │ in Indonesia    │  │ Regulations     │  │                 │
║  │                 │  │                 │  │                 │
║  │ Dec 2024        │  │ Oct 2024        │  │ Sep 2024        │
║  │ 15 min read     │  │ 11 min read     │  │ 13 min read     │
║  │                 │  │                 │  │                 │
║  │ From pilot      │  │ Compliance road-│  │ Network design  │
║  │ purgatory to    │  │ map for digital │  │ and inventory   │
║  │ production...   │  │ banks: From...  │  │ optimization... │
║  │                 │  │                 │  │                 │
║  │ Read More →     │  │ Read More →     │  │ Read More →     │
║  └─────────────────┘  └─────────────────┘  └─────────────────┘
║                                                           ║
║  [View All Insights →]                                   ║
╚═══════════════════════════════════════════════════════════╝
```

### Why These Insights?
- **Enterprise AI**: Tagged with `capabilities: ['digital']`
- **OJK Digital Banking**: Tagged with `capabilities: ['digital', 'operations']`
- **Supply Chain**: Tagged with `capabilities: ['operations']` but includes digital transformation elements

### User Takeaway:
"Baswara has deep expertise in GenAI, understands regulatory tech, and combines digital with operations"

---

## Example 4: Operations Capability Page

### Context:
User is on `/capabilities/operations` learning about operational excellence

### Insights Engine Display:

```
╔═══════════════════════════════════════════════════════════╗
║  [Badge: Thought Leadership]                              ║
║                                                           ║
║  Our Latest Insights                                      ║
║  Deep-dive research and thought leadership                ║
║  💡 Insights relevant to Operations & Supply Chain       ║
║                                                           ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
║  │ Operations &    │  │ Sustainability  │  │ Automotive &    │
║  │ Supply Chain    │  │ & Agro          │  │ Manufacturing   │
║  │                 │  │                 │  │                 │
║  │ Building Supply │  │ Plasma          │  │ Building        │
║  │ Chain Resilience│  │ Partnership     │  │ Indonesia's EV  │
║  │ in ASEAN        │  │ Models          │  │ Manufacturing   │
║  │                 │  │                 │  │                 │
║  │ Sep 2024        │  │ Oct 2024        │  │ Nov 2024        │
║  │ 13 min read     │  │ 10 min read     │  │ 14 min read     │
║  │                 │  │                 │  │                 │
║  │ Network optim-  │  │ Navigating 20%  │  │ TKDN optim-     │
║  │ ization and inv-│  │ plasma compl-   │  │ ization and     │
║  │ entory strat... │  │ iance while...  │  │ supplier dev... │
║  │                 │  │                 │  │                 │
║  │ Read More →     │  │ Read More →     │  │ Read More →     │
║  └─────────────────┘  └─────────────────┘  └─────────────────┘
║                                                           ║
║  [View All Insights →]                                   ║
╚═══════════════════════════════════════════════════════════╝
```

### Why These Insights?
- **Supply Chain**: Tagged with `capabilities: ['operations']`
- **Plasma Partnership**: Tagged with `capabilities: ['sustainability', 'operations']`
- **EV Manufacturing**: Tagged with `capabilities: ['operations', 'strategy']`

### User Takeaway:
"Baswara brings operational excellence across industries—from supply chain to agriculture to automotive"

---

## Example 5: Baswara X Unit Page

### Context:
User is on `/units/x` learning about the tech-building unit

### Insights Engine Display:

```
╔═══════════════════════════════════════════════════════════╗
║  [Badge: Thought Leadership]                              ║
║                                                           ║
║  Our Latest Insights                                      ║
║  Research and analysis from our delivery teams            ║
║  💡 Insights relevant to Baswara X                       ║
║                                                           ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
║  │ Digital &       │  │ Mining & Metals │  │ Financial Svcs  │
║  │ Technology      │  │                 │  │                 │
║  │                 │  │                 │  │                 │
║  │ State of        │  │ The Future of   │  │ Navigating OJK's│
║  │ Enterprise AI   │  │ Nickel Down-    │  │ Digital Banking │
║  │ in Indonesia    │  │ streaming       │  │ Regulations     │
║  │                 │  │                 │  │                 │
║  │ Dec 2024        │  │ Nov 2024        │  │ Oct 2024        │
║  │ 15 min read     │  │ 12 min read     │  │ 11 min read     │
║  │                 │  │                 │  │                 │
║  │ Leveraging      │  │ Indonesia's     │  │ Compliance road-│
║  │ generative AI   │  │ hilirisasi      │  │ map including   │
║  │ for tangible... │  │ policy trans... │  │ tech systems... │
║  │                 │  │                 │  │                 │
║  │ Read More →     │  │ Read More →     │  │ Read More →     │
║  └─────────────────┘  └─────────────────┘  └─────────────────┘
║                                                           ║
║  [View All Insights →]                                   ║
╚═══════════════════════════════════════════════════════════╝
```

### Why These Insights?
- **Enterprise AI**: Baswara X builds GenAI solutions → relevant
- **Nickel Downstreaming**: Baswara X serves mining with IoT → relevant
- **OJK Digital Banking**: Baswara X builds banking tech → relevant

### User Takeaway:
"Baswara X doesn't just advise—they're building real AI, IoT, and fintech solutions in Indonesia"

---

## Example 6: Baswara Implementation Unit Page

### Context:
User is on `/units/implementation` learning about execution capability

### Insights Engine Display:

```
╔═══════════════════════════════════════════════════════════╗
║  [Badge: Thought Leadership]                              ║
║                                                           ║
║  Our Latest Insights                                      ║
║  Research and analysis from our delivery teams            ║
║  💡 Insights relevant to Baswara Implementation          ║
║                                                           ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
║  │ Operations &    │  │ Sustainability  │  │ M&A & Finance   │
║  │ Supply Chain    │  │ & Agro          │  │                 │
║  │                 │  │                 │  │                 │
║  │ Building Supply │  │ Plasma          │  │ BUMN           │
║  │ Chain Resilience│  │ Partnership     │  │ Holdingisasi    │
║  │ in ASEAN        │  │ Models          │  │                 │
║  │                 │  │                 │  │                 │
║  │ Sep 2024        │  │ Oct 2024        │  │ Sep 2024        │
║  │ 13 min read     │  │ 10 min read     │  │ 18 min read     │
║  │                 │  │                 │  │                 │
║  │ Network design  │  │ Managing Koper- │  │ From '1000 to   │
║  │ and inventory   │  │ asi relation-   │  │ 200' entities:  │
║  │ optimization... │  │ ships and...    │  │ Strategic...    │
║  │                 │  │                 │  │                 │
║  │ Read More →     │  │ Read More →     │  │ Read More →     │
║  └─────────────────┘  └─────────────────┘  └─────────────────┘
║                                                           ║
║  [View All Insights →]                                   ║
╚═══════════════════════════════════════════════════════════╝
```

### Why These Insights?
- **Supply Chain**: Implementation does operations turnarounds → relevant
- **Plasma Partnership**: Implementation manages complex stakeholder relationships → relevant
- **BUMN Holdingisasi**: Implementation leads post-merger integration → relevant

### User Takeaway:
"Baswara Implementation has hands-on experience with supply chains, sustainability partnerships, and BUMN transformations"

---

## Technical Implementation

### Code Example:

```tsx
// On Industry Page
import { getInsightsByIndustry } from '@/lib/data'

const relevantInsights = getInsightsByIndustry('finance', 3)

<InsightsEngine
  insights={relevantInsights}
  title="Our Latest Insights"
  description="Research and analysis specific to this industry"
  context="Finance"
/>
```

```tsx
// On Capability Page
import { getInsightsByCapability } from '@/lib/data'

const relevantInsights = getInsightsByCapability('digital', 3)

<InsightsEngine
  insights={relevantInsights}
  title="Our Latest Insights"
  description="Deep-dive research and thought leadership"
  context="Digital & Technology"
/>
```

```tsx
// On Unit Page
import { getInsightsByUnit } from '@/lib/data'

const relevantInsights = getInsightsByUnit('x', 3)

<InsightsEngine
  insights={relevantInsights}
  title="Our Latest Insights"
  description="Research and analysis from our delivery teams"
  context="Baswara X"
/>
```

---

## Design Specifications

### Colors (Baswara Brand):
- Primary: `hsl(354 70% 34%)` - Deep red
- Accent: `hsl(354 70% 54%)` - Bright red
- Background: Gradient from `slate-50` to `white`

### Typography:
- Title: `text-3xl md:text-4xl `
- Description: `text-lg text-muted-foreground`
- Context badge: `text-sm  text-primary`
- Card title: `text-lg `
- Card excerpt: `text-sm text-muted-foreground`

### Spacing:
- Section padding: `py-20`
- Card grid: `gap-8`
- Card padding: `p-6`

### Interactions:
- Hover state: `hover:shadow-xl transition-all duration-300`
- Arrow animation: `group-hover:translate-x-1 transition-transform`
- Card lift: `hover:shadow-2xl`

---

## Content Strategy

### Insight Frequency:
- **Minimum**: 3 insights per page
- **Maximum**: Show top 3 most recent/relevant
- **Fallback**: If < 3 insights match, show related from broader categories

### Tagging Strategy:
Every insight must be tagged with:
1. **Primary Industry** (e.g., mining, finance)
2. **Secondary Industries** (optional, for cross-relevance)
3. **Primary Capability** (e.g., digital, operations)
4. **Secondary Capabilities** (optional)

### Example Tagging:
```typescript
{
  slug: 'future-nickel-downstreaming',
  industries: ['mining'],  // Primary
  capabilities: ['strategy', 'sustainability']  // Primary + Secondary
}
```

This ensures insights appear on:
- Mining industry page ✓
- Strategy capability page ✓
- Sustainability capability page ✓
- Baswara Implementation unit page ✓ (serves mining)

---

## Success Metrics

Track these KPIs per page type:

1. **Click-Through Rate**
   - % of users who click insight card
   - Which insights get most clicks

2. **Time on Page**
   - Does Insights Engine increase engagement?
   - Compare pages with/without component

3. **Navigation Patterns**
   - Do users go: Service → Insight → Contact?
   - Or: Insight → Service → Contact?

4. **Conversion Impact**
   - Users who read insights before contacting
   - Conversion rate comparison

---

**Generated**: December 8, 2024  
**Version**: 1.0
