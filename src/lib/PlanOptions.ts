export interface PlanOption {
  name: string
  planOptions?: PlanOption[]
  nextDefaultChoice?: string
  price?: number
  checkoutId?: string
  enableIccId?: boolean
  activationFee?: number
}

export const DEFAULT_ACTIVATION_FEE = 2499

export const nauticAlertBroadbandVideo = {
  UX3PAAODXHR8XWPSSOZWP14533: 'TSESO16SDJK3XBU8PSSNP20548',
  '5C73RJC6X0BN61N2EXARP14532': 'S1V7JWWSB6ZBSUWXXWR0P20549',
  HWWUH0KQXJUNQN1ACU57P14534: 'Y4Q7Y4QBDYOHGVY5X4W3P20552',
  KK0HFNXPQLPQHDDUZDYPP14535: '3EPAD13DMVJ2RJEF0SUWP20551',
  QO4NVC6WY2G48VME7TDLP17805: 'UX3Q99GLJVPYPKR1XJX0P20553',
  HDEW8K3SLND25KAUC6VTP17806: '2QJDBGDG9XUFMS0TYE4FP20554',
  PQNXPQMUDCM1DSQBF7PWP17807: 'UWZ5UQ3CHFQABQN1979RP20555',
  PCQHDF1U45B73TRDO4P3P20692: '1KR1ZT2XD6SA60LS6LD7P20693',
  PXJWVMGKD6SBDU56J1M0P16752: 'J430T0N72SNUAXS36OSUP20557',
  '1O6X4USFUW09D3DMWPSSP16751': 'BF6OQP852W8K2N1850LUP20556',
}

export function findPlanOption(
  checkoutId: string,
  arr?: PlanOption[],
): PlanOption | null {
  if (!arr) return null
  const res = arr.find((x) => x.checkoutId && x.checkoutId === checkoutId)
  return (
    res ||
    arr.map((x) => findPlanOption(checkoutId, x.planOptions)).find(Boolean) ||
    null
  )
}

export function getAllPlanOptions() {
  return [...cellPlanOptions, ...nauticAlertPlanOptions, ...maretronOptions]
}

export const maretronOptions: PlanOption[] = [
  {
    name: 'Maretron SMS200 Subscription',
    price: 29.95,
    checkoutId: 'MARETRON_SMS200',
    activationFee: 19.95,
    enableIccId: true,
  },
]

export const cellPlanOptions: PlanOption[] = [
  {
    name: '6GB Monthly Cellular Subscription',
    price: 48.0,
    checkoutId: 'CELL6GB',
    enableIccId: true,
  },
  {
    name: '10GB Monthly Cellular Subscription',
    price: 75.0,
    checkoutId: 'CELL10GB',
    enableIccId: true,
  },
  {
    name: '50GB Monthly Cellular Subscription',
    price: 350.0,
    checkoutId: 'CELL50GB',
    enableIccId: true,
  },
]

export const nauticAlertPlanOptions: PlanOption[] = [
  {
    name: 'Insight Cellular',
    nextDefaultChoice: 'Choose Your 4G LTE Service',
    planOptions: [
      {
        name: 'Reporting Service 4G LTE Standard',
        price: 14.99,
        checkoutId: '5C73RJC6X0BN61N2EXARP14532',
        enableIccId: true,
      },
      {
        name: 'Reporting Service 4G LTE Enhanced',
        price: 19.99,
        checkoutId: 'UX3PAAODXHR8XWPSSOZWP14533',
        enableIccId: true,
      },
    ],
  },
  {
    name: 'Insight Satellite',
    nextDefaultChoice: 'Choose Your Satellite Service',
    planOptions: [
      {
        name: 'Reporting Service Satellite Standard',
        price: 34.99,
        checkoutId: 'HWWUH0KQXJUNQN1ACU57P14534',
      },
      {
        name: 'Reporting Service Satellite Enhanced',
        price: 44.99,
        checkoutId: 'KK0HFNXPQLPQHDDUZDYPP14535',
      },
      {
        name: 'Vessel Monitoring Service via Satellite 24',
        price: 39.99,
        checkoutId: 'QO4NVC6WY2G48VME7TDLP17805',
      },
      {
        name: 'Vessel Monitoring Service via Satellite 48',
        price: 59.99,
        checkoutId: 'HDEW8K3SLND25KAUC6VTP17806',
      },
      {
        name: 'Vessel Monitoring Service via Satellite 96',
        price: 109.99,
        checkoutId: 'PQNXPQMUDCM1DSQBF7PWP17807',
      },
      { name: 'CloudWatch', price: 69.99 },
    ],
  },
  {
    name: 'VTracker',
    nextDefaultChoice: 'Choose Your Service',
    planOptions: [
      {
        name: 'VTracker Standard',
        price: 29.99,
        checkoutId: 'PXJWVMGKD6SBDU56J1M0P16752',
      },
      {
        name: 'VTracker Enhanced',
        price: 44.99,
        checkoutId: 'PCQHDF1U45B73TRDO4P3P20692',
      },
      {
        name: 'VTracker CloudWatch',
        price: 69.99,
        checkoutId: '1O6X4USFUW09D3DMWPSSP16751',
      },
    ],
  },
  {
    name: 'Broadband Video Only',
    price: 14.99,
    checkoutId: 'PLR0V9PRNYVHVUNNCSX7P20621',
    enableIccId: true,
  },
]
