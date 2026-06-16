# Research Directory

This directory contains all PDF whitepapers and research documents for the Baswara Consulting website.

## Directory Structure

```
research/
├── mining/              # Mining industry research
├── agro/                # Agro industry research
├── finance/             # Finance industry research
├── forestry/            # Forestry industry research
├── automotive/          # Automotive industry research
├── construction/        # Construction industry research
├── general-industry/    # General industry research
├── fnb/                 # Food & Beverage industry research
├── ict/                 # ICT industry research
└── translog/            # Transport & Logistics industry research
```

## File Naming Convention

**Use lowercase with hyphens:**
- ✅ `nickel-downstreaming-2024.pdf`
- ✅ `digital-banking-ojk-compliance.pdf`
- ❌ `Final Report v2.pdf`
- ❌ `Whitepaper.PDF`

## How to Add a New Whitepaper

### Step 1: Upload the PDF
Place your PDF file in the appropriate industry folder:
```
/public/research/[industry]/your-research-title.pdf
```

### Step 2: Add Metadata in `lib/data.ts`
Find the industry in the `INDUSTRIES` array and add to the `whitepapers` array:

```typescript
whitepapers: [
  {
    title: 'Your Whitepaper Title',
    description: 'Brief description of the research content and value',
    fileUrl: '/research/[industry]/your-research-title.pdf',
    fileSize: '3.2 MB',  // Actual file size
    publishedDate: 'November 2024',
    category: 'Industry Research'  // or 'Sustainability', 'Technology', 'Compliance'
  }
]
```

### Step 3: Test
Navigate to the industry page:
```
http://localhost:3000/industries/[industry-slug]
```

The whitepaper should appear in the "Research & Whitepapers" section.

## Categories

Use these standard categories:
- **Industry Research** - Market analysis, trends, forecasts
- **Sustainability** - ESG, environmental, social impact
- **Technology** - Digital transformation, innovation
- **Compliance** - Regulatory guides, legal frameworks
- **Implementation** - How-to guides, best practices

## File Size Guidelines

- **Ideal**: 2-5 MB
- **Maximum**: 10 MB
- **Tip**: Use PDF compression if files are too large

## Current Status

### Industries with Whitepapers:
- ✅ **Mining** - 2 whitepapers

### Industries Pending:
- ⏳ Agro
- ⏳ Finance
- ⏳ Forestry
- ⏳ Automotive
- ⏳ Construction
- ⏳ General Industry
- ⏳ FnB
- ⏳ ICT
- ⏳ Translog

## Need Help?

Refer to `/PDF_WHITEPAPER_GUIDE.md` in the project root for complete implementation details.
