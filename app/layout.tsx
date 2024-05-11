import './ui/globals.css';
import { inter } from './ui/fonts';
import SideNavigation from './ui/root/side-navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
          <div className='flex-none w-full md:w-72 bg-shark'>
            <SideNavigation />
          </div>
          <div className='flex-grow p-6 md:overflow-y-auto md:p-12 bg-mine-shaft'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
