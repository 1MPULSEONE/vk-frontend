import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBadge } from '~/app/shared/ui';

const meta: Meta<typeof NotificationBadge> = {
  title: 'Components/NotificationBadge',
  component: NotificationBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: [8, 12, 16, 20, 24],
    },
    stroke: {
      control: 'boolean',
    },
    strokeType: {
      control: 'select',
      options: ['dynamic', 'surface', 'base', 'secondary'],
    },
    pulse: {
      control: 'boolean',
    },
    quantity: {
      control: 'text',
      description:
        'Значение счётчика. Если число больше 99 выводится "99+", если строка длиннее 3 символов — только первые 3 символа.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationBadge>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 20,
    quantity: 5,
    stroke: false,
    pulse: false,
  },
};

export const WithLargeNumber: Story = {
  args: {
    variant: 'primary',
    size: 20,
    quantity: 150,
    stroke: false,
    pulse: false,
  },
};

export const WithStringQuantity: Story = {
  args: {
    variant: 'primary',
    size: 12,
    quantity: "HelloWorld",
    stroke: false,
    pulse: false,
  },
};

export const WithStroke: Story = {
  args: {
    variant: 'primary',
    size: 20,
    quantity: 42,
    stroke: true,
    pulse: false,
  },
};

export const WithPulse: Story = {
  args: {
    variant: 'primary',
    size: 12,
    quantity: 8,
    stroke: false,
    pulse: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 20,
    quantity: 10,
    stroke: false,
    pulse: false,
  },
};