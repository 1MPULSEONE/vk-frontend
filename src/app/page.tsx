'use client'

import { Button } from './shared/ui';

export default function HomePage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
  <Button
  variant="default"
  size="default"
  onClick={() => console.log('Clicked!')}
  notificationBadge={{
    quantity: 55,
    variant: "primary",
    size: 16,
    pulse: false,
  }}
>
Скажи как мне быть, если нет стимула
</Button>
    </main>
  );
}
