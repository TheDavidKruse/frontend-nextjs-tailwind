'use client';

import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import Checkbox from '@/components/Checkbox/Checkbox';

export default function Home() {
  return (
    <body className="max-w max-h flex flex-col">
      <header className="max-w flex min-h-full">
        <HeaderTitle />
      </header>
      <main className="max-w flex">
        <Checkbox />
        main
        <ul>
          <li></li>
        </ul>
      </main>
    </body>
  );
}
