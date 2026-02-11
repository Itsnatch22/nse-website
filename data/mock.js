// Mock data for OneGrid Solar Workflow Management Platform

export const features = [
  {
    id: 1,
    icon: "Workflow",
    title: "End-to-End Project Lifecycle",
    description: "From lead capture to commercial operation, manage every phase in one connected platform. No more juggling spreadsheets, emails, and disconnected tools."
  },
  {
    id: 2,
    icon: "Users",
    title: "Cross-Team Collaboration",
    description: "Sales, engineering, permitting, legal, and construction teams work from the same source of truth. Everyone stays aligned without endless status meetings."
  },
  {
    id: 3,
    icon: "DollarSign",
    title: "Budget Control & Tracking",
    description: "Lock budgets at each project phase and track every change. Know exactly where your margins went and prevent scope creep before it impacts your bottom line."
  },
  {
    id: 4,
    icon: "FileCheck",
    title: "Permitting & Compliance",
    description: "Centralize permit applications, track approval status, and manage compliance requirements. Never miss a deadline or lose a document again."
  },
  {
    id: 5,
    icon: "BarChart3",
    title: "Real-Time Project Visibility",
    description: "Dashboards that show exactly where every project stands. Identify bottlenecks, track milestones, and make decisions with confidence."
  },
  {
    id: 6,
    icon: "Shield",
    title: "Risk Management",
    description: "Flag potential issues before they derail your projects. Track risks across your portfolio and ensure nothing falls through the cracks."
  }
];

export const detailedFeatures = [
  {
    id: 1,
    icon: "Brain",
    title: "Automated System Sizing",
    description: "Automatically generate optimal system designs for on-grid, off-grid, and hybrid applications. Configure systems based on site data, consumption patterns, and local regulations.",
    details: ["On-grid, off-grid & hybrid configurations", "Panel layout optimization", "Inverter & battery matching", "Financial modeling"]
  },
  {
    id: 2,
    icon: "FileCheck",
    title: "Policy & Compliance Engine",
    description: "AI-powered policy requirements lookup. Automatically identify permits, utility requirements, and regulatory compliance needs for any jurisdiction.",
    details: ["50 states + international coverage", "Real-time regulatory updates", "Automated checklist generation", "Compliance tracking"]
  },
  {
    id: 3,
    icon: "DollarSign",
    title: "Budget Lock & Tracking",
    description: "Lock budgets at each project phase. Track every change from sales proposal through contracting and construction with full audit trails.",
    details: ["Phase-based budget locks", "Change order workflows", "Variance alerts", "Margin protection"]
  },
  {
    id: 4,
    icon: "Sparkles",
    title: "AI Project Plans",
    description: "Generate intelligent project plans with realistic timelines. Get AI-powered insights and recommendations to keep projects on track.",
    details: ["Historical data analysis", "Resource optimization", "Risk identification", "Milestone recommendations"]
  },
  {
    id: 5,
    icon: "ShieldAlert",
    title: "Risk Management",
    description: "Proactive risk identification and mitigation. AI analyzes project data to flag potential issues before they become problems.",
    details: ["Portfolio-wide risk view", "Early warning alerts", "Mitigation tracking", "Risk scoring"]
  },
  {
    id: 6,
    icon: "Workflow",
    title: "Workflow Automation",
    description: "Automate repetitive tasks and approvals. Custom workflows that match how your business actually operates.",
    details: ["Configurable approval chains", "Automated notifications", "Task assignments", "Status triggers"]
  }
];

export const processSteps = [
  {
    id: 1,
    title: "Capture & Qualify Leads",
    description: "Centralize incoming opportunities. Qualify leads with standardized criteria and seamlessly hand off to sales and engineering teams."
  },
  {
    id: 2,
    title: "Design & Develop",
    description: "Engineering, permitting, and legal work in parallel with full visibility. Designs connect to budgets, contracts reflect approved scope."
  },
  {
    id: 3,
    title: "Build & Commission",
    description: "Construction teams execute against locked plans. Track progress, manage changes, and bring projects to COD on time and on budget."
  }
];

export const useCases = [
  {
    id: 1,
    title: "Solar Developers",
    description: "Manage the entire development lifecycle from site prospecting through COD. Track milestones, coordinate teams, and maintain visibility across your portfolio.",
    icon: "Sun"
  },
  {
    id: 2,
    title: "EPCs",
    description: "Streamline construction workflows, coordinate subcontractors, and deliver projects on schedule. Connected budgets ensure you protect margins throughout.",
    icon: "HardHat"
  },
  {
    id: 3,
    title: "IPPs",
    description: "Oversee development and construction of your assets with complete transparency. Track every decision, every change, every dollar from day one.",
    icon: "Building2"
  }
];

