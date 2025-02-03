import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/app/shared/ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'none']
    },
    asChild: {
      control: 'boolean'
    },
    className: {
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultSecondary: Story = {
  
  args: {
    variant: 'default',
    children: 'Что сделать',
  }
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Что сделать'
  }
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Что сделать'
  }
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Что сделать'
  }
};

export const Disabled: Story = {
  args: {
    children: 'None Button',
    disabled: true
  }
};

export const Default: Story = {
  
  args: {
    variant: 'secondary',
    children: 'Что сделать',
  }
};

export const SmallSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Что сделать'
  }
};

export const LargeSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'Что сделать'
  }
};

export const LoadingSecondary: Story = {
  args: {
    variant: 'secondary',
    isLoading: true,
    children: 'Что сделать'
  }
};

export const DisabledSecondary: Story = {
  args: {
    disabled: true,
    children: 'None Button'
  }
};



export const CustomClass: Story = {
  args: {
    className: 'bg-purple-500 hover:bg-purple-700 min-w-fit',
    children: 'Custom Class Button'
  }
};
