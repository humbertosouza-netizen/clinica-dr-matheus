import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Matheus Henrique | Dentista Especializado',
  description: 'Serviços odontológicos de alta qualidade: tratamento de canal, cirurgia de sisos, próteses dentárias, clareamento e restauração.',
  keywords: 'dentista, odontologia, tratamento de canal, próteses dentárias, clareamento dental',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
