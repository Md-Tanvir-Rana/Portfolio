/**
 * Tanvir Rana - IT Support & Networking Portfolio
 * Interactive Canvas, Simulated Networking CLI Terminal, Modals & UI Scripts
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Animated Network Canvas (Nodes & Data Packets)
     ========================================================================== */
  const canvas = document.getElementById('network-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let packets = [];
    const particleCount = 45;
    const maxDistance = 140;

    let mouse = { x: null, y: null };

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1.8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Gentle mouse interaction
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            this.x -= (dx / dist) * 1.5;
            this.y -= (dy / dist) * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#0284c7';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Packet pulse traveling along links
    setInterval(() => {
      if (particles.length >= 2) {
        const fromIdx = Math.floor(Math.random() * particles.length);
        let closestIdx = -1;
        let minD = maxDistance;
        for (let j = 0; j < particles.length; j++) {
          if (fromIdx === j) continue;
          const d = Math.hypot(particles[fromIdx].x - particles[j].x, particles[fromIdx].y - particles[j].y);
          if (d < minD) {
            minD = d;
            closestIdx = j;
          }
        }
        if (closestIdx !== -1) {
          packets.push({
            p1: particles[fromIdx],
            p2: particles[closestIdx],
            progress: 0,
            speed: 0.03
          });
        }
      }
    }, 450);

    function animateNetwork() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const pkt = packets[i];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }
        const curX = pkt.p1.x + (pkt.p2.x - pkt.p1.x) * pkt.progress;
        const curY = pkt.p1.y + (pkt.p2.y - pkt.p1.y) * pkt.progress;
        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#10b981';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update & draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateNetwork);
    }
    animateNetwork();
  }

  /* ==========================================================================
     2. Hero Typewriter Effect
     ========================================================================== */
  const typewriterElem = document.getElementById('typewriter-text');
  if (typewriterElem) {
    const roles = [
      'IT Support Specialist',
      'Computer Networking Professional',
      'Network Security & Systems Technician',
      'Digital Media & Content Creator'
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 70;

    function type() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        typewriterElem.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 35;
      } else {
        typewriterElem.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 75;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        typingSpeed = 1800; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 400;
      }

      setTimeout(type, typingSpeed);
    }
    type();
  }

  /* ==========================================================================
     3. Networking Skills Graph Interactions
     ========================================================================== */
  const radarPoints = document.querySelectorAll('.radar-point');
  radarPoints.forEach(pt => {
    pt.addEventListener('mouseenter', () => {
      const title = pt.getAttribute('title');
      if (title && typeof showToast === 'function') {
        showToast(`📊 ${title}`);
      }
    });
  });

  /* ==========================================================================
     4. Skills Category Filter
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'modalIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     5. Modals (Projects & Certificates)
     ========================================================================== */
  const modal = document.getElementById('preview-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  const modalData = {
    cisco: {
      title: 'Cisco Packet Tracer Enterprise Networking Lab',
      image: 'assets/images/cisco-topology.svg',
      desc: `
<h4 style="color:var(--accent-cyan); margin-bottom:0.5rem;">Multi-Branch Routing &amp; VLAN Architecture</h4>
<p style="color:var(--text-secondary); margin-bottom:1rem;">
  This simulated lab models a scalable corporate infrastructure linking Headquarters to a Regional Branch. It includes dynamic routing convergence with OSPF Area 0, inter-branch serial links, and 802.1Q sub-interfaces for departmental traffic segmentation.
</p>
<h5 style="color:var(--text-main); margin-bottom:0.4rem;">Key Implementations:</h5>
<ul style="color:var(--text-muted); margin-left:1.2rem; margin-bottom:1rem;">
  <li><strong>Routing Protocols:</strong> OSPF Area 0 multi-hop routing, RIPv2 failover, and default static routing to ISP.</li>
  <li><strong>Switching:</strong> VLAN 10 (HR), VLAN 20 (IT), VLAN 30 (Servers), 802.1Q trunking, and native VLAN security.</li>
  <li><strong>Security:</strong> Standard &amp; Extended Access Control Lists (ACLs) to isolate server farm traffic from guest clients.</li>
  <li><strong>Services:</strong> DHCP relay agent, DNS server simulation, and simulated WAN serial encapsulation.</li>
</ul>
`
    },
    hardware: {
      title: 'PC Assembly, Hardware Diagnostics & OS Deployment',
      image: 'assets/images/pc-assembly.svg',
      desc: `
<h4 style="color:var(--accent-emerald); margin-bottom:0.5rem;">Physical Assembly, BIOS Configuration &amp; Recovery Workflow</h4>
<p style="color:var(--text-secondary); margin-bottom:1rem;">
  A hands-on hardware project covering component compatibility, anti-static safety, motherboard installation, BIOS/UEFI configuration, Windows 10/11 clean setup, driver deployment, and automated backup imaging.
</p>
<h5 style="color:var(--text-main); margin-bottom:0.4rem;">Core Achievements:</h5>
<ul style="color:var(--text-muted); margin-left:1.2rem; margin-bottom:1rem;">
  <li><strong>Hardware Assembly:</strong> Socket installation (Intel/AMD), dual-channel DDR4/DDR5 RAM, thermal paste application, M.2 NVMe SSD, and 650W PSU cable management.</li>
  <li><strong>BIOS/UEFI:</strong> Boot priority tuning, XMP memory profile enabling, TPM 2.0 &amp; Secure Boot verification for Windows 11 compatibility.</li>
  <li><strong>OS &amp; Drivers:</strong> Clean OS installation via bootable media, GPT partition scheme, automated driver configuration, and stress testing.</li>
  <li><strong>Backup &amp; Recovery:</strong> Disk cloning and recovery image creation to restore systems within minutes of failure.</li>
</ul>
`
    },
    soho: {
      title: 'SOHO Router & Secure Wi-Fi Configuration',
      image: 'assets/images/soho-network.svg',
      desc: `
<h4 style="color:var(--accent-cyan); margin-bottom:0.5rem;">Small Office / Home Office Network Deployment</h4>
<p style="color:var(--text-secondary); margin-bottom:1rem;">
  Complete setup of a dual-band wireless router for home or branch office environments, balancing high-speed wireless coverage, firewall protection, and guest isolation.
</p>
<h5 style="color:var(--text-main); margin-bottom:0.4rem;">Configured Features:</h5>
<ul style="color:var(--text-muted); margin-left:1.2rem; margin-bottom:1rem;">
  <li><strong>WAN / ISP:</strong> PPPoE and DHCP WAN connection setup with custom MTU settings.</li>
  <li><strong>LAN Addressing:</strong> Custom subnetting (192.168.1.0/24), DHCP scope management (.100–.200), and static IP assignments for printers/NAS.</li>
  <li><strong>Wireless Security:</strong> Dual-band 2.4GHz &amp; 5GHz SSID configuration with WPA2/WPA3 encryption and dedicated guest network isolation.</li>
  <li><strong>Port Forwarding &amp; Firewall:</strong> Stateful Packet Inspection (SPI) firewall and port forwarding rules.</li>
</ul>
`
    },
    certLevel4: {
      title: 'IT Support Services – Level 4 (BTEB / NTVQF)',
      image: 'assets/certificates/cert-level4.svg',
      desc: `
<p style="color:var(--text-secondary); margin-bottom:1rem;">
  National Technical and Vocational Qualifications Framework (NTVQF) Level 4 certified qualification in IT Support Services accredited by Bangladesh Technical Education Board (BTEB).
</p>
<p style="color:var(--text-muted);">
  Covers advanced hardware diagnostic procedures, network client configuration, system restoration, operating system deployment, and enterprise customer service support.
</p>
`
    },
    certLevel3: {
      title: 'National Skills Certificate: IT Support Service, Level- 3 (360 hours)',
      image: 'assets/certificates/cert-level3.jpg',
      desc: `
<div style="margin-bottom:1rem;">
  <span style="display:inline-block; background:rgba(16,185,129,0.15); color:var(--accent-emerald); font-family:var(--font-mono); font-size:0.8rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:4px; margin-bottom:0.6rem;">
    GOVT. OF BANGLADESH • PRIME MINISTER'S OFFICE (NSDA)
  </span>
  <h4 style="color:var(--text-main); font-size:1.15rem; margin-bottom:0.4rem;">
    National Skills Certificate on IT Support Service, Level- 3 (360 hours)
  </h4>
  <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:0.6rem;">
    Under the <strong>Bangladesh National Qualification Framework (BNQF)</strong>, issued by the National Skills Development Authority (NSDA).
  </p>
  <div style="background:rgba(2,6,23,0.5); border:1px solid var(--border-color); border-radius:8px; padding:0.75rem 1rem; margin-bottom:1rem; font-family:var(--font-mono); font-size:0.82rem; color:#94a3b8;">
    <div><strong>Registration No:</strong> <span style="color:var(--accent-cyan);">REG-ICT-ITSS-L3-005917</span></div>
    <div><strong>Serial No:</strong> <span style="color:var(--accent-cyan);">NSC-ICT-ITSS-L3-005955</span></div>
    <div><strong>Result Published:</strong> 07-02-2026 | <strong>Valid until:</strong> 06-02-2031</div>
  </div>
</div>

<h5 style="color:var(--text-main); font-size:0.95rem; margin-bottom:0.5rem;">Completed Units of Competency:</h5>
<ul style="color:var(--text-secondary); font-size:0.86rem; margin-left:1.2rem; margin-bottom:1.4rem; display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.35rem 1rem;">
  <li>✔ Access Information Using Internet</li>
  <li>✔ Carry Out Workplace Interaction in English</li>
  <li>✔ Install &amp; Configure Application/Utility Software</li>
  <li>✔ Install &amp; Use OS and Optimize Utilities</li>
  <li>✔ Interpret IT Support Service Fundamentals</li>
  <li>✔ Maintain &amp; Troubleshoot Personal Computer</li>
  <li>✔ Perform Basic Data Backup &amp; Recovery</li>
  <li>✔ Perform Basic Networking</li>
  <li>✔ Perform PC Assembling</li>
  <li>✔ Use Office Application Software</li>
</ul>

<div style="display:flex; flex-wrap:wrap; gap:0.75rem;">
  <a href="assets/certificates/NSDA_IT_Support_Level_3_Certificate.pdf" target="_blank" class="btn btn-primary" style="padding:0.55rem 1.1rem; font-size:0.88rem; text-decoration:none;">
    📄 View / Download Official PDF
  </a>
  <a href="assets/certificates/cert-level3-bn.jpg" target="_blank" class="btn btn-outline" style="padding:0.55rem 1.1rem; font-size:0.88rem; text-decoration:none;">
    🇧🇩 View Bengali Certificate
  </a>
</div>
`
    },
    certBasic: {
      title: 'Basic Computer Training Certification',
      image: 'assets/certificates/cert-basic.svg',
      desc: `
<p style="color:var(--text-secondary); margin-bottom:1rem;">
  Foundational certification verifying proficiency in computer operations, operating system file management, word processing, spreadsheets, internet communication, and IT hygiene.
</p>
`
    }
  };

  function openModal(dataKey) {
    const data = modalData[dataKey];
    if (!data || !modal) return;

    modalTitle.textContent = data.title;
    modalBody.innerHTML = `
      <img src="${data.image}" alt="${data.title}">
      <div>${data.desc}</div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach modal triggers
  document.querySelectorAll('[data-modal-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const key = trigger.getAttribute('data-modal-trigger');
      openModal(key);
    });
  });

  /* ==========================================================================
     6. Copy to Clipboard Toast
     ========================================================================== */
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  function showToast(message) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const copyVal = btn.getAttribute('data-copy');
      if (navigator.clipboard && copyVal) {
        navigator.clipboard.writeText(copyVal).then(() => {
          showToast(`Copied to clipboard: ${copyVal}`);
        }).catch(() => {
          showToast(`Copied: ${copyVal}`);
        });
      } else if (copyVal) {
        showToast(`Copied: ${copyVal}`);
      }
    });
  });

  /* ==========================================================================
     7. Enforce Default Theme (Dark)
     ========================================================================== */
  document.documentElement.removeAttribute('data-theme');
  try {
    localStorage.removeItem('tanvir_portfolio_theme');
  } catch (e) {
    // In case localStorage is restricted
  }

  /* ==========================================================================
     8. Mobile Hamburger Menu
     ========================================================================== */
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.textContent = '☰';
      });
    });
  }

  /* ==========================================================================
     9. Scroll To Top & Active Nav Link Highlight
     ========================================================================== */
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Scroll to top button visibility
    if (scrollTopBtn) {
      if (scrollPos > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Nav active link
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        allNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     10. Contact Form Mock Submit
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';

      setTimeout(() => {
        showToast('Thank you! Your message has been sent successfully.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1200);
    });
  }

  /* ==========================================================================
     11. Scroll-Triggered Reveal Animations
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ==========================================================================
     12. 3D Card Tilt Micro-Interaction
     ========================================================================== */
  const tiltCards = document.querySelectorAll('.skill-card, .project-card, .cert-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  /* ==========================================================================
     13. Interactive Click Ripple / Packet Shockwave
     ========================================================================== */
  document.addEventListener('click', (e) => {
    // Avoid triggering on links or buttons
    if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input')) return;

    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });

  /* ==========================================================================
     14. Animated Stat Counter
     ========================================================================== */
  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach(item => {
    item.classList.add('counting');
  });

  /* ==========================================================================
     15. Interests & Lifestyle: Modals, Uploaders, Tabs & Dynamic Media Studio
     ========================================================================== */
  window.showToast = showToast;

  const passionDetails = {
    photography: {
      title: 'I Love Photography — Visual Framing & Street Stories',
      desc: `
        <div style="margin-bottom:1rem;">
          <span style="display:inline-block; background:rgba(56,189,248,0.15); color:var(--accent-cyan); font-family:var(--font-mono); font-size:0.8rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:4px; margin-bottom:0.6rem;">
            📷 CREATIVE PASSION • COMPOSITION &amp; PERSPECTIVE
          </span>
          <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.6; margin-bottom:0.8rem;">
            Photography is my way of capturing the soul of moments. Whether it's the golden hue of sunset over rustic roads, symmetry in modern architecture, or candid facial expressions, I love framing real stories through the camera viewfinder.
          </p>
          <div style="background:rgba(2,6,23,0.5); border:1px solid var(--border-color); border-radius:8px; padding:0.8rem 1rem; font-size:0.85rem; color:#94a3b8;">
            <div><strong>Style:</strong> Street Photography, Portraiture, Golden Hour Landscapes</div>
            <div><strong>Philosophy:</strong> "A good photograph is knowing where to stand and when to press the shutter."</div>
          </div>
        </div>
      `
    },
    fashion: {
      title: 'I Like Fashion — Modern Streetwear & Sharp Styling',
      desc: `
        <div style="margin-bottom:1rem;">
          <span style="display:inline-block; background:rgba(168,85,247,0.15); color:#c084fc; font-family:var(--font-mono); font-size:0.8rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:4px; margin-bottom:0.6rem;">
            🕶️ PERSONAL BRANDING • MINIMALIST &amp; CONFIDENT
          </span>
          <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.6; margin-bottom:0.8rem;">
            I believe how you dress and present yourself reflects your self-discipline and attention to detail. I enjoy experimenting with clean minimalist streetwear, curated neutral color palettes, stylish watches, and smart-casual aesthetics.
          </p>
          <div style="background:rgba(2,6,23,0.5); border:1px solid var(--border-color); border-radius:8px; padding:0.8rem 1rem; font-size:0.85rem; color:#94a3b8;">
            <div><strong>Aesthetic:</strong> Minimalist Streetwear, Smart Casual, Clean Grooming</div>
            <div><strong>Key Pieces:</strong> Sharp jackets, clean sneakers, classic watches, stylish sunglasses</div>
          </div>
        </div>
      `
    },
    video: {
      title: 'I Love Video Editing — 100K+ YouTube Audience & Digital Storytelling',
      desc: `
        <div style="margin-bottom:1rem;">
          <span style="display:inline-block; background:rgba(239,68,68,0.15); color:#f87171; font-family:var(--font-mono); font-size:0.8rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:4px; margin-bottom:0.6rem;">
            🎬 100K+ YOUTUBE CREATOR • CAPCUT &amp; PREMIERE PRO
          </span>
          <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.6; margin-bottom:0.8rem;">
            Video editing is where technology meets creative art. Having built and managed a thriving YouTube channel with over 100,000+ subscribers, I master high-retention editing, beat-matched transitions, sound design, and pacing that connects with digital audiences.
          </p>
          <div style="background:rgba(2,6,23,0.5); border:1px solid var(--border-color); border-radius:8px; padding:0.8rem 1rem; font-size:0.85rem; color:#94a3b8;">
            <div><strong>Audience:</strong> 100K+ Active Subscribers &amp; Millions of Views</div>
            <div><strong>Editing Software:</strong> CapCut PC, Adobe Premiere Pro, Audition</div>
          </div>
        </div>
      `
    },
    travel: {
      title: 'I Love Travelling — Open Highways, Scenic Hills & Cultural Wanderlust',
      desc: `
        <div style="margin-bottom:1rem;">
          <span style="display:inline-block; background:rgba(2,132,199,0.15); color:#38bdf8; font-family:var(--font-mono); font-size:0.8rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:4px; margin-bottom:0.6rem;">
            ✈️ WANDERLUST • DISCOVERY &amp; REJUVENATION
          </span>
          <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.6; margin-bottom:0.8rem;">
            Travelling resets my perspective and fuels fresh ideas. From riding down peaceful national highways to exploring quiet riversides, lush hills, and remote countryside, exploring different places keeps my curiosity alive.
          </p>
          <div style="background:rgba(2,6,23,0.5); border:1px solid var(--border-color); border-radius:8px; padding:0.8rem 1rem; font-size:0.85rem; color:#94a3b8;">
            <div><strong>Passions:</strong> Highway Road Trips, Nature Trails, Scenic Photography</div>
            <div><strong>Dream Trips:</strong> Mountain expeditions, coastal trails, and cross-border road journeys</div>
          </div>
        </div>
      `
    }
  };

  window.openPassionPreview = function(key) {
    const info = passionDetails[key];
    const previewEl = document.getElementById(`media-preview-${key}`);
    const mediaSrc = previewEl ? previewEl.src : `assets/media/${key === 'video' ? 'video-editing' : key}.svg`;
    
    if (!modal) return;
    modalTitle.textContent = info ? info.title : 'Passion Preview';
    
    const isVideo = previewEl && previewEl.tagName.toLowerCase() === 'video';
    const mediaHTML = isVideo 
      ? `<video src="${previewEl.currentSrc || previewEl.src}" controls autoplay loop style="width:100%; border-radius:8px; margin-bottom:1.2rem; max-height:450px; background:#000;"></video>`
      : `<img src="${mediaSrc}" alt="${info ? info.title : 'Preview'}" style="width:100%; border-radius:8px; margin-bottom:1.2rem;">`;

    modalBody.innerHTML = `
      ${mediaHTML}
      <div>${info ? info.desc : ''}</div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

});