export const departmentCards = [
  {
    id: 1,
    title: "Sales Teams",
    description: "Generate accurate proposals with AI-powered system sizing. Lock pricing and scope to prevent margin erosion as projects move through the pipeline.",
    icon: "TrendingUp"
  },
  {
    id: 2,
    title: "Engineering",
    description: "Automated preliminary designs and policy compliance checks. Spend time on complex engineering challenges, not repetitive calculations.",
    icon: "Cpu"
  },
  {
    id: 3,
    title: "Project Management",
    description: "AI-generated project plans with intelligent milestones. Real-time risk alerts and insights help you deliver projects on time and on budget.",
    icon: "Kanban"
  },
  {
    id: 4,
    title: "Legal & Contracts",
    description: "Streamlined contract workflows with budget lock integration. Every scope change is documented and approved before it impacts the bottom line.",
    icon: "Scale"
  },
  {
    id: 5,
    title: "Procurement",
    description: "Connected procurement planning tied to project timelines. Automated BOM generation and supplier coordination based on locked designs.",
    icon: "Package"
  },
  {
    id: 6,
    title: "Executive Leadership",
    description: "Real-time visibility into every project. Track budget variance, risk exposure, and team performance across your entire portfolio.",
    icon: "LayoutDashboard"
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "For growing solar companies ready to get organized",
    price: "499",
    currency: "$",
    period: "month",
    popular: false,
    features: [
      "Up to 25 active projects",
      "5 team members",
      "Project lifecycle tracking",
      "Document management",
      "Basic reporting",
      "Email support"
    ]
  },
  {
    id: 2,
    name: "Professional",
    description: "For established companies scaling operations",
    price: "1,299",
    currency: "$",
    period: "month",
    popular: true,
    features: [
      "Up to 100 active projects",
      "25 team members",
      "Budget lock & tracking",
      "Advanced workflows",
      "Permitting management",
      "Risk dashboards",
      "Priority support"
    ]
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "Custom",
    currency: "",
    period: "",
    popular: false,
    features: [
      "Unlimited projects",
      "Unlimited team members",
      "Custom workflows",
      "White-label options",
      "Dedicated success manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "VP of Operations",
    company: "SunPower Installations",
    content: "OneGrid finally gave us one place to manage everything. Our teams stopped working in silos, and we cut our project delivery time by 30%. It just makes sense.",
    avatar: "SM"
  },
  {
    id: 2,
    name: "James Chen",
    role: "CEO",
    company: "Pacific Solar Group",
    content: "We went from spreadsheet chaos to actually knowing where every project stands. The budget tracking alone has saved us from margin erosion on dozens of projects.",
    avatar: "JC"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Director of Project Management",
    company: "Verde Energy Solutions",
    content: "Built by people who actually understand solar development. Every feature solves a real problem we face. It's not generic project software with a solar skin.",
    avatar: "MR"
  }
];

export const faqs = [
  {
    id: 1,
    question: "What makes OneGrid different from generic project management tools?",
    answer: "OneGrid was built specifically for solar by people who've developed, built, and operated solar projects. Every feature addresses real challenges in the solar workflow - from interconnection tracking to permit management to budget locks. Generic tools require endless customization; OneGrid works out of the box for how solar companies actually operate."
  },
  {
    id: 2,
    question: "How does budget lock work?",
    answer: "Budget lock captures the approved budget at each project phase (sales, engineering, contracting, construction). Any changes require documented approval workflows. You can see exactly when and why budgets changed, who approved them, and the impact on margins. No more surprises at project closeout."
  },
  {
    id: 3,
    question: "Can OneGrid handle our existing projects or just new ones?",
    answer: "Both. Our implementation team helps you import existing projects with their current status, documents, and history. New projects benefit from the full workflow from day one. Most clients are fully operational within 2-4 weeks."
  },
  {
    id: 4,
    question: "How do different teams collaborate in OneGrid?",
    answer: "Each team has role-based access to the information they need. Sales sees pipeline and proposals. Engineering accesses designs and technical specs. Permitting tracks applications and approvals. Everyone works from the same project record, so handoffs are seamless and nothing gets lost."
  },
  {
    id: 5,
    question: "Does OneGrid integrate with tools we already use?",
    answer: "Yes. We offer integrations with popular CRMs (Salesforce, HubSpot), accounting software (QuickBooks, Xero), design tools (Aurora, Helioscope), and more. Our API allows custom integrations with any system. Enterprise customers get dedicated integration support."
  },
  {
    id: 6,
    question: "What kind of support do you provide?",
    answer: "All plans include onboarding and training. Starter plans have email support with 24-hour response. Professional adds priority support with 4-hour response and phone access. Enterprise clients receive a dedicated success manager and 24/7 support."
  }
];

export const stats = [
  { id: 1, value: "40%", label: "Reduction in Margin Leakage" },
  { id: 2, value: "15hrs", label: "Saved Per Week on Sizing" },
  { id: 3, value: "30%", label: "Faster Project Delivery" },
  { id: 4, value: "98%", label: "Client Retention" }
];

export const securityFeatures = [
  {
    id: 1,
    icon: "ShieldCheck",
    title: "SOC 2 Type II Certified",
    description: "Annual audits verify our security controls meet enterprise standards."
  },
  {
    id: 2,
    icon: "Lock",
    title: "End-to-End Encryption",
    description: "All data encrypted at rest and in transit using AES-256."
  },
  {
    id: 3,
    icon: "Server",
    title: "99.9% Uptime SLA",
    description: "Redundant infrastructure ensures your operations never stop."
  }
];
