import Image from 'next/image'

export default function NauticIMEIModal() {
  return (
    <>
      <ol>
        <li>
          Go to Home Screen, press button in upper right to be taken to System
          Settings
        </li>
        <li>
          At System Settings scroll the bottom bar to the left and press “Info”
          tab. &nbsp;The “MEID” line is the IMEI.
        </li>
      </ol>
      <Image
        src="/img/insight_meid_screenshot.jpg"
        width={429}
        height={323}
        alt="Insight MEID screenshot"
      />
    </>
  )
}
