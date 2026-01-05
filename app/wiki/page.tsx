import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WikiPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Lit-Hosting Knowledge Base</h1>

      <div className="relative mb-10">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input type="search" placeholder="Search the knowledge base..." className="pl-10 h-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
          <div className="grid gap-4">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/wiki/${article.slug}`}
                className="block p-6 bg-card rounded-lg border hover:border-[#3cdd4a] transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-muted-foreground mb-2">{article.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Last updated: {article.updated}</span>
                  <span className="mx-2">•</span>
                  <span>{article.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="grid gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/wiki/categories#${category.slug}`}
                className="flex items-center justify-between p-4 bg-card rounded-lg border hover:border-[#3cdd4a] transition-colors"
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-sm text-muted-foreground">{category.count} articles</span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Recently Updated</h2>
          <div className="grid gap-3">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/wiki/${article.slug}`}
                className="block p-4 bg-card rounded-lg border hover:border-[#3cdd4a] transition-colors"
              >
                <h3 className="font-medium mb-1">{article.title}</h3>
                <div className="text-sm text-muted-foreground">Updated: {article.updated}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border p-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Can't find what you're looking for?</h2>
        <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
          Our support team is ready to help you with any questions you might have about our hosting services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-[#3cdd4a] hover:bg-[#32c53f] text-white">Contact Support</Button>
          <Button variant="outline">Submit a Ticket</Button>
        </div>
      </div>
    </div>
  )
}

const featuredArticles = [
  {
    slug: "getting-started-with-vps",
    title: "Getting Started with Your VPS",
    excerpt: "Learn how to set up and configure your new virtual private server for optimal performance.",
    updated: "May 15, 2024",
    category: "V-Server",
  },
  {
    slug: "domain-dns-configuration",
    title: "How to Configure DNS for Your Domain",
    excerpt: "A comprehensive guide to setting up DNS records for your domain name.",
    updated: "May 10, 2024",
    category: "Domains",
  },
  {
    slug: "optimizing-wordpress-performance",
    title: "Optimizing WordPress Performance",
    excerpt: "Tips and tricks to make your WordPress site lightning fast on our hosting platform.",
    updated: "May 8, 2024",
    category: "Webspace",
  },
]

const categories = [
  { name: "Getting Started", slug: "getting-started", count: 12 },
  { name: "Domains", slug: "domains", count: 18 },
  { name: "Webspace", slug: "webspace", count: 24 },
  { name: "V-Server", slug: "v-server", count: 15 },
  { name: "Game Server", slug: "game-server", count: 9 },
  { name: "Storage", slug: "storage", count: 7 },
  { name: "Billing & Account", slug: "billing", count: 14 },
]

const recentArticles = [
  {
    slug: "ssl-certificate-setup",
    title: "Setting Up SSL Certificates",
    updated: "May 18, 2024",
  },
  {
    slug: "backup-restore-procedures",
    title: "Backup and Restore Procedures",
    updated: "May 16, 2024",
  },
  {
    slug: "email-configuration",
    title: "Email Configuration Guide",
    updated: "May 14, 2024",
  },
  {
    slug: "ssh-key-management",
    title: "SSH Key Management",
    updated: "May 12, 2024",
  },
]
