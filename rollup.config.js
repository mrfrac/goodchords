import typescript from "rollup-plugin-typescript";

function getConfig(target) {
    return {
        input: "./src/index.ts",
        plugins: [
            typescript()
        ],
        output: {
            file: `dist/goodchords.${target}.js`,
            format: target,
            name: "goodchords"
        }
    }
}

export default [getConfig("cjs"), getConfig("es"), getConfig("umd")];
