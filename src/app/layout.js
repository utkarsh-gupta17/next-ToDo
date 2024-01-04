import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'ToDo App',
//   description: 'This is a ToDo App project',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className flex flex-col h-screen`}>
        <ToastContainer/>
        <Header />
        <div className='mb-auto'>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
