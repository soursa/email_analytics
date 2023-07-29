import type {Preview} from '@storybook/react';
import {StyleDecorator} from 'shared/config/storybook/StyleDecorator/StylesDecorator';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator.';
import {Theme} from 'app/providers/ThemeProvider';
import {RouterDecorator} from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
};

export default preview;
