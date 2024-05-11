import Image from 'next/image';
import NavigationLinks from './navigation-links';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SideNavigation() {
  return (
    <div className='flex flex-col h-full px-8 py-4 border-r gap border-ship-gray'>
      <Image
        src='/apple-music.svg'
        alt='Apple Music Logo'
        width={83}
        height={20}
        className='mx-1.5'
      />
      <div className='flex items-center my-6'>
        <MagnifyingGlassIcon className='w-3.5 absolute mx-1.5' />
        <input
          type='text'
          placeholder='Search'
          className='w-full px-6 py-1.5 border border-white/15 rounded-sm bg-mine-shaft text-xs focus:outline-none focus:rounded-md focus:shadow-search'
        />
      </div>
      <div className='flex-grow'>
        <NavigationLinks />
      </div>
    </div>
  );
}
