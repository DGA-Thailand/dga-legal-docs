# Legal Documents Website - Requirements Summary

## Project Overview
A clean, simple content website built with Next.js and Sveltia CMS, focused on legal documentation including privacy notices and terms & conditions. The site follows a headless architecture with minimal design principles.

## Core Technologies
- **Framework**: Next.js 15 with App Router
- **CMS**: Sveltia CMS (headless, Git-based)
- **Styling**: Tailwind CSS
- **UI Components**: HeadlessUI for accessible components
- **Typography**: Noto Sans Thai font for Thai language support
- **Content Format**: Markdown with gray-matter frontmatter parsing

## Language & Localization
- **Primary Language**: Thai (th)
- **Font**: Noto Sans Thai with Latin fallback
- **Date Formatting**: Thai locale (th-TH)
- **All UI text, navigation, and content in Thai**

## Content Structure
### Privacy Notices (`/content/privacy/`)
- General Privacy Policy (นโยบายความเป็นส่วนตัวทั่วไป)
- Cookie Policy (นโยบายคุกกี้)

### Terms & Conditions (`/content/terms/`)
- Terms of Service (ข้อกำหนดการให้บริการ)
- Payment Terms (ข้อกำหนดการชำระเงิน)

### Content Fields
- `title`: Document title
- `description`: Brief description
- `version`: Document version number
- `lastUpdated`: Last modification date
- `effectiveDate`: When document becomes effective
- `body`: Full document content in Markdown

## Site Structure
### Pages
- **Homepage** (`/`): Overview with recent content from both collections
- **Privacy Notices** (`/privacy`): List all privacy documents
- **Individual Privacy** (`/privacy/[slug]`): Single privacy document view
- **Terms & Conditions** (`/terms`): List all terms documents
- **Individual Terms** (`/terms/[slug]`): Single terms document view
- **API Documentation** (`/api-docs`): Interactive API documentation

### Navigation
- **Header**: Minimal design with dropdown menus using HeadlessUI
- **Desktop**: Horizontal navigation with dropdown menus for Privacy and Terms
- **Mobile**: Hamburger menu with collapsible sections
- **Footer**: Simple copyright notice

## API Endpoints (Headless Access)
### Content APIs
- `GET /api/privacy` - All privacy notices
- `GET /api/privacy/{slug}` - Specific privacy notice
- `GET /api/terms` - All terms & conditions
- `GET /api/terms/{slug}` - Specific terms document

### Generic Content API
- `GET /api/content/{collection}` - Flexible content access with pagination
- `GET /api/content/{collection}/{slug}` - Specific content by collection and slug

### Search & Utilities
- `GET /api/search?q={query}` - Full-text search with relevance scoring
- `GET /api/stats` - Content statistics and counts
- `GET /api/docs` - API documentation as JSON
- `GET /api` - API root with endpoint listing

### API Features
- **Pagination**: `page` and `limit` parameters
- **Search**: Query across title, description, and body content
- **Error Handling**: Proper HTTP status codes and Thai error messages
- **Response Format**: Consistent JSON structure with success/error states
- **Timestamps**: ISO timestamps on all responses

## Design Principles
### Visual Design
- **Minimal & Clean**: Focus on content readability
- **Typography-First**: Clean fonts and proper spacing for Thai text
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant with proper ARIA attributes

### Color Scheme
- **Primary**: Gray-900 for headings and important text
- **Secondary**: Gray-600 for body text and navigation
- **Backgrounds**: White primary, Gray-50 for sections
- **Borders**: Gray-200 for subtle divisions

### Layout
- **Max Width**: 4xl (896px) for optimal reading
- **Spacing**: Generous whitespace and padding
- **Grid**: CSS Grid for responsive layouts
- **Cards**: Subtle shadows and borders for content grouping

## CMS Configuration
### Sveltia CMS Setup
- **Admin Interface**: `/admin` with Sveltia CMS
- **Authentication**: Git Gateway (requires setup for production)
- **Content Storage**: Git-based in `/content` folder
- **Media**: `/public/images` folder

### Collections Configuration
\`\`\`yaml
collections:
  - name: "privacy"
    label: "ประกาศความเป็นส่วนตัว"
    folder: "content/privacy"
    
  - name: "terms"
    label: "ข้อกำหนดและเงื่อนไข"
    folder: "content/terms"
\`\`\`

## Technical Requirements
### Dependencies
\`\`\`json
{
  "next": "15.1.0",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "react-markdown": "^9.0.1",
  "gray-matter": "^4.0.3",
  "@headlessui/react": "^2.0.4",
  "@heroicons/react": "^2.0.18"
}
\`\`\`

### File Structure
\`\`\`
├── app/
│   ├── api/                    # API routes
│   ├── privacy/                # Privacy pages
│   ├── terms/                  # Terms pages
│   ├── api-docs/               # API documentation
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/
│   ├── header.tsx              # Main navigation
│   ├── footer.tsx              # Site footer
│   └── mobile-menu.tsx         # Mobile navigation
├── content/
│   ├── privacy/                # Privacy notices (Markdown)
│   └── terms/                  # Terms & conditions (Markdown)
├── lib/
│   ├── content.ts              # Content fetching utilities
│   └── api-types.ts            # TypeScript API interfaces
└── public/
    └── admin/                  # Sveltia CMS configuration
\`\`\`

## Content Management Workflow
1. **Content Creation**: Use Sveltia CMS admin interface at `/admin`
2. **Version Control**: All changes tracked in Git
3. **Publishing**: Automatic deployment on Git commits
4. **Content Access**: Available via web pages and API endpoints

## Performance & SEO
- **Static Generation**: Pre-rendered pages for fast loading
- **Responsive Images**: Optimized image handling
- **Clean URLs**: SEO-friendly URL structure
- **Meta Tags**: Proper Thai language meta tags
- **Sitemap**: Auto-generated from content

## Deployment Requirements
### Environment Variables
- `NEXT_PUBLIC_API_URL`: Base URL for API documentation

### Production Setup
1. Deploy to Vercel or similar platform
2. Configure Git Gateway for CMS authentication
3. Set up custom domain if required
4. Configure environment variables

## Future Enhancements (Suggested)
- Multi-language support (Thai/English toggle)
- Document versioning and history
- PDF export functionality
- Email notifications for document updates
- Advanced search with filters
- Document analytics and usage tracking
- API authentication and rate limiting
- GraphQL endpoint for flexible queries

## Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus indicators
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Thai Language Support**: Proper language attributes and fonts

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers
- Responsive design for all screen sizes

---

*This requirements document serves as the complete specification for the Legal Documents Website project, covering all implemented features and technical decisions.*
