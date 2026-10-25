# Tanvir Rana - IT Support & Networking Portfolio 🚀

A modern, responsive, animated portfolio website tailored for **Tanvir Rana** — Entry-Level IT Support & Networking Professional.

Designed with a cyber-networking visual aesthetic, interactive simulated Cisco command-line interface (CLI), particle network canvas background, project architecture diagrams, certificate modals, and an ATS-friendly downloadable CV.

---

## 📁 Directory & Asset Structure

The project has been organized with dedicated assets for your CV, diagrams, and certificates:

```
tanvir-portfolio/
│
├── index.html                   # Main animated portfolio website
├── style.css                    # Modern styles (Cyber Dark & Crisp Light modes, animations)
├── script.js                    # Canvas network particles, interactive Cisco CLI, modals & toast
├── README.md                    # Documentation & customization guide (this file)
│
└── assets/                      # Dedicated Assets Directory
    ├── images/                  # Profile avatar & network topology diagrams
    │   ├── avatar.svg           # Tech-themed profile avatar
    │   ├── cisco-topology.svg   # Cisco Packet Tracer Enterprise Topology diagram
    │   ├── pc-assembly.svg      # PC Hardware assembly & Windows deployment diagram
    │   └── soho-network.svg     # SOHO Router & Wi-Fi configuration diagram
    │
    ├── certificates/            # Official certificate previews
    │   ├── cert-level4.svg      # IT Support Services - Level 4 (BTEB / NTVQF)
    │   ├── cert-level3.svg      # IT Support Services - Level 3 (BTEB / NTVQF)
    │   └── cert-basic.svg       # Basic Computer Training Certificate
    │
    └── docs/                    # Documents & Printable Files
        └── Tanvir_Rana_CV.html  # Standalone ATS-friendly CV / Resume (Printable to PDF)
```

---

## ✨ Key Features & Enhancements

1. **Interactive Networking CLI Terminal**:
   - Recruiters and hiring managers can run simulated Cisco IOS and diagnostic commands directly on your website:
     - `ping 8.8.8.8` (Simulated ICMP packet replies and latency)
     - `show ip route` (Displays OSPF, Static, and Connected routes)
     - `show vlan` (Displays configured VLAN database & trunk ports)
     - `skills`, `certs`, `whoami`, `contact`, `clear`
   - Includes quick-click command chips for visitors on mobile or visitors who prefer not to type.

2. **Dynamic Animated Network Canvas**:
   - Glowing nodes connected by network links with animated data packets traveling between them.
   - Responds smoothly to mouse movements.

3. **Projects Showcase with Visual Diagrams**:
   - **Cisco Packet Tracer Multi-Branch Topology**: Highlights OSPF, 802.1Q trunking, VLANs, and ACL firewall filtering.
   - **PC Hardware Assembly & OS Deployment**: Visualizes motherboard socketing, UEFI/BIOS setup, clean Windows installation, and disaster recovery.
   - **SOHO Router & Wi-Fi Configuration**: Showcases PPPoE WAN setup, DHCP pools, port forwarding, and WPA3 security.

4. **Accredited Certificate Modals**:
   - High-resolution SVG preview templates for:
     - **IT Support Services – Level 4** (NTVQF / BTEB)
     - **IT Support Services – Level 3** (NTVQF / BTEB)
     - **Basic Computer Training**
   - Click any card to view the full credential in an interactive modal.

5. **ATS-Optimized Single-Page CV**:
   - Located at `assets/docs/Tanvir_Rana_CV.html`.
   - Features a 1-click **"Print / Save as PDF"** button. Open in any browser and press `Ctrl+P` (or `Cmd+P` on Mac) to generate a clean PDF resume.

6. **Dual Theme (Cyber Dark & Clean Light)**:
   - Includes a toggle switch (`☀️` / `🌙`) in the top navbar that remembers your preference in `localStorage`.

7. **One-Click Contact Copy**:
   - Email and phone cards feature click-to-copy buttons with instant feedback toast notifications.

---

## 🛠️ How to Open & Test Locally

You do **not** need any backend server to view this site:

1. **Option A (Double-Click)**:
   - Navigate to `C:\Users\tanvir\.gemini\antigravity\scratch\tanvir-portfolio`.
   - Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox).

2. **Option B (VS Code Live Server)**:
   - Open the `tanvir-portfolio` folder in VS Code.
   - Right-click `index.html` and click **"Open with Live Server"**.

---

## 👤 Configured Personal Information

Your personal details have already been set up across the portfolio:
- **Profile Photo**: Set to your real portrait image at `assets/images/profile.jpg`
- **Location**: Chuadanga, Bangladesh
- **Email**: `tanvir734415@gmail.com`
- **Phone**: `+88 01992545067`
- **GitHub Repository**: [https://github.com/Md-Tanvir-Rana/Portfolio](https://github.com/Md-Tanvir-Rana/Portfolio)

---

## 🌐 Deploy to Your GitHub Repository in 3 Steps

Since you already have a GitHub repo at **https://github.com/Md-Tanvir-Rana/Portfolio**:

1. Push all files inside this folder (`index.html`, `style.css`, `script.js`, and `assets/`) to your repo:
   ```bash
   git init
   git remote add origin https://github.com/Md-Tanvir-Rana/Portfolio.git
   git add .
   git commit -m "Update modern portfolio with interactive Cisco CLI and animations"
   git branch -M main
   git push -u origin main --force
   ```
2. Go to your repository on GitHub → **Settings** → **Pages** (on the left sidebar).
3. Under **Build and deployment** > **Branch**:
   - Choose `main`
   - Select `/ (root)` folder
   - Click **Save**

🎉 Your portfolio will be live at:
**https://md-tanvir-rana.github.io/Portfolio/**

### Method 2: Netlify Drop (Takes 30 Seconds, No Git Required)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Simply drag and drop the whole `tanvir-portfolio` folder into the browser window.
3. Netlify will deploy it instantly and give you a live free URL!

---

## 💻 Tech Stack
- **HTML5**: Semantic tags, accessibility, meta tags.
- **CSS3**: CSS Custom Properties (Variables), Flexbox, CSS Grid, Glassmorphism, Keyframe animations.
- **JavaScript (ES6+)**: HTML5 Canvas particle system, Cisco CLI emulator, modal event delegation, local storage theme persistence.
