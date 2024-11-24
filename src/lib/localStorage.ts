'use client'
import RegistrationState from './RegistrationState'

export function saveToLocalStorage(s: RegistrationState): void {
  sessionStorage.setItem('nsnIMEI', s.imei)
  sessionStorage.setItem('nsnDate', s.installDate)
  sessionStorage.setItem('nsnVessel', s.vesselName)
  sessionStorage.setItem('nsnFname', s.ownerFname)
  sessionStorage.setItem('nsnMname', s.ownerMi)
  sessionStorage.setItem('nsnLname', s.ownerLname)
  sessionStorage.setItem('nsnVesselType', s.vesselType)
  sessionStorage.setItem('cellPhone', s.cellNumber)
  sessionStorage.setItem('nsnICCID', s.iccId || '')
  sessionStorage.setItem(
    'nsnSubscriptionPlan',
    s.selectedPlan.join(':') + (s.broadbandVideo ? ' + broadband video' : ''),
  )
}
