import { MoonIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export function Header() {
  return (
    <header>
      <Image
        src="next.svg"
        alt="logo"
        height={300}
        width={300}
      />
    <MoonIcon className="size-6 text-blue-500" />
    </header>
  );
}
