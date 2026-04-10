import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BottomNav } from '@/components/BottomNav';
import { Player } from '@/components/Player';
import { AddToPlaylistModal } from '@/components/AddToPlaylistModal';
import { PWARegister } from '@/components/PWARegister';
import { BackgroundProvider } from '@/components/BackgroundProvider';

export const metadata: Metadata = {
  title: 'Music Risyadh',
  description: 'Platform streaming musik modern buatan Risyadh',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Music Risyadh',
  },
  icons: {
    apple: 'https://f.top4top.io/p_3733w0g4e0.jpg',
  },
  verification: {
    google: 'U9SX6MF5eDEUvHxe1W8ISXPzeGq_ZE1aCSs6-vr0_uU', 
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id">
      <body className="text-white antialiased pb-24 min-h-screen" suppressHydrationWarning>
        <BackgroundProvider />
        <PWARegister />
        {children}
        <Player />
        <BottomNav />
        <AddToPlaylistModal />
      </body>
    </html>
  );
}
