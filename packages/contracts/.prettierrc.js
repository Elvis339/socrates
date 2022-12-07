const { readFileSync } = require('fs');
const { resolve } = require('path');

const prettier = JSON.parse(readFileSync(resolve(__dirname, '../../', '.prettierrc.json')).toString());

module.exports = {
  ...prettier,
  overrides: [
    {
      files: '*.sol',
      options: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
      },
    },
  ],
};
