/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      //files: ['src/components/default.vue'],  // Change this to default.vue path
      rules: {
        'vue/multi-word-component-names': 'off',
      }
    }
  ]
}
