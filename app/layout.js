import './css/globals.css';

export const metadata = {
  title: 'USVA Swamp Volleyball',
  description: 'Developed by TroyMoses',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
