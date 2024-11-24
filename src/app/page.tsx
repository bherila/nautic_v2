import Layout from '@/lib/layout'
import { Metadata } from 'next'

import './thanks/styles.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Welcome to Nearshore Networks',
  robots: 'noindex',
}

export default async function HomePage() {
  return (
    <Layout>
      <div className="w-container reg-container">
        <div className="reg-success-message">
          You will be redirected to the Nearshore Networks home page in a few
          moments.
        </div>
      </div>
      <meta
        httpEquiv="refresh"
        content="5; url=https://www.nearshorenetworks.com"
      />
    </Layout>
  )
}
