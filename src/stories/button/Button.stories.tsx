import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/app/shared/ui';
import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    asChild: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Автоматически устанавливает фокус на кнопке',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const WithAutoFocusDecorator = (Story: (args: any) => ReactElement, context: any) => {
  const ref = useRef<HTMLButtonElement>(null); 

  useEffect(() => {
    if (context.args.autoFocus && ref.current) {
  
      ref.current.focus({ preventScroll: true });
    }
  }, [context.args.autoFocus]);

  return (
    <Story {...context.args} ref={ref}/>
  );
};

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Что сделать',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Что сделать',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Что сделать',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Что сделать',
  },
};

export const Disabled: Story = {
  args: {
    children: 'None Button',
    disabled: true,
  },
};


export const WithAutoFocus: Story = {
  args: {
    variant: 'default',
    children: 'Кнопка с фокусом',
    focused: true,
  },
};

export const DefaultSecondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Что сделать',
  },
};

export const SmallSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Что сделать',
  },
};

export const LargeSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'Что сделать',
  },
};

export const LoadingSecondary: Story = {
  args: {
    variant: 'secondary',
    isLoading: true,
    children: 'Что сделать',
  },
};

export const DisabledSecondary: Story = {
  args: {
    disabled: true,
    children: 'None Button',
  },
};

export const WithBadge: Story = {
  args: {
    variant: 'default',
    children: 'Уведомления',
    notificationBadge: {
      quantity: 5, 
    },
  },
};

export const WithBadgeSecondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Уведомления',
    notificationBadge: {
      quantity: 3,
      variant: 'secondary', 
    },
  },
};

export const WithPulsatingBadge: Story = {
  args: {
    variant: 'default',
    children: 'Уведомления',
    notificationBadge: {
      quantity: 1,
      pulse: true, 
    },
  },
};

export const WithStrokedBadge: Story = {
  args: {
    variant: 'default',
    children: 'Уведомления',
    notificationBadge: {
      quantity: 7,
      stroke: true,
      strokeType: 'dynamic', 
    },
  },
};

export const WithLargeBadge: Story = {
  args: {
    variant: 'default',
    children: 'Уведомления',
    notificationBadge: {
      quantity: '1', 
      size: 16, 
    },
  },
};

export const WithBadgeAndLoading: Story = {
  args: {
    variant: 'default',
    children: 'Уведомления',
    isLoading: true,
    notificationBadge: {
      quantity: 2,
    },
  },
};

export const WithBadgeAndDisabled: Story = {
  args: {
    variant: 'default',
    children: 'Уведомления',
    disabled: true, 
    notificationBadge: {
      quantity: 8,
    },
  },
};


export const WithBadgeAndBigText: Story = {
  args: {
    variant: 'default',
    children: 'Скажи как мне быть, если нет стимула',
    notificationBadge: {
      quantity: 8,
    },
  },
};