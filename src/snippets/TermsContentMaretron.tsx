export default function TermsContentMaretron() {
  return (
    <>
      <h1>Terms and Conditions of Subscription</h1>
      <ul>
        {[
          'SMS Service requires 24 hours following request to activate, Monday-Friday. Activation requests received on Friday will result in Activation on Monday.',
          'Activation Fee is $14.95',
          'First charge will be the Activation Fee plus the first month on a 3 month minimum subscription.',
          'Subsequent months are charged automatically and require a 30 day notification to terminate a subscription.',
          'The following countries are NOT included within the SMS200 Unlimited Plan and if the SMS200 is used within the following countries, charges will occur at the rate of $1.50 per SMS',
        ].map((term, idx) => (
          <li key={'term' + idx}>{term}</li>
        ))}
      </ul>
      <p>
        American Samoa, Cuba, Central African Republic, Nambia, Vanuatu,
        Botswana, Bhutan, Djibouti, Ethiopia, Lebanon, Libya, Nepal, New
        Caledonia, Cruise Ships and In-Flight, Sao Tome and Principe, South
        Sudan, Yemen, Ascension Island, Cook Islands, Equatorial Guinea,
        Lesotho, Federated States of Micronesia, Satin Pierre and Miquelon.
      </p>
      <p>
        For a complete listing of countries included in the SMS200 Unlimited
        plan, please go{' '}
        <a href="/docs/SMS-Unlimited-Approved-Country-List.pdf">here</a>.
      </p>
    </>
  )
}
