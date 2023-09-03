/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        printWidth: 140,
        htmlWhitespaceSensitivity: 'ignore'
      },
    },
  },
};

export default preview;
