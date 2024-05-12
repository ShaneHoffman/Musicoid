'use client';

import { ReactNode, useEffect, useState } from 'react';

interface MusicKitProviderProps {
  children: ReactNode;
}

const MusicKitProvider: React.FC<MusicKitProviderProps> = ({ children }) => {
  const [ready, setReady] = useState(false);

  const configureMusicKit = async () => {
    await MusicKit.configure({
      developerToken: process.env.NEXT_PUBLIC_APPLE_DEVELOPER_TOKEN,
      app: {
        name: 'Apple Music',
      },
      bitrate: MusicKit.PlaybackBitrate.HIGH,
    });
    setReady(true);
  };

  useEffect(() => {
    if (window.MusicKit) {
      configureMusicKit();
    } else {
      document.addEventListener('musickitloaded', configureMusicKit, {
        once: true,
      });
    }

    return () => {
      document.removeEventListener('musickitloaded', configureMusicKit);
    };
  }, []);

  return ready ? children : <p>Loading...</p>;
};

export default MusicKitProvider;
