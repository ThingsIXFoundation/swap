import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Swap | ThingsIX</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
