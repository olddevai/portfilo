export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | '3d' | 'combined';
  imageUrl: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}