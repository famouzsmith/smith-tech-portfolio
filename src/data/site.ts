export type ProjectCategory = "web" | "graphics" | "support";

export type ProjectFilter = "all" | ProjectCategory;

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  liveUrl?: string;
};

export type Service = {
  title: string;
  description?: string;
  skills: string[];
};

export type SocialLink = {
  name: string;
  href: string;
  handle?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  description?: string;
  period?: string;
};

export type AboutCardIcon = "web" | "branding" | "support" | "leadership";

export type AboutCard = {
  title: string;
  description: string;
  icon: AboutCardIcon;
};

export type EducationItem = {
  degree: string;
  year: string;
};

export type LeadershipItem = {
  role: string;
  organization: string;
};

export type HighlightItem = {
  title: string;
};

export type ProcessStep = {
  title: string;
};

export type SiteConfig = {
  name: string;
  brand: string;
  tagline: string;
  title: string;
  home: {
    heroBadge: string;
    heroIntro: string;
  };
  shortBio: string;
  bio: string;
  role: string;
  email: string;
  whatsapp: string;
  cvUrl: string;
  profileImage: string;
  profileImageAlt: string;
  nav: NavItem[];
  services: Service[];
  projects: Project[];
  socials: SocialLink[];
  experience: ExperienceItem[];
  about: {
    eyebrow: string;
    headline: string;
    intro: string;
    cvLabel: string;
    servicesLabel: string;
    whatIDoTitle: string;
    whatIDo: AboutCard[];
    experienceTitle: string;
    educationTitle: string;
    education: EducationItem[];
    leadershipTitle: string;
    leadership: LeadershipItem[];
    highlightsTitle: string;
    highlights: HighlightItem[];
    metaTitle: string;
    metaDescription: string;
  };
  servicesPage: {
    eyebrow: string;
    headline: string;
    processTitle: string;
    process: ProcessStep[];
    metaTitle: string;
    metaDescription: string;
  };
  contactCta: {
    eyebrow: string;
    heading: string;
    buttonLabel: string;
    whatsappLabel: string;
  };
  contactPage: {
    eyebrow: string;
    headline: string;
    intro: string;
    whatsappTitle: string;
    whatsappLabel: string;
    emailTitle: string;
    socialsTitle: string;
    cvLabel: string;
    metaTitle: string;
    metaDescription: string;
  };
};

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web Dev",
  graphics: "Graphics",
  support: "Technical Support",
};

export const categoryFilters = [
  { value: "all", label: "All" },
  { value: "web", label: "Web Dev" },
  { value: "graphics", label: "Graphics" },
  { value: "support", label: "Technical Support" },
] as const satisfies ReadonlyArray<{ value: ProjectFilter; label: string }>;

