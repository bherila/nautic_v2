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

function getDefaultRegistrationState() {
  if (!process.env.TEST_FORM) {
    return {
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
  } else {
    return {
      selectedPlan: [""],
      broadbandVideo: false,
      installDate: "",
      imei: "911504516404422",
      ownerFname: "John",
      ownerLname: "Smith",
      ownerMi: "W.",
      vesselName: "My Vessel",
      cellNumber: "908-883-1378",
      vesselType: "",
      dealerName: "Some DealerName",
      dealerCompany: "Some DealerCompany",
      showImeiModal: false,
      agreed: false,
      iccId: "891004234814455936F",
    };
  }
}

export const defaultRegistrationState: RegistrationState =
  getDefaultRegistrationState();
