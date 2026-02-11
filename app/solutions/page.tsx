import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import {
  ArrowRight,
  Sun,
  HardHat,
  Building2,
  CheckCircle,
  Users,
  DollarSign,
  FileCheck,
  Clock,
  BarChart3,
  Workflow,
  Shield,
  FolderKanban,
  Scale,
  Package,
  LayoutDashboard
} from 'lucide-react';

const solutionData = {
  'solar-developers': {
    icon: Sun,
    title: 'For Solar Developers',
    subtitle: 'From Site Selection to COD',
    description: 'Manage the entire development lifecycle in one platform. Track every project from prospecting through commercial operation with complete visibility for your entire team.',
    stats: [
      { value: '30%', label: 'Faster Time to COD' },
      { value: '500+', label: 'Development Projects' },
      { value: '98%', label: 'On-Time Delivery' },
    ],
    features: [
      {
        icon: FolderKanban,
        title: 'Pipeline Management',
        description: 'Track every opportunity from early prospecting through development. Standardized milestones keep projects moving and teams aligned.'
      },
      {
        icon: Users,
        title: 'Cross-Team Coordination',
        description: 'Sales, engineering, permitting, and legal work from the same project record. Handoffs are seamless, nothing falls through the cracks.'
      },
      {
        icon: DollarSign,
        title: 'Budget Tracking',
        description: 'Lock development budgets and track every change. Know exactly where your margins went and why before you break ground.'
      },
      {
        icon: FileCheck,
        title: 'Document Control',
        description: 'Land agreements, permits, interconnection docs, PPAs—everything in one place with version control and audit trails.'
      },
    ],
    teams: ['Sales', 'Site Acquisition', 'Engineering', 'Permitting', 'Legal', 'Finance'],
    workflowPreview: {
      title: 'Development Pipeline',
      stages: ['Prospecting', 'Due Diligence', 'Permitting', 'Financing', 'NTP', 'COD'],
      metrics: [
        { label: 'In Development', value: '34' },
        { label: 'Total MW', value: '412' },
        { label: 'Avg Timeline', value: '18 mo' },
      ],
      activity: 'Interconnection approved - Desert Sun 25MW'
    },
    testimonial: {
      quote: "OneGrid gave us visibility we never had before. Our development team finally knows exactly where every project stands without chasing status updates.",
      author: "Michael Torres",
      role: "VP of Development",
      company: "Apex Solar Partners"
    }
  },
  'epcs': {
    icon: HardHat,
    title: 'For EPCs',
    subtitle: 'Deliver Projects On Time & On Budget',
    description: 'Streamline construction workflows from contract to commissioning. Coordinate teams, track budgets, and deliver projects without the usual chaos.',
    stats: [
      { value: '25%', label: 'Less Budget Variance' },
      { value: '2.5GW', label: 'Installed Capacity' },
      { value: '94%', label: 'On-Budget Completion' },
    ],
    features: [
      {
        icon: Workflow,
        title: 'Construction Workflows',
        description: 'From NTP to commissioning, track every phase with standardized checklists and milestone tracking that matches how you actually build.'
      },
      {
        icon: DollarSign,
        title: 'Budget Lock & Change Orders',
        description: 'Lock contract budgets and require documented approval for every change. Know the margin impact before you approve anything.'
      },
      {
        icon: Users,
        title: 'Subcontractor Coordination',
        description: 'Electrical, civil, mechanical—everyone works from the same schedule. Shared visibility reduces conflicts and delays.'
      },
      {
        icon: Shield,
        title: 'Quality & Safety Tracking',
        description: 'Inspection logs, NCR tracking, safety documentation—all connected to the project record for complete audit trails.'
      },
    ],
    teams: ['Project Management', 'Engineering', 'Procurement', 'Site Supervision', 'Quality', 'Safety'],
    workflowPreview: {
      title: 'Construction Tracker',
      stages: ['Mobilization', 'Civil', 'Racking', 'Electrical', 'Commissioning'],
      metrics: [
        { label: 'Active Sites', value: '12' },
        { label: 'On Schedule', value: '10' },
        { label: 'Budget Var.', value: '+1.2%' },
      ],
      activity: 'Mechanical complete - Valley Industrial 8.4MW'
    },
    testimonial: {
      quote: "We cut our budget variance in half. The change order tracking alone has protected millions in margins across our portfolio.",
      author: "Sarah Kim",
      role: "Operations Director",
      company: "SunBuild Construction"
    }
  },
  'ipps': {
    icon: Building2,
    title: 'For IPPs',
    subtitle: 'Complete Portfolio Visibility',
    description: 'Oversee development and construction of your assets with full transparency. Track every decision, every change, every dollar from acquisition through COD.',
    stats: [
      { value: '5GW', label: 'Assets Tracked' },
      { value: '100%', label: 'Change Documentation' },
      { value: '45', label: 'Projects Monitored' },
    ],
    features: [
      {
        icon: BarChart3,
        title: 'Portfolio Dashboard',
        description: 'Real-time visibility across all your development and construction projects. See status, risks, and budget health at a glance.'
      },
      {
        icon: DollarSign,
        title: 'Investment Tracking',
        description: 'Track capital deployment against budgets. Every change is documented with approval trails for your investment committee.'
      },
      {
        icon: FileCheck,
        title: 'Reporting & Compliance',
        description: 'Generate investor reports, lender updates, and compliance documentation from live project data—not stale spreadsheets.'
      },
      {
        icon: Shield,
        title: 'Risk Monitoring',
        description: 'Flag schedule risks, budget variances, and compliance issues across your portfolio before they become problems.'
      },
    ],
    teams: ['Asset Management', 'Finance', 'Legal', 'Investor Relations', 'Development Oversight'],
    workflowPreview: {
      title: 'Portfolio Overview',
      stages: ['Due Diligence', 'Development', 'Construction', 'Operating'],
      metrics: [
        { label: 'Total Projects', value: '45' },
        { label: 'In Construction', value: '12' },
        { label: 'Portfolio MW', value: '1.2GW' },
      ],
      activity: 'Budget variance alert - Midwest Portfolio'
    },
    testimonial: {
      quote: "Our board and investors get real transparency now. We can answer any question about any project because everything is tracked in OneGrid.",
      author: "Jennifer Walsh",
      role: "CFO",
      company: "Clearview Energy Holdings"
    }
  },
  'asset-managers': {
    icon: Building2,
    title: 'For Asset Managers',
    subtitle: 'Manage Multiple Portfolios',
    description: 'Third-party asset managers need visibility across multiple client portfolios. OneGrid provides the tools to oversee development and construction for all your clients.',
    stats: [
      { value: '8GW', label: 'Under Management' },
      { value: '15', label: 'Client Portfolios' },
      { value: '99%', label: 'Reporting Accuracy' },
    ],
    features: [
      {
        icon: Users,
        title: 'Multi-Client Management',
        description: 'Separate workspaces for each client with role-based access. Your team sees everything; clients see only their portfolio.'
      },
      {
        icon: BarChart3,
        title: 'Client Reporting',
        description: 'Generate professional reports for each client from live project data. Customizable templates match your reporting standards.'
      },
      {
        icon: DollarSign,
        title: 'Budget Oversight',
        description: 'Track budgets across all client portfolios. Identify variances early and document every change for full accountability.'
      },
      {
        icon: Workflow,
        title: 'Standardized Workflows',
        description: 'Apply consistent processes across all clients. Best practices become repeatable, quality becomes predictable.'
      },
    ],
    teams: ['Portfolio Management', 'Client Services', 'Technical Review', 'Finance', 'Reporting'],
    workflowPreview: {
      title: 'Client Portfolios',
      stages: ['Active', 'In Review', 'Reporting', 'Complete'],
      metrics: [
        { label: 'Clients', value: '15' },
        { label: 'Total Projects', value: '89' },
        { label: 'Reports Due', value: '4' },
      ],
      activity: 'Monthly report generated - Client A Portfolio'
    },
    testimonial: {
      quote: "Managing 8GW across 15 clients was chaos before OneGrid. Now we have one system that scales with our business.",
      author: "Robert Chang",
      role: "Managing Director",
      company: "Solaris Asset Management"
    }
  },
  // Department-specific solutions
  'sales-teams': {
    icon: Users,
    title: 'For Sales Teams',
    subtitle: 'Close More Deals, Faster',
    description: 'Generate accurate proposals with AI-powered system sizing. Lock pricing and scope to prevent margin erosion as projects move through the pipeline.',
    stats: [
      { value: '40%', label: 'Faster Proposals' },
      { value: '25%', label: 'Higher Win Rate' },
      { value: '15hrs', label: 'Saved Weekly' },
    ],
    features: [
      {
        icon: DollarSign,
        title: 'AI-Powered Proposals',
        description: 'Generate accurate system designs and pricing in minutes, not hours. AI handles the calculations so you can focus on relationships.'
      },
      {
        icon: FolderKanban,
        title: 'Pipeline Visibility',
        description: 'Track every opportunity from first contact to signed contract. Know exactly where each deal stands and what needs attention.'
      },
      {
        icon: FileCheck,
        title: 'Scope Lock',
        description: 'Lock pricing and scope at proposal stage. Prevent margin erosion from engineering changes with documented approval workflows.'
      },
      {
        icon: BarChart3,
        title: 'Performance Analytics',
        description: 'Track win rates, deal velocity, and team performance. Identify what works and replicate success across your sales organization.'
      },
    ],
    teams: ['Account Executives', 'Sales Engineers', 'Business Development', 'Sales Operations'],
    workflowPreview: {
      title: 'Sales Pipeline',
      stages: ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Closed'],
      metrics: [
        { label: 'Active Deals', value: '47' },
        { label: 'Pipeline Value', value: '$12M' },
        { label: 'Avg Deal Size', value: '$255K' },
      ],
      activity: 'Proposal sent - Valley Commerce 2.4MW'
    },
    testimonial: {
      quote: "We cut our proposal time from 3 days to 3 hours. The AI sizing gets us 90% of the way there, and scope lock protects our margins.",
      author: "Lisa Chen",
      role: "VP of Sales",
      company: "SunPeak Energy"
    }
  },
  'engineering': {
    icon: Building2,
    title: 'For Engineering Teams',
    subtitle: 'Design Smarter, Not Harder',
    description: 'Automated preliminary designs and policy compliance checks. Spend time on complex engineering challenges, not repetitive calculations.',
    stats: [
      { value: '60%', label: 'Faster Designs' },
      { value: '15hrs', label: 'Saved on Sizing' },
      { value: '99%', label: 'Compliance Rate' },
    ],
    features: [
      {
        icon: Workflow,
        title: 'AI System Sizing',
        description: 'Automatically generate optimal system designs based on site data, consumption patterns, and local regulations. Save hours of engineering time.'
      },
      {
        icon: FileCheck,
        title: 'Policy Compliance Engine',
        description: 'AI-powered policy requirements lookup. Automatically identify permits, utility requirements, and regulatory compliance for any jurisdiction.'
      },
      {
        icon: Shield,
        title: 'Design Review Workflows',
        description: 'Structured review and approval processes ensure quality. Track revisions, comments, and sign-offs in one place.'
      },
      {
        icon: Users,
        title: 'Collaboration Tools',
        description: 'Work seamlessly with sales, permitting, and construction. Everyone has access to the latest designs and specifications.'
      },
    ],
    teams: ['Design Engineers', 'Electrical Engineers', 'Structural Engineers', 'CAD Technicians'],
    workflowPreview: {
      title: 'Engineering Queue',
      stages: ['Requested', 'In Design', 'Review', 'Approved', 'Released'],
      metrics: [
        { label: 'In Queue', value: '12' },
        { label: 'Completed/Week', value: '28' },
        { label: 'Avg Turnaround', value: '2.5d' },
      ],
      activity: 'Design approved - Riverside Solar 5.2MW'
    },
    testimonial: {
      quote: "The AI sizing alone saves us 15 hours per week. Our engineers now focus on optimization instead of repetitive calculations.",
      author: "James Park",
      role: "Director of Engineering",
      company: "Verde Solar Solutions"
    }
  },
  'project-management': {
    icon: FolderKanban,
    title: 'For Project Management',
    subtitle: 'Deliver On Time, Every Time',
    description: 'AI-generated project plans with intelligent milestones. Real-time risk alerts and insights help you deliver projects on time and on budget.',
    stats: [
      { value: '30%', label: 'Faster Delivery' },
      { value: '95%', label: 'On-Time Completion' },
      { value: '40%', label: 'Less Margin Leakage' },
    ],
    features: [
      {
        icon: Workflow,
        title: 'AI Project Plans',
        description: 'Generate intelligent project plans with realistic timelines. AI analyzes historical data to recommend milestones and identify risks.'
      },
      {
        icon: Shield,
        title: 'Risk Management',
        description: 'Proactive risk identification and mitigation. Get early warnings before issues become problems that derail your projects.'
      },
      {
        icon: DollarSign,
        title: 'Budget Control',
        description: 'Lock budgets at each phase and track every change. Know exactly where your margins went with complete audit trails.'
      },
      {
        icon: Users,
        title: 'Team Coordination',
        description: 'Keep everyone aligned with shared dashboards, task assignments, and automated status updates. No more status meetings.'
      },
    ],
    teams: ['Project Managers', 'Construction Managers', 'Schedulers', 'Site Supervisors'],
    workflowPreview: {
      title: 'Project Tracker',
      stages: ['Planning', 'Permitting', 'Procurement', 'Construction', 'COD'],
      metrics: [
        { label: 'Active Projects', value: '24' },
        { label: 'On Schedule', value: '22' },
        { label: 'Budget Variance', value: '+1.2%' },
      ],
      activity: 'Milestone complete - Summit Industrial commissioning'
    },
    testimonial: {
      quote: "We went from 70% on-time delivery to 95%. The risk alerts catch problems weeks before they would have hit us.",
      author: "Maria Rodriguez",
      role: "Head of Project Management",
      company: "Pacific Solar Group"
    }
  },
  'legal-and-contracts': {
    icon: Scale,
    title: 'For Legal & Contracts',
    subtitle: 'Streamline Every Agreement',
    description: 'Streamlined contract workflows with budget lock integration. Every scope change is documented and approved before it impacts the bottom line.',
    stats: [
      { value: '50%', label: 'Faster Contract Cycle' },
      { value: '100%', label: 'Change Documentation' },
      { value: '0', label: 'Unauthorized Changes' },
    ],
    features: [
      {
        icon: FileCheck,
        title: 'Contract Workflows',
        description: 'Structured workflows for contract creation, review, and approval. Track every version and ensure proper sign-offs.'
      },
      {
        icon: DollarSign,
        title: 'Budget Lock Integration',
        description: 'Contracts automatically reflect locked budgets. Any scope change requires documented approval before contract amendment.'
      },
      {
        icon: Shield,
        title: 'Compliance Tracking',
        description: 'Track compliance requirements, deadlines, and deliverables. Never miss a contractual obligation or deadline.'
      },
      {
        icon: Workflow,
        title: 'Change Order Management',
        description: 'Structured process for change orders with full audit trails. Know who approved what and when, with margin impact analysis.'
      },
    ],
    teams: ['Legal Counsel', 'Contract Managers', 'Compliance Officers', 'Procurement'],
    workflowPreview: {
      title: 'Contract Pipeline',
      stages: ['Draft', 'Internal Review', 'Negotiation', 'Executed', 'Active'],
      metrics: [
        { label: 'In Progress', value: '8' },
        { label: 'Pending Review', value: '3' },
        { label: 'Executed/Month', value: '12' },
      ],
      activity: 'Contract executed - Valley Commerce PPA'
    },
    testimonial: {
      quote: "No more unauthorized scope changes. Every change is documented, approved, and the margin impact is clear before we sign.",
      author: "David Kim",
      role: "General Counsel",
      company: "Clearview Energy"
    }
  },
  'procurement': {
    icon: Package,
    title: 'For Procurement',
    subtitle: 'Connected Supply Chain',
    description: 'Connected procurement planning tied to project timelines. Automated BOM generation and supplier coordination based on locked designs.',
    stats: [
      { value: '20%', label: 'Cost Savings' },
      { value: '99%', label: 'On-Time Delivery' },
      { value: '0', label: 'Design Mismatches' },
    ],
    features: [
      {
        icon: FileCheck,
        title: 'Automated BOM Generation',
        description: 'Bill of materials automatically generated from approved designs. No more manual transcription errors or outdated specs.'
      },
      {
        icon: Workflow,
        title: 'Supplier Management',
        description: 'Track suppliers, quotes, and lead times. Make informed decisions with complete visibility into your supply chain.'
      },
      {
        icon: Clock,
        title: 'Timeline Integration',
        description: 'Procurement schedules automatically tied to project timelines. Know exactly when materials need to arrive on site.'
      },
      {
        icon: DollarSign,
        title: 'Cost Tracking',
        description: 'Track actual costs against budgets in real-time. Identify variances early and take corrective action.'
      },
    ],
    teams: ['Procurement Managers', 'Buyers', 'Supply Chain', 'Logistics'],
    workflowPreview: {
      title: 'Procurement Queue',
      stages: ['Spec', 'RFQ', 'PO Issued', 'In Transit', 'Delivered'],
      metrics: [
        { label: 'Open POs', value: '34' },
        { label: 'In Transit', value: '12' },
        { label: 'On Schedule', value: '98%' },
      ],
      activity: 'Panels delivered - Desert Sun 25MW'
    },
    testimonial: {
      quote: "Automated BOMs from approved designs eliminated our material mismatches. We haven't had a wrong shipment in 18 months.",
      author: "Sarah Thompson",
      role: "Director of Procurement",
      company: "SunBuild Construction"
    }
  },
  'executive-leadership': {
    icon: LayoutDashboard,
    title: 'For Executive Leadership',
    subtitle: 'Complete Portfolio Visibility',
    description: 'Real-time visibility into every project. Track budget variance, risk exposure, and team performance across your entire portfolio.',
    stats: [
      { value: '100%', label: 'Portfolio Visibility' },
      { value: 'Real-time', label: 'Risk Alerts' },
      { value: '1-Click', label: 'Board Reports' },
    ],
    features: [
      {
        icon: BarChart3,
        title: 'Executive Dashboard',
        description: 'See the health of your entire portfolio at a glance. KPIs, trends, and alerts that matter for strategic decision-making.'
      },
      {
        icon: DollarSign,
        title: 'Financial Performance',
        description: 'Track margins, budget variance, and cash flow across all projects. Drill down from portfolio to project to line item.'
      },
      {
        icon: Shield,
        title: 'Risk Overview',
        description: 'Portfolio-wide risk view with early warning indicators. Know which projects need attention before they become problems.'
      },
      {
        icon: FileCheck,
        title: 'Board Reporting',
        description: 'Generate professional board reports in one click. Accurate data, consistent format, always ready for your next meeting.'
      },
    ],
    teams: ['CEO', 'CFO', 'COO', 'Board Members', 'Investors'],
    workflowPreview: {
      title: 'Portfolio Overview',
      stages: ['Development', 'Permitting', 'Construction', 'Operating'],
      metrics: [
        { label: 'Total Projects', value: '89' },
        { label: 'Portfolio MW', value: '1.2GW' },
        { label: 'Avg Margin', value: '18.5%' },
      ],
      activity: 'Q4 board report generated'
    },
    testimonial: {
      quote: "I can answer any board question about any project in seconds. That level of visibility was impossible before OneGrid.",
      author: "Jennifer Walsh",
      role: "CEO",
      company: "Apex Solar Partners"
    }
  }
};

