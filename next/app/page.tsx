// page.tsx

import React from 'react';
import Heading from "@/components/Heading";
import DishBuilder from '@/components/DishBuilder';

export default function Home() {
  return <main className="dark:text-white">
    <Heading Tag="h2" title="DishBuilder" />
    <DishBuilder />
  </main>
}