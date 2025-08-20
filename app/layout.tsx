import type { Metadata } from 'next';
import "."lobals.css';

export const metadata: Metadata = {
  title: 'Help me build "GlamCS" cosmetics website with an e',
  description: 'Premium Help me build "GlamCS" cosmetics website with an e application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}