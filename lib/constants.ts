// ============================================================
// ALL SITE CONTENT — Edit everything here
// ============================================================

export const SITE = {
  name: "earningwithai.in",
  tagline: "AI se kamao. For real.",
  title: "AI Se Paisa Kamao | Amit Kumar (@amitxai) | earningwithai.in",
  description:
    "Learn to earn with AI. Free guide by Amit Kumar — built a SaaS with zero coding, earned ₹4.6L+ in 90 days. Real methods, real proof.",
  url: "https://earningwithai.in",
  instagram: "https://instagram.com/amitxai",
  youtube: "https://youtube.com/@amitxai",
  telegram: "https://t.me/amitxai",
  whatsapp: "https://wa.me/91XXXXXXXXXX", // REPLACE: your WhatsApp number
  convertkitFormUrl:
    "https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions", // REPLACE: your ConvertKit form ID
  starterKitUrl: "#", // REPLACE: your Razorpay/Gumroad link for ₹499 starter kit
  waitlistUrl: "#", // REPLACE: your waitlist form URL
};

export const HERO = {
  badge: "🔥 Agency Owner • 5+ Yrs Digital Marketing + AI",
  headline1: "AI se paisa kamana",
  headline2: "seekho —",
  headlineAccent: "for real.",
  subheadline:
    "I built a SaaS app with zero coding and earned ₹4.6L+ in 90 days. Now I teach the exact methods that work.",
  ctaPrimary: "Get Free AI Guide →",
  ctaSecondary: "See My Proof ↓",
  socialProof: "Join 13,500+ people already learning",
  rating: "★ 4.9",
  avatarCount: 5,
};

export const PROOF = {
  heading: "Proof, not promises.",
  imageCaption: "Live Razorpay Dashboard — 90 Days",
  stats: [
    { value: 463949, prefix: "₹", suffix: "", label: "Revenue Collected", display: "₹4,63,949" },
    { value: 256, prefix: "", suffix: "", label: "Customers Acquired", display: "256" },
    { value: 0, prefix: "", suffix: "", label: "Lines of Code I Wrote", display: "0" },
    { value: 5, prefix: "", suffix: "+", label: "Years Experience", display: "5+" },
  ],
  badges: [
    "✓ Verified by Razorpay",
    "✓ Real customers",
    "✓ No coding skills used",
    "✓ Built 100% with AI",
  ],
};

export const METHODS = [
  {
    number: "01",
    icon: "💻",
    title: "AI Freelancing",
    description: "Content, video, design — all powered by AI tools",
    earning: "₹20K–80K/month",
    image: "method-freelancing.png",
    highlight: false,
  },
  {
    number: "02",
    icon: "🚀",
    title: "Build SaaS with AI",
    description: "Create apps without code — this is my exact method",
    earning: "₹50K–5L+/month",
    badge: "★ MY METHOD",
    image: "method-saas.png",
    highlight: true,
  },
  {
    number: "03",
    icon: "📦",
    title: "Digital Products",
    description: "eBooks, prompts, templates — create once, sell forever",
    earning: "₹10K–1L/month",
    image: "method-products.png",
    highlight: false,
  },
  {
    number: "04",
    icon: "🔗",
    title: "Affiliate Marketing",
    description: "Promote AI tools, earn recurring commissions",
    earning: "₹15K–2L/month",
    image: "method-affiliate.png",
    highlight: false,
  },
  {
    number: "05",
    icon: "🎓",
    title: "Coaching & Courses",
    description: "Package your knowledge into high-ticket offers",
    earning: "₹1L–10L/month",
    image: "method-coaching.png",
    highlight: false,
  },
];

export const MY_STORY = {
  heading: "Meri kahani",
  paragraphs: [
    "5+ saal pehle digital marketing shuru ki. Clients ke liye Facebook ads chalata tha, Instagram manage karta tha. Sab manual, sab time-consuming.",
    "2023 mein AI aaya aur sab badal gaya. Maine socha — agar AI content likh sakta hai, toh app bhi bana sakta hai?",
    "Coding ZERO aati thi. Not a single line. But try kiya. AI se har ek line likhwayi. Dheere dheere ek poori CRM — LeadFlow — ban gayi.",
    "90 din mein ₹4.6 lakh kamaye. 256 paying customers. Ab wahi methods tumhe sikhata hoon.",
  ],
  cta: "Read the full blueprint →",
  ctaHref: "/free-guide",
};

