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
        <div className="reg-additional-info">
          <hr />
        </div>
        <div className="reg-success-message">IMPORTANT NOTICE</div>
        <div className="reg-additional-info">
          PLEASE RESTART THE UNIT 24 HOURS AFTER SUBSCRIPTION CONFIRMATION IS
          RECEIVED.
        </div>
        <div className="reg-additional-info">
          NEW SERVICE NETWORK ACTIVATION MAY REQUIRE MORE THAN ONE RESTART OF
          THE UNIT.
        </div>
      </div>
    </Layout>
  )
}
