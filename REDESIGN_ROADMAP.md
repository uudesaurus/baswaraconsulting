# Remaining Sections to Redesign (IBM Carbon Style)

## Currently Redesigned ✅
- [x] Navbar (48px fixed header)
- [x] Hero Section (white bg, red accents)
- [x] Stats Section (IBM grid, typography)
- [x] About Section (2-col layout, cards)
- [x] Design Token System (complete)

## Still Need IBM Treatment (Ready to implement)

### 1. **Case Studies Section**
Current: Rounded cards with gradient backgrounds
Target: Sharp-cornered cards with border indicators

```css
/* Target Style */
Card Layout: 1 visible + horizontal scroll
Border: 1px solid var(--gray-30)
Accent: 2px left border var(--red-90) on hover
Background: white
Shadow: None (use border instead)
Typography: IBM Plex Sans hierarchy
CTA: Red button (48px height)
```

### 2. **Insights Section**
Current: Grid with gradient accents
Target: Card grid with date, category tags

```css
Card: 
  - 1 col (mobile) → 2-3 cols (desktop)
  - Sharp borders
  - Date label (12px, uppercase)
  - Category pill (gray bg, sharp)
  - Excerpt text (14px, gray)

Hover:
  - Left border highlight (2px red)
  - Subtle background shift to gray-20

CTA Link: "Read More →" (no underline until hover)
```

### 3. **Approach/Process Section**
Current: Numbered steps with circles
Target: Vertical timeline with square indicators

```css
Timeline:
  - Left border: 1px dashed var(--gray-30)
  - Step indicators: 48x48px squares (var(--red-90))
  - Step content: padding var(--spacing-06)
  - Typography: heading + description

Desktop: 
  - Horizontal timeline (steps side-by-side)
  - Connecting lines between steps

Mobile:
  - Vertical stack
  - Left alignment
```

### 4. **CTA Section**
Current: Gradient background with centered text
Target: Dark background with high contrast

```css
Background: var(--gray-100) (#161616)
Text: white
Heading: 42px, white
Description: 16px, gray-30
Button: Red (48px height)

Layout:
  - Centered
  - Max-width: 700px
  - Padding: var(--spacing-11)
```

### 5. **Footer**
Current: Multiple columns, gradient dividers
Target: IBM-style footer with grid

```css
Background: var(--gray-100)
Text: var(--text-04) (white)
Border-top: 1px solid var(--gray-30)

Layout:
  - Grid: 4 columns (desktop) → 2 cols (mobile)
  - Gap: var(--spacing-09)
  - Padding: var(--spacing-11)

Sections:
  - Company info
  - Services links
  - Industries links
  - Contact/Social

Footer bottom:
  - Copyright (12px gray)
  - Social icons (sharp squares, 24x24px)
```

### 6. **Inner Pages** (Capabilities, Industries, Units)
Current: Various layouts
Target: Consistent hero + grid layout

```css
Page Template:
  1. Hero Section (smaller) 
     - Background: white
     - Title + breadcrumb
     - Description

  2. Content Grid
     - Category intro
     - Item grid (1-3 columns)
     - Each item: 
       * Title
       * Description
       * Icon (in red square)
       * Link arrow

  3. Related Items Section
     - "You might also like"
     - Card grid
     - CTA footer

  4. CTA Footer
     - Red button to /contact
```

### 7. **Contact Form**
Current: Rounded inputs, soft shadows
Target: Sharp inputs, border focus

```css
Input:
  - Border: 1px solid var(--gray-30)
  - Border-radius: 0px
  - Padding: var(--spacing-04)
  - Font: 14px IBM Plex Sans
  - Focus: 2px red outline, outline-offset: 2px

Button:
  - Height: 48px
  - Background: var(--red-90)
  - No border-radius
  - Hover: var(--red-80)

Label:
  - 12px, uppercase
  - Font-weight: 600
  - Color: var(--text-01)
  - Margin-bottom: var(--spacing-02)

Error State:
  - Border: 2px solid #dc3545
  - Error text: 12px, red
```

### 8. **Component Library** (Modals, Dropdowns, etc)
Update all shadcn/ui components to use:
- 0px border-radius
- Token spacing
- Red focus states
- No box-shadow (use borders instead)

---

## Implementation Priority

### Phase 1 (High Impact)
1. Footer → Visible on all pages
2. CTA Section → Calls-to-action visibility
3. Case Studies → Major section

### Phase 2 (Medium)
4. Insights Section
5. Approach Section
6. Inner page layouts

### Phase 3 (Polish)
7. Contact Form refinement
8. Component library audit
9. Animation consistency

---

## Template for New Sections

Copy this structure for any new section:

```tsx
<section
  style={{
    backgroundColor: 'var(--ui-background)',
    paddingTop: 'var(--spacing-11)',
    paddingBottom: 'var(--spacing-11)',
    borderTop: '1px solid var(--gray-30)',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 var(--spacing-07)',
    }}
  >
    {/* Section Title */}
    <h2 style={{ fontSize: '42px', lineHeight: '50px', fontWeight: 600, marginBottom: 'var(--spacing-06)' }}>
      Section Title
    </h2>

    {/* Grid Content */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-06)' }}>
      {/* Card */}
      <div style={{ border: '1px solid var(--gray-30)', backgroundColor: 'white', padding: 'var(--spacing-06)' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-03)' }}>Card Title</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-02)' }}>Card content</p>
      </div>
    </div>
  </div>
</section>
```

---

## Testing Checklist for New Sections

- [ ] No rounded corners (0px radius)
- [ ] Token spacing used (no hardcoded px)
- [ ] Grid uses `minmax()` for responsiveness
- [ ] Hover states use border/color, not shadow
- [ ] Focus ring is 2px red with offset
- [ ] Color contrast ≥ 4.5:1 (AA)
- [ ] Mobile responsive (tested at 320px, 768px, 1200px)
- [ ] All links have descriptive text
- [ ] Builds without errors

---

## Quick Style Reference

### Button CTA
```tsx
style={{
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 var(--spacing-06)',
  height: '48px',
  backgroundColor: 'var(--red-90)',
  color: 'white',
  border: 'none',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
}}
onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--red-80)'}
onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--red-90)'}
```

### Card
```tsx
style={{
  border: '1px solid var(--gray-30)',
  backgroundColor: 'white',
  padding: 'var(--spacing-06)',
}}
onMouseEnter={e => {
  e.currentTarget.style.borderColor = 'var(--red-90)';
  e.currentTarget.style.boxShadow = '0 4px 8px rgba(196, 30, 58, 0.1)';
}}
onMouseLeave={e => {
  e.currentTarget.style.borderColor = 'var(--gray-30)';
  e.currentTarget.style.boxShadow = 'none';
}}
```

### Heading
```tsx
style={{
  fontSize: '42px',
  lineHeight: '50px',
  fontWeight: 600,
  color: 'var(--text-01)',
  marginBottom: 'var(--spacing-06)',
}}
```

---

## Notes

- All tokens are in `/styles/carbon-tokens.css` - single source of truth
- Use CSS variables instead of hardcoded values
- Mobile-first approach: design for mobile, enhance for desktop
- Test at actual device sizes (not just browser resize)
- No custom fonts needed (IBM Plex already system-available or CDN)
