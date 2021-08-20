import { Plugin } from "esbuild";
import path from "path";
import fs from "fs-extra";
import json5 from "json5";
import { TextDecoder } from "util";

export const json5Plugin = (): Plugin => ({
  name: "json5",
  setup(build) {
    // resolve .json5 files
    build.onResolve({ filter: /\.json5$/ }, (args) => {
      if (args.resolveDir === "") return;

      return {
        path: path.isAbsolute(args.path)
          ? args.path
          : path.join(args.resolveDir, args.path),
        namespace: "json5"
      };
    });

    // load files with "json5" namespace
    build.onLoad({ filter: /.*/, namespace: "json5" }, async (args) => {
      const json5Content = await fs.readFile(args.path);
      let parsed = json5.parse(new TextDecoder().decode(json5Content));

      return {
        contents: JSON.stringify(parsed),
        loader: "json"
      };
    });
  }
});
