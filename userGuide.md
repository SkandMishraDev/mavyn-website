# Mavyn LLC Website - User Guide

## Website Overview

**Website URL:** mavyn.ae (when deployed)

**Purpose:** Showcase Mavyn LLC's integrated banking compliance, digital transformation, and customer experience services to SMEs and fintech companies in the UAE.

**Access:** Public website - no login required

---

## Powered by Manus

This website is built with cutting-edge technology:

- **Frontend:** React 19 with TypeScript and Tailwind CSS 4 for responsive, modern design
- **Architecture:** Single-page application with custom hash-based routing for seamless navigation
- **UI Components:** Custom-built components with smooth animations and transitions
- **Styling:** Tailwind CSS with indigo and purple gradient theme
- **Deployment:** Auto-scaling infrastructure with global CDN for fast, reliable performance worldwide

---

## Using Your Website

### Navigating the Site

The website features a clean, intuitive navigation structure accessible from the header on every page:

1. **Home Page** - Click the "MAVYN" logo to return to the homepage anytime
2. **About Us** - Learn about the company and meet the founders
3. **Services** - Browse all five service offerings with detailed descriptions
4. **Why MAVYN** - Understand what sets Mavyn apart from competitors
5. **Contact Us** - Reach out with inquiries or project requests

### Main Features

**Services Showcase**

The website highlights five core services:

- **Compliance & KYC/AML** - Achieve CBUAE compliance with predictable costs
- **Onboarding-as-a-Service** - Acquire and onboard SME clients in hours
- **Digital Journey Transformation** - Convert manual processes to seamless digital experiences
- **Customer Experience & NPS** - Drive actionable CX improvements through data
- **Business Advisory** - Expert banking support for account opening and trade finance

Click "Learn More" on any service card to view detailed information, pricing options, and specific deliverables.

**Contact Form**

The contact page includes a simple form to submit inquiries. Fill in your name, email, phone, company, and message, then click "Send Message." You'll receive a confirmation notification.

**Mobile-Friendly Design**

The website automatically adapts to mobile, tablet, and desktop screens. On mobile devices, the navigation menu collapses into a hamburger icon - tap it to reveal all navigation options.

---

## Managing Your Website

### Using the Management UI

After deployment, you can manage your website through the Management UI:

- **Settings Panel** - Update website title, logo, and visibility settings
- **Dashboard** - Monitor visitor analytics and site performance
- **Database** - Manage any dynamic content (if applicable)
- **Domains** - Bind your custom domain (mavyn.ae) or modify the auto-generated domain

### Updating Content

To modify website content such as service descriptions, team bios, or contact information:

1. Contact Manus AI with your requested changes
2. Provide the specific text or information to update
3. Specify which page or section needs modification
4. Changes will be deployed automatically

### Customization Options

The website supports customization for:

- Service offerings and descriptions
- Team member profiles and photos
- Contact information and business hours
- Color scheme and branding elements
- Additional pages or sections

---

## Next Steps

Talk to Manus AI anytime to request changes, add new features, or optimize your website further. Whether you need to add a blog section, integrate a booking system, or modify service offerings, we're here to help.

Your website is now ready to attract and convert SME clients. Start sharing mavyn.ae with your target audience and watch your business grow!

---

## Technical Details for Developers

### Project Structure

```
mavyn-website/
├── client/
│   ├── src/
│   │   ├── pages/           # Page components
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React contexts (Router, Theme)
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── public/              # Static assets
│   └── index.html           # HTML template
├── netlify.toml             # Netlify deployment config
├── public/_redirects        # SPA routing rules
└── package.json             # Dependencies
```

### Key Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Fast build tool
- **Custom Router** - Hash-based SPA routing

### Building and Deploying

To build the project locally:

```bash
pnpm install
pnpm build
```

The build output goes to the `dist/` directory, which is automatically deployed to Netlify.

### Environment Variables

The website doesn't require environment variables for basic functionality. All configuration is handled through the Management UI.

---

## Support and Feedback

For technical issues, feature requests, or general feedback, reach out to Manus AI. We're committed to making your website the best representation of Mavyn LLC's services.
