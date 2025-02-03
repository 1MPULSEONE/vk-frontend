import type { Preview } from "@storybook/react";

import '../src/styles/globals.scss'
import '../src/styles/animation.module.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