type SolutionKey = keyof typeof solutionData;

interface SolutionPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const SolutionPage = ({ searchParams }: SolutionPageProps) => {
  const solutionParam = searchParams?.solution;
  const solution = Array.isArray(solutionParam) ? solutionParam[0] : solutionParam;
  
  const isValidSolution = solution && Object.keys(solutionData).includes(solution);
  const data = isValidSolution ? solutionData[solution as SolutionKey] : solutionData['solar-developers'];
  const IconComponent = data.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <IconComponent className="w-4 h-4" />
                {data.subtitle}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-started">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 py-6">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Software Interface Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1.5 text-xs text-slate-400 text-center">
                      app.onegrid.io/{solution}
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-slate-50">
                  <div className="text-sm font-medium text-slate-700 mb-4">{data.workflowPreview.title}</div>
                  
                  {/* Workflow Stages */}
                  <div className="flex items-center justify-between mb-4 bg-white rounded-lg p-3 shadow-sm border border-slate-100 overflow-x-auto">
                    {data.workflowPreview.stages.map((stage: string, i: number) => (
                      <div key={stage} className="flex items-center shrink-0">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          i === 2 ? 'bg-emerald-100 text-emerald-700' : 
                          i < 2 ? 'bg-emerald-100 text-emerald-700' : 
                          'bg-slate-100 text-slate-500'
                        }`}>
                          {stage}
                        </div>
                        {i < data.workflowPreview.stages.length - 1 && (
                          <div className="w-4 h-px bg-slate-200 mx-1" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {data.workflowPreview.metrics.map((metric: { label: string; value: string }, i: number) => (
                      <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-slate-100">
                        <div className="text-xs text-slate-500">{metric.label}</div>
                        <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs text-slate-600">{data.workflowPreview.activity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            {data.stats.map((stat: { value: string; label: string }, index: number) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-slate-500 text-sm font-medium">Teams that use OneGrid:</span>
            {data.teams.map((team: string, index: number) => (
              <span key={index} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                {team}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Built for How You Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Features designed by solar professionals who understand your challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.features.map((feature: { icon: any; title: string; description: string }, index: number) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={index} className="border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                      <FeatureIcon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-linear-to-br from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl lg:text-3xl text-white font-medium mb-8 leading-relaxed">
            "{data.testimonial.quote}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-300 to-teal-400 flex items-center justify-center text-emerald-900 font-semibold">
              {data.testimonial.author.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">{data.testimonial.author}</div>
              <div className="text-emerald-200">{data.testimonial.role}, {data.testimonial.company}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Ready to simplify your operations?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            See how OneGrid can bring order to your solar projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8 py-6">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;
