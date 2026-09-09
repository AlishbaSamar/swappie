import type { Config } from "tailwindcss";
import { theme } from "./lib/theme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: theme.colors.background,
        surface: theme.colors.surface,
        "surface-muted": theme.colors.surfaceMuted,
        "text-primary": theme.colors.textPrimary,
        "text-secondary": theme.colors.textSecondary,
        "text-on-accent": theme.colors.textOnAccent,
        accent: {
          DEFAULT: theme.colors.accent,
          hover: theme.colors.accentHover,
          soft: theme.colors.accentSoft,
        },
        border: theme.colors.border,
        hero: theme.colors.heroBackground,
        promo: {
          DEFAULT: theme.colors.promoBackground,
          shape: theme.colors.promoAccentShape,
        },
        condition: {
          excellent: theme.colors.conditionExcellent,
          good: theme.colors.conditionGood,
          fair: theme.colors.conditionFair,
        },
        "tag-new": {
          bg: theme.colors.tagNewBackground,
          text: theme.colors.tagNewText,
        },
        success: theme.colors.success,
        warning: theme.colors.warning,
        danger: theme.colors.danger,
      },
      fontFamily: {
        sans: [theme.font.sans, "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: theme.radius.sm,
        md: theme.radius.md,
        lg: theme.radius.lg,
      },
    },
  },
  plugins: [],
};

export default config;
