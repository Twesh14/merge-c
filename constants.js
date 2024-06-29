const VISIBILITY = ['public', 'private', 'unlisted'];

const TECHINCAL_SKILL_SET = ['.NET',
    'AI',
    'AR',
    'ASP.NET',
    'ASP.Net',
    'AWS',
    'Advanced Java',
    'Angular',
    'Artificial Intelligence',
    'Azure',
    'C',
    'C & C++ PROGRAMMING',
    'C#',
    'C++',
    'CCNA',
    'CICS',
    'COBOL',
    'CORE JAVA & ADVANCE JAVA',
    'CPP',
    'Cloud',
    'Cloud Computing',
    'Core Java',
    'Cyber Security',
    'DAA',
    'Data Engineering',
    'Data Science',
    'Data structures',
    'Devops',
    'Docker',
    'Dotnet',
    'Full Stack',
    'GCP',
    'Hadoop',
    'Java',
    'Javascript',
    'ML',
    'Machine Learning',
    'Micorosft 365',
    'Microsoft Azure',
    'MongoDB',
    'Networking',
    'NodeJS',
    'OOPS',
    'OOPS with java',
    'Openstack',
    'PEGA',
    'PYTHON PROGRAMMING',
    'Pig',
    'Power BI',
    'Python',
    'ReactJS',
    'Redhat',
    'SQL',
    'Salesforce',
    'Selenium',
    'Spark',
    'Spring',
    'Spring boot',
    'Technical-Python',
    'Testing',
    'VB.NET',
    'VR',
    'Web development',
    'Windows',
    'data structures and algorithms',
    'machine Learning',
    '.NET (C# & VB.NET)',
    'Android',
    'Aptitude',
    'Big Data',
    'CSS',
    'Cloud computing',
    'DS',
    'Embedded Systems',
    'HTML',
    'JAVA Full stack',
    'JAVA.DS',
    'Java ( 4 th sem)',
    'Linux',
    'MAD',
    'ML IoT',
    'MS Azure',
    'PPS',
    // 'Quant & Reasoning',
    'Technical-C',
    // 'Verbal',
];

const SOFT_SKILL_SET = [
    'Coaching',
    'Mentoring',
    'Interviewing',
    'Communication',
    'Recruiting',
]

const DIFFICULTY_VS_NAME = {
    'easy': 'Easy',
    'medium': 'Medium',
    'hard': 'Hard'
}

const COURSE_CATALOG_CONTENT_TYPE = {
    'reading': 'Reading Material',
    'video': 'Video Content',
    'presentation': 'Class Presentation'
}


const TRAINER_EXPERIENCES_OPTIONS = [
    { value: "Academic", label: "Academic Training" },
    { value: "Industry", label: "Industry Training" },
    { value: "Corporate", label: "Corporate Training" },
]

const WORK_EXPERIENCE_OPTIONS = [
    "UI/UX",
    "Full Stack Development",
    "Machine Learning",
    "Mobile App Development",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "DevOps Engineering",
    "Product Management",
    "Software Engineering",
    "Web Development", 
    "Frontend Development",
    "Backend Development",
    "Database Administration",
    "Network Engineering",
    "Game Development",
    "Research Intern",
    "Research Scientist",
    "Research Analyst",
    "Research Assistant",
    "IT Support",
    "Quality Assurance",
    "Project Management",
    "Business Analysis",
    "Systems Administration",
    "Technical Writing",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DATE_FORMAT = 'DD/MM/YYYY';
const TIME_FROMAT = 'HH:mm';
const DATE_TIME_FORMAT = DATE_FORMAT + ' ' + TIME_FROMAT;

const LOGIN_REDIRECT_STORAGE_KEY = 'loginRedirect';

const GENDER_OPTIONS = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
    { label: 'Prefer Not to Say', value: 'Prefer Not to Say' },
];

const LANGUAGE_OPTIONS = [
    { label: 'Bengali', value: 'Bengali' },
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Kannada', value: 'Kannada' },
    { label: 'Gujarati', value: 'Gujarati' },
    { label: 'Malayalam', value: 'Malayalam' },
    { label: 'Marathi', value: 'Marathi' },
    { label: 'Odia', value: 'Odia' },
    { label: 'Punjabi', value: 'Punjabi' },
    { label: 'Tamil', value: 'Tamil' },
    { label: 'Telugu', value: 'Telugu' },
    { label: 'Urdu', value: 'Urdu' },
];

const MONTHS_OPTIONS_NEW = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const YEAR_DROPDOWN_OPTIONS = [...Array(15).keys()].map(i => `${new Date().getFullYear() - i}`).map(i => ({ label: i, value: i }));

const ORG_URL_OPTIONS = [
    { label: 'bCAP', value: 'bcap' },
    { label: 'Gen AI', value: 'genai' },
    { label: 'Placement Prep', value: 'placementPrep' },
    { label: 'Assessments', value: 'assessments' },
];
export { VISIBILITY, TECHINCAL_SKILL_SET, SOFT_SKILL_SET, DIFFICULTY_VS_NAME, COURSE_CATALOG_CONTENT_TYPE, EMAIL_REGEX, DATE_FORMAT, DATE_TIME_FORMAT, TIME_FROMAT, TRAINER_EXPERIENCES_OPTIONS, LOGIN_REDIRECT_STORAGE_KEY, GENDER_OPTIONS, LANGUAGE_OPTIONS, WORK_EXPERIENCE_OPTIONS, YEAR_DROPDOWN_OPTIONS, MONTHS_OPTIONS_NEW, ORG_URL_OPTIONS };
