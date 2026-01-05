import Link from "next/link"
import { ChevronRight, Clock, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WikiArticlePage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the article based on the slug
  // For this example, we'll use a hardcoded article
  const article = articles.find((a) => a.slug === params.slug) || articles[0]

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
        <Link href={`/wiki/categories#${article.category.toLowerCase()}`} className="hover:text-foreground">
          {article.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{article.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <article>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Updated: {article.updated}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <Link
                  href={`/wiki/categories#${article.category.toLowerCase()}`}
                  className="text-[#3cdd4a] hover:underline"
                >
                  {article.category}
                </Link>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {article.content.map((section, index) => (
                <div key={index}>
                  {section.type === "paragraph" && <p>{section.content}</p>}
                  {section.type === "heading" && <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>}
                  {section.type === "subheading" && (
                    <h3 className="text-xl font-semibold mt-6 mb-3">{section.content}</h3>
                  )}
                  {section.type === "code" && (
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{section.content}</code>
                    </pre>
                  )}
                  {section.type === "list" && (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.type === "note" && (
                    <div className="bg-muted p-4 rounded-lg border-l-4 border-[#3cdd4a] my-4">
                      <p className="font-medium">Note</p>
                      <p className="mt-1">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-4">Was this article helpful?</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950"
                >
                  Yes
                </Button>
                <Button variant="outline">No</Button>
              </div>
            </div>
          </article>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border p-5 sticky top-6">
            <h3 className="font-semibold mb-3">In This Article</h3>
            <nav className="space-y-1">
              {article.content
                .filter((section) => section.type === "heading" || section.type === "subheading")
                .map((section, index) => (
                  <a
                    key={index}
                    href={`#${section.content.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`block py-1 px-2 rounded hover:bg-muted ${
                      section.type === "subheading" ? "pl-4 text-sm text-muted-foreground" : "font-medium"
                    }`}
                  >
                    {section.content}
                  </a>
                ))}
            </nav>

            <h3 className="font-semibold mt-6 mb-3">Related Articles</h3>
            <div className="space-y-2">
              {relatedArticles.map((article, index) => (
                <Link key={index} href={`/wiki/${article.slug}`} className="block text-sm hover:text-[#3cdd4a]">
                  {article.title}
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-3">Need More Help?</h3>
              <Button className="w-full bg-[#3cdd4a] hover:bg-[#32c53f] text-white">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const articles = [
  {
    slug: "getting-started-with-vps",
    title: "Getting Started with Your VPS",
    category: "V-Server",
    updated: "May 15, 2024",
    content: [
      {
        type: "paragraph",
        content:
          "Welcome to your new Virtual Private Server (VPS) at Lit-Hosting! This guide will walk you through the initial setup and configuration of your server to ensure optimal performance and security.",
      },
      {
        type: "heading",
        content: "Initial Access",
      },
      {
        type: "paragraph",
        content:
          "After purchasing your VPS, you'll receive an email with your server's IP address, root username, and initial password. You'll need these credentials to connect to your server for the first time.",
      },
      {
        type: "subheading",
        content: "Connecting via SSH",
      },
      {
        type: "paragraph",
        content:
          "To connect to your VPS, use an SSH client like PuTTY (Windows) or Terminal (macOS/Linux). Enter the following command, replacing the placeholder with your server's IP address:",
      },
      {
        type: "code",
        content: "ssh root@your_server_ip",
      },
      {
        type: "paragraph",
        content:
          "When prompted, enter the password provided in your welcome email. For security reasons, you'll be required to change this password upon first login.",
      },
      {
        type: "heading",
        content: "Basic Security Setup",
      },
      {
        type: "paragraph",
        content:
          "Security should be your first priority when setting up a new server. Here are some essential steps to secure your VPS:",
      },
      {
        type: "list",
        items: [
          "Update your system packages",
          "Configure a firewall",
          "Set up SSH key authentication",
          "Disable password authentication",
          "Create a non-root user with sudo privileges",
        ],
      },
      {
        type: "subheading",
        content: "Updating System Packages",
      },
      {
        type: "paragraph",
        content: "Keep your system up to date with the latest security patches by running:",
      },
      {
        type: "code",
        content: "# For Ubuntu/Debian\napt update && apt upgrade -y\n\n# For CentOS/RHEL\nyum update -y",
      },
      {
        type: "heading",
        content: "Installing a Web Server",
      },
      {
        type: "paragraph",
        content: "Most VPS users want to host websites or web applications. Here's how to install popular web servers:",
      },
      {
        type: "subheading",
        content: "Installing Nginx",
      },
      {
        type: "code",
        content:
          "# For Ubuntu/Debian\napt install nginx -y\n\n# For CentOS/RHEL\nyum install nginx -y\nsystemctl start nginx\nsystemctl enable nginx",
      },
      {
        type: "note",
        content:
          "Remember to configure your firewall to allow HTTP (port 80) and HTTPS (port 443) traffic if you're setting up a web server.",
      },
      {
        type: "heading",
        content: "Performance Optimization",
      },
      {
        type: "paragraph",
        content: "To get the most out of your VPS resources, consider implementing these performance optimizations:",
      },
      {
        type: "list",
        items: [
          "Enable and configure caching",
          "Optimize database performance",
          "Use a content delivery network (CDN)",
          "Implement proper resource monitoring",
          "Configure swap space for low-memory situations",
        ],
      },
      {
        type: "paragraph",
        content:
          "By following this guide, you'll have a solid foundation for your VPS. Remember that server management is an ongoing process, and regular maintenance is key to keeping your server secure and performing optimally.",
      },
    ],
  },
]

const relatedArticles = [
  { slug: "securing-your-vps", title: "Essential Security Practices for Your VPS" },
  { slug: "vps-performance-tuning", title: "Performance Tuning for VPS Servers" },
  { slug: "linux-command-basics", title: "Essential Linux Commands for Beginners" },
  { slug: "installing-lemp-stack", title: "Installing LEMP Stack on Your VPS" },
]
