export default interface RegistrationState {
  selectedPlan: string[];
  broadbandVideo: boolean;
  installDate: string;
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

export const defaultRegistrationState: RegistrationState = {
  selectedPlan: [""],
  broadbandVideo: false,
  installDate: "",
  imei: "",
  ownerFname: "",
  ownerLname: "",
  ownerMi: "",
  vesselName: "",
  cellNumber: "",
  vesselType: "",
  dealerName: "",
  dealerCompany: "",
  showImeiModal: false,
  agreed: false,
  iccId: "",
};
