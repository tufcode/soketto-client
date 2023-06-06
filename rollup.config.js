/*
  I stole this from https://github.com/colyseus/colyseus.js/blob/master/rollup.config.js
  I might change it later, but for now it works.
*/

import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import pkg from "./package.json";

const external = pkg.dependencies ? Object.keys(pkg.dependencies) : [];

const banner = `// soketto-client.js`;

export default [
  // https://github.com/microsoft/TypeScript/issues/18442#issuecomment-749896695
  {
    input: ["src/index.ts"],
    output: [
      {
        banner,
        preserveModules: true,
        dir: "build/esm",
        format: "esm",
        entryFileNames: "[name].mjs",
        sourcemap: true,
      },
    ],
    external,
    plugins: [typescript({ tsconfig: "./tsconfig/tsconfig.esm.json" })],
  },

  {
    input: ["src/index.ts"],
    output: [
      {
        banner,
        preserveModules: true,
        dir: "build/cjs",
        format: "cjs",
        entryFileNames: "[name].js",
        sourcemap: true,
      },
    ],
    external,
    plugins: [typescript({ tsconfig: "./tsconfig/tsconfig.cjs.json" })],
  },

  // browser/embedded dependencies
  {
    input: ["src/index.ts"],
    output: [
      {
        banner,
        preserveModules: false,
        dir: "dist",
        name: "soketto",
        format: "umd",
        entryFileNames: "soketto-client.js",
        sourcemap: true,
        amd: { id: pkg.name },
      },
    ],
    plugins: [
      typescript({ tsconfig: "./tsconfig/tsconfig.cjs.json" }),
      alias({
        entries: [
          // ws: force browser.js version.
          { find: "ws", replacement: "./ws-browser.js" },
        ],
      }),
      commonjs(),
      nodeResolve({ browser: true, preferBuiltins: false }),
    ],
  },
];
