import Layout from '@/lib/layout'
import './styles.css'

export default function ThanksPage({}) {
  return (
    <Layout>
      <div className="w-container reg-container">
        <div className="reg-success-message">
          Thank you! Your information has been received!
        </div>
        <div className="reg-additional-info">
          We will be in touch with you soon to assist with your plan activation.
        </div>
        <div className="reg-additional-info">
          Thanks for choosing Nearshore Networks!
        </div>
      </div>
    </Layout>
  )
}
