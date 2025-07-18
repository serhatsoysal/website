# Serhat Soysal - Personal Website

A modern, responsive personal website built with React.js, Tailwind CSS, and Framer Motion. Features a clean design with dark mode support, project showcase, technical blog, and contact form.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional layout
- **Dark Mode**: Toggleable dark/light theme with system preference detection
- **Responsive**: Mobile-first design that works on all devices
- **Fast & Optimized**: Built with performance in mind
- **SEO Friendly**: Proper meta tags and structured data
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Blog System**: Markdown-based blog with syntax highlighting
- **Project Showcase**: Interactive project cards with filtering
- **Contact Form**: Functional contact form with mailto integration

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Blog**: React Markdown with syntax highlighting
- **Icons**: Feather Icons (react-icons)
- **SEO**: React Helmet

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/serhatsoysal/serhatsoysal.com.git
   cd serhatsoysal.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.js    # Navigation bar
│   └── Footer.js        # Footer component
├── pages/               # Page components
│   ├── Home.js          # Hero section and main landing
│   ├── About.js         # About page with tech stack
│   ├── Projects.js      # Projects showcase
│   ├── Blog.js          # Blog listing
│   ├── BlogPost.js      # Individual blog post
│   ├── Contact.js       # Contact form
│   └── NotFound.js      # 404 page
├── data/                # Static data
│   ├── projects.js      # Project information
│   └── blogPosts.js     # Blog metadata
├── blogs/               # Markdown blog posts
│   ├── *.md            # Blog post files
├── hooks/               # Custom React hooks
│   └── useDarkMode.js   # Dark mode functionality
├── App.js               # Main app component
├── index.js             # Entry point
└── index.css            # Global styles
```

## 📝 Content Management

### Adding Projects

Edit `src/data/projects.js` to add or modify projects:

```javascript
{
  id: 1,
  name: "Project Name",
  description: "Project description",
  technologies: ["React", "Node.js", "MongoDB"],
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/username/repo",
  imageUrl: "/images/project.jpg",
  featured: true
}
```

### Adding Blog Posts

1. Add metadata to `src/data/blogPosts.js`:
```javascript
{
  id: 1,
  title: "Blog Post Title",
  slug: "blog-post-slug",
  excerpt: "Brief description",
  date: "2024-01-15",
  tags: ["React", "JavaScript"],
  readTime: "5 min read",
  published: true
}
```

2. Create markdown file in `src/blogs/` with the same slug:
```markdown
# Blog Post Title

Your content here...
```

### Customizing Content

- **Personal Information**: Edit the content in `src/pages/About.js`
- **Tech Stack**: Update the `techStack` array in `src/pages/About.js`
- **Social Links**: Modify `socialLinks` in `src/components/Footer.js`
- **Contact Email**: Update email addresses in `src/pages/Contact.js`
- **Profile Photo**: Replace the avatar placeholder in `src/pages/Home.js` with your professional photo:
  ```jsx
  // Replace this section in Home.js:
  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
    <span className="text-4xl font-bold text-white">SS</span>
  </div>
  
  // With this:
  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
    <img src="/path/to/your/photo.jpg" alt="Serhat Soysal" className="w-full h-full object-cover" />
  </div>
  ```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Blue color palette
    500: '#0ea5e9',
    600: '#0284c7',
    // ... other shades
  }
}
```

### Fonts

The website uses Inter font from Google Fonts. You can change it in:
- `public/index.html` (Google Fonts link)
- `tailwind.config.js` (font family configuration)

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to Netlify

### Vercel

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://serhatsoysal.github.io/serhatsoysal.com",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_SITE_URL=https://serhatsoysal.com
REACT_APP_CONTACT_EMAIL=serhat@serhatsoysal.com
```

## 📱 Progressive Web App

The website is configured as a PWA with:
- Service worker for offline functionality
- Web app manifest for install prompts
- Optimized loading and caching

## 🔍 SEO Optimization

- Meta tags for social sharing
- Structured data markup
- Semantic HTML structure
- Optimized images and loading
- Sitemap generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by Feather Icons
- Animations by Framer Motion
- Built with Create React App

---

**Live Demo**: [serhatsoysal.com](https://serhatsoysal.com)

**Contact**: [serhat@serhatsoysal.com](mailto:serhat@serhatsoysal.com) 