# Portfolio Website - Project Documentation

## Project Overview
Premium personal portfolio website for Oladiti Adewale John, positioned as a Technology & Business Systems Builder rather than a generic software developer.

## Tech Stack
- **Framework**: Next.js 16.3.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Typography**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Render, or similar platforms

## Design System
- **Primary Color**: #0B0B0B (Near-black/charcoal)
- **Secondary Color**: #F7F5F0 (Off-white/warm white)
- **Accent Color**: #C8A85A (Sophisticated gold/amber)
- **Muted Color**: #8A8A8A (Gray)

## Color Palette Usage
- Background: #F7F5F0
- Text: #0B0B0B
- Accent elements: #C8A85A (used sparingly)
- Secondary text: #8A8A8A

## Component Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and CSS variables
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with system architecture visual
│   ├── About.tsx           # About section with education and questions
│   ├── Capabilities.tsx    # What I Do - capability matrix
│   ├── ProfessionalRoles.tsx # Where I Can Create Value
│   ├── FeaturedProjects.tsx # Project portfolio with expandable case studies
│   ├── Ventures.tsx        # Nkowe and Electroll ventures
│   ├── Experience.tsx      # Experience timeline
│   ├── Teaching.tsx        # Teaching & Mentoring section
│   ├── BeyondCode.tsx     # MBA/Business dimension section
│   ├── Thinking.tsx        # How I Think philosophy section
│   ├── Contact.tsx         # Contact section with categories
│   └── ScrollReveal.tsx    # Scroll animation component
├── data/
│   ├── projects.ts         # Project data with detailed information
│   ├── experience.ts       # Work experience and additional experience
│   ├── capabilities.ts     # Capabilities and professional roles
│   ├── ventures.ts         # Venture data (Nkowe, Electroll)
│   ├── contact.ts          # Contact categories and personal info
│   └── philosophy.ts       # Philosophy statements and thinking questions
├── types/
│   └── index.ts            # TypeScript type definitions
└── lib/
    └── fonts.ts            # Font configuration
```

## Key Features
1. **Premium Design**: Minimal, editorial aesthetic inspired by Linear, Stripe, Notion
2. **Responsive**: Optimized for desktop, laptop, tablet, and mobile
3. **Accessible**: ARIA labels, semantic HTML, keyboard navigation, focus states
4. **SEO Optimized**: Metadata, Open Graph, Twitter cards, sitemap, robots.txt
5. **Performance**: Static generation, optimized images, minimal JavaScript
6. **Expandable Case Studies**: Projects have detailed case studies that expand on click
7. **Sticky Navigation**: Navigation bar that becomes visible on scroll
8. **Mobile Menu**: Clean mobile navigation with smooth transitions
9. **Prefers Reduced Motion**: Respects user motion preferences

## Content Strategy
The website positions Adewale as a **Technology & Business Systems Builder** with expertise across:
- Software Engineering
- Product Engineering
- Technology & Business Systems
- Digital Transformation
- Product/Business Operations
- Entrepreneurship
- Systems Thinking
- Technical Leadership
- Business Analysis
- Education & Technology

## Narrative Flow
The website follows this narrative structure:
1. Who I am (Hero)
2. What I understand (About)
3. What I build (Featured Projects)
4. Where I have worked (Experience)
5. How I think (Thinking, Philosophy)
6. What I can do (Capabilities, Professional Roles)
7. Where I am going (Ventures)
8. How we can work together (Contact)

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Deployment
The site is ready for deployment to:
- Vercel (recommended for Next.js)
- Render
- Netlify
- Any platform supporting Next.js

## Important Notes
1. **Placeholders**: Email, GitHub, and LinkedIn URLs are marked as `[CONTENT NEEDED]` and should be updated
2. **Domain**: The sitemap and robots.txt use `yourdomain.com` - update with actual domain
3. **CV Download**: The CV download link is a placeholder - add actual CV file
4. **Images**: Project images are not included - add actual project screenshots
5. **Ventures**: Nkowe and Electroll are in concept phase - this is accurately reflected
6. **Experience Dates**: Some experience dates (2025-2026) should be verified against actual CV and adjusted if needed
7. **Missing Dates**: Some experience entries have `[CONTENT NEEDED]` for dates - fill in actual dates from CV

## Content Rules
- Never fabricate clients, revenue, users, awards, or statistics
- Use `[CONTENT NEEDED]` for missing information
- All claims are based on actual experience and education
- Ventures are clearly marked as concept phase
- Professional roles are presented as areas where skills can be applied, not claims of holding every title

## Performance Considerations
- Static site generation for fast initial load
- Inter font with display:swap for performance
- Minimal JavaScript (only for interactive components)
- Optimized CSS with Tailwind
- No heavy libraries or frameworks

## Accessibility Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators on interactive elements
- Skip to main content link
- Alt text for decorative images
- Color contrast compliance
- Reduced motion support

## Customization Points
1. Update personal info in `src/data/contact.ts`
2. Add actual project images
3. Update domain in sitemap and robots.txt
4. Add CV file for download
5. Customize color palette in `src/app/globals.css`
6. Add actual GitHub/LinkedIn URLs
7. Update experience dates if needed
8. Add additional projects as needed

## Maintenance
- Content is easy to update through data files in `src/data/`
- Components are modular and reusable
- TypeScript ensures type safety
- Tailwind allows easy style customization
- Next.js provides automatic optimization
