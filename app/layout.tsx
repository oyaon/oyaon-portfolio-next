import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oyaon Sultan — Software Engineer & Applied AI',
  description:
    'Selected software engineering, applied AI, data, and business development work by Oyaon Sultan.',
  metadataBase: new URL('https://oyaon.github.io'),
  openGraph: {
    title: 'Oyaon Sultan — Software Engineer & Applied AI',
    description: 'Engineering useful digital systems from research to delivery.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
