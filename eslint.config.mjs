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

// export default [
  //   {
    //     files: ["**/*.{js,mjs,cjs,jsx}"],
    //     languageOptions: {
      //       globals: {
//         ...globals.browser,  // Spread browser globals here
//       },
//     },
//     extends: [
  //       pluginReact.configs.flat.recommended, // Correct placement for recommended config
  //     ],
  //     rules: {
    //       'react/prop-types': 'off',  // Disable prop-types rule globally
    //     },
    //   },
    // ];
    
    export default [
      {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
          globals: globals.browser,  // Correct global browser settings
        },
        plugins: {
          react: pluginReact,  // Define the React plugin
        },
        rules: {
          'react/prop-types': 'off',  // Disable prop-types rule
        },
      },
      // Apply recommended React rules
      pluginReact.configs.flat.recommended,
];