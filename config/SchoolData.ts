export const SCHOOL_DATA = {
  brand: {
    name: "SATROP SCHOOLS",
    tagline: "Inspiring Excellence, Nurturing Leaders",
    copyright: "2025 Satrop Schools Copyright",
    missionStatement: "Our mission is to deliver standard education to children and prepare them for life of service and commitment, partnering with parents and the community for the betterment of the child."
  },

  contact: {
    phone: "+2348053741906",
    email: "enquiries@satropschools.com",
    whatsappNumber: "2348053741906",
    address: {
      street: "17, Best Food Road",
      estate: "Destiny Homes Estate",
      highway: "Off Lekki - Epe Expressway",
      area: "Abijo, Ibeju - Lekki",
      cityState: "Lagos",
      country: "Nigeria"
    }
  },

  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Facilities", href: "/facilities" },
    { name: "News Gallery", href: "/news" },
    { name: "Admin Login", href: "/admin" }
  ],

  home: {
    hero: {
      badge: "Inspiring Excellence, Nurturing Leaders",
      title: "Satrop Schools",
      ctaText: "Join us Today",
      bgImage: "/images/hero-bg.jpg"
    },
    features: [
      { title: "Academic Excellence", desc: "Our curriculum emphasizes deep academic rigor, challenging students to achieve high standards through structured cognitive programs.", icon: "menu_book" },
      { title: "Inherent Good Characters", desc: "We nurture core ethical frameworks within every child, establishing behavioral principles built on long-term personal integrity.", icon: "workspace_premium" },
      { title: "Standard Facility", desc: "Our campus operates with beautifully modern infrastructure, providing safe spaces engineered for holistic learning.", icon: "domain" }
    ],
    welcomeSection: {
      author: "Mrs. Iyabo Payne",
      role: "Head of School",
      quote: "Dear Parents, Families, Staff, and Esteemed Visitors, I warmly welcome you to our newly transformed Satrop Schools—a beacon of innovation, excellence, and holistic education. Our recent renovations mark a bold new chapter in our journey.",
      ctaText: "Continue Reading",
      image: "/images/head-of-school.jpg"
    },
    promiseSection: {
      title: "Brighter Tomorrow is Our Promise",
      tagline: "Nurturing curious minds, building high moral values, and preparing leaders for future success.",
      desc: "Our high-impact developmental pipeline couples an internationally aligned curriculum with targeted moral focus to shape globally competent students.",
      ctaText: "Read More",
      images: ["/images/promise-1.jpg", "/images/promise-2.jpg", "/images/promise-3.jpg"]
    },
    uniqueness: [
      { title: "International Curriculum", icon: "school" },
      { title: "Medical Facilities", icon: "medical_services" },
      { title: "Virtual Classes", icon: "computer" },
      { title: "Standard Transport", icon: "directions_bus" },
      { title: "Sports", icon: "sports_soccer" },
      { title: "ICT Content", icon: "lan" }
    ],
    classSize: {
      title: "Small Class Size",
      desc: "We deliberately maintain lower student-to-teacher configurations to anchor personalized development plans for every learner.",
      points: [
        { title: "Low Student-to-Teacher Ratio", detail: "Ensures instructors can trace specific cognitive pathways and provide direct interventions." },
        { title: "Individualized Attention", detail: "Tailored check-ins ensure that no student slips back or faces unaddressed learning blocks." }
      ],
      ctaText: "Read More",
      image: "/images/small-class.jpg"
    }
  },

  about: {
    introText: "SATROP SCHOOLS is a premier co-educational institution committed to academic brilliance and complete child enrichment. We integrate international standards with deep local values to prepare students to be critical innovators on the world stage.",
    coreValues: {
      acronym: "MERITS",
      items: [
        { letter: "M", title: "Morals" },
        { letter: "E", title: "Excellence" },
        { letter: "R", title: "Respect" },
        { letter: "I", title: "Integrity" },
        { letter: "T", title: "Tolerance" },
        { letter: "S", title: "Sound Discipline" }
      ]
    },
    managementTeam: [
      { name: "Mrs. Sarah Amusa", role: "Director of Studies", image: "/Mrs.-Sarah-Amusa-Director-of-Studies.jpg" },
      { name: "Mrs. Iyabo Payne", role: "Head of School", image: "/Mrs.-Iyabo-Payne-Head-of-School.jpg" },
      { name: "Mr. Uduak Isaac", role: "Head - ICT", image: "/Mr.-Isaac-Uduak-Deputy-Head-of-School.jpg" },
      { name: "Administrative Officer", role: "Operations Management", image: "/images/team/admin.jpg" },
      { name: "Accountant", role: "Financial Administration", image: "/images/team/accountant.jpg" }
    ]
  },

  facilities: {
    modernFacilitiesIntro: {
      title: "Modern Facilities",
      description: "Our school environment is designed to maximize learning, safety, and physical development through:",
      bullets: [
        "Well-ventilated and air-conditioned classrooms.",
        "Advanced instructional gadgets and multi-media kits.",
        "Resource-stuffed library for absolute research.",
        "Fully equipped clinic for swift medical responses."
      ]
    },
    mainFeatures: [
      { title: "Small Classrooms", desc: "Deliberately designed spaces built to keep student-to-teacher ratios low. This setup guarantees that instructors can trace individual cognitive pathways.", images: ["/Smartboard-class-size.jpg", "/satrap-facilities-one.jpg"] },
      { title: "Library", desc: "A beautifully curated resource center containing expansive physical text collections, diverse reference media, and dedicated quiet zones.", image: "/library-slide-facility.webp" },
      { title: "ICT Laboratory", desc: "A specialized computer facility equipped with individual workstations to train pupils directly in computational thinking.", image: "/ICTLab.webp" },
      { title: "Transport Facilities", desc: "A highly secure, meticulously managed fleet of corporate school buses running optimized tracking routes.", image: "/Transport.jpg" },
      { title: "Music Studio", desc: "An acoustic learning arena stocked with classical and modern musical instruments to enhance creative sensory coordination.", image: "/musicslide-min.webp" },
      { title: "Home Economics Laboratory", desc: "A practical, safe, real-world instruction suite configured for hospitality arts and fundamental culinary training.", image: "/home-economics.webp" },
      { title: "Learning Aid", desc: "An innovative development center utilizing interactive audiovisual tools, creative physical play props, and specialized sensory kits.", image: "/learning-aid.jpg" }
    ],
    services: {
      title: "Services",
      list: ["Serene Environment", "Standard Facilities", "Qualify Staffs", "Maximum Security", "Broad Base Curriculum"],
      highlightText: "Our primary playing arena and multi-sport surfaces are cushioned with high-grade, shock-absorbent artificial turf. This premium layout minimizes physical impacts, prevents playground injuries, and provides our student athletes with an ultra-safe environment.",
      images: ["/images/facilities/turf-1.jpg", "/images/facilities/turf-2.jpg", "/images/facilities/turf-3.jpg", "/images/facilities/turf-view.jpg"]
    },
    otherFacilitiesGrid: [
      { name: "Playground", icon: "sports_baseball" },
      { name: "Sick Bay", icon: "medical_services" },
      { name: "School Bus", icon: "directions_bus" },
      { name: "Air Conditioned Classrooms", icon: "ac_unit" },
      { name: "Serene Environment", icon: "filter_hdr" },
      { name: "Library", icon: "menu_book" },
      { name: "24/7 Surveillance", icon: "videocam" },
      { name: "Science Lab(s)", icon: "biotech" }
    ]
  }
};