# MD. Tanvir Rana — IT Support & Networking Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive, production-quality personal portfolio website for **MD. Tanvir Rana**, an aspiring IT Support and Networking professional currently completing a Diploma in Computer Science and Technology (7th Semester) at Jashore Polytechnic Institute.

Designed for academic presentations, internship applications, and entry-level IT Support & Network Administration opportunities.

---

## 🌟 Key Features

- **Cyber & Networking Aesthetic**: Engineered with Deep Navy (`#071426`), Dark Blue (`#0B1F38`), Electric Blue (`#168BFF`), and Cyan (`#36D9FF`).
- **Theme Switcher**: Instant Dark Mode and Light Mode switching with `localStorage` memory.
- **Interactive Network & Hardware Labs**:
  - **Cisco Packet Tracer — Routing & Networking Labs**: Complete with custom vector network topology schematics, VLAN isolation, router-on-a-stick, and ACL testing notes.
  - **Routing Protocol Configuration Lab**: Dynamic routing convergence models (OSPF Area 0, RIPv2, Static/Default routes) with CLI tables.
  - **PC Assembly & Windows Installation**: Desktop hardware workstation architecture, UEFI/GPT installation, and driver setups.
- **Categorized Technical Competencies**: Filterable categories across Networking & Routing, IT Support & Hardware Diagnostics, Tools & Platforms, and Additional Skills.
- **Academic & Credential Verification**: Jashore Polytechnic Institute and Jashore TTC qualifications with verified status badges.
- **Printable CV & PDF Download**: Formatted curriculum vitae with browser "Print to PDF" and downloadable resume configuration.
- **Direct Communication**: Validated contact form with automatic mailto fallback and one-click copy buttons for phone and email.

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js** (version 18 or newer) installed:
```bash
node -v
```

### 2. Installation
Clone or extract the repository, then install dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in your terminal).

### 4. Build for Production
```bash
npm run build
```
The optimized production files will be built into the `dist/` folder.

---

## 📤 How to Upload to GitHub

Follow these steps to upload this project as a new repository on your GitHub account:

### Step 1: Create a New GitHub Repository
1. Log in to [GitHub.com](https://github.com).
2. Click the **`+`** icon in the top right and select **New repository**.
3. Name your repository (e.g., `tanvir-it-portfolio` or `portfolio`).
4. Set it to **Public**.
5. **Do not** initialize with a README, .gitignore, or license (these are already included in this project).
6. Click **Create repository**.

### Step 2: Push Your Code via Git Terminal
Open a terminal in the root folder of this project and run:

```bash
# 1. Initialize git
git init

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "Initial commit: MD. Tanvir Rana IT Support & Networking Portfolio"

# 4. Set default branch to main
git branch -M main

# 5. Connect to your GitHub repository (replace with your actual URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git

# 6. Push code to GitHub
git push -u origin main
```

---

## 🌐 Free 1-Click Hosting Options

Once your repository is on GitHub, you can publish it online for free in under 2 minutes:

### Option A: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project** and select your portfolio repository.
3. Keep default settings (Framework: Vite).
4. Click **Deploy**. Your site will be live instantly with a free `.vercel.app` URL and free SSL!

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Select your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy**.

---

## 📁 Project Structure

```text
├── public/                 # Static public assets (CV, profile photo, zip)
├── src/
│   ├── components/         # Reusable modular UI components
│   │   ├── Navbar.tsx      # Sticky 3-zone top bar & theme toggle
│   │   ├── Hero.tsx        # Hero profile, bio, CTAs & photo uploader
│   │   ├── About.tsx       # Academic background & practical learning
│   │   ├── Skills.tsx      # Categorized skills with filter tabs
│   │   ├── Projects.tsx    # Lab cards & architecture preview
│   │   ├── ProjectModal.tsx# Detailed lab modal & CLI configurations
│   │   ├── ProjectSchematics.tsx # Vector network diagrams & hardware schematics
│   │   ├── Training.tsx    # Jashore TTC vocational credentials
│   │   ├── Education.tsx   # Jashore Polytechnic Institute timeline
│   │   ├── CareerGoals.tsx # Career focus pillars
│   │   ├── Contact.tsx     # Contact info & validated message form
│   │   ├── CvModal.tsx     # Printable CV dialog & download buttons
│   │   └── Footer.tsx      # Quick links & brand copyright
│   ├── context/
│   │   └── ThemeContext.tsx# Dark/Light theme manager (persisted)
│   ├── data/
│   │   └── portfolioData.ts# Centralized information (easily editable)
│   ├── types/
│   │   └── index.ts        # TypeScript definitions
│   ├── App.tsx             # Root application view
│   ├── index.css           # Tailwind CSS styles & print media rules
│   └── main.tsx            # Application entry point
├── index.html              # HTML shell & SEO OpenGraph tags
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler configuration
```

---

## ✏️ Customization Tips

- **Update Info**: Edit `src/data/portfolioData.ts` to change phone, email, bio, or credentials.
- **Add Photo**: Place `tanvir-photo.png` in `public/` or click the "Add Photo" button in the hero section.
- **Add PDF CV**: Place your resume as `public/tanvir-rana-cv.pdf` and change `available: true` in `src/data/portfolioData.ts`.
- **Add Social Links**: Update GitHub and LinkedIn links in `src/components/Contact.tsx`.

---

**MD. Tanvir Rana** — *Learn • Build • Troubleshoot*
