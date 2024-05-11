'use client';

import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import RadioIcon from '@heroicons/react/24/outline/esm/RadioIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Browse', href: '/browse', icon: Squares2X2Icon },
  { name: 'Radio', href: '/radio', icon: RadioIcon },
];

export default function NavigationLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          className={clsx('flex flex-row gap-2 p-1.5 rounded-md', {
            'bg-tuna': pathname === href,
          })}
        >
          <Icon className='w-6 text-carnation' />
          {name}
        </Link>
      ))}
    </>
  );
}
