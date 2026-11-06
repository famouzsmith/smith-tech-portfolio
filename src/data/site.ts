export type ProjectCategory = "web" | "graphics" | "printing";

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

export type AboutCard = {
  title: string;
  description: string;
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
};

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web Dev",
  graphics: "Graphics",
  printing: "Printing",
};

export const categoryFilters = [
  { value: "all", label: "All" },
  { value: "web", label: "Web Dev" },
  { value: "graphics", label: "Graphics" },
  { value: "printing", label: "Printing" },
] as const satisfies ReadonlyArray<{ value: ProjectFilter; label: string }>;

export const site = {
  name: "Smith Ishaku",
  brand: "SMITH TECH",
  tagline: "Web · Graphics · Print",
  title: "Web Developer & Creative Designer",
  shortBio:
    "I connect digital products with physical branding — from the first line of code to the final printed flyer.",
  bio: "I don't just write code — I build businesses. With over 2 years of experience, I bridge digital software and physical branding, from the first line of code to the final printed flyer. As Team Lead at Mind Upgrade Global Consult, I direct creative projects and guide teams to deliver excellence.",
  role: "Team Lead at Mind Upgrade Global Consult",
  email: "hello@example.com",
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
      slug: "business-platform",
      title: "Business Platform",
      category: "web",
      summary:
        "A clean, responsive platform for presenting services and managing business enquiries.",
      description:
        "A modern business platform built to make services easy to understand and enquiries easy to start. The layout balances clear information architecture with a polished, mobile-first interface that feels professional at every screen size.",
      tags: ["Web Platform", "Responsive UI", "Business"],
      image: "/images/projects/business-platform.jpg",
      imageAlt: "Business Platform website design",
      featured: true,
    },
    {
      slug: "school-navigation-system",
      title: "School Navigation System",
      category: "web",
      summary:
        "A practical web tool that helps students and visitors find their way around campus.",
      description:
        "A web-based navigation experience designed to make large school environments easier to explore. Clear wayfinding, simple interactions, and a mobile-friendly layout keep the experience useful for students, staff, and first-time visitors.",
      tags: ["Web App", "Navigation", "Education"],
      image: "/images/projects/school-navigation-system.jpg",
      imageAlt: "School Navigation System website design",
      featured: true,
    },
    {
      slug: "architect-portfolio",
      title: "Architect Portfolio",
      category: "web",
      summary:
        "A visual portfolio that lets architectural work speak with clarity and confidence.",
      description:
        "A refined portfolio concept for an architecture practice, built around large visuals, generous spacing, and a calm reading rhythm. The result presents projects as considered bodies of work rather than a simple gallery.",
      tags: ["Portfolio", "Web Design", "Visual Storytelling"],
      image: "/images/projects/architect-portfolio.jpg",
      imageAlt: "Architect Portfolio website design",
      featured: false,
    },
    {
      slug: "corporate-brand-identity",
      title: "Corporate Brand Identity",
      category: "graphics",
      summary:
        "A cohesive identity system that gives a corporate brand a clear, memorable voice.",
      description:
        "A complete brand identity direction covering logo usage, colour, typography, and supporting visual elements. The system is designed to stay consistent across stationery, digital channels, and printed collateral.",
      tags: ["Brand Identity", "Logo Design", "Brand Guidelines"],
      image: "/images/projects/corporate-brand-identity.jpg",
      imageAlt: "Corporate Brand Identity design presentation",
      featured: true,
    },
    {
      slug: "social-media-campaign",
      title: "Social Media Campaign",
      category: "graphics",
      summary:
        "A coordinated set of social visuals designed to stop the scroll and stay on-brand.",
      description:
        "A campaign system built for consistent visual impact across social platforms. Each asset is designed to work as part of a family while remaining clear and legible in fast-moving feeds.",
      tags: ["Social Media", "Campaign Design", "Content"],
      image: "/images/projects/social-media-campaign.jpg",
      imageAlt: "Social Media Campaign graphics",
      featured: false,
    },
    {
      slug: "3d-product-mockup",
      title: "3D Product Mockup",
      category: "graphics",
      summary:
        "Realistic product visuals that help ideas feel tangible before production.",
      description:
        "A polished 3D mockup direction used to present products in realistic settings and lighting. The visuals help clients evaluate design decisions and give marketing materials a premium finish.",
      tags: ["3D Mockup", "Product Design", "Visualisation"],
      image: "/images/projects/3d-product-mockup.jpg",
      imageAlt: "3D Product Mockup visual",
      featured: false,
    },
    {
      slug: "event-flyer-campaign",
      title: "Event Flyer Campaign",
      category: "printing",
      summary:
        "A bold flyer series built to communicate an event quickly and memorably.",
      description:
        "A print campaign designed around strong hierarchy, confident typography, and a clear call to action. The system adapts across flyer formats while keeping the event identity instantly recognisable.",
      tags: ["Flyer Design", "Print", "Campaign"],
      image: "/images/projects/event-flyer-campaign.jpg",
      imageAlt: "Event Flyer Campaign print design",
      featured: false,
    },
    {
      slug: "business-cards",
      title: "Business Cards",
      category: "printing",
      summary:
        "A sharp, professional stationery set that makes a lasting first impression.",
      description:
        "A business card design focused on clarity, tactile quality, and brand consistency. The layout gives essential contact details room to breathe while keeping the card distinctive.",
      tags: ["Business Cards", "Print Design", "Stationery"],
      image: "/images/projects/business-cards.jpg",
      imageAlt: "Business Cards print design",
      featured: false,
    },
    {
      slug: "large-format-banner",
      title: "Large Format Banner",
      category: "printing",
      summary:
        "High-impact large format graphics designed to be read from a distance.",
      description:
        "A large format banner concept built for visibility in busy physical environments. Strong contrast, simple messaging, and production-ready artwork ensure the design performs at scale.",
      tags: ["Banner", "Large Format", "Print"],
      image: "/images/projects/large-format-banner.jpg",
      imageAlt: "Large Format Banner print design",
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
        title: "Web",
        description: "Websites and web apps.",
      },
      {
        title: "Branding and Print",
        description: "Brand design and print work.",
      },
      {
        title: "Leadership",
        description: "Leading teams that get it done.",
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
