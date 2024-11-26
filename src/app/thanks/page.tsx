import Layout from '@/lib/layout'
import './styles.css'

export default function ThanksPage({}) {
  return (
    <Layout>
      <div className="w-container reg-container">
        <div className="reg-success-message">
          Thank you! Your transaction has been processed!
        </div>
        <div className="reg-additional-info">
          Please allow up to 24 hours for your activation to be completed. Your
          receipt will be emailed.
        </div>
        <div className="reg-additional-info">
          Please restart the unit 24 hours after activation confirmation is
          received. New service network activation may require more than one
          restart of the unit.
        </div>
        <div className="reg-additional-info">
          Thank you for choosing Nearshore Networks!
        </div>
      </div>
    </Layout>
  )
}
