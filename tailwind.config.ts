import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        glow: "hsl(var(--glow))",
        "glow-secondary": "hsl(var(--glow-secondary))",
        highlight: "hsl(var(--highlight))",
      },
      fontFamily: {
        sans: ["'Poppins'", "'Inter'", "system-ui", "sans-serif"],
        display: ["'Poppins'", "'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 28px rgba(0, 255, 255, 0.28)",
        "glow-strong": "0 0 42px rgba(127, 0, 255, 0.35)",
        "glass-lg": "0 24px 48px -18px rgba(8, 12, 40, 0.75)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(120deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.18), transparent 55%), radial-gradient(circle at 80% 0%, rgba(127, 0, 255, 0.22), transparent 45%)",
        "panel-glow":
          "linear-gradient(135deg, rgba(30, 30, 47, 0.75), rgba(42, 42, 114, 0.55))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient-move": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-glow": {
          "0%": {
            boxShadow: "0 0 0 rgba(0, 255, 255, 0.25)",
          },
          "50%": {
            boxShadow: "0 0 24px rgba(0, 255, 255, 0.45)",
          },
          "100%": {
            boxShadow: "0 0 0 rgba(0, 255, 255, 0.25)",
          },
        },
        "rotate-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-move": "gradient-move 12s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.75s ease forwards",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "rotate-slow": "rotate-slow 18s linear infinite",
      },
      transitionProperty: {
        "background-position": "background-position",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
