import type { Metadata } from 'next';
import { beVietnamPro, agbalumo } from './fonts';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Portfolio | Vinh Bao Phuc',
  description: 'Personal portfolio website of Vinh Bao Phuc showcasing projects, skills, and experience',
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: '32x32' },
      // { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    // apple: [
    //   { url: '/apple-touch-icon.png', sizes: '180x180' },
    // ],
    // other: [
    //   { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    // ],
  },
  // manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${agbalumo.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}