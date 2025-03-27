import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Turkish Celebrities Supporting Government',
  description: 'A website tracking celebrities and influencers on Twitter and Instagram who support the Turkish government rather than protesters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Turkish Celebrities Tracker</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/celebrities" className="hover:underline">Celebrities</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 p-6 mt-12">
          <div className="container mx-auto text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Turkish Celebrities Tracker. All data is for informational purposes only.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
