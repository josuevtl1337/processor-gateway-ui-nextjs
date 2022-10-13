import {
  IBankForms,
  IBankTransfer,
  IBarcode,
  IDefault,
  IOTP,
  IPaymentElement,
  IQR,
} from './visual-data';

// ENUM DEF
export enum ViewID {
  DEFAULT = 'DEFAULT',
  PIX = 'PIX',
  FORM_REDIRECT = 'FORM_REDIRECT',
  PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
  PUSH_NOTIFICATION_PT = 'PUSH_NOTIFICATION_PT',
  PUSH_NOTIFICATION_CO = 'PUSH_NOTIFICATION_CO',
  PAYMENT_INSTRUCTIONS = 'PAYMENT_INSTRUCTIONS',
  BARCODE = 'BARCODE',
  PAYCASH_BARCODE = 'PAYCASH_BARCODE',
  BANK_TRANSFER = 'BANK_TRANSFER',
  BANK_TRANSFER_BD = 'BANK_TRANSFER_BD',
  BANK_TRANSFER_CL = 'BANK_TRANSFER_CL',
  BANK_TRANSFER_AR = 'BANK_TRANSFER_AR',
  BANK_TRANSFER_PT = 'BANK_TRANSFER_PT',
  BANK_TRANSFER_PK = 'BANK_TRANSFER_PK',
  BANK_TRANSFER_MX = 'BANK_TRANSFER_MX',
  BANK_TRANSFER_AU = 'BANK_TRANSFER_AU',
  BANK_TRANSFER_CO = 'BANK_TRANSFER_CO',
  BANK_TRANSFER_CN = 'BANK_TRANSFER_CN',
  CRYPTO = 'CRYPTO',
  QR_ARG = 'QR_ARG',
  QR_MX = 'QR_MX',
  CREDIT_CARD = 'CREDIT_CARD',
  PAYOUT_CC_VGS = 'VGS_CC',
  BANKS_AVAILABLE_LIST = 'BANKS_AVAILABLE_LIST',
  BLIK_ALIAS_LIST = 'BLIK_ALIAS_LIST',
  BANKS_LIST_CO = 'BANKS_LIST_CO',
  BANKS_LIST_CN = 'BANKS_LIST_CN',
  ACCOUNT_BANK_ID = 'ACCOUNT_BANK_ID',
  ACCOUNT_NUMBER = 'ACCOUNT_NUMBER',
  OTP = 'OTP',
  VPA = 'VPA',
  REDIRECT_URL = 'REDIRECT_URL',
  FORM_PAYOUT = 'FORM_PAYOUT',
}
export enum PaymentStatus {
  CREATED = 'CREATED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
  TO_BE_CREATED = 'TO_BE_CREATED',
  COMPLETED = 'COMPLETED',
  TO_BE_ON_HOLD = 'TO_BE_ON_HOLD',
  ON_HOLD = 'ON_HOLD',
}
export enum PaymentElementType {
  TR = 'TR',
  CC = 'CC',
  UI = 'UI',
  I3 = 'I3',
  PIX = 'PIX',
}
export enum PaymentType {
  PAYIN = 'payin',
  PAYOUT = 'payout',
  DEFAULT = 'DEFAULT',
}

// INTERFACES DEF
export interface Payment {
  amount: number;
  currency: string;
  creationDate: string;
  expirationDate: string;
  viewId: ViewID;
  status: PaymentStatus;
  paymentMethodCode?: string;
}
export interface PaymentDetails {
  payment: Payment;
  backUrl: string;
  successUrl?: string;
  errorUrl?: string;
  visualData: IDefault | IBankForms | IPaymentElement | IBankTransfer | IOTP | IQR | IBarcode;
}
export interface PaymentState {
  paymentDetails?: PaymentDetails;
  paymentElements: PaymentElement[];
  paymentElement?: PaymentElement;
}
export interface PaymentElement {
  expirationDate?: string;
  firstSixDigits?: string;
  holderName?: string;
  img: string;
  lastFourDigits?: string;
  paymentElementExternalId: string;
  selected: boolean;
  type?: string;
  vpa?: string;
  account?: string;
  accountCode?: string;
  address?: string;
}
export const EmptyPayment: PaymentDetails = {
  payment: {
    amount: 0,
    currency: '',
    creationDate: '',
    expirationDate: '',
    viewId: ViewID.DEFAULT,
    status: PaymentStatus.CREATED,
  },
  backUrl: '',
  successUrl: '',
  visualData: {
    viewId: ViewID.DEFAULT,
  },
};
export const EmptyPaymentElement: PaymentElement = {
  expirationDate: '',
  firstSixDigits: '',
  lastFourDigits: '',
  holderName: '',
  img: '',
  paymentElementExternalId: '',
  selected: false,
  type: '',
  vpa: '',
};
export interface Errors {
  message: string;
  translationKey: string;
}
