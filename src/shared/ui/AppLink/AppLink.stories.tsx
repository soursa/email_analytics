import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator.';
import {Theme} from 'app/providers/ThemeProvider';
import {AppLink, AppLinkTheme} from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    to: '/',
    children: 'Link',
  },
};

export const PrimaryInverted: Story = {
  args: {
    to: '/',
    children: 'Link',
    theme: AppLinkTheme.PRIMARY_INVERTED,
  },
};

export const Secondary: Story = {
  args: {
    to: '/',
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryInverted: Story = {
  args: {
    to: '/',
    children: 'Link',
    theme: AppLinkTheme.SECONDARY_INVERTED,
  },
};

export const PrimaryDark: Story = {
  args: {
    to: '/',
    children: 'Link',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const PrimaryInvertedDark: Story = {
  args: {
    to: '/',
    children: 'Link',
    theme: AppLinkTheme.PRIMARY_INVERTED,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const SecondaryDark: Story = {
  args: {
    to: '/',
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const SecondaryInvertedDark: Story = {
  args: {
    to: '/',
    children: 'Link',
    theme: AppLinkTheme.SECONDARY_INVERTED,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
