import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function WikiCategoriesPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/wiki" className="hover:text-foreground">
          Wiki
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Categories</span>
      </div>

      <h1 className="text-4xl font-bold mb-8">Knowledge Base Categories</h1>

      <div className="grid gap-12">
        {categories.map((category) => (
          <section key={category.slug} id={category.slug} className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#3cdd4a]/10 flex items-center justify-center text-[#3cdd4a]">
                {category.icon}
              </span>
              {category.name}
              <span className="text-base font-normal text-muted-foreground ml-2">
                ({category.articles.length} articles)
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/wiki/${article.slug}`}
                  className="block p-4 bg-card rounded-lg border hover:border-[#3cdd4a] transition-colors"
                >
                  <h3 className="font-medium mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

const categories = [
  {
    name: "Getting Started",
    slug: "getting-started",
    icon: "G",
    articles: [
      {
        slug: "welcome-to-lit-hosting",
        title: "Welcome to Lit-Hosting",
        excerpt: "An introduction to our hosting services and platform.",
      },
      {
        slug: "account-setup",
        title: "Setting Up Your Account",
        excerpt: "Learn how to set up and configure your Lit-Hosting account.",
      },
      {
        slug: "choosing-right-hosting",
        title: "Choosing the Right Hosting Plan",
        excerpt: "A guide to selecting the hosting plan that fits your needs.",
      },
      {
        slug: "first-steps-after-purchase",
        title: "First Steps After Purchase",
        excerpt: "What to do immediately after purchasing a hosting service.",
      },
    ],
  },
  {
    name: "Domains",
    slug: "domains",
    icon: "D",
    articles: [
      {
        slug: "domain-registration",
        title: "Domain Registration Guide",
        excerpt: "How to register a new domain name with Lit-Hosting.",
      },
      {
        slug: "domain-transfer",
        title: "Transferring Domains to Lit-Hosting",
        excerpt: "Step-by-step guide to transferring your domain to us.",
      },
      {
        slug: "domain-dns-configuration",
        title: "DNS Configuration",
        excerpt: "Learn how to configure DNS records for your domain.",
      },
      {
        slug: "domain-privacy",
        title: "Domain Privacy Protection",
        excerpt: "Protecting your personal information in WHOIS records.",
      },
      {
        slug: "domain-renewals",
        title: "Domain Renewal Process",
        excerpt: "Understanding how domain renewals work.",
      },
    ],
  },
  {
    name: "Webspace",
    slug: "webspace",
    icon: "W",
    articles: [
      {
        slug: "webspace-basics",
        title: "Webspace Hosting Basics",
        excerpt: "Introduction to our webspace hosting services.",
      },
      {
        slug: "file-manager-usage",
        title: "Using the File Manager",
        excerpt: "How to upload and manage your website files.",
      },
      {
        slug: "database-creation",
        title: "Creating and Managing Databases",
        excerpt: "Setting up MySQL databases for your website.",
      },
      {
        slug: "wordpress-installation",
        title: "Installing WordPress",
        excerpt: "Step-by-step guide to installing WordPress on your hosting.",
      },
      {
        slug: "optimizing-wordpress-performance",
        title: "Optimizing WordPress Performance",
        excerpt: "Tips to make your WordPress site faster.",
      },
    ],
  },
  {
    name: "V-Server",
    slug: "v-server",
    icon: "V",
    articles: [
      {
        slug: "getting-started-with-vps",
        title: "Getting Started with Your VPS",
        excerpt: "Initial setup and configuration of your virtual server.",
      },
      {
        slug: "vps-management-panel",
        title: "Using the VPS Management Panel",
        excerpt: "Guide to our VPS control panel features.",
      },
      {
        slug: "vps-security-best-practices",
        title: "VPS Security Best Practices",
        excerpt: "Essential security measures for your virtual server.",
      },
      {
        slug: "vps-backups",
        title: "Backup Solutions for VPS",
        excerpt: "How to set up and manage backups for your server.",
      },
    ],
  },
  {
    name: "Game Server",
    slug: "game-server",
    icon: "G",
    articles: [
      {
        slug: "game-server-setup",
        title: "Game Server Setup Guide",
        excerpt: "How to set up your game server for optimal performance.",
      },
      {
        slug: "minecraft-server-configuration",
        title: "Minecraft Server Configuration",
        excerpt: "Detailed guide to setting up a Minecraft server.",
      },
      {
        slug: "cs-go-server-setup",
        title: "CS:GO Server Setup",
        excerpt: "Setting up and configuring a Counter-Strike: Global Offensive server.",
      },
    ],
  },
  {
    name: "Billing & Account",
    slug: "billing",
    icon: "B",
    articles: [
      {
        slug: "payment-methods",
        title: "Available Payment Methods",
        excerpt: "Overview of payment options for Lit-Hosting services.",
      },
      {
        slug: "billing-cycle",
        title: "Understanding Your Billing Cycle",
        excerpt: "How billing works for our hosting services.",
      },
      {
        slug: "invoice-management",
        title: "Managing Invoices",
        excerpt: "How to view, download, and pay invoices.",
      },
      {
        slug: "account-security",
        title: "Account Security",
        excerpt: "Best practices for keeping your account secure.",
      },
    ],
  },
]
