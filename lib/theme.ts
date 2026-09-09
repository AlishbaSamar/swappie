/**
 * Single source of truth for all brand-related values.
 *
 * To rebrand this storefront later: edit the values in this file only.
 * Every component reads brand name/colors/fonts from here (directly, or via
 * the Tailwind color tokens in tailwind.config.ts, which are generated from
 * this same object) — never hardcode a hex value or "RefreshedPhones" in a
 * component.
 */

export const theme = {
  brand: {
    name: "RefreshedPhones",
    tagline: "Expertly refurbished tech, tested and ready to love again.",
    logoText: "RP", // short mark used in compact spaces (e.g. mobile nav)
  },

  colors: {
    // Base surfaces
    background: "#F7F6F4", // soft neutral page background
    surface: "#FFFFFF", // cards, panels
    surfaceMuted: "#F1F0EC", // subtle section backgrounds

    // Text
    textPrimary: "#1A1A2E", // high-contrast body/heading text
    textSecondary: "#65636F", // secondary/meta text
    textOnAccent: "#FFFFFF", // text placed on top of the accent color

    // Accent (buttons, headline highlights, links) — deep indigo
    accent: "#2E2A7C",
    accentHover: "#221F5E",
    accentSoft: "#EDEBFA", // tinted accent background (chips, soft highlights)

    // Promo / hero surfaces — soft pink banner with a yellow accent shape
    heroBackground: "#FBDCEC",
    promoBackground: "#FBDCEC",
    promoAccentShape: "#F5E14A",

    // Borders
    border: "#E4E1DC",

    // Condition grade badges
    conditionExcellent: "#2F6F5E",
    conditionGood: "#B8873A",
    conditionFair: "#A14E3C",

    // "New" tag used on category tiles / carousel cards
    tagNewBackground: "#DCF5C4",
    tagNewText: "#2B5D22",

    // Status
    success: "#2F6F5E",
    warning: "#B8873A",
    danger: "#B3402F",
  },

  font: {
    // Loaded via next/font in app/layout.tsx and mapped to this family name
    sans: "var(--font-sans)",
  },

  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
} as const;

export type Theme = typeof theme;
