import Link from "next/link";
import { theme } from "@/lib/theme";
import { getAllProducts } from "@/data/products";
import { blogPosts } from "@/data/blogPosts";
import { GlobeIcon } from "@/components/icons";

const conditionLinks = [
  { label: "Excellent Condition", href: "/products?condition=Excellent" },
  { label: "Good Condition", href: "/products?condition=Good" },
  { label: "Fair Condition", href: "/products?condition=Fair" },
];

const priceLinks = [
  { label: "Under $300", href: "/products?maxPrice=300" },
  { label: "$300 – $600", href: "/products?minPrice=300&maxPrice=600" },
  { label: "$600+", href: "/products?minPrice=600" },
];

const helpLinks = [
  { label: "Delivery", href: "/shipping" },
  { label: "Returns", href: "/shipping" },
  { label: "Warranty", href: "/warranty" },
  { label: "Contact Us", href: "/contact" },
];

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
];

const paymentMethods = ["Visa", "Mastercard", "American Express", "PayPal", "Apple Pay"];

export function Footer() {
  const products = getAllProducts();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Mega sitemap */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-text-primary">Shop by Model</p>
            <ul className="mt-3 space-y-2">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">Shop by Condition</p>
            <ul className="mt-3 space-y-2">
              {conditionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-semibold text-text-primary">Shop by Price</p>
            <ul className="mt-3 space-y-2">
              {priceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">Popular Guides</p>
            <ul className="mt-3 space-y-2">
              {blogPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="text-sm text-text-secondary hover:text-text-primary">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">Need Help?</p>
            <ul className="mt-3 space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-semibold text-text-primary">About Us</p>
            <ul className="mt-3 space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment / shipping / language row */}
        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-text-primary">Payment Methods</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-text-primary">Fast Shipping</p>
            <p className="mt-1 text-sm text-text-secondary">Free express shipping on every order.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">Country &amp; Language</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary">
              <GlobeIcon className="h-4 w-4" />
              English (US)
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">Do You Have a Question?</p>
            <p className="mt-1 text-sm text-text-secondary">
              Visit our{" "}
              <Link href="/help" className="text-accent hover:text-accent-hover">
                Help Center
              </Link>{" "}
              or reach out directly.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-text-secondary sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {theme.brand.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text-primary">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
