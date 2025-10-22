import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import tsParser from '@typescript-eslint/parser';
import ts from '@typescript-eslint/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // 무시 폴더
  globalIgnores(['dist', 'node_modules', 'coverage']),

  // 기본 권장 + 리액트 훅/리프레시 설정
  js.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,

  // 공통( JS/TS ) 설정
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
      // ⬇️ tsconfig paths(@/**)까지 ESLint가 해석하도록
      'import/resolver': { typescript: { alwaysTryTypes: true } },
    },
    rules: {
      // React 17+ / Vite 환경
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },

  // JS 전용 규칙
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      // 기존 규칙 유지
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // TS 전용 규칙 (파서/플러그인 + 중복 금지)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { parser: tsParser },
    plugins: { '@typescript-eslint': ts },
    rules: {
      // JS 규칙 대신 TS 규칙 사용
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);
