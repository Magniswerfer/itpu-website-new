// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['dist/', '.astro/', 'node_modules/', 'public/'] },
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  astro.configs['flat/recommended'],
  astro.configs['flat/jsx-a11y-strict'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      eqeqeq: ['error', 'always'],
      'no-console': 'error',
      'prefer-const': 'error',
      'astro/no-set-html-directive': 'error',
      'astro/no-unused-css-selector': 'error',
      'astro/prefer-class-list-directive': 'error',
      'astro/prefer-object-class-list': 'error',
    },
  },
  {
    // Astro-parseren har ingen typeinformation for JSX-udtryk i templates, så hver
    // `.map(() => <li />)` ses som en utypet værdi. Templates typetjekkes i stedet
    // fuldt af `astro check` (npm run check:types).
    files: ['**/*.astro'],
    rules: {
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    // Konfigurationsfiler tjekkes uden typeinformation
    files: ['*.config.js', '*.config.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
