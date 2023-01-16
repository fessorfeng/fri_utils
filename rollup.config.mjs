import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import clear from 'rollup-plugin-clear';

const plugins = [
  clear({
    // required, point out which directories should be clear.
    targets: ['dist'],
}),
  resolve({
    preferBuiltins: true,
  }),
  commonjs(),
  typescript(),
  terser(),
  cleanup(),
];
export default [
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].cjs.js",
    },
    plugins,
  },
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins,
  },
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "umd",
      name: "FriUtils",
      entryFileNames: "[name].umd.js",
    },
    plugins,
  },
];
