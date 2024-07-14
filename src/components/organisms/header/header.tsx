import { MoonIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const PAGES = ['Главная', 'Услуги', 'Клиника', 'Цены', 'Отзывы'];

export function Header() {
  return (
    <header className='flex'>
      <h1 className='hidden'>Beauty-Bliss</h1>
      <nav>
        <ul className='flex'>
          <li>
            <a href="#">
              <Image
                src="/next.svg"
                alt="logo"
                height={100}
                width={300}
              />
            </a>
          </li>
          {PAGES.map((list) =>
            <li key={list}>
              <a href="#">
                {list}
              </a>
            </li>)}
        </ul>
      </nav>
      <div>
        <MoonIcon className="size-6 text-blue-500" />
      </div>
    </header>
  );
}
