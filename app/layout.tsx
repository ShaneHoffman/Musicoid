import './_components/globals.css';
import { inter } from './_components/fonts';
import SideNavigation from './_components/root/side-navigation';
import { ReactNode } from 'react';
import MusicKitProvider from './_providers/MusicKitProvider';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MusicKitProvider>
          <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
            <div className='flex-none w-full md:w-72 bg-shark'>
              <SideNavigation />
            </div>
            <div className='flex-grow p-6 md:overflow-y-auto md:p-12 bg-mine-shaft'>
              {children}
            </div>
          </div>
        </MusicKitProvider>

        <script
          src='https://js-cdn.music.apple.com/musickit/v3/musickit.js'
          data-web-components
          async
        ></script>
      </body>
    </html>
  );
};

export default RootLayout;
