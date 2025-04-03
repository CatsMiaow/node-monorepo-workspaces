import eslint from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import tseslint, { configs, plugin } from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  configs.recommendedTypeChecked,
  configs.strictTypeChecked,
  configs.stylisticTypeChecked,
  vitest.configs.recommended,
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  },
  {
    languageOptions: {
      parserOptions: {
        // projectService: true,
        projectService: {
          allowDefaultProject: ["*.cjs", "*.mjs"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@typescript-eslint": plugin,
      vitest,
    },
    rules: {
      // DIY
      "@typescript-eslint/no-extraneous-class": "off",
    },
  }
);
