import { config } from '@fisch0920/config/eslint'
import nextPlugin from '@next/eslint-plugin-next'
import eslintConfigNext from 'eslint-config-next'

export default [
  ...config,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@next/next': nextPlugin
    },
    settings: {
      ...eslintConfigNext.settings
    },
    rules: {
      'react/prop-types': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-global-this': 'off',
      'no-process-env': 'off',
      'array-callback-return': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-a11y/interactive-supports-focus': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      '@typescript-eslint/naming-convention': 'off',
      ...eslintConfigNext.rules
    }
  }
]
