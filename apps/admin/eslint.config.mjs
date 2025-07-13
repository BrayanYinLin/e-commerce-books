import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config([
  globalIgnores(['dist']),
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      semi: ['error', 'never'],
      'prettier/prettier': [
        'error',
        {
          semi: false,
          endOfLine: 'auto',
          singleQuote: true,
          trailingComma: 'none'
        }
      ],
      'no-explicit-any': 'off'
    }
  }
])
