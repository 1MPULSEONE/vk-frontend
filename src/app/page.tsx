'use client'

import { Button } from './shared/ui';
import { useState } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
       <Button
      onClick={handleClick}
      size={'lg'}
      contentGroupClassName="flex items-center justify-center gap-2"
      isLoading={isLoading}
    >
      <span>Нажми меня</span>
    </Button>
    </main>
  );
}
