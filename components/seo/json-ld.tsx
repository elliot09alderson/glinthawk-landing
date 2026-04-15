export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Glinthawk Technology",
    url: "https://glinthawktechnologies.com",
    logo: "https://glinthawktechnologies.com/images/GlintHawk-logo.png",
    description:
      "AI software development and digital marketing company based in Bhilai, Chhattisgarh, India. Specializing in AI-powered products, autonomous agents, mobile & desktop app development, SEO, and GEO optimization.",
    foundingLocation: {
      "@type": "Place",
      name: "Bhilai, Chhattisgarh, India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near IIT Bhilai",
      addressLocality: "Bhilai",
      addressRegion: "Chhattisgarh",
      postalCode: "490023",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.1938,
      longitude: 81.3509,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@glinthawktechnologies.com",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/glinthawk",
      "https://github.com/elliot09alderson",
    ],
    areaServed: [
      {
        "@type": "State",
        name: "Chhattisgarh",
      },
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Mobile App Development",
      "Digital Marketing",
      "Search Engine Optimization",
      "GEO Optimization",
      "AI Agents",
      "Large Language Models",
      "Web Development",
      "Desktop Applications",
      "Personal Branding",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://glinthawktechnologies.com/#localbusiness",
    name: "Glinthawk Technology",
    image: "https://glinthawktechnologies.com/images/GlintHawk-logo.png",
    url: "https://glinthawktechnologies.com",
    telephone: "",
    email: "hello@glinthawktechnologies.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near IIT Bhilai",
      addressLocality: "Bhilai",
      addressRegion: "Chhattisgarh",
      postalCode: "490023",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.1938,
      longitude: 81.3509,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    priceRange: "$$",
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Glinthawk Technology Services",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "AI Software Development",
        description:
          "Custom AI-powered software development including autonomous agents, LLM integration, chatbots, and intelligent automation systems.",
        provider: { "@type": "Organization", name: "Glinthawk Technology" },
        areaServed: "Worldwide",
        serviceType: "AI Development",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Mobile App Development",
        description:
          "Native and cross-platform mobile application development for Android and iOS using Flutter, React Native, Swift, and Kotlin.",
        provider: { "@type": "Organization", name: "Glinthawk Technology" },
        areaServed: "Worldwide",
        serviceType: "Mobile Development",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Digital Marketing & SEO",
        description:
          "Data-driven digital marketing, technical SEO, content strategy, and performance marketing for businesses in Chhattisgarh and globally.",
        provider: { "@type": "Organization", name: "Glinthawk Technology" },
        areaServed: ["Chhattisgarh", "India", "Worldwide"],
        serviceType: "Digital Marketing",
      },
      {
        "@type": "Service",
        position: 4,
        name: "GEO Optimization",
        description:
          "Generative Engine Optimization to ensure brand visibility in AI-generated search results, voice assistants, and next-gen discovery platforms.",
        provider: { "@type": "Organization", name: "Glinthawk Technology" },
        areaServed: "Worldwide",
        serviceType: "GEO Optimization",
      },
      {
        "@type": "Service",
        position: 5,
        name: "Personal Branding",
        description:
          "Strategic personal brand development including content design, social media presence, and thought leadership positioning.",
        provider: { "@type": "Organization", name: "Glinthawk Technology" },
        areaServed: "Worldwide",
        serviceType: "Branding",
      },
      {
        "@type": "Service",
        position: 6,
        name: "Desktop Application Development",
        description:
          "Cross-platform desktop application development for Windows, macOS, and Linux using Electron, Tauri, and native technologies.",
        provider: { "@type": "Organization", name: "Glinthawk Technology" },
        areaServed: "Worldwide",
        serviceType: "Desktop Development",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Glinthawk Technology",
    url: "https://glinthawktechnologies.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://glinthawktechnologies.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Glinthawk Technology offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glinthawk Technology offers AI software development, mobile app development (Android & iOS), desktop application development, digital marketing, SEO, GEO optimization, personal branding, and dedicated resource augmentation. We specialize in building AI-powered products and autonomous agents.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Glinthawk Technology located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glinthawk Technology is headquartered near IIT Bhilai in Bhilai, Chhattisgarh 490023, India. We serve clients both locally across Chhattisgarh (including Raipur, Durg, Korba, Bilaspur) and globally.",
        },
      },
      {
        "@type": "Question",
        name: "Does Glinthawk Technology work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. While based in Chhattisgarh, India, we partner with startups, scale-ups, and enterprises across the globe. We provide remote engineering teams, dedicated developers, and end-to-end product development for clients worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Glinthawk Technology use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with cutting-edge technologies including React, Next.js, Flutter, React Native, Python, Node.js, Go, TypeScript, PyTorch, TensorFlow, LangChain, OpenAI, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Can Glinthawk Technology build AI agents and automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI agent development is our core specialty. We design and deploy autonomous AI agents, LLM-powered products, intelligent workflow automation, and custom machine learning solutions for businesses of all sizes.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
