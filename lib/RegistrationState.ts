import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
import RegistrationForm from "./RegistrationForm";

export default interface RegistrationState {
  selectedPlan: string[];
  broadbandVideo: boolean;
  installDate: string;
  email: string;
  imei: string;
  ownerFname: string;
  ownerLname: string;
  ownerMi: string;
  vesselName: string;
  cellNumber: string;
  vesselType: string;
  dealerName: string;
  dealerCompany: string;
  showImeiModal: boolean;
  agreed: boolean;
  iccId: string;
}

export class ValidatingRegistrationState implements RegistrationState {
  constructor(other?: RegistrationState) {
    if (other) {
      this.selectedPlan = other.selectedPlan;
      this.broadbandVideo = other.broadbandVideo;
      this.installDate = other.installDate;
      this.email = other.email;
      this.imei = other.imei;
      this.ownerFname = other.ownerFname;
      this.ownerLname = other.ownerLname;
      this.ownerMi = other.ownerMi;
      this.vesselName = other.vesselName;
      this.cellNumber = other.cellNumber;
      this.vesselType = other.vesselType;
      this.dealerName = other.dealerName;
      this.dealerCompany = other.dealerCompany;
      this.showImeiModal = other.showImeiModal;
      this.agreed = other.agreed;
      this.iccId = other.iccId;
    } else if (process.env.TEST_FORM) {
      this.selectedPlan = [""];
      this.broadbandVideo = false;
      this.installDate = "";
      this.email = "nsn@qa.team";
      this.imei = "911504516404422";
      this.ownerFname = "John";
      this.ownerLname = "Smith";
      this.ownerMi = "W.";
      this.vesselName = "My Vessel";
      this.cellNumber = "908-883-1378";
      this.vesselType = "";
      this.dealerName = "Some DealerName";
      this.dealerCompany = "Some DealerCompany";
      this.showImeiModal = false;
      this.agreed = false;
      this.iccId = "891004234814455936F";
    } else {
      this.selectedPlan = [""];
      this.broadbandVideo = false;
      this.installDate = "";
      this.email = "";
      this.imei = "";
      this.ownerFname = "";
      this.ownerLname = "";
      this.ownerMi = "";
      this.vesselName = "";
      this.cellNumber = "";
      this.vesselType = "";
      this.dealerName = "";
      this.dealerCompany = "";
      this.showImeiModal = false;
      this.agreed = false;
      this.iccId = "";
    }
  }

  @IsArray({ message: "Selected plan is required" }) selectedPlan: string[];

  @IsBoolean() broadbandVideo: boolean;

  @IsOptional() installDate: string;

  @IsEmail({}, { message: "Email is required" }) @MinLength(2) email: string;

  @IsString({ message: "IMEI is required" })
  @MinLength(15, { message: "IMEI is the wrong length" })
  @MaxLength(19, { message: "IMEI is the wrong length" })
  imei: string;

  @IsString({ message: "Owner first name is required" })
  @MinLength(2, { message: "Owner first name must be at least 2 characters" })
  ownerFname: string;

  @IsString({ message: "Owner last name is required" })
  @MinLength(2, { message: "Owner last name must be at least 2 characters" })
  ownerLname: string;

  @IsOptional() ownerMi: string;

  @IsOptional() vesselName: string;

  @IsPhoneNumber("US", { message: "Owner cell phone is required" })
  cellNumber: string;

  @IsOptional() vesselType: string;

  @IsOptional() dealerName: string;

  @IsOptional() dealerCompany: string;

  @IsOptional() showImeiModal: boolean;

  @IsBoolean() agreed: boolean;

  @IsString({ message: "ICCID is required" }) iccId: string;
}
