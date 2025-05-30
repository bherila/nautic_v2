import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export default interface RegistrationState {
  selectedPlan: string[]
  broadbandVideo: boolean
  installDate: string
  email: string
  imei: string
  ownerFname: string
  ownerLname: string
  ownerMi: string
  vesselName: string
  cellNumber: string
  vesselType: string
  dealerName: string
  dealerCompany: string
  showImeiModal: boolean
  agreed: boolean
  iccId: string
  emailCC?: string
}

export class ValidatingRegistrationState implements RegistrationState {
  constructor(other?: Partial<RegistrationState>) {
    this.emailCC = ''
    this.selectedPlan = ['']
    this.broadbandVideo = false
    this.installDate = ''
    this.email = ''
    this.imei = ''
    this.ownerFname = ''
    this.ownerLname = ''
    this.ownerMi = ''
    this.vesselName = ''
    this.cellNumber = ''
    this.vesselType = ''
    this.dealerName = ''
    this.dealerCompany = ''
    this.showImeiModal = false
    this.agreed = false
    this.iccId = ''
    if (!other) {
      return
    }
    if (typeof other.selectedPlan !== 'undefined') {
      this.selectedPlan = other.selectedPlan
    }
    if (typeof other.broadbandVideo !== 'undefined') {
      this.broadbandVideo = other.broadbandVideo
    }
    if (typeof other.installDate !== 'undefined') {
      this.installDate = other.installDate
    }
    if (typeof other.email !== 'undefined') {
      this.email = other.email
    }
    if (typeof other.imei !== 'undefined') {
      this.imei = other.imei
    }
    if (typeof other.ownerFname !== 'undefined') {
      this.ownerFname = other.ownerFname
    }
    if (typeof other.ownerLname !== 'undefined') {
      this.ownerLname = other.ownerLname
    }
    if (typeof other.ownerMi !== 'undefined') {
      this.ownerMi = other.ownerMi
    }
    if (typeof other.vesselName !== 'undefined') {
      this.vesselName = other.vesselName
    }
    if (typeof other.cellNumber !== 'undefined') {
      this.cellNumber = other.cellNumber
    }
    if (typeof other.vesselType !== 'undefined') {
      this.vesselType = other.vesselType
    }
    if (typeof other.dealerName !== 'undefined') {
      this.dealerName = other.dealerName
    }
    if (typeof other.dealerCompany !== 'undefined') {
      this.dealerCompany = other.dealerCompany
    }
    if (typeof other.showImeiModal !== 'undefined') {
      this.showImeiModal = other.showImeiModal
    }
    if (typeof other.agreed !== 'undefined') {
      this.agreed = other.agreed
    }
    if (typeof other.iccId !== 'undefined') {
      this.iccId = other.iccId
    }
    if (typeof other.emailCC !== 'undefined') {
      this.emailCC = other.emailCC
    }
  }

  @IsOptional() emailCC: string

  @IsArray({ message: 'Selected plan is required' }) selectedPlan: string[]

  @IsBoolean() broadbandVideo: boolean

  @IsOptional() installDate: string

  @IsEmail({}, { message: 'Email is required' }) @MinLength(2) email: string

  @IsString({ message: 'IMEI is required' })
  @MinLength(15, { message: 'IMEI is the wrong length' })
  @MaxLength(19, { message: 'IMEI is the wrong length' })
  imei: string

  @IsString({ message: 'First name is required' })
  @MinLength(2, { message: 'First name must be at least 2 characters' })
  ownerFname: string

  @IsString({ message: 'Last name is required' })
  @MinLength(2, { message: 'Last name must be at least 2 characters' })
  ownerLname: string

  @IsOptional() ownerMi: string

  @IsOptional() vesselName: string

  @IsPhoneNumber('US', { message: 'Phone number is required' })
  cellNumber: string

  @IsOptional() vesselType: string

  @IsOptional() dealerName: string

  @IsOptional() dealerCompany: string

  @IsOptional() showImeiModal: boolean

  @IsBoolean() agreed: boolean

  @IsString({ message: 'ICCID is required' }) iccId: string
}
