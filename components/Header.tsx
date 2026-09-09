import Link from "next/link";
import { theme } from "@/lib/theme";
import { UserIcon, CartIcon, GlobeIcon, ChevronDownIcon } from "@/components/icons";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Buy",
    href: "/products",
    children: [
      { label: "All iPhones", href: "/products" },
      { label: "Excellent Condition", href: "/products?condition=Excellent" },
      { label: "Good Condition", href: "/products?condition=Good" },
      { label: "Fair Condition", href: "/products?condition=Fair" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  { label: "Reviews", href: "/reviews" },
  {
    label: "Help",
    href: "/help",
    children: [
      { label: "Warranty", href: "/warranty" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-text-primary">
          {theme.brand.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-text-primary hover:bg-surface-muted">
                  {item.label}
                  <ChevronDownIcon className="h-4 w-4 text-text-secondary" />
                </button>
                <div className="invisible absolute left-0 top-full z-20 min-w-[200px] rounded-md border border-border bg-surface p-2 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-primary hover:bg-surface-muted"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/account" aria-label="Account" className="hidden text-text-primary sm:inline-flex">
            <UserIcon />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative inline-flex text-text-primary">
            <CartIcon />
            <span className="absolute -right-2 -top-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-text-on-accent">
              0
            </span>
          </Link>
          <div className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-primary sm:flex">
            <GlobeIcon className="h-4 w-4" />
            ENGLISH
          </div>
        </div>
      </div>
    </header>
  );
}
