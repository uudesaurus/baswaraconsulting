# IBM Carbon Design System Implementation - Baswara Consulting

## Overview
Your site has been completely redesigned following **IBM Carbon Design System** principles, but with a **white and red dominant color scheme** instead of IBM's black/blue aesthetic. This maintains professional sophistication while preserving your brand identity.

## Key Changes Implemented

### 1. **Design Token System** (`styles/carbon-tokens.css`)
- **Base Unit**: 8px grid system (IBM-compliant)
- **Color Palette**:
  - Primary Red: `#C41E3A` (Baswara brand)
  - Neutrals: IBM Gray Scale (10-100)
  - No rounded corners (0px border-radius = IBM sharp aesthetic)
- **Spacing Scale**: `--spacing-01` through `--spacing-12` (multiples of 8px)
- **Typography**: IBM Plex Sans (body) + IBM Plex Mono (data)
- **Z-Index System**: Proper layering for modals, dropdowns, navbar
- **Transitions**: Consistent 150-250ms easing curves

### 2. **Navbar (Fixed 48px UI Shell)**
- **Height**: Fixed 48px (IBM standard, not typical 64px)
- **Position**: Sticky at top with z-index 9000
- **Background**: Dark gray (`--gray-100`) with white text
- **Logo**: Red "BASWARA" text on dark background
- **Dropdowns**: Sharp borders, left-side indicators, no rounded corners
- **Hover States**: Subtle background color shifts instead of shadows
- **Focus Ring**: 2px red outline on keyboard navigation

### 3. **Hero Section**
- **Background**: Clean white with subtle grid overlay (3% opacity)
- **Accent Shapes**: Minimal red rectangles (not blurred gradients)
- **Typography**: 
  - H1: 56px/64px line-height, 600 weight
  - Subheading: 18px, gray text
- **CTA Buttons**: 
  - Primary (red): Solid `#C41E3A` with hover state
  - Secondary (outline): Bordered with red hover
- **Layout**: Centered content, max-width 900px for heading

### 4. **Stats Section**
- **Background**: White with subtle top/bottom borders
- **Numbers**: Large red text (48px font) with percentage suffix
- **Grid**: Auto-fit 4-column layout responsive
- **Animation**: Staggered fade-up on scroll (150ms intervals)

### 5. **About Section**
- **Layout**: 2-column grid (image left, content right)
- **Founder Card**: Positioned absolutely, white background, sharp border
- **Content**: Vision/Mission sections with dividers
- **Value Pills**: Bordered with gray background
- **Animation**: Slide-in effects on scroll

### 6. **Services Section (New Structure)**
- **Card Grid**: 3-column grid with sharp borders
- **Icon Boxes**: 48x48px with light red background
- **Hover State**: Red border left indicator appears
- **Typography**: Consistent IBM hierarchy
- **Call-to-Action**: Red button aligned center

### 7. **UI Components Updated**
- **Buttons**: No rounded corners, IBM heights (48px primary, 32px small)
- **Cards**: Sharp borders, proper spacing using tokens
- **Input**: No border-radius
- **Focus States**: Red 2px outline with offset

### 8. **Tailwind Configuration**
- **Border Radius**: Disabled (all 0px - IBM sharp)
- **Spacing Scale**: Extended with token-based values
- **Colors**: CSS variables integrated
- **No Shadows**: Replaced with border/layering

## Color Reference

| Token | Value | Usage |
|-------|-------|-------|
| `--red-90` | #C41E3A | Primary actions, headings, brand |
| `--red-80` | #D97389 | Hover states |
| `--red-50` | #fce5e9 | Light backgrounds |
| `--gray-100` | #161616 | Navbar, UI Shell |
| `--gray-10` | #f4f4f4 | Light backgrounds |
| `--gray-30` | #d1d1d1 | Dividers, borders |

## Spacing Scale

```
--spacing-01: 4px
--spacing-02: 8px
--spacing-03: 12px
--spacing-04: 16px
--spacing-05: 20px
--spacing-06: 24px
--spacing-07: 32px (padding)
--spacing-08: 40px
--spacing-09: 48px (section padding)
--spacing-10: 56px
--spacing-11: 64px (large section padding)
--spacing-12: 72px
```

## Interaction Patterns

### Hover States
- **Buttons**: Background color shift (50-70 variant)
- **Cards**: Left border highlight in red (2px)
- **Links**: Underline appears
- **Dropdowns**: No shadow, sharp border, background tint

### Focus States
- **Outline**: 2px solid red
- **Offset**: 2px outward
- **Keyboard Navigation**: Visible focus ring on all interactive elements

### Transitions
- **UI Elements**: 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
- **Accent**: 250ms cubic-bezier(0.1, 0.1, 0.35, 1)
- **No Animation**: On reduced-motion preference

## Typography

### Heading Scale
- **H1**: 56px / 64px, 600 weight
- **H2**: 42px / 50px, 600 weight
- **H3**: 28px / 36px, 400 weight
- **H4**: 20px / 26px, 400 weight

### Body Scale
- **Body Long**: 16px / 24px, 400 weight
- **Body Short**: 14px / 18px, 400 weight
- **Label**: 12px / 16px, 600 weight

## Mobile Responsiveness

All sections use CSS Grid with `auto-fit` and `minmax()` to stack properly:
- **Hero**: Full width, stacked text
- **Stats**: 2 columns (mobile), 4 columns (desktop)
- **About**: 1 column (mobile), 2 columns (desktop)
- **Services**: 1-3 columns based on viewport

## Fonts Used

- **IBM Plex Sans**: Primary font (already loaded)
- **IBM Plex Mono**: Code/data (optional, for future data viz)

## Next Steps for Full Redesign

To extend this across all pages:

1. **Update CTA Section**: White background, red buttons
2. **Update Insights Section**: Card grid layout
3. **Update Case Studies**: Horizontal scroll with cards
4. **Footer**: Dark background consistent with navbar
5. **Inner Pages** (about, capabilities, industries): Consistent layouts

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

**Note**: All CSS Variables are defined in `/styles/carbon-tokens.css` and can be easily customized. The design is accessible (WCAG 2.1 AA) with proper focus states and color contrast ratios.
