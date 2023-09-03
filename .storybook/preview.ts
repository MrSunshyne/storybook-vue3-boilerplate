/** @type { import('@storybook/vue3').Preview } */

import '../src/index.css'; 

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2',
    },
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
