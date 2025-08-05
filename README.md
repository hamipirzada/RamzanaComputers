# Ramzana Computers - Professional Training Institute

A modern, responsive multi-page React website for Ramzana Computers, a professional training institute based in Jammu & Kashmir offering certified computer and technical courses.

## 🚀 Features

- **Modern Design**: SaaS-style gradients with teal (#00838F) and navy (#012A4A) color scheme
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Multi-page Navigation**: Complete routing with React Router DOM
- **Interactive Components**: Hero carousel, expandable course cards, contact forms
- **Professional Animations**: Smooth transitions, hover effects, and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📱 Pages & Components

### Pages Created:
1. **Home** (`/`) - Hero carousel, featured courses, certifications, contact section
2. **Courses** (`/courses`) - Complete course listings with detailed information
3. **Contact** (`/contact`) - Dedicated contact page with form and location details
4. **About** (`/about`) - Mission, values, methodology, and accreditation information

### Key Components:
- **Layout.tsx** - Main layout with responsive navigation and footer
- **HeroCarousel.tsx** - Full-width image carousel with 4 slides
- **FeaturedCourses.tsx** - Interactive course cards for homepage
- **CertificationSection.tsx** - Government certification badges
- **ContactSection.tsx** - Contact information and quick actions

### Course Programs:
1. **Certified Data Entry & Office Assistant** (3 months)
2. **Certified Computer Application, Accounting & Publishing Assistant** (6 months)
3. **Product Assembly Assistant (Solar-LED)** (4 months)

### Government Certifications:
- ACC, BCC, CCC, CCC+, ECC

## 🛠️ Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom color palette
- **React Router DOM** for multi-page navigation
- **Lucide React** for consistent iconography
- **Swiper.js** for carousel functionality

## 🏃‍♂️ How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## 📧 Contact Form Integration

The contact form currently stores submissions locally in browser storage and logs to console. To extend with backend integration:

1. **Replace localStorage with API calls** in `Contact.tsx` and `ContactSection.tsx`
2. **Add form validation library** like Formik or React Hook Form
3. **Implement email service** (EmailJS, Nodemailer, etc.)
4. **Add database storage** for form submissions

## 🎨 Design Features

- **Hero Carousel**: 4 rotating slides with professional imagery
- **SaaS Gradients**: Subtle blue-to-teal gradients throughout
- **Interactive Cards**: Hover effects with smooth animations
- **Mobile Navigation**: Collapsible hamburger menu
- **Consistent Branding**: Teal and navy color scheme with Inter font
- **Professional Layout**: Clean spacing and typography hierarchy

## 📍 Contact Information

- **Address**: Duroo Sopore Tehsil – Dangerpora, District Baramulla, Jammu & Kashmir, India
- **Phone**: 7006487735
- **Email**: rcinstitute2022@gmail.com
- **Hours**: M-F 9-6, Sat 9-4, Sun Closed

## 🔧 Future Enhancements

- Add individual course detail pages (`/courses/:id`)
- Implement student portal/dashboard
- Add online enrollment system
- Integrate payment gateway
- Add testimonials and success stories
- Implement blog/news section
- Add multi-language support (Hindi/Urdu)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

The website is built with a mobile-first approach ensuring optimal performance and user experience across all devices.