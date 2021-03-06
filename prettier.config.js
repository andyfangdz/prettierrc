module.exports = {
  tabWidth: 2,
  printWidth: 80,
  proseWrap: 'preserve',
  semi: true,
  trailingComma: 'es5',
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
