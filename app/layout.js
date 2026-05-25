import './globals.css'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Siv — UX Designer',
  description: 'UX & Product Designer with 5+ years shipping real features across enterprise and B2B SaaS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
