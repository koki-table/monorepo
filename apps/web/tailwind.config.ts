// tailwind config is required for editor support
import sharedConfig from "@monorepo/configs/tailwind/tailwind.config.js";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;
