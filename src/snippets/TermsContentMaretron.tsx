export default function TermsContentMaretron() {
  return (
    <>
      <h1>Terms and Conditions of Subscription</h1>
      <ul>
        {[
          'SMS Service requires 24 hours following request to activate, Monday-Friday. Activation requests received on Friday will result in Activation on Monday.',
          'Activation Fee is $19.95',
          'First charge will be the Activation Fee plus the first month on a 3 month minimum subscription.',
          'Subsequent months are charged automatically and require a 30 day notification to terminate a subscription.',
          'Plan includes 100 SMS per month.',
          'Additional SMS will be charged at a rate of $0.35 per outbound SMS.',
          'Service is available in USA, Canada, Mexico and the Caribbean where cellular tower and network access is physically available.',
          'Service is NOT guaranteed but as with all radio technologies is best effort.'
        ].map((term, idx) => (
          <li key={'term' + idx}>{term}</li>
        ))}
      </ul>
    </>
  )
}
