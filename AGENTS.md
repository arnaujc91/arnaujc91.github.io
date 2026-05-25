# AGENTS.md

## Project identity

This is an Astro personal website / portfolio for a developer or ML engineer.

The site should feel:
- premium but not flashy
- fast
- calm
- visually polished
- easy to scan
- credible for technical readers
- simple enough that visitors understand the page in seconds

Prioritize clarity, taste, performance, and maintainability over novelty.

## UX principles

Every page should have one clear purpose.

Prefer simple user flows:
- Home → featured projects → project detail
- Home → writing → article
- Home → contact / GitHub / LinkedIn
- Project card → problem, solution, impact, stack, links
- Blog post → readable technical explanation with code and diagrams when useful

Avoid unnecessary modals, carousels, hidden navigation, complex animations, scroll hijacking, and over-designed interactions.

Use progressive disclosure:
- short summary first
- details below
- technical depth on project/detail pages

## Visual design direction

Aim for a clean, modern, editorial developer aesthetic.

Use:
- strong typography
- generous spacing
- clear hierarchy
- subtle borders
- soft shadows only when helpful
- restrained gradients
- meaningful accent color
- high-quality project cards
- consistent rounded corners
- responsive layouts
- dark mode if already supported or easy to add

Avoid:
- generic SaaS landing-page bloat
- excessive glassmorphism
- neon cyberpunk clichés
- too many animations
- tiny text
- low contrast
- layout shifts
- inconsistent spacing

## Components

Prefer reusable Astro components.

Common components should include:
- `Hero`
- `Section`
- `ProjectCard`
- `ExperienceItem`
- `ArticleCard`
- `Tag`
- `Button`
- `ExternalLink`
- `Container`
- `Prose`
- `Navbar`
- `Footer`

Keep components small and readable.

Use framework islands only when interactivity is truly needed. Prefer static Astro components by default.

## Content model

For projects, use a consistent structure:
- title
- one-line summary
- problem
- solution
- impact
- tech stack
- links
- screenshots or visuals if available

For ML/AI projects, prefer explaining:
- dataset or context
- model/system design
- evaluation
- tradeoffs
- deployment/runtime constraints
- business or user impact

Do not invent metrics, employers, publications, or project results.

## Performance rules

Astro should ship as little JavaScript as possible.

Prefer:
- static rendering
- Astro components
- optimized images
- responsive image sizes
- lazy loading below the fold
- CSS over JS animations
- system fonts or carefully optimized local fonts
- minimal third-party scripts

Avoid:
- client-side React/Vue/Svelte unless needed
- large animation libraries for tiny effects
- heavy icon packs imported wholesale
- analytics scripts that block rendering
- layout shift from images without dimensions

Before finishing significant UI work, check:
- `pnpm build`
- `pnpm astro check` if available
- no obvious console errors
- no broken links introduced
- mobile layout works
- keyboard navigation is not broken
- text contrast is acceptable

## Accessibility

All interactive elements must be keyboard accessible.

Use semantic HTML:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

Images need meaningful `alt` text unless decorative.

Do not remove visible focus states.

Respect reduced motion:
- avoid mandatory motion
- keep transitions subtle
- use `prefers-reduced-motion` where appropriate

## Astro conventions

Use Astro content collections for structured projects, blog posts, notes, or case studies when appropriate.

Prefer `.astro` components for static UI.

Use MDX only when posts need custom components.

Use `Astro.props` clearly and type props when possible.

Avoid unnecessary client directives:
- do not use `client:load` unless the component must hydrate immediately
- prefer `client:visible` for below-the-fold interactive islands
- prefer no hydration for static UI

## Styling

Use the project’s existing styling system.

If Tailwind is present:
- use Tailwind consistently
- extract repeated patterns into components
- avoid huge unreadable class strings when a component abstraction would help

If CSS modules or global CSS are present:
- keep naming consistent
- avoid one-off hacks

Do not introduce a new styling system without a strong reason.

## Animation

Animations should improve comprehension, not distract.

Good:
- subtle hover states
- gentle page transitions
- small reveal effects
- smooth focus/active states

Bad:
- long intro animations
- constant motion
- scroll-jacking
- animations that delay content

## Copywriting

Write concise, confident copy.

Prefer concrete language:
- "Built a retrieval pipeline for X"
- "Reduced manual review by Y" only if verified
- "Designed an evaluation harness for..."

Avoid vague phrases:
- "passionate about technology"
- "cutting-edge solutions"
- "leveraging AI to revolutionize"

## When making changes

Before editing, inspect the existing structure and style.

Do not rewrite the whole site unless asked.

Preserve existing behavior unless the task asks to change it.

When improving design:
- identify the weak UX point
- improve hierarchy, spacing, contrast, and flow
- keep the implementation simple

When adding dependencies:
- explain why the dependency is worth it
- prefer Astro-native or lightweight packages
- avoid adding dependencies for things CSS can do

## Done criteria

A change is done when:
- it builds
- it is responsive
- it improves clarity or usability
- it does not add unnecessary JavaScript
- visual style is consistent with the site
- the final answer summarizes what changed and any tradeoffs