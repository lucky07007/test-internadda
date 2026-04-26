// data/internships.ts

export interface Internship {
  id: string;
  title: string;
  company: string;
  stipend: string;
  location: string;
  duration: string;
  tag: string;
  skills: string[];
  applicants: number;
  image: string;
  otherCompaniesCount: number;
  companyLogos: string[];
  description?: string;
  type?: string;
  startDate?: string;
}

export const internships: Internship[] = [
  {
    id: '1',
    title: 'Strategic Marketing Intern',
    company: 'UpForge Network',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '3 Months',
    tag: 'Marketing',
    skills: ['Marketing Strategy', 'Campaign Management', 'SEO'],
    applicants: 342,
    image: '/python.jpg',
    otherCompaniesCount: 15,
    companyLogos: ['/company1.jpg', '/company2.jpg'],
    description: 'Drive global marketing initiatives and develop strategic campaigns for a growing professional network.',
    type: 'Internship',
    startDate: 'Immediate'
  },
  {
    id: '2',
    title: 'Sales & Growth Associate',
    company: 'Global Innovate',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '6 Months',
    tag: 'Sales',
    skills: ['B2B Sales', 'Lead Generation', 'CRM'],
    applicants: 215,
    image: '/datascience.jpg',
    otherCompaniesCount: 8,
    companyLogos: ['/company3.jpg', '/company4.jpg'],
    description: 'Accelerate business growth through strategic sales initiatives and client relationship management.',
    type: 'Internship',
    startDate: 'Immediate'
  },
  {
    id: '3',
    title: 'Campus Ambassador Program',
    company: 'UpForge',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '5 Months',
    tag: 'Growth',
    skills: ['Public Speaking', 'Networking', 'Social Media'],
    applicants: 531,
    image: '/react.jpg',
    otherCompaniesCount: 20,
    companyLogos: ['/company5.jpg', '/company1.jpg'],
    description: 'Represent UpForge at your campus, build professional communities, and develop leadership skills.',
    type: 'Ambassador',
    startDate: 'Flexible'
  },
  {
    id: '4',
    title: 'Event Management Specialist',
    company: 'NextGen Student Hub',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '3 Months',
    tag: 'Operations',
    skills: ['Event Planning', 'Coordination', 'Communication'],
    applicants: 156,
    image: '/python.jpg',
    otherCompaniesCount: 5,
    companyLogos: ['/company2.jpg', '/company3.jpg'],
    description: 'Orchestrate professional virtual events and workshops connecting students with industry leaders globally.',
    type: 'Internship',
    startDate: 'Immediate'
  },
  {
    id: '5',
    title: 'SEO & Content Executive',
    company: 'WebRank Global',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '9 Months',
    tag: 'SEO',
    skills: ['SEO', 'Content Writing', 'Google Analytics'],
    applicants: 289,
    image: '/datascience.jpg',
    otherCompaniesCount: 12,
    companyLogos: ['/company4.jpg', '/company5.jpg'],
    description: 'Optimize digital presence and create compelling content strategies for international clients.',
    type: 'Internship',
    startDate: 'Immediate'
  },
  {
    id: '6',
    title: 'Social Media Manager',
    company: 'Creative Student Agency',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '6 Months',
    tag: 'Design',
    skills: ['Instagram', 'LinkedIn', 'Content Creation'],
    applicants: 412,
    image: '/react.jpg',
    otherCompaniesCount: 7,
    companyLogos: ['/company1.jpg', '/company2.jpg'],
    description: 'Craft engaging social media strategies and build brand presence across major platforms.',
    type: 'Internship',
    startDate: 'Flexible'
  },
  {
    id: '7',
    title: 'Design & Creative Intern',
    company: 'Pixel Forge',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '5 Months',
    tag: 'Creative',
    skills: ['Figma', 'Adobe Creative Suite', 'UI/UX'],
    applicants: 304,
    image: '/python.jpg',
    otherCompaniesCount: 9,
    companyLogos: ['/company3.jpg', '/company4.jpg'],
    description: 'Create stunning visual designs and user experiences for global brands and startups.',
    type: 'Internship',
    startDate: 'Immediate'
  },
  {
    id: '8',
    title: 'Community Manager',
    company: 'UpForge Community',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '9 Months',
    tag: 'Community',
    skills: ['Discord', 'Community Building', 'Engagement'],
    applicants: 187,
    image: '/datascience.jpg',
    otherCompaniesCount: 6,
    companyLogos: ['/company5.jpg', '/company1.jpg'],
    description: 'Build and nurture thriving professional communities, fostering meaningful connections worldwide.',
    type: 'Internship',
    startDate: 'Immediate'
  },
  {
    id: '9',
    title: 'Business Development Intern',
    company: 'ScaleUp Ventures',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '6 Months',
    tag: 'Business',
    skills: ['Pitching', 'Market Research', 'Networking'],
    applicants: 245,
    image: '/react.jpg',
    otherCompaniesCount: 11,
    companyLogos: ['/company2.jpg', '/company3.jpg'],
    description: 'Identify growth opportunities and forge strategic partnerships for emerging ventures.',
    type: 'Internship',
    startDate: 'Flexible'
  },
  {
    id: '10',
    title: 'Digital Growth Consultant',
    company: 'Apex Growth',
    stipend: 'Unpaid / Performance Based',
    location: 'Remote (Global)',
    duration: '3 Months',
    tag: 'Growth',
    skills: ['Data Analysis', 'Performance Marketing', 'Strategy'],
    applicants: 168,
    image: '/python.jpg',
    otherCompaniesCount: 4,
    companyLogos: ['/company4.jpg', '/company5.jpg'],
    description: 'Drive data-driven growth strategies and optimize digital performance for scaling businesses.',
    type: 'Internship',
    startDate: 'Immediate'
  }
];

// Additional helper functions for filtering and sorting
export const getInternshipByTag = (tag: string) => 
  internships.filter(internship => internship.tag === tag);

export const getInternshipById = (id: string) => 
  internships.find(internship => internship.id === id);

export const getPopularInternships = (limit: number = 6) => 
  [...internships].sort((a, b) => b.applicants - a.applicants).slice(0, limit);

export const getDurationOptions = () => ['3 Months', '5 Months', '6 Months', '9 Months'];

export const getTagOptions = () => 
  [...new Set(internships.map(internship => internship.tag))];
