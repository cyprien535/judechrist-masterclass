export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  profession: string;
  selectedPass?: string;
}

export interface StatItem {
  number: string;
  label: string;
  sublabel?: string;
  iconName: string;
}

export interface FeatureCard {
  id: string;
  number?: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AudienceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SpeakerItem {
  id: string;
  name: string;
  role: string;
  specialty: string;
  badge: string;
  bio: string;
  topics: string[];
  image: string;
  alignment: 'left' | 'right';
}
