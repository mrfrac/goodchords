import nx from "@nx/eslint-plugin";

export default [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  {
    ignores: [
      "**/coverage",
      "**/dist",
      "**/node_modules",
      "**/*.config.{js,cjs,mjs,ts,mts}",
      "**/vitest.config.*.timestamp*",
    ],
  },
  {
    files: ["**/*.ts"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          allow: [],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
          enforceBuildableLibDependency: true,
        },
      ],
    },
  },
];
