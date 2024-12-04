import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import '../styles/normalize.css'
import '../styles/components.css'
import '../styles/nearshorenetworks.css'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'
import '@fontsource/roboto'
import Script from 'next/script'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nearshore Networks',
  // description: '',
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: '4S_29TZmGdAwjBsw_FZ-JD20hrZdMoOyoWFEvRSLito',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63154f3300bbd06788d75ff9"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      />
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        type="text/javascript"
        crossOrigin="anonymous"
      />
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.0/jquery-ui.min.js"
        type="text/javascript"
        crossOrigin="anonymous"
      />
      <Script src="/js/webflow.js" type="text/javascript" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
