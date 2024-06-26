// app/layout.tsx or your layout file
import {
  ClerkProvider
} from '@clerk/nextjs';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
