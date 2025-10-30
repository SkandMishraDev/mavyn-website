# Mavyn LLC Website - Deployment Guide

## Quick Start

Your Mavyn LLC website is ready for deployment! Follow these steps to get your site live on mavyn.ae.

---

## Option 1: Deploy to Netlify (Recommended)

Netlify is the easiest way to deploy your React website. It offers free hosting, automatic SSL, and continuous deployment.

### Step 1: Extract the Project

1. Download the `mavyn-website.zip` file
2. Extract it to your desired location on your computer

### Step 2: Create a Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" and create a free account
3. Verify your email address

### Step 3: Connect Your Repository

**Option A: Using GitHub (Recommended)**

1. Push your project to GitHub:
   ```bash
   cd mavyn-website
   git init
   git add .
   git commit -m "Initial commit: Mavyn LLC website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mavyn-website.git
   git push -u origin main
   ```

2. In Netlify, click "New site from Git"
3. Select GitHub and authorize Netlify
4. Choose your `mavyn-website` repository
5. Configure build settings:
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

**Option B: Direct Upload (Faster for Testing)**

1. In Netlify, click "Deploy manually"
2. Drag and drop the entire `mavyn-website` folder
3. Netlify will build and deploy automatically

### Step 4: Configure Your Domain

1. In Netlify dashboard, go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Enter `mavyn.ae`
4. Follow the instructions to update your domain's DNS records with your domain registrar
5. Wait for DNS propagation (usually 24-48 hours)

### Step 5: Enable HTTPS

Netlify automatically provides free SSL/TLS certificates. HTTPS should be enabled by default.

---

## Option 2: Deploy to Vercel

Vercel is another excellent option with similar features to Netlify.

### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or email
3. Verify your account

### Step 2: Import Your Project

1. Click "Add New..." → "Project"
2. Select "Import Git Repository"
3. Paste your GitHub repository URL
4. Vercel will auto-detect it's a React/Vite project
5. Click "Deploy"

### Step 3: Connect Your Domain

1. Go to project settings → "Domains"
2. Add `mavyn.ae`
3. Update DNS records as instructed
4. Wait for verification

---

## Option 3: Deploy to AWS Amplify

AWS Amplify offers free tier hosting with good performance.

### Step 1: Connect GitHub

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select GitHub and authorize
4. Choose your `mavyn-website` repository

### Step 2: Configure Build Settings

1. Build command: `pnpm build`
2. Build output directory: `dist`
3. Click "Save and deploy"

### Step 3: Add Custom Domain

1. In Amplify console, go to "Domain management"
2. Click "Add domain"
3. Enter `mavyn.ae`
4. Update DNS records with your registrar

---

## Local Development (Before Deployment)

To test your website locally before deploying:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173 in your browser
```

To build for production:

```bash
# Build the project
pnpm build

# Preview the production build
pnpm preview
```

---

## Project Structure

```
mavyn-website/
├── client/
│   ├── src/
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── ServiceDetail.tsx
│   │   │   ├── OurModel.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── NotFound.tsx
│   │   ├── components/         # Reusable components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Link.tsx
│   │   │   └── ui/
│   │   │       └── Icons.tsx
│   │   ├── contexts/           # React contexts
│   │   │   ├── RouterContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/                # Utilities
│   │   │   └── utils.ts
│   │   ├── App.tsx             # Main app component
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── public/                 # Static assets
│   │   └── _redirects          # SPA routing rules
│   └── index.html              # HTML template
├── netlify.toml                # Netlify configuration
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── userGuide.md                # User documentation
```

---

## Key Files for Deployment

### netlify.toml
Configures Netlify build and deployment settings. Includes:
- Build command: `pnpm build`
- Publish directory: `dist`
- SPA routing rules
- Cache settings
- Security headers

### public/_redirects
Ensures all routes are handled by the React router for proper SPA navigation.

### package.json
Contains all dependencies and build scripts. Key scripts:
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

---

## Environment Variables

The website doesn't require environment variables for basic functionality. All configuration is handled through the Netlify/Vercel dashboard if needed in the future.

---

## Post-Deployment Checklist

After deploying to your domain (mavyn.ae), verify:

- [ ] Website loads at https://mavyn.ae
- [ ] All pages are accessible (Home, About Us, Services, Why MAVYN, Contact)
- [ ] Navigation works correctly
- [ ] Services dropdown menu functions
- [ ] Mobile menu works on small screens
- [ ] Contact form submits successfully
- [ ] All links are working
- [ ] Images load correctly
- [ ] HTTPS is enabled
- [ ] Page loads quickly

---

## Updating Your Website

To make changes after deployment:

1. Edit files in your local project
2. Commit and push changes to GitHub:
   ```bash
   git add .
   git commit -m "Update: Description of changes"
   git push
   ```
3. Netlify/Vercel automatically rebuilds and deploys your changes
4. Changes appear on mavyn.ae within minutes

---

## Customization Guide

### Changing Colors

Edit `client/src/index.css` to modify the color palette. The website uses Tailwind CSS with indigo and purple as primary colors.

### Updating Content

Edit the respective page files in `client/src/pages/`:
- `Home.tsx` - Homepage content
- `AboutUs.tsx` - Team and company information
- `Services.tsx` - Services listing
- `ServiceDetail.tsx` - Individual service details
- `OurModel.tsx` - Why MAVYN page
- `Contact.tsx` - Contact form and information

### Adding New Pages

1. Create a new file in `client/src/pages/`
2. Add the route in `App.tsx`
3. Update the Header navigation if needed

---

## Troubleshooting

### Build Fails

**Error: "pnpm: command not found"**
- Install pnpm: `npm install -g pnpm`

**Error: "Module not found"**
- Run `pnpm install` to install dependencies

### Website Shows 404

- Check that `_redirects` file exists in `public/` folder
- Verify `netlify.toml` has correct publish directory: `dist`

### Domain Not Working

- Wait 24-48 hours for DNS propagation
- Check DNS records are correctly configured
- Verify domain is pointing to Netlify/Vercel nameservers

### Slow Performance

- Check Netlify/Vercel analytics
- Optimize images in the project
- Enable caching in deployment settings

---

## Support

For technical issues or questions about deployment:

1. Check Netlify/Vercel documentation
2. Review the userGuide.md file in the project
3. Contact Manus AI for assistance

---

## Next Steps

1. **Extract the project** from the ZIP file
2. **Choose a deployment platform** (Netlify recommended)
3. **Follow the deployment steps** for your chosen platform
4. **Configure your domain** (mavyn.ae)
5. **Test all functionality** after deployment
6. **Share your website** with your audience!

Your Mavyn LLC website is now ready to showcase your services to the world. Good luck! 🚀
