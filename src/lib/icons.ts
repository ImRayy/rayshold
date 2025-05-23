export interface Icon {
  name: string;
  icon: string;
  size?: number;
  provider: "svgl" | "iconify" | "iconify-color" | "local";
  source: string;
}

const getIconUrl = (icon: string, provider: Icon["provider"]) => {
  switch (provider) {
    case "local":
      return `icons/${icon}.svg`;
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
  },
  python: {
    name: "Python",
    icon: "logos--python",
    provider: "iconify-color",
    source: "www.python.org",
  },
  nix: {
    name: "Nix",
    icon: "nixos",
    size: 14,
    provider: "local",
    source: "https://nixos.org/",
  },
  lua: {
    name: "Lua",
    icon: "logos--lua",
    provider: "iconify-color",
    source: "lua.org",
  },
  bash: {
    name: "Bash",
    icon: "logos--bash-icon",
    provider: "iconify-color",
    source: "www.gnu.org/software/bash/",
  },
  typeScript: {
    name: "TypeScript",
    icon: "logos--typescript-icon",
    provider: "iconify-color",
    source: "www.typescriptlang.org/",
  },

  // Bundler & Run-time Environments
  vite: {
    name: "Vite",
    icon: "logos--vitejs",
    provider: "iconify-color",
    source: "vite.dev/",
  },
  bun: {
    name: "Bun",
    icon: "logos--bun",
    provider: "iconify-color",
    source: "bun.sh/",
  },

  // Frond-end
  astro: {
    name: "Astro",
    icon: "logos--astro-icon",
    provider: "iconify",
    source: "astro.build/",
  },
  tanStack: {
    name: "TanStack",
    icon: "tanstack",
    size: 16,
    provider: "local",
    source: "tanstack.com/",
  },
  react: {
    name: "React",
    icon: "logos--react",
    provider: "iconify-color",
    source: "react.dev/",
  },
  sass: {
    name: "Sass",
    icon: "logos--sass",
    provider: "iconify-color",
    source: "sass-lang.com/",
  },
  css: {
    name: "CSS",
    icon: "logos--css-3",
    provider: "iconify-color",
    source: "developer.mozilla.org/en-US/docs/Web/CSS",
  },
  nextjs: {
    name: "Next.js",
    icon: "logos--nextjs-icon",
    provider: "iconify-color",
    source: "nextjs.org/",
  },
  tailwindcss: {
    name: "Tailwindcss",
    icon: "logos--tailwindcss-icon",
    provider: "iconify-color",
    source: "tailwindcss.com/",
  },
  bubbleTea: {
    name: "Bubble Tea",
    icon: "fluent-emoji-flat--bubble-tea",
    provider: "iconify-color",
    source: "github.com/charmbracelet/bubbletea",
  },

  // Back-end
  hono: {
    name: "Hono",
    icon: "logos--hono",
    provider: "iconify-color",
    source: "hono.dev/",
  },
  supabase: {
    name: "Supabase",
    icon: "logos--supabase-icon",
    size: 18,
    provider: "iconify-color",
    source: "supabase.com/",
  },
  drizzle: {
    name: "Drizzle",
    icon: "fluent-emoji-flat--cloud-with-rain",
    provider: "iconify-color",
    source: "orm.drizzle.team/",
  },
  betterAuth: {
    name: "Better Auth",
    icon: "better-auth",
    size: 18,
    provider: "local",
    source: "www.better-auth.com/",
  },

  // Misc
  toml: {
    name: "Toml",
    icon: "logos--toml",
    provider: "iconify",
    source: "toml.io/en/",
  },
  archLinux: {
    name: "Arch btw",
    icon: "logos--archlinux",
    provider: "iconify-color",
    source: "archlinux.org/",
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
