# Shamba Website

A geospatial smallholder CRM system website built with Next.js and Strapi CMS.

## Project Structure

```
/
├── frontend/          # Next.js application
│   ├── app/          # App Router pages
│   ├── components/   # React components
│   ├── lib/          # Utilities, API client
│   └── public/       # Static assets
├── backend/          # Strapi CMS (to be set up)
└── package.json      # Root workspace config
```

## Tech Stack

- **Frontend**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Strapi CMS v5 (headless CMS)
- **Styling**: Tailwind CSS with custom Shamba brand colors
- **Font**: Geist Sans (placeholder for LT Superior)

## Shamba Brand Colors

The design system uses these colors:

### Brand Core
- **Forest Green** (#1F3D2B) - Primary brand color
- **Deep Moss** (#2F5D3A) - Secondary brand color
- **Sage Green** (#8FB996) - Accent color

### Backgrounds
- **Off-White** (#F6F5F1) - Main background
- **Sand** (#EEECE6) - Secondary background
- **Light Clay** (#E4E1D8) - Tertiary background

### Text Colors
- **Charcoal** (#1E1E1E) - Primary text
- **Muted Charcoal** (#4A4A4A) - Secondary text
- **Warm Grey** (#7A7A7A) - Tertiary text

### Accent Colors
- **Rich Earth** (#7A5C3E)
- **Burnt Clay** (#C46A3A)
- **Harvest Gold** (#E1B75A)

### Status Colors
- **Success**: #2E7D32 (light: #E6F4EA)
- **Warning**: #F2A900 (light: #FFF4D6)
- **Error**: #C0392B (light: #FCEAEA)
- **Info**: #4E7F7A (light: #EAF3F2)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cd frontend
   cp .env.example .env.local
   # Edit .env.local with your Strapi URL
   ```

### Running the Development Server

#### Frontend Only

```bash
npm run dev:frontend
```

The Next.js app will be available at [http://localhost:3000](http://localhost:3000)

#### Frontend + Backend (once Strapi is set up)

```bash
npm run dev
```

This runs both Next.js (port 3000) and Strapi (port 1337) concurrently.

### Adding Hero Video (Optional)

The homepage features a full-screen video background. To add your video:

1. **Prepare your video**
   - Format: MP4 (H.264 codec recommended)
   - Resolution: 1920x1080 (Full HD) or higher
   - Duration: 10-30 seconds (will loop automatically)
   - File size: Keep under 5MB for optimal loading

2. **Add video file**
   ```bash
   # Place your video in the public directory
   cp your-video.mp4 frontend/public/videos/hero-background.mp4
   ```

3. **Alternative: Use a static image**

   If you prefer an image instead of video, or want better mobile performance, see instructions in `frontend/public/videos/README.md`

**Video Content Ideas**: Farmers working in fields, agricultural landscapes, drone footage, technology in agriculture, local organizations supporting farmers.

**Stock Video Resources**: Pexels Videos, Pixabay, or Unsplash for free agriculture/farming footage.

> Note: The hero section includes a beautiful gradient fallback, so the site looks great even without a video!

## Setting Up Strapi Backend

To set up the Strapi CMS backend:

1. **Create Strapi app**
   ```bash
   npx create-strapi-app@latest backend --quickstart --typescript
   ```

2. **Create an admin account**
   - Visit [http://localhost:1337/admin](http://localhost:1337/admin)
   - Complete the admin registration form

3. **Create Content Types**

   In the Strapi admin panel, create these collection types:

   **Feature** (Collection Type)
   - `name` (Text, required)
   - `description` (Rich Text, required)
   - `icon` (Media, optional)
   - `order` (Number, required)

   **Team Member** (Collection Type)
   - `name` (Text, required)
   - `role` (Text, required)
   - `bio` (Rich Text, required)
   - `photo` (Media, optional)

   **Page** (Collection Type) - for dynamic pages
   - `title` (Text, required)
   - `slug` (UID, required, linked to title)
   - `content` (Rich Text, required)

4. **Configure Permissions**
   - Go to Settings → Users & Permissions Plugin → Roles → Public
   - Enable `find` and `findOne` for Feature, Team Member, and Page

5. **Configure CORS**
   - Edit `backend/config/middlewares.ts`
   - Add `http://localhost:3000` to allowed origins

## Pages

- `/` - Homepage with hero and features overview
- `/features` - Detailed features page
- `/about` - About and mission page

## Development

### Adding a New Component

shadcn components can be added using:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add dialog
```

### Project Scripts

- `npm run dev` - Run both frontend and backend
- `npm run dev:frontend` - Run Next.js only
- `npm run dev:backend` - Run Strapi only
- `npm run build` - Build both frontend and backend

## Customization

### Fonts

The project currently uses Geist Sans. To use LT Superior:

1. Add font files to `frontend/public/fonts/`
2. Update `frontend/app/layout.tsx` to use `next/font/local`
3. Update CSS variables in `frontend/app/globals.css`

### Colors

All colors are defined in `frontend/app/globals.css` using CSS custom properties and can be referenced via Tailwind classes:

```tsx
<div className="bg-primary text-primary-foreground">
  Shamba Forest Green
</div>

<div className="bg-accent text-accent-foreground">
  Sage Green
</div>
```

## Deployment

### Frontend (Vercel)

1. Connect your repository to Vercel
2. Set environment variables:
   - `NEXT_PUBLIC_STRAPI_API_URL` - Your Strapi URL

### Backend (Strapi Cloud or VPS)

1. Choose a hosting provider (Strapi Cloud, Heroku, DigitalOcean, etc.)
2. Configure database (PostgreSQL recommended for production)
3. Set environment variables for your hosting platform
4. Deploy using your provider's deployment process

## License

[Your License Here]

## Support

For issues and questions, please open an issue in the repository.
