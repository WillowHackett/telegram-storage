module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  svelteSortOrder: 'options-scripts-markup-styles',
  overrides: [
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript"
      }
    }
  ]
};
  