export const OFFERINGS = [
  {
    label: "FREE",
    labelColor: "accent",
    title: "AI Income Blueprint 2026",
    description: "My complete guide — journey, methods, tools, action plan",
    price: "₹0",
    originalPrice: "₹999",
    cta: "Download Free →",
    ctaHref: "/free-guide",
    detail: "PDF • 12 Pages • Instant Download",
    highlight: true,
    comingSoon: false,
  },
  {
    label: "STARTER",
    labelColor: "muted",
    title: "AI Starter Kit",
    description: "Templates, prompts, checklists — everything to begin",
    price: "₹499",
    originalPrice: null,
    cta: "Get the Kit →",
    ctaHref: SITE.starterKitUrl,
    detail: "Digital Product • Lifetime Access",
    highlight: false,
    comingSoon: false,
  },
  {
    label: "COMING SOON",
    labelColor: "dim",
    title: "AI Masterclass",
    description: "Complete video course — freelancing to SaaS to coaching",
    price: "₹4,999",
    originalPrice: null,
    cta: "Join Waitlist →",
    ctaHref: SITE.waitlistUrl,
    detail: "Video Course • 5 Modules • Community",
    highlight: false,
    comingSoon: true,
  },
];

export const TOOLS = [
  { name: "Claude AI", description: "Best AI for writing, coding, strategy", type: "Free/Paid", rating: 10, href: "https://claude.ai" },
  { name: "ChatGPT", description: "Most versatile AI for content & automation", type: "Free/Paid", rating: 9, href: "https://chatgpt.com" },
  { name: "Canva", description: "Design anything in minutes — posts, decks", type: "Free/Paid", rating: 9, href: "https://canva.com" },
  { name: "CapCut", description: "AI video editing for Reels & Shorts", type: "Free", rating: 9, href: "https://capcut.com" },
  { name: "HeyGen", description: "AI avatar videos — no camera needed", type: "Paid", rating: 8, href: "https://heygen.com" },
  { name: "ElevenLabs", description: "Ultra-realistic AI voice cloning", type: "Free/Paid", rating: 9, href: "https://elevenlabs.io" },
  { name: "Supabase", description: "Build SaaS backends without backend code", type: "Free/Paid", rating: 10, href: "https://supabase.com" },
  { name: "Vercel", description: "Deploy web apps instantly, free tier is great", type: "Free/Paid", rating: 10, href: "https://vercel.com" },
  { name: "Razorpay", description: "Accept Indian payments instantly", type: "Free", rating: 9, href: "https://razorpay.com" },
  { name: "ManyChat", description: "Automate Instagram DMs & grow list", type: "Free/Paid", rating: 8, href: "https://manychat.com" },
  { name: "ConvertKit", description: "Email marketing for creators", type: "Free/Paid", rating: 8, href: "https://convertkit.com" },
  { name: "Leonardo.ai", description: "Stunning AI image generation", type: "Free/Paid", rating: 8, href: "https://leonardo.ai" },
];

export const EMAIL_CAPTURE = {
  heading: "Weekly AI income tips",
  subheading: "No spam. Just strategies that actually work. Every Tuesday.",
  placeholder: "Enter your email",
  cta: "Subscribe →",
  socialProof: "13,500+ subscribers  •  Free forever  •  Unsubscribe anytime",
};

export const FREE_GUIDE = {
  badge: "FREE GUIDE",
  headline: "AI Income Blueprint 2026",
  subheadline: "The exact playbook I used to earn ₹4.6L+ in 90 days.",
  bullets: [
    "My ₹0 to ₹4.6L journey (with proof)",
    "5 proven AI income methods",
    "12 tools I use daily (with ratings)",
    "7-day quick start action plan",
    "Free community access",
  ],
  formHeading: "Download your free guide",
  namePlaceholder: "Your name",
  emailPlaceholder: "Your email",
  ctaButton: "Download Free Guide →",
  socialProof: "13,500+ people already downloaded  •  100% free  •  Instant access",
};

export const MARQUEE_HASHTAGS = [
  "#Students",
  "#Freelancers",
  "#SideHustlers",
  "#Beginners",
  "#Creators",
  "#AgencyOwners",
];

export const FOOTER_LINKS = [
  { label: "Free Guide", href: "/free-guide" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "mailto:hello@earningwithai.in" },
];
