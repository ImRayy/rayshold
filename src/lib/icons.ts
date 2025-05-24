export interface Icon {
  name: string;
  icon: string;
  size?: number;
  provider: "svgl" | "iconify" | "iconify-color" | "local";
  source: string;
  about?: string;
}

const getIconUrl = (icon: string, provider: Icon["provider"]) => {
  switch (provider) {
    case "local":
      return `/icons/${icon}.svg`;
    case "svgl":
      return `https:/svgl.app/library/${icon}.svg`;
    case "iconify-color":
      return `iconify-color ${icon}`;
    case "iconify":
      return `iconify ${icon}`;
    default:
      return "";
  }
};

const rawIcons = {
  // Languages
  golang: {
    name: "Go",
    icon: "logos--gopher",
    provider: "iconify-color",
    source: "go.dev",
    about: "concurrent coding so fast, it outruns your bugs!",
  },
  python: {
    name: "Python",
    icon: "logos--python",
    provider: "iconify-color",
    source: "www.python.org",
    about: "the language that’s so readable, even your grandma could debug it",
  },
  nix: {
    name: "Nix",
    icon: "nixos",
    size: 14,
    provider: "local",
    source: "https://nixos.org/",
    about: "rebuilds your system for fun, not simplicity",
  },
  lua: {
    name: "Lua",
    icon: "logos--lua",
    provider: "iconify-color",
    source: "lua.org",
    about: "lightweight scripting, coding in flip-flops",
  },
  bash: {
    name: "Bash",
    icon: "logos--bash-icon",
    provider: "iconify-color",
    source: "www.gnu.org/software/bash/",
    about: "scripting language that's soo capable until it's not",
  },
  typeScript: {
    name: "TypeScript",
    icon: "logos--typescript-icon",
    provider: "iconify-color",
    source: "www.typescriptlang.org/",
    about: "JavaScript’s nanny, catching type tantrums.",
  },

  // Bundler & Run-time Environments
  vite: {
    name: "Vite",
    icon: "logos--vitejs",
    provider: "iconify-color",
    source: "vite.dev/",
    about: "bundles apps faster than you type ‘npm’",
  },
  bun: {
    name: "Bun",
    icon: "logos--bun",
    provider: "iconify-color",
    source: "bun.sh/",
    about: "JS runtime outpacing Node on a hamster wheel.",
  },

  // Frond-end
  astro: {
    name: "Astro",
    icon: "logos--astro-icon",
    provider: "iconify",
    source: "astro.build/",
    about: "static sites so slick, servers nap",
  },
  tanStack: {
    name: "TanStack",
    icon: "tanstack",
    size: 16,
    provider: "local",
    source: "tanstack.com/",
    about: "is something that should takeover the world, I won't call avengers",
  },
  react: {
    name: "React",
    icon: "logos--react",
    provider: "iconify-color",
    source: "react.dev/",
    about: "components galore, props drilling nightmares",
  },
  sass: {
    name: "Sass",
    icon: "logos--sass",
    provider: "iconify-color",
    source: "sass-lang.com/",
    about: "CSS as a programming language",
  },
  css: {
    name: "CSS",
    icon: "logos--css-3",
    provider: "iconify-color",
    source: "developer.mozilla.org/en-US/docs/Web/CSS",
    about: "can center a div eventually",
  },
  nextjs: {
    name: "Next.js",
    icon: "logos--nextjs-icon",
    provider: "iconify-color",
    source: "nextjs.org/",
    about: "react framework that slower than react",
  },
  tailwindcss: {
    name: "Tailwindcss",
    icon: "logos--tailwindcss-icon",
    provider: "iconify-color",
    source: "tailwindcss.com/",
    about: "47 classes per div, CSS who?",
  },
  bubbleTea: {
    name: "Bubble Tea",
    icon: "fluent-emoji-flat--bubble-tea",
    provider: "iconify-color",
    source: "github.com/charmbracelet/bubbletea",
    about: "TUIs so cozy, terminals feel like cafés",
  },
  ags: {
    name: "AGS",
    icon: "tabler--apps",
    provider: "iconify",
    source: "aylur.github.io/ags/",
    about: "Scaffolding CLI for Astal + TypeScript",
  },

  // Back-end
  hono: {
    name: "Hono",
    icon: "logos--hono",
    provider: "iconify-color",
    source: "hono.dev/",
    about: "web framework light enough for your toaster.",
  },
  supabase: {
    name: "Supabase",
    icon: "logos--supabase-icon",
    size: 18,
    provider: "iconify-color",
    source: "supabase.com/",
    about: "auth, DB, storage—Firebase’s cooler cousin",
  },
  drizzle: {
    name: "Drizzle",
    icon: "fluent-emoji-flat--cloud-with-rain",
    provider: "iconify-color",
    source: "orm.drizzle.team/",
    about: "lightweight and performant TypeScript ORM ",
  },
  neon: {
    name: "Neon",
    icon: "logos--neon-icon",
    source: "neon.tech/",
    provider: "iconify-color",
    about: "Serverless open-source alternative to AWS Aurora Postgres",
  },
  betterAuth: {
    name: "Better Auth",
    icon: "better-auth",
    size: 18,
    provider: "local",
    source: "www.better-auth.com/",
    about: "is really better",
  },

  // Misc
  toml: {
    name: "Toml",
    icon: "logos--toml",
    provider: "iconify",
    source: "toml.io/en/",
    about: "clean configs, JSON needs a bath",
  },
  archLinux: {
    name: "Arch btw",
    icon: "logos--archlinux",
    provider: "iconify-color",
    source: "archlinux.org/",
    about: "BTW",
  },
} as const satisfies Record<string, Icon>;

type RawIcons = typeof rawIcons;

export type IconKey = keyof RawIcons;
export type Icons = { [K in IconKey]: Icon };

export const icons: Icons = Object.fromEntries(
  Object.entries(rawIcons).map(([key, value]) => [
    key,
    {
      ...value,
      icon: getIconUrl(value.icon, value.provider),
      source: !value.source.startsWith("http")
        ? `https://${value.source}`
        : value.source,
    },
  ])
) as Icons;
