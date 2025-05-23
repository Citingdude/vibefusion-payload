// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'node/prefer-global/process': ['error', 'always'],
  },
  ignores: [
    '**/payload-types.ts',
    '**/importMap.js',
    '**/migrations/**',
  ],
})
