import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const nextCore = compat.extends("next/core-web-vitals");
const nextTs = compat.extends("next/typescript");
const prettier = compat.extends("prettier");

const eslintConfig = [
  ...nextCore,
  ...nextTs,
  ...prettier,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
