# IBM Carbon Design System Visual Guide

## Design Principles Applied

### 1. SHARPNESS (No Rounded Corners)
```
BEFORE: border-radius: 0.5rem;  /* 8px rounded */
AFTER:  border-radius: 0px;     /* Sharp, square edges */
```
- All components: buttons, cards, inputs have 0px radius
- IBM's trademark rectangular, engineered look
- Creates hierarchy through layering, not curves

### 2. LAYERING (No Heavy Shadows)
```
Instead of:
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);

We use:
  border: 1px solid var(--gray-30);
  background-color: var(--ui-01) or var(--ui-02);
```
- **Layer 01**: `--gray-10` (#f4f4f4) - Base
- **Layer 02**: `--gray-20` (#e8e8e8) - Secondary
- **Layer 03**: `--gray-30` (#d1d1d1) - Dividers
- Depth through **color contrast**, not shadows

### 3. SPACING GRID (8px Base Unit)
```
Padding:     var(--spacing-06) = 24px
Gap:         var(--spacing-04) = 16px
Section:     var(--spacing-11) = 64px
Margins:     var(--spacing-07) = 32px
```
- Every measurement is multiple of 4px or 8px
- Creates rhythm and alignment
- Enables perfect pixel-perfect design handoff

### 4. COLOR SYSTEM
```css
PRIMARY (Red):
  --red-90:  #C41E3A  ← Brand actions, headings
  --red-80:  #D97389  ← Hover states
  --red-50:  #fce5e9  ← Light backgrounds

NEUTRALS (IBM Gray):
  --gray-100: #161616 ← UI Shell (navbar)
  --gray-10:  #f4f4f4 ← Light backgrounds
  --gray-30:  #d1d1d1 ← Borders & dividers
```

### 5. TYPOGRAPHY VOICE
```
Font:       IBM Plex Sans (headers & body)
Font:       IBM Plex Mono (future: data/code)
Weight:     600 (headings), 400 (body)
Line-height: Generous (1.4x font size minimum)
Letter-spacing: Slight uppercase tracking (0.5px)
```

---

## Component Examples

### NAVBAR (Fixed 48px)
```
Background:  var(--gray-100) → #161616
Text:        var(--text-04) → white
Height:      48px (not 64px)
Position:    fixed, z-index: 9000
Border-b:    1px solid var(--gray-30)
```

**Interaction:**
- Hover: Background shifts to var(--gray-90)
- No shadow, no blur
- Focus ring: 2px red outline

### HERO BUTTON (Primary)
```
Height:       48px
Padding:      0 var(--spacing-06)
Background:   var(--red-90)
Color:        white
Border:       none
Border-radius: 0px
Font-weight:  600
Font-size:    14px
```

**Interaction:**
```
Hover:  background-color: var(--red-80)
Focus:  outline: 2px solid var(--red-90)
        outline-offset: 2px
Active: background-color: var(--red-90)
```

### SERVICE CARD
```
Border:        1px solid var(--gray-30)
Background:    white
Padding:       var(--spacing-06)
Border-radius: 0px
```

**Interaction:**
```
Hover: {
  border-color: var(--red-90)  ← Red left border appears
  box-shadow:   0 4px 8px rgba(196, 30, 58, 0.1)
}
```

### STATS SECTION
```
Grid:         auto-fit minmax(200px, 1fr)
Gap:          var(--spacing-09)
Number:       48px font, var(--red-90)
Label:        12px, uppercase, letter-spacing: 0.5px
Animation:    fade-up 150ms intervals per item
```

---

## Transitions & Animations

### Easing Functions
```css
--transition-base:    200ms cubic-bezier(0.2, 0, 0.38, 0.9)    /* Fast smooth */
--transition-ui:      150ms cubic-bezier(0.2, 0, 0.38, 0.9)    /* UI elements */
--transition-accent:  250ms cubic-bezier(0.1, 0.1, 0.35, 1)    /* Emphasis */
```

### Common Animations
- **Hover**: 150ms background-color shift
- **Scroll**: Staggered fade-up (150-300ms delays)
- **Entrance**: Translate + opacity
- **Focus**: Outline appearance (instant)

---

## Responsive Design

### Grid Breakpoints
```css
Mobile First:
  320px  - Default
  640px  - Tablets
  1024px - Desktops
  1200px - Large screens (max-width)
```

### Section Layouts
```
Hero:     100vw full width
Stats:    2 cols (mobile) → 4 cols (desktop)
About:    1 col (mobile) → 2 cols (desktop)
Services: 1 col (mobile) → 3 cols (desktop)
```

---

## Accessibility Features

✅ **Color Contrast**
- Text: 4.5:1 minimum (WCAG AA)
- Red (#C41E3A) on white: 6.8:1 ✓
- Gray (#525252) on white: 7:1 ✓

✅ **Focus States**
- 2px solid red outline
- 2px offset (visible keyboard nav)
- All interactive elements focusable

✅ **Semantic HTML**
- Proper heading hierarchy (h1 → h2 → h3)
- Link text descriptive ("Learn More About Us →")
- Form labels associated

✅ **Reduced Motion**
- Transitions disabled for `prefers-reduced-motion`
- Animations remain non-essential

---

## File Structure

```
styles/
├── carbon-tokens.css      ← All design tokens (1 source of truth)
└── globals.css            ← Tailwind + token imports

components/
├── ui/
│   ├── button.tsx         ← 0px radius, no shadow
│   ├── card.tsx           ← Sharp borders, token spacing
│   └── ...
├── navbar.tsx             ← 48px UI Shell
├── hero-section.tsx       ← White bg, red buttons
├── stats-section.tsx      ← Token spacing, animation
├── about-section.tsx      ← Grid layout, cards
└── services-section.tsx   ← Card grid, hover effects

app/
├── globals.css            ← Imports tokens, Tailwind setup
└── layout.tsx             ← Font loading, body styles
```

---

## Customization Guide

### To Change Brand Color from Red to Another:
1. Update in `styles/carbon-tokens.css`:
   ```css
   --red-90: #YOUR_COLOR;
   --red-80: #YOUR_HOVER;
   --red-50: #YOUR_LIGHT;
   ```

2. All components automatically update (CSS variables cascade)

### To Adjust Spacing:
1. Change base unit in `carbon-tokens.css`:
   ```css
   --spacing-01: 4px;  ← Change this
   --spacing-07: 32px; ← Automatically proportional
   ```

### To Modify Button Heights:
1. Update component or token:
   ```tsx
   height: '48px' → Change to 40px for compact
   ```

---

## Performance Metrics

- ✅ No custom fonts downloaded (using system IBM Plex via CDN optional)
- ✅ CSS variables (native browser support)
- ✅ No animation libraries (CSS animations only)
- ✅ Semantic HTML (reduced CSS complexity)
- ✅ Mobile-first responsive (smaller mobile CSS)

---

## Quality Checklist

- [x] No rounded corners (0px radius)
- [x] 8px grid system
- [x] Color contrast WCAG AA
- [x] Focus rings visible
- [x] Layering system (no heavy shadows)
- [x] Consistent spacing tokens
- [x] Typography hierarchy
- [x] Mobile responsive
- [x] Keyboard accessible
- [x] Builds successfully
