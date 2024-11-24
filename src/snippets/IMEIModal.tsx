import * as React from 'react'
import { bodySize, headingSize } from '../lib/styles'
import { CSSProperties } from 'react'

export default function IMEIModal({
  onClose,
  contentOverride,
}: {
  onClose: () => void
  contentOverride?: React.ReactNode
}) {
  return (
    <div id="modal-nautic-imei" className="modal" style={modalStyle}>
      <button style={closeButtonStyle} onClick={onClose}>
        X
      </button>
      <h3 style={{ marginTop: 0 }}>How do I find my IMEI?</h3>
      {contentOverride ? (
        contentOverride
      ) : (
        <>
          <ul>
            <li>
              The IMEI is a unique identification number assigned to your device
              by the manufacturer.
            </li>
            <li>
              It can be found on the label on the exterior of your device or in
              Device Settings.
            </li>
            <li>
              Alternatively, contact your device manufacturer or installer for
              help with this number.
            </li>
          </ul>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </>
      )}
    </div>
  )
}

const modalStyle: CSSProperties = {
  display: 'block',
  position: 'fixed',
  boxShadow: '-3px 2px 3px 7px #ccc',
  top: '20%',
  left: '30%',
  right: '30%',
  zIndex: 1000,
  background: '#fff',
  padding: '4rem',
  fontSize: '10pt',
}

const closeButtonStyle: CSSProperties = {
  float: 'right',
  fontWeight: 'bold',
  fontSize: headingSize,
}
