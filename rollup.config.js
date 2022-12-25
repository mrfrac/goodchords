import ts from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";

function getConfig(target, plugins = []) {
  return {
    input: "./src/index.ts",
    plugins: [
      ts(),
      ...plugins
    ],
    output: {
      file: `dist/goodchords.${target}.js`,
      format: target,
      name: "goodchords"
    }
  }
}

export default [getConfig("cjs"), getConfig("es"), getConfig("umd", [uglify()])];
