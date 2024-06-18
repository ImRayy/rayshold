import {
  Swup,
  SwupA11yPlugin,
  SwupDebugPlugin,
  SwupHeadPlugin,
  SwupPreloadPlugin,
  SwupScriptsPlugin,
} from "@swup/astro/client";

export const swupClient = new Swup({
  plugins: [
    new SwupHeadPlugin(),
    new SwupA11yPlugin(),
    new SwupScriptsPlugin(),
    new SwupDebugPlugin({ globalInstance: true }),
    new SwupPreloadPlugin(),
  ],
});
