import { DenonConfig } from "https://deno.land/x/denon@2.4.10/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run server.ts",
      desc: "run my server.ts file",
      allow: ["net","env","read","write"],
    },
  },
  watcher: {
    interval: 350,
    exts: ["ts", "json"],
    match: ["**/*.*"],
    skip: ["*/.git/*"],
  }
};

export default config;