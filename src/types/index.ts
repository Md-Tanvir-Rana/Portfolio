export type ThemeMode = 'dark' | 'light';

export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  tagline: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  institution: string;
  program: string;
  semester: string;
  expectedGraduation: string;
  englishProficiency: string;
  careerGoal: string;
}

export type SkillCategory = 'networking' | 'it-support' | 'tools' | 'additional';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  iconName: string;
  description?: string;
}

export interface ProjectLab {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  objectives: string[];
  configurationSummary: string[];
  testingNotes: string[];
  topologyType: 'cisco-network' | 'routing-protocols' | 'pc-assembly';
  hasScreenshots: boolean;
  documentationStatus: 'Coming Soon' | 'Available';
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  level?: string;
  status: 'Certificate available' | 'Certificate not yet available' | 'Details to be confirmed';
  note: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  program: string;
  status: string;
  expectedGraduation: string;
  highlights: string[];
}

export interface CareerGoal {
  title: string;
  focus: string;
  description: string;
  keyAreas: string[];
  icon: string;
}

export interface CvConfig {
  pdfUrl: string;
  fileName: string;
  lastUpdated: string;
  available: boolean;
}
