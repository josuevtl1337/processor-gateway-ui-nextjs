import { FormFieldPaymentElement } from './global';
import { PaymentElementType, ViewID } from './payment';

export interface IVisualData {
  errors?: any;
  message?: string;
  logo?: string;
  // WAITING
  url?: any;
  redirectUrl?: string;
  // FORM_REDIRECT
  formData?: any;
  method?: any;
  // PUSH_NOTIFICATION
  accountNumber?: string;
  businessNumber?: string;
  // PAYMENT_INSTRUCTIONS
  paymentMethodName?: string;
}
export interface IDefault extends IVisualData {
  viewId:
    | ViewID.DEFAULT
    | ViewID.PAYMENT_INSTRUCTIONS
    | ViewID.FORM_REDIRECT
    | ViewID.PUSH_NOTIFICATION
    | ViewID.PUSH_NOTIFICATION_PT;
}

//BARCODE
export interface IBarcode extends IVisualData {
  txtBarcode?: string;
  refcode?: string;
}

// QR
export interface IQR extends IVisualData {
  txtQr?: string;
  address?: string;
  deepLink?: string;
  logo?: string;
}

// OTP
export interface IOTP extends IVisualData {
  urlOtp: string;
  otpId: string;
  length: string;
}

// BANKTRANSFER
export interface IBankTransfer extends IVisualData {
  viewId:
    | ViewID.BANK_TRANSFER_BD
    | ViewID.BANK_TRANSFER_AR
    | ViewID.BANK_TRANSFER_CL
    | ViewID.BANK_TRANSFER_CN
    | ViewID.BANK_TRANSFER_PT
    | ViewID.BANK_TRANSFER_PK
    | ViewID.BANK_TRANSFER_AU
    | ViewID.BANK_TRANSFER_CO
    | ViewID.BANK_TRANSFER_MX;
  accountName?: string;
  bankName?: string;
  accountNo?: string;
  bankAddress?: string;
  payId?: string;
  transferSteps?: string[];
  bsb?: string;
  paymentToken?: string;
  expiration?: string;
  referenceNumber?: string;
  referenceProcessor?: string;
  bank?: string;
  banks?: Record<string, string>;
  businessAgreementCode?: string;
  paymentIntentionIdentifier?: string;
  accountType?: string;
  documentNumber?: string;
  cbuCvu?: string;
  accountNumber?: string;
}

// BANKFORMS
export interface IBankForms extends IVisualData {
  viewId:
    | ViewID.BANKS_AVAILABLE_LIST
    | ViewID.BLIK_ALIAS_LIST
    | ViewID.ACCOUNT_BANK_ID
    | ViewID.ACCOUNT_NUMBER
    | ViewID.BANKS_LIST_CN
    | ViewID.BANKS_LIST_CO;
  url: string;
  banks?: Record<string, string>;
  additionalData?: {
    documentTypes: { [key: string]: string };
    document: string;
  };
  aliasList?: {
    key: string;
    label: string;
  }[];
}

//PAYMENTELEMENT
export interface IPaymentElement extends IVisualData {
  viewId: ViewID.VPA | ViewID.CREDIT_CARD | ViewID.PAYOUT_CC_VGS | ViewID.FORM_PAYOUT;
  url: string;
  originUserId: string;
  displayInfo?: string[];
  paymentElementType: PaymentElementType;
  paymentElementForm: { fields: FormFieldPaymentElement[] };
}
