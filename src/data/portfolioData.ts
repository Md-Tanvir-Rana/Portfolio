import {
  PersonalInfo,
  SkillItem,
  ProjectLab,
  Certification,
  EducationItem,
  CareerGoal,
  CvConfig,
} from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  fullName: 'MD. Tanvir Rana',
  professionalTitle: 'IT Support & Networking Professional',
  tagline: 'Learn • Build • Troubleshoot',
  bio: 'Computer Science and Technology diploma student passionate about computer networking, IT support, and solving technical problems. Building practical skills in Cisco Packet Tracer, routing, network configuration, computer hardware, and system troubleshooting.',
  location: 'Jashore, Bangladesh',
  phone: '01992545067',
  email: 'tanvir734415@gmail.com',
  institution: 'Jashore Polytechnic Institute',
  program: 'Diploma in Computer Science and Technology',
  semester: '7th Semester',
  expectedGraduation: '2027',
  englishProficiency: 'Basic',
  careerGoal: 'IT Support, Network Administration, and Networking',
};

export const SKILLS_DATA: SkillItem[] = [
  // Networking & Routing
  { name: 'Cisco Packet Tracer', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Network', description: 'Network simulation, topology design & connectivity testing' },
  { name: 'Static Routing', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Route', description: 'Manual route path determination and gateway configuration' },
  { name: 'Default Routing', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Compass', description: 'Stub network traffic egress and gateway-of-last-resort routing' },
  { name: 'RIP (v1 & v2)', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Share2', description: 'Distance-vector routing protocol configuration & subnet mask support' },
  { name: 'OSPF', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'GitFork', description: 'Open Shortest Path First link-state routing and single-area setup' },
  { name: 'EIGRP', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Zap', description: 'Enhanced Interior Gateway Routing Protocol and autonomous systems' },
  { name: 'BGP', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Globe', description: 'Border Gateway Protocol concepts and autonomous system interconnections' },
  { name: 'VLAN', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Layers', description: 'Virtual LAN segmentation, broadcast domain isolation, and access ports' },
  { name: 'Inter-VLAN Routing', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Shuffle', description: 'Router-on-a-stick topology and sub-interface trunk encapsulation' },
  { name: 'Access Control Lists (ACL)', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'ShieldCheck', description: 'Standard and extended traffic filtering policies on router interfaces' },
  { name: 'Home Router Configuration', category: 'networking', categoryLabel: 'Networking & Routing', iconName: 'Wifi', description: 'SOHO wireless router setup, DHCP scope, SSID, and security rules' },

  // IT Support & Troubleshooting
  { name: 'PC Assembly', category: 'it-support', categoryLabel: 'IT Support & Troubleshooting', iconName: 'Cpu', description: 'Motherboard, CPU, RAM, storage, power supply installation and cabling' },
  { name: 'Windows Installation', category: 'it-support', categoryLabel: 'IT Support & Troubleshooting', iconName: 'Monitor', description: 'Clean OS setup, bootable USB creation, BIOS/UEFI configuration' },
  { name: 'Driver Installation', category: 'it-support', categoryLabel: 'IT Support & Troubleshooting', iconName: 'HardDrive', description: 'Chipset, graphics, network adapter, and peripheral device drivers' },
  { name: 'Hardware Troubleshooting', category: 'it-support', categoryLabel: 'IT Support & Troubleshooting', iconName: 'Wrench', description: 'POST diagnostics, RAM testing, power supply issues, hardware component checks' },
  { name: 'Software Troubleshooting', category: 'it-support', categoryLabel: 'IT Support & Troubleshooting', iconName: 'Terminal', description: 'System crashes, application errors, malware cleanup, registry checks' },
  { name: 'Backup and Recovery', category: 'it-support', categoryLabel: 'IT Support & Troubleshooting', iconName: 'Save', description: 'System restore points, disk image creation, and data backup workflows' },

  // Tools & Platforms
  { name: 'Cisco Packet Tracer (Lab Tool)', category: 'tools', categoryLabel: 'Tools & Platforms', iconName: 'Laptop', description: 'Comprehensive simulation platform for network architecture' },
  { name: 'Windows Operating System', category: 'tools', categoryLabel: 'Tools & Platforms', iconName: 'Server', description: 'Windows 10/11 system configuration, Device Manager, Event Viewer, CMD' },

  // Additional Skills
  { name: 'Basic Computer Operations', category: 'additional', categoryLabel: 'Additional Skills', iconName: 'CheckCircle2', description: 'Office utilities, system maintenance, file management, and documentation' },
  { name: 'CapCut Video Editing', category: 'additional', categoryLabel: 'Additional Skills', iconName: 'Video', description: 'Video trimming, transition arrangement, and technical presentation clips' },
];

export const PROJECTS_DATA: ProjectLab[] = [
  {
    id: 'packet-tracer-core',
    title: 'Cisco Packet Tracer — Routing & Networking Labs',
    subtitle: 'Academic & practical network topology simulation lab',
    category: 'Network Engineering Lab',
    description: 'Academic and practical networking labs focused on network topology design, IP addressing, routing configuration, VLANs, access control, and connectivity testing.',
    technologies: ['Cisco Packet Tracer', 'Routing', 'VLAN', 'ACL', 'Networking'],
    objectives: [
      'Design a multi-department network architecture with isolated broadcast domains using 802.1Q VLANs.',
      'Configure router-on-a-stick sub-interfaces for seamless inter-VLAN routing.',
      'Deploy Standard and Extended Access Control Lists (ACLs) to filter unauthorized subnet communication.',
      'Perform ICMP ping and traceroute connectivity verification across simulated LAN segments.',
    ],
    configurationSummary: [
      'VLAN 10 (Admin) and VLAN 20 (Students) assigned with /24 subnets.',
      'Switch trunking protocol configured on FastEthernet 0/1 uplinks.',
      'Router sub-interfaces configured with 802.1Q encapsulation.',
      'Standard ACL 10 implemented on outbound interface to secure administrative segment.',
    ],
    testingNotes: [
      'Verified successful ping responses between PCs within the same VLAN.',
      'Confirmed router sub-interface gateway resolution across VLAN 10 and VLAN 20.',
      'Validated ACL rule blocking unauthorized traffic to simulated gateway server.',
    ],
    topologyType: 'cisco-network',
    hasScreenshots: false,
    documentationStatus: 'Coming Soon',
  },
  {
    id: 'routing-protocols-lab',
    title: 'Routing Protocol Configuration Lab',
    subtitle: 'Comparative practice with static and dynamic interior routing',
    category: 'Routing Protocols Lab',
    description: 'Practice lab for understanding and configuring static routing, default routing, RIP, RIPv2, OSPF, EIGRP, and BGP in appropriate simulated network scenarios.',
    technologies: ['Cisco Packet Tracer', 'Routing Protocols', 'IP Addressing'],
    objectives: [
      'Configure manual static routes and gateway-of-last-resort default routing.',
      'Implement dynamic distance-vector protocol RIPv2 with classless subnet mask advertisement.',
      'Deploy single-area OSPF (Area 0) and observe neighbor relationship establishment and LSDB sync.',
      'Simulate dual-homed link failover and observe route convergence tables.',
    ],
    configurationSummary: [
      'Static route defined: `ip route 192.168.3.0 255.255.255.0 10.0.0.2`',
      'Default route configured on edge router: `ip route 0.0.0.0 0.0.0.0 Serial0/0/0`',
      'OSPF process initialized: `router ospf 1` with wildcard masks across backbone interfaces.',
      'RIPv2 configured with `version 2` and `no auto-summary` to support VLSM subnets.',
    ],
    testingNotes: [
      'Inspected IP routing tables using `show ip route` to confirm OSPF (O) and RIP (R) routes.',
      'Simulated link failure to evaluate dynamic convergence time.',
      'Traced ICMP packet transit paths across multiple router hops.',
    ],
    topologyType: 'routing-protocols',
    hasScreenshots: false,
    documentationStatus: 'Coming Soon',
  },
  {
    id: 'pc-assembly-support-lab',
    title: 'PC Assembly & Windows Installation',
    subtitle: 'Hands-on desktop hardware assembly, OS deployment, and support',
    category: 'IT Support & Hardware Lab',
    description: 'Practical learning activities involving desktop computer components, PC assembly, Windows installation, driver setup, and basic system backup and recovery.',
    technologies: ['Computer Hardware', 'Windows', 'IT Support'],
    objectives: [
      'Inspect and assemble desktop computer hardware components safely following anti-static procedures.',
      'Configure motherboard BIOS/UEFI settings, boot priorities, and SATA/NVMe operating modes.',
      'Perform clean Windows 10/11 operating system installations via formatted UEFI bootable media.',
      'Install verified device drivers and configure basic Windows backup and system restore points.',
    ],
    configurationSummary: [
      'Component installation: CPU socket seating, thermal paste application, dual-channel RAM insertion.',
      'Power delivery: 24-pin ATX motherboard power, 8-pin CPU EPS, SATA drive connections.',
      'UEFI Boot setup: Secure Boot enabled, AHCI mode verified, GPT partition schema formatted.',
      'System maintenance: Device Manager hardware verification, Windows Defender & Update configuration.',
    ],
    testingNotes: [
      'Successful POST (Power-On Self-Test) verification and single beep confirmation.',
      'RAM dual-channel capacity and CPU frequency validated in BIOS system screen.',
      'Clean Windows desktop initialization with zero unresolved hardware flags in Device Manager.',
    ],
    topologyType: 'pc-assembly',
    hasScreenshots: false,
    documentationStatus: 'Coming Soon',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-it-lvl3',
    title: 'IT Support Services — Level 3',
    provider: 'Jashore TTC (Technical Training Center)',
    level: 'National Skill Standard / Level 3',
    status: 'Certificate available',
    note: 'Candidate reports certificate is available. Verification documentation can be provided upon request.',
    icon: 'Award',
  },
  {
    id: 'cert-it-lvl4',
    title: 'IT Support Services — Level 4',
    provider: 'Jashore TTC (Technical Training Center)',
    level: 'National Skill Standard / Level 4',
    status: 'Certificate not yet available',
    note: 'Completed training course curriculum at Jashore TTC. Physical certificate issuance pending institutional distribution.',
    icon: 'Clock',
  },
  {
    id: 'cert-job-comp',
    title: 'Job Competency Qualifications',
    provider: 'Details to be confirmed',
    level: 'Two Competency Qualifications Reported',
    status: 'Details to be confirmed',
    note: 'The candidate reports two job-competency qualifications. Exact qualification titles and issuing details will be updated upon confirmation.',
    icon: 'FileCheck',
  },
  {
    id: 'cert-basic-comp',
    title: 'Basic Computer Training',
    provider: 'Training Provider to be confirmed',
    level: 'Foundational Computer Literacy',
    status: 'Details to be confirmed',
    note: 'Foundational computer operations and workplace productivity training. Additional provider details to be confirmed.',
    icon: 'CheckSquare',
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Diploma in Computer Science and Technology',
  institution: 'Jashore Polytechnic Institute',
  program: 'Computer Science and Technology (CST)',
  status: '7th Semester',
  expectedGraduation: '2027',
  highlights: [
    'Comprehensive curriculum covering computer networks, operating systems, hardware architecture, and data structures.',
    'Practical laboratory exercises in network topology configuration, IP subnetting, and system troubleshooting.',
    'Active focus on hands-on networking and desktop IT support competencies.',
  ],
};

export const CAREER_GOALS: CareerGoal[] = [
  {
    title: 'IT Support',
    focus: 'Hardware Diagnostics & User Support',
    description: 'Providing dependable tier-1 technical support, resolving desktop hardware faults, managing Windows operating system installations, and helping users solve software issues.',
    keyAreas: [
      'Desktop PC Assembly & Component Upgrades',
      'Windows OS Deployment & Driver Configuration',
      'System Crash Diagnostics & Safe Mode Recovery',
      'End-User Technical Troubleshooting',
    ],
    icon: 'Wrench',
  },
  {
    title: 'Networking',
    focus: 'Network Administration & Routing',
    description: 'Designing, configuring, and maintaining robust local area network infrastructures with switches, routers, VLAN segmentation, and dynamic routing protocols.',
    keyAreas: [
      'Cisco Packet Tracer Architecture Design',
      'Static, RIP, OSPF, and EIGRP Route Management',
      'VLAN & Inter-VLAN Routing Implementations',
      'Network Connectivity Verification & Testing',
    ],
    icon: 'Network',
  },
  {
    title: 'Continuous Learning',
    focus: 'Skill Mastery & Lab Practice',
    description: 'Dedicated to regular lab simulations, hands-on physical hardware practice, documenting troubleshooting steps, and progressing toward industry networking standards.',
    keyAreas: [
      'Configuring Complex Network Lab Topologies',
      'Documenting Configuration Files & Bug Fixes',
      'Practicing Cisco CLI Command Workflows',
      'Preparing for Entry-Level IT Roles & Internships',
    ],
    icon: 'GraduationCap',
  },
];

export const CV_CONFIG: CvConfig = {
  pdfUrl: '/tanvir-rana-cv.pdf',
  fileName: 'MD_Tanvir_Rana_CV.pdf',
  lastUpdated: 'October 2026',
  available: false, // Set to true once the real PDF is placed in /public/tanvir-rana-cv.pdf
};
