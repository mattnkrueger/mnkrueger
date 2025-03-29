// Import required ESLint plugins and configurations
// @eslint/js provides the core ESLint rules
import js from '@eslint/js'

// globals provides predefined global variables for different environments
import globals from 'globals'

// Plugin for enforcing React Hooks rules
import reactHooks from 'eslint-plugin-react-hooks'

// Plugin for React Fast Refresh functionality
import reactRefresh from 'eslint-plugin-react-refresh'

// Export the ESLint configuration as an array of rule sets
export default [

  // Ignore the 'dist' directory when linting
  { ignores: ['dist'] },
  {
    // Apply these rules to all .js and .jsx files
    files: ['**/*.{js,jsx}'],
    languageOptions: {

      // Set ECMAScript version to 2020
      ecmaVersion: 2020,

      // Include browser global variables (like window, document)
      globals: globals.browser,
      parserOptions: {

        // Use latest ECMAScript features
        ecmaVersion: 'latest',

        // Enable JSX syntax support
        ecmaFeatures: { jsx: true },

        // Use ES modules (import/export)
        sourceType: 'module',
      },
    },

    // Register React-related plugins
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // Define linting rules
    rules: {

      // Include recommended rules from ESLint
      ...js.configs.recommended.rules,

      // Include recommended rules for React Hooks
      ...reactHooks.configs.recommended.rules,

      // Error on unused variables, except those starting with uppercase or underscore
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Warning for non-component exports with Fast Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]