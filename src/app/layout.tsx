import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Matheus Dias | Dentista Especializado',
  description: 'Serviços odontológicos de alta qualidade: tratamento de canal, cirurgia de sisos, próteses dentárias, clareamento e restauração.',
  keywords: 'dentista, odontologia, tratamento de canal, próteses dentárias, clareamento dental',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BL3Y5GXWYN" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BL3Y5GXWYN');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
