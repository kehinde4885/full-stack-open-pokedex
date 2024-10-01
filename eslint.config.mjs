import globals from "globals";
import pluginReact from "eslint-plugin-react";


// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     rules: {
//       'react/prop-types': 'off',
//     },
//   },
//   {languageOptions: { globals: globals.browser }},
//   pluginReact.configs.flat.recommended,
// ];

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,  // Spread browser globals here
      },
    },
    extends: [
      pluginReact.configs.flat.recommended, // Correct placement for recommended config
    ],
    rules: {
      'react/prop-types': 'off',  // Disable prop-types rule globally
    },
  },
];