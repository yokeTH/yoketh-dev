module.exports = {
  trailingComma: 'all',
  semi: false,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  proseWrap: 'preserve',
  arrowParens: 'always',
  singleAttributePerLine: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '@/components/(.*)$',
    '^[.]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.json',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '.*rc',
      options: {
        singleQuote: false,
        parser: 'json',
      },
    },
  ],
}