export const site = {
  name: "Smith Ishaku",
  brand: "SMITH TECH",
  tagline: "Web · Graphics · Technical Support",
  title: "Web Developer, Creative Designer & Technical Support",
  home: {
    heroBadge: "Founder, Smith Tech",
    heroIntro:
      "I build websites, design brands, and keep computers running, from the first line of code to Windows setup and virus removal.",
  },
  shortBio:
    "I connect digital products with physical branding from the first line of code to the final printed flyer.",
  bio: "I don't just write code I build businesses. With over 2 years of experience, I bridge digital software and physical branding, from the first line of code to the final printed flyer. As Team Lead at Mind Upgrade Global Consult, I direct creative projects and guide teams to deliver excellence.",
  role: "Team Lead at Mind Upgrade Global Consult",
  email: "famouzsmith0@gmail.com",
  whatsapp: "https://wa.me/2347089906211",
  cvUrl: "/smith-ishaku-cv.pdf",
  profileImage: "/images/profile/smith-ishaku.jpg",
  profileImageAlt:
    "Portrait of Smith Ishaku, web developer and creative designer",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services & Skills", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      title: "Web Development",
      skills: [
        "Next.js",
        "Angular",
        "Node.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Responsive UI/UX",
      ],
    },
    {
      title: "Graphics & Branding",
      skills: [
        "Brand Identity",
        "Logo Design",
        "Corel Draw",
        "Illustrator",
        "Digital Art",
      ],
    },
    {
      title: "Printing & Business Services",
      skills: [
        "Flyers",
        "Business Cards",
        "Banners",
        "Large Format Printing",
        "Online Registration Support",
        "Technical Support",
        "Windows Installation",
        "Windows Activation",
        "Virus Detection & Removal",
        "Software Updates",
      ],
    },
    {
      title: "Leadership & Management",
      skills: [
        "Team Leadership",
        "Project Management",
        "Brand Management",
        "Client Relations",
        "Operations",
        "Public Speaking",
        "Mentorship",
      ],
    },
  ],
  projects: [
    {
      slug: "affordable",
      title: "Affordable",
      category: "graphics",
      summary: "Flyer design.",
      description: "Flyer design.",
      tags: ["Graphic Design", "Flyer"],
      image: "/images/projects/affordable.webp",
      imageAlt: "Affordable flyer design",
      featured: false,
    },
    {
      slug: "georgia",
      title: "Georgia",
      category: "graphics",
      summary: "Event flyer design.",
      description: "Event flyer design.",
      tags: ["Graphic Design", "Flyer"],
      image: "/images/projects/georgia.webp",
      imageAlt: "Georgia event flyer design",
      featured: false,
    },
    {
      slug: "georg",
      title: "Georg",
      category: "graphics",
      summary: "Event flyer design.",
      description: "Event flyer design.",
      tags: ["Graphic Design", "Flyer"],
      image: "/images/projects/georg.webp",
      imageAlt: "Georg event flyer design",
      featured: false,
    },
    {
      slug: "isah-collection",
      title: "Isah Collection",
      category: "graphics",
      summary: "Collection design.",
      description: "Collection design.",
      tags: ["Graphic Design", "Collection"],
      image: "/images/projects/isah-collection.webp",
      imageAlt: "Isah Collection graphic design",
      featured: false,
    },
    {
      slug: "mama-smith",
      title: "Mama Smith",
      category: "graphics",
      summary: "Graphic design piece.",
      description: "Graphic design piece.",
      tags: ["Graphic Design"],
      image: "/images/projects/mama-smith.webp",
      imageAlt: "Mama Smith graphic design piece",
      featured: false,
    },
    {
      slug: "mirrian-scent",
      title: "Mirrian Scent",
      category: "graphics",
      summary: "Brand design.",
      description: "Brand design.",
      tags: ["Graphic Design", "Brand"],
      image: "/images/projects/mirrian-scent.webp",
      imageAlt: "Mirrian Scent brand design",
      featured: false,
    },
    {
      slug: "services",
      title: "Services",
      category: "graphics",
      summary: "Services flyer design.",
      description: "Services flyer design.",
      tags: ["Graphic Design", "Flyer"],
      image: "/images/projects/services.webp",
      imageAlt: "Services flyer design",
      featured: false,
    },
    {
      slug: "tech",
      title: "Tech",
      category: "graphics",
      summary: "Tech graphic design.",
      description: "Tech graphic design.",
      tags: ["Graphic Design"],
      image: "/images/projects/tech.webp",
      imageAlt: "Tech graphic design",
      featured: false,
    },
    {
      slug: "sharon-brand",
      title: "Sharon Brand",
      category: "graphics",
      summary: "Brand design.",
      description: "Brand design.",
      tags: ["Graphic Design", "Brand"],
      image: "/images/projects/sharon-brand.webp",
      imageAlt: "Sharon Brand graphic design",
      featured: true,
    },
    {
      slug: "main-card",
      title: "Main Card",
      category: "graphics",
      summary: "Business card design.",
      description: "Business card design.",
      tags: ["Graphic Design", "Business Card"],
      image: "/images/projects/main-card.webp",
      imageAlt: "Main Card business card design",
      featured: true,
    },
    {
      slug: "jonathan-peter",
      title: "Jonathan Peter",
      category: "graphics",
      summary: "Event flyer design.",
      description: "Event flyer design.",
      tags: ["Graphic Design", "Flyer"],
      image: "/images/projects/jonathan-peter.webp",
      imageAlt: "Jonathan Peter event flyer design",
      featured: false,
    },
    {
      slug: "gems-collection",
      title: "Gems Collection",
      category: "graphics",
      summary: "Collection design.",
      description: "Collection design.",
      tags: ["Graphic Design", "Collection"],
      image: "/images/projects/gems-collection.webp",
      imageAlt: "Gems Collection graphic design",
      featured: true,
    },
    {
      slug: "grad",
      title: "Grad",
      category: "graphics",
      summary: "Graduation design.",
      description: "Graduation design.",
      tags: ["Graphic Design", "Graduation"],
      image: "/images/projects/grad.webp",
      imageAlt: "Grad design",
      featured: false,
    },
    {
      slug: "graduation",
      title: "Graduation",
      category: "graphics",
      summary: "Graduation design.",
      description: "Graduation design.",
      tags: ["Graphic Design", "Graduation"],
      image: "/images/projects/graduation.webp",
      imageAlt: "Graduation design",
      featured: false,
    },
    {
      slug: "cuisine",
      title: "Cuisine",
      category: "graphics",
      summary: "Cuisine design.",
      description: "Cuisine design.",
      tags: ["Graphic Design", "Cuisine"],
      image: "/images/projects/cuisine.webp",
      imageAlt: "Cuisine graphic design",
      featured: false,
    },
  ],
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/smith-tech-6565b01b5",
      handle: "Smith Tech",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/smith_ishaku",
      handle: "@smith_ishaku",
    },
    {
      name: "X",
      href: "https://x.com/officailfamous",
      handle: "@officailfamous",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/smith.monet.94",
      handle: "Smith Ishaku",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/2347089906211",
      handle: "+234 708 990 6211",
    },
  ],
  about: {
    eyebrow: "About",
    headline: "Web Developer, Creative Designer and Team Lead",
    intro:
      "I'm Smith Ishaku, a Computer Science graduate and founder of Smith Tech. I build websites and web apps, design brands, and deliver print work, and I lead teams that get it done.",
    cvLabel: "Download CV",
    servicesLabel: "View Services & Skills",
    whatIDoTitle: "What I do",
    whatIDo: [
      {
        title: "Websites & Web Apps",
        description: "Websites and web apps.",
        icon: "web",
      },
      {
        title: "Branding and Print",
        description: "Brand design and print work.",
        icon: "branding",
      },
      {
        title: "Technical Support",
        description:
          "Windows installation and activation, virus detection and removal, and software updates to keep your computer fast and secure.",
        icon: "support",
      },
      {
        title: "Leadership",
        description: "Leading teams that get it done.",
        icon: "leadership",
      },
    ],
    experienceTitle: "Experience",
    educationTitle: "Education",
    education: [
      {
        degree: "BSc Computer Science",
        year: "2025",
      },
    ],
    leadershipTitle: "Leadership",
    leadership: [
      {
        role: "President",
        organization: "Joint Christian Campus Fellowship KASU",
      },
      {
        role: "President",
        organization: "Redeemed Christian Fellowship KASU",
      },
      {
        role: "Auditor",
        organization: "Nigerian Association of Computing Students KASU",
      },
      {
        role: "Treasurer and Financial Secretary",
        organization: "Royal Ambassadors",
      },
    ],
    highlightsTitle: "Highlights",
    highlights: [
      {
        title: "Over 2 years of experience",
      },
      {
        title: "Founder of Smith Tech",
      },
      {
        title: "Projects Wrap2Grow and Navigator",
      },
    ],
    metaTitle: "About",
    metaDescription:
      "I'm Smith Ishaku, a Computer Science graduate and founder of Smith Tech. I build websites and web apps, design brands, and deliver print work, and I lead teams that get it done.",
  },
  servicesPage: {
    eyebrow: "Services",
    headline: "Services & Skills",
    processTitle: "Process",
    process: [
      { title: "Discover" },
      { title: "Design" },
      { title: "Build" },
      { title: "Deliver" },
    ],
    metaTitle: "Services & Skills",
    metaDescription:
      "Web Development, Graphics & Branding, Printing & Business Services, Leadership & Management.",
  },
  contactCta: {
    eyebrow: "Next step",
    heading: "Contact",
    buttonLabel: "Get in touch",
    whatsappLabel: "Message on WhatsApp",
  },
  contactPage: {
    eyebrow: "Contact",
    headline: "Let's work together",
    intro:
      "I'm open to web, design and print projects and job opportunities.",
    whatsappTitle: "WhatsApp",
    whatsappLabel: "Chat on WhatsApp",
    emailTitle: "Email",
    socialsTitle: "Socials",
    cvLabel: "Download CV",
    metaTitle: "Contact",
    metaDescription:
      "I'm open to web, design and print projects and job opportunities. Get in touch with Smith Ishaku.",
  },
  experience: [
    {
      role: "Team Lead",
      company: "Mind Upgrade Global Consult",
      location: "Kaduna State",
      period: "2024 to present",
    },
    {
      role: "Manager / Lead Strategist",
      company: "Diakonia Business Centre",
      location: "Kaduna State University",
      period: "2025 to present",
      description:
        "Technical support for online registrations such as JAMB and CAC, and graphic design projects.",
    },
    {
      role: "Volunteer to the Director of ICT",
      company: "Kaduna State University",
      period: "Current",
    },
    {
      role: "Manager",
      company: "NB Prints",
      location: "Zaria",
      period: "2020",
      description:
        "Financial records, online services, printing, and vendor relationships.",
    },
    {
      role: "Treasurer and Financial Secretary",
      company: "Royal Ambassadors",
      location: "Makidoniya Baptist Church Zaria",
      period: "2019 to 2022",
    },
    {
      role: "Assistant Manager",
      company: "Najet Cyber Cafe",
      location: "Zaria",
      period: "2018 to 2019",
    },
  ],
} satisfies SiteConfig;
