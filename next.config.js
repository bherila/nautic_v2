/** @type {import('next').NextConfig} */
const checkoutUrl =
  'https://checkout.square.site/merchant/MLF75XW78VVEB/checkout/PDRM3QG6ADMN46WJZ6G7GFT7'

const nextConfig = {
  async redirects() {
    return [
      {
        source:
          '/((?!api|_next/static|_next/image|favicon.ico|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png|site.webmanifest|robots.txt).*)',
        destination: checkoutUrl,
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
