# Images Folder Structure

This folder contains all images for the Jybek Home Care website.

## Folder Organization

```
images/
├── hero/           # Hero section background images
├── services/       # Service-related images and icons
├── team/           # Team member photos
├── testimonials/   # Customer photos/avatars
├── icons/          # Custom icons and SVGs
└── patterns/       # Background patterns and decorative elements
```

## Image Guidelines

### Recommended Formats
- **Photos:** `.jpg` or `.webp` for best compression
- **Graphics/Icons:** `.svg` or `.png` with transparency
- **Animated:** `.gif` or `.webp`

### Recommended Sizes
- **Hero images:** 1920x1080px (16:9 ratio)
- **Service images:** 800x600px
- **Team photos:** 400x400px (square)
- **Testimonial avatars:** 200x200px (square)
- **Icons:** 64x64px or SVG

### Naming Convention
Use lowercase with hyphens:
- `hero-background.jpg`
- `service-in-home-care.jpg`
- `team-sarah-johnson.jpg`
- `icon-heart.svg`

## Usage in Next.js

```tsx
import Image from 'next/image';

// Example usage
<Image
  src="/images/hero/hero-background.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority // for above-the-fold images
/>
```

## Optimization Tips

1. Use Next.js `<Image>` component for automatic optimization
2. Always provide `alt` text for accessibility
3. Use `priority` prop for hero/above-fold images
4. Consider using `placeholder="blur"` with `blurDataURL`

