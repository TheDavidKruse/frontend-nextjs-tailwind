'use client';

import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import Checkbox from '@/components/Checkbox/Checkbox';
import Card from '@/components/Card/Card';
import Task from '@/components/TaskList/Task';

export default function Home() {
  return (
    <body className="max-w max-h flex flex-col">
      <header className="max-w flex min-h-full">
        <HeaderTitle />
      </header>
      <main className="flex flex-col">
        <div className="container flex flex-col justify-center items-center md:mx-auto space-y-[20px]">
          <Card>
            <Task />
          </Card>
        </div>

        <ul>
          <li></li>
        </ul>
      </main>
    </body>
  );
}
