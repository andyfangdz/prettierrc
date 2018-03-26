module.exports = {
  tabWidth: 4,
  printWidth: 80,
  proseWrap: 'preserve',
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  overrides: [
    {
      files: '{*.js?(on),*.md,.prettierrc,.stylelintrc,.babelrc}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
