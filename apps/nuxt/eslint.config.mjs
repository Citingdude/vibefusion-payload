// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'

export default antfu({
  rules: {
    'node/prefer-global/process': 'off',
  },
}, ...pluginVueA11y.configs['flat/recommended'], {
  rules: {
    'vuejs-accessibility/anchor-has-content': [
      'error',
      {
        accessibleChildren: ['LexicalText'],
      },
    ],
  },
})
