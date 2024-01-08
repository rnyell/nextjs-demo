import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <h2>from lootlayout</h2> */}
        {/* everything here is shared acroos all routes */}
        {children}
      </body>
    </html>
  );
}
