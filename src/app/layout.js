import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'IMSESO - Inclusive Management & Social Empowering Security Organization',
  description: 'Welcome to IMSESO',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}