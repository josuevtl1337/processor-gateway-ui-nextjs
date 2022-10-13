import { PaymentDetails, PaymentElementType, PaymentStatus, ViewID } from 'shared/types/payment';
import { IBankForms, IBarcode, IDefault, IPaymentElement, IQR } from 'shared/types/visual-data';

const BANK_TRANSFER_PT: PaymentDetails = {
  payment: {
    amount: 50.0,
    currency: 'EUR',
    creationDate: '2022-05-12 19:24:39',
    expirationDate: '2022-05-12 23:24:39',
    viewId: ViewID.BANK_TRANSFER_PT,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'XB',
  },
  backUrl: 'https://getapp.astropaycard.com/pages/payment_success.html',
  visualData: {
    viewId: ViewID.BANK_TRANSFER_PT,
  },
};
const BANK_TRANSFER_BD: PaymentDetails = {
  payment: {
    amount: 343.44,
    currency: 'BDT',
    creationDate: '2021-12-22 14:51:35',
    expirationDate: '2021-12-22 16:51:35',
    viewId: ViewID.BANK_TRANSFER_BD,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'TM',
  },
  backUrl: 'http://apc.local/panel',
  visualData: {
    viewId: ViewID.BANK_TRANSFER_BD,
    accountName: 'Mijima Technology Limited',
    bankName: 'Pubali bank ltd',
    accountNo: '4709901002577',
    bankAddress: 'Gulshan circle 1 branch',
  },
};
const BANK_TRANSFER_CL: PaymentDetails = {
  payment: {
    amount: 10000.0,
    currency: 'CLP',
    creationDate: '2022-05-10 22:38:12',
    expirationDate: '2022-05-12 22:38:12',
    viewId: ViewID.BANK_TRANSFER_CL,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'TY',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  successUrl: 'https://getapp.astropaycard.com/pages/payment_success.html',
  errorUrl: 'https://getapp.astropaycard.com/pages/payment_error.html',
  visualData: {
    viewId: ViewID.BANK_TRANSFER_CL,
    accountName: 'IBBA CHILE S.A',
    accountType: 'CUENTA VISTA/ CHEQUERA ELECTRONICA',
    bankName: 'BANCO ESTADO',
    documentNumber: '77.070.361-1',
    accountNumber: '316-7-029247-1',
  },
};
const BANK_TRANSFER_AR: PaymentDetails = {
  payment: {
    amount: 2000.0,
    currency: 'ARS',
    creationDate: '2022-05-10 19:55:15',
    expirationDate: '2022-05-12 19:55:15',
    viewId: ViewID.BANK_TRANSFER_AR,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'TY',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  successUrl: 'https://getapp.astropaycard.com/pages/payment_success.html',
  errorUrl: 'https://getapp.astropaycard.com/pages/payment_error.html',
  visualData: {
    viewId: ViewID.BANK_TRANSFER_AR,
    accountName: 'Grupo Ati Seguridad S.R.L',
    accountType: 'Cuenta Corriente',
    bankName: 'Banco Coinag',
    documentNumber: '30-71636261-9',
    cbuCvu: '4310009922100000031661',
  },
};
const BANK_TRANSFER_CN: PaymentDetails = {
  payment: {
    amount: 2000.0,
    currency: 'YUAN',
    creationDate: '2022-01-05 17:56:29',
    expirationDate: '2022-01-05 19:56:29',
    viewId: ViewID.BANK_TRANSFER_CN,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'PL',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.BANK_TRANSFER_CN,
    url: 'URL A LA CUAL PEGARNOS PARA COMPLETAR EL PAGO',
    banks: {
      '102': '中国农业银行',
      '103': '中国工商银行',
      '104': '中国银行',
      '105': '中国建设银行',
      '201': '国家开发银行',
      '202': '中国进出口银行',
      '203': '中国农业发展银行',
      '301': '交通银行',
      '302': '中信银行',
      '303': '中国光大银行',
      '304': '华夏银行',
      '305': '中国民生银行',
      '306': '广东发展银行',
      '307': '深圳发展银行',
      '308': '招商银行',
      '309': '兴业银行',
      '310': '上海浦东发展银行',
      '313': '城市商业银行',
      '314': '农村商业银行',
      '315': '恒丰银行',
      '316': '浙商银行',
      '317': '农村合作银行',
      '318': '渤海银行',
      '319': '徽商银行',
      '320': '村镇银行',
      '322': '上海农村商业银行',
      '350': '南京银行',
      '351': '上海银行',
      '352': '北京银行',
      '353': '宁波银行',
      '354': '杭州银行',
      '355': '北京农商银行',
      '356': '富滇银行',
      '357': '温州银行',
      '358': '成都银行',
      '359': '常熟农商银行',
      '401': '城市信用社',
      '402': '农村信用社',
      '403': '中国邮储储蓄银行',
      '404': '吉林银行',
      '501': '香港上海汇丰银行',
      '504': '恒生银行',
      '785': '华商银行',
      '969': '( 澳门地区 ) 中国工商银 行',
      '989': '( 香港地区 ) 中国工商银 行',
      '783': '平安银行',
    },
  },
};
const BANK_TRANSFER_PK: PaymentDetails = {
  payment: {
    amount: 2500.0,
    currency: 'PKR',
    creationDate: '2021-12-22 11:43:42',
    expirationDate: '2021-12-22 13:43:42',
    viewId: ViewID.BANK_TRANSFER_PK,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'PH',
  },
  backUrl: 'http://apc.local/panel',
  visualData: {
    viewId: ViewID.BANK_TRANSFER_PK,
    paymentToken: 'TOKEN QUE DEBERÁ VISUALIZAR EL USUARIO',
    expiration: '10/07/2022',
  },
};
const PIX: PaymentDetails = {
  payment: {
    amount: 70.27,
    currency: 'BRL',
    creationDate: '2022-05-04 18:36:10',
    expirationDate: '2022-05-04 20:36:10',
    viewId: ViewID.PIX,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'IX',
  },
  backUrl: 'https://web-app-tst.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.PIX,
    txtQr:
      '00020101021226870014br.gov.bcb.pix2565qrcodepix-h.bb.com.br/pix/v2/5be3a3b3-1085-4a6f-8ff5-774196f7a0265204000053039865802BR5920ALAN GUIACHERO BUENO6008BRASILIA62070503***6304AE8F',
    logo: 'https://www.egiftsbazaar.com/assets/EGB-Main.svg',
  } as IQR,
};
const CRYPTO: PaymentDetails = {
  payment: {
    amount: 26.57408,
    currency: 'UST',
    creationDate: '2022-08-19 13:37:01',
    expirationDate: '2022-08-20 13:37:01',
    viewId: ViewID.CRYPTO,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'UE',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.CRYPTO,
    address: '0xae4b85a1e734f2329e351f2376fd9d466e0f7301',
  } as IQR,
};
const QR_ARG: PaymentDetails = {
  payment: {
    amount: 2000.0,
    currency: 'ARS',
    creationDate: '2022-08-17 21:27:53',
    expirationDate: '2022-08-18 21:27:53',
    viewId: ViewID.QR_ARG,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'M0',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  successUrl: 'https://getapp.astropaycard.com/pages/payment_success.html',
  errorUrl: 'https://getapp.astropaycard.com/pages/payment_error.html',
  visualData: {
    viewId: ViewID.QR_ARG,
    txtQr:
      '00020101021226590024ar.com.modo.decidir-plus01274jquwjIgzNPywFk0ibydNXWiXi6520465405303032540420005802AR5909Astro Pay6004CABA62940308920030080522f7AePhezAwi3HzjXjHC7ZQ0708920030080818BOTON_DE_PAGO_MODO101130717266478110352280380024ar.com.modo.decidir-plus0106online81380024ar.com.modo.decidir-plus010100201063042E2C',
    logo: 'https://payment.astropay.com/static/media/astropay-logo.e20981bb.svg',
    deepLink:
      'https://www.modo.com.ar/pagar/?qr=00020101021226590024ar.com.modo.decidir-plus01274jquwjIgzNPywFk0ibydNXWiXi6520465405303032540420005802AR5909Astro Pay6004CABA62940308920030080522f7AePhezAwi3HzjXjHC7ZQ0708920030080818BOTON_DE_PAGO_MODO101130717266478110352280380024ar.com.modo.decidir-plus0106online81380024ar.com.modo.decidir-plus010100201063042E2C%26callback%3Dhttps%3A%2F%2Fapp.astropay.com%2Fpurchase%2Fhistory%26callbackSuccess%3Dhttps%3A%2F%2Fapp.astropay.com%2Fpurchase%2Fhistory',
  } as IQR,
};
const PUSH_NOTIFICATION_PT: PaymentDetails = {
  payment: {
    amount: 15.0,
    currency: 'EUR',
    creationDate: '2021-12-22 11:43:42',
    expirationDate: '2021-12-22 13:43:42',
    viewId: ViewID.PUSH_NOTIFICATION_PT,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'MU',
  },
  backUrl: 'http://apc.local/panel',
  visualData: {
    viewId: ViewID.PUSH_NOTIFICATION_PT,
  } as IDefault,
};
const BANK_TRANSFER_MX: PaymentDetails = {
  payment: {
    amount: 250.0,
    currency: 'MXN',
    creationDate: '2022-03-28 23:38:34',
    expirationDate: '2022-04-04 23:38:34',
    viewId: ViewID.BANK_TRANSFER_MX,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'X1',
  },
  backUrl: 'http://apc.local/panel',
  visualData: {
    viewId: ViewID.BANK_TRANSFER_MX,
    referenceNumber: '0000001',
    referenceProcessor: '641648521375752084',
    bank: 'STP Processor',
  },
};
const ACCOUNT_NUMBER: PaymentDetails = {
  payment: {
    amount: 30001.0,
    currency: 'PKR',
    creationDate: '2022-01-07 15:50:36',
    expirationDate: '2022-01-07 19:50:36',
    viewId: ViewID.ACCOUNT_NUMBER,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'WA',
  },
  backUrl: 'http://apc.local/panel',
  visualData: {
    viewId: ViewID.ACCOUNT_NUMBER,
    url: 'https://payment-api-tst.astropay.com/v1/payin/{{payin_external_id}}//additionalData',
  },
};
const ACCOUNT_BANK_ID: PaymentDetails = {
  payment: {
    amount: 2000.0,
    currency: 'PKR',
    creationDate: '2022-01-05 17:56:29',
    expirationDate: '2022-01-05 19:56:29',
    viewId: ViewID.ACCOUNT_BANK_ID,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'PL',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.ACCOUNT_BANK_ID,
    url: 'URL A LA CUAL PEGARNOS PARA COMPLETAR EL PAGO',
    banks: {
      '01': 'ABL Bank',
      '02': 'Askari Bank',
      '03': 'Bank Alfalah',
      '04': 'Bank of Khyber',
      '05': 'Bank of Punjab',
      '06': 'Bank Islami Pakistan',
      '07': 'Faysal Bank',
      '08': 'Habib Metro Bank',
      '09': 'MCB Islamic Bank',
      '10': 'Samba Bank Limited',
    },
  },
};
const PAYMENT_INSTRUCTIONS: PaymentDetails = {
  payment: {
    amount: 2000.0,
    currency: 'NGN',
    creationDate: '2022-05-13 15:39:30',
    expirationDate: '2022-05-13 19:39:30',
    viewId: ViewID.PAYMENT_INSTRUCTIONS,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'TR',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.PAYMENT_INSTRUCTIONS,
    paymentMethodName: 'CELLULANT',
    message:
      '<ol><li>To pay via <b>Bank Transfer</b> login to mobile or internet banking</li><li>Select Transfer to other banks or Mobile Money in the Payment & Collection category</li><li>Select <b>Wema Bank Plc</b> as the financial institute to transfer to</li><li>Enter account number <b>7518044577</b> <b><span style="color:red">(This account number is valid only for one payment!)</span></b></li><li>Enter amount NGN <b>2,000.00</b></li></ol><p><strong>Kindly make the payment before the count down time above expires for us to be able to successfully issue you your service.</strong></p>',
  } as IDefault,
};
const FORM_REDIRECT: PaymentDetails = {
  payment: {
    amount: 1000.0,
    currency: 'INR',
    creationDate: '2022-07-05 15:27:01',
    expirationDate: '2022-07-06 15:27:01',
    viewId: ViewID.FORM_REDIRECT,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'PH',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.FORM_REDIRECT,
    method: 'POST',
    url: 'https://payments.airpay.co.in/pay/directindexapi.php',
    formData: {
      apyVer: 'null',
      buyerEmail: 'ivan+ja3@astropay.com',
      buyerPhone: '12345678910',
      buyerFirstName: 'Raj Chengue',
      buyerLastName: 'Koothrappali',
      buyerAddress: 'null',
      buyerCity: 'null',
      buyerState: 'null',
      buyerCountry: 'IN',
      buyerPinCode: 'null',
      orderid: '308630205',
      amount: '1000.00',
      UID: '151161',
      mercid: '257805',
      privatekey: 'cd45dd1a81982d56a67b4ab047f0a4a055cfacb3490eb8523c883e3c9ac57cc7',
      checksum: '925c3760ec557b26504e1cc9f28d9385f5d5758d7847e648ebc13bc3edaae8ac',
      currency: '356',
      isocurrency: 'INR',
      transaction_id: '308630205',
      channel_mode: 'ppc',
      chmod: 'ppc',
      channel: 'ppc',
      prepaid_radio: 'PHONEPE',
    },
  } as IDefault,
};

const BARCODE: PaymentDetails = {
  payment: {
    viewId: ViewID.BARCODE,
    amount: 10,
    currency: 'R',
    expirationDate: '10/10/2020',
    creationDate: '',
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'BL',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.BARCODE,
    refcode: 'CHAR_5541DE66-A3D1-49FB-AFE4-F0F900A365AA',
    txtBarcode: '03399853012970000134992797001010788950000007077',
  } as IBarcode,
};

const PUSH_NOTIFICATION: PaymentDetails = {
  payment: {
    amount: 1000,
    currency: 'KES',
    creationDate: '2022-07-08 15:24:50',
    expirationDate: '2022-07-09 15:24:50',
    viewId: ViewID.PUSH_NOTIFICATION,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'MP',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.PUSH_NOTIFICATION,
    accountNumber: 'JF2188182407M',
    businessNumber: '493373',
    paymentMethodName: 'MPESA',
  },
};

const BANKS_AVAILABLE_LIST: PaymentDetails = {
  payment: {
    amount: 10.0,
    currency: 'GBP',
    creationDate: '2022-01-05 17:56:29',
    expirationDate: '2022-01-05 19:56:29',
    viewId: ViewID.BANKS_AVAILABLE_LIST,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'EC',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.BANKS_AVAILABLE_LIST,
    url: 'https://payment-api-tst.astropay.com/v1/paymentElement/worldpay/ideal',
    banks: {
      ABN_AMRO: 'ABN AMRO',
      ASN: 'ASN Bank',
      BUNQ: 'Bunq',
      HANDELSBANKEN: 'Handelsbanken',
      ING: 'ING',
      KNAB: 'Knab',
      RABOBANK: 'Rabobank',
      SNS_REGIO: 'RegioBank',
      REVOLUT: 'Revolut',
      SNS: 'SNS',
      TRIODOS: 'Triodos Bank',
      VAN_LANSCHOT: 'Van Lanschot',
    },
  },
};
const BLIK_ALIAS_LIST: PaymentDetails = {
  payment: {
    amount: 2000.0,
    currency: 'PESOS',
    creationDate: '2022-01-05 17:56:29',
    expirationDate: '2022-01-05 19:56:29',
    viewId: ViewID.BLIK_ALIAS_LIST,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'PL',
  },
  backUrl: 'https://app.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.BLIK_ALIAS_LIST,
    url: 'URL A LA CUAL PEGARNOS PARA COMPLETAR EL PAGO',
    aliasList: [
      {
        key: 'unique-blik-id-1',
        label: 'Alias ​​label 1',
      },
      {
        key: 'unique-blik-id-2',
        label: 'Alias ​​label 2',
      },
    ],
  } as IBankForms,
};

const BANKS_LIST_CO: PaymentDetails = {
  payment: {
    amount: 50000.0,
    currency: 'COP',
    creationDate: '2022-05-26 12:57:13',
    expirationDate: '2022-06-02 12:57:13',
    viewId: ViewID.BANKS_LIST_CO,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'TY',
  },
  backUrl: 'https://web-app-tst.astropay.com/purchase/history',
  visualData: {
    viewId: ViewID.BANKS_LIST_CO,
    url: 'http://localhost:8240/v1/payin/20fe4c120244468e82a903eda8a82cb6/additionalData',
    banks: {
      '0001': 'Kushki bank Colombia',
      '0002': 'Kushki bank Ecuador',
      '0003': 'Kushki bank Chile',
      '0004': 'Kushki bank Peru',
      '0005': 'Kushki bank México',
      '0006': 'Kushki bank Brasil',
      '0007': 'Kushki bank USA',
    },
    additionalData: {
      documentTypes: {
        CC: 'Cedula de Ciudadanía',
        CE: 'Cedula de Extranjería',
        NIT: 'Numero de Indentificación Tributario',
        TI: 'Tarjeta de Identidad',
        PP: 'Pasaporte',
      },
      document: '123456789',
    },
  },
};

const CREDIT_CARD: PaymentDetails = {
  payment: {
    amount: 3099.04,
    currency: 'ARS',
    creationDate: '2022-07-20 15:46:50',
    expirationDate: '2022-07-20 17:46:50',
    viewId: ViewID.CREDIT_CARD,
    status: PaymentStatus.PENDING,
    paymentMethodCode: 'EC',
  },
  backUrl:
    'https://deposit-tst.astropay.com/deposit/waiting/50y6jCRdad44XOqFTwBDblYHnfaPDBWhBnSB9Axi',
  successUrl: 'https://getapp-test.astropaycard.com/pages/payment_success.html',
  errorUrl: 'https://getapp-test.astropaycard.com/pages/payment_error.html',
  visualData: {
    viewId: ViewID.CREDIT_CARD,
    originUserId: '2136',
    url: 'https://payment-api-tst.astropay.com/v1/payin/fef4a98ac4054777ada1c007ce60e533/paymentElement',
  } as IPaymentElement,
};

const VGS_CC: PaymentDetails = {
  payment: {
    amount: 10.0,
    currency: 'EUR',
    creationDate: '2022-07-12 14:33:25',
    viewId: ViewID.PAYOUT_CC_VGS,
    status: PaymentStatus.TO_BE_CREATED,
    paymentMethodCode: 'EC',
    expirationDate: '',
  },
  backUrl: 'https://app.astropay.com',
  visualData: {
    viewId: ViewID.PAYOUT_CC_VGS,
    originUserId: '848568',
    paymentElementType: PaymentElementType.CC,
    url: 'https://payment-notifications.astropay.com/v1/payout/d680aa4b126547878c78383153e868c4/payment_element',
  } as IPaymentElement,
};

export const DTOs = {
  BANK_TRANSFER_PT,
  PAYMENT_INSTRUCTIONS,
  BANK_TRANSFER_BD,
  ACCOUNT_BANK_ID,
  ACCOUNT_NUMBER,
  BANK_TRANSFER_MX,
  PUSH_NOTIFICATION_PT,
  BANK_TRANSFER_PK,
  PIX,
  CRYPTO,
  QR_ARG,
  BANK_TRANSFER_CN,
  BANK_TRANSFER_AR,
  BANK_TRANSFER_CL,
  FORM_REDIRECT,
  BARCODE,
  BANKS_LIST_CO,
  PUSH_NOTIFICATION,
  BANKS_AVAILABLE_LIST,
  BLIK_ALIAS_LIST,
  VGS_CC,
  CREDIT_CARD,
};

const api = {
  // list: async (): Promise<PaymentDetails[]> => DTOs,
  fetch: async (id: string): Promise<PaymentDetails> => {
    const mockDTO: PaymentDetails = Object.entries(DTOs)
      .filter(([key]) => {
        return key === id;
      })
      .reduce((_prev, [, value]) => {
        return value;
      }, {} as PaymentDetails);

    // const dto = DTOs.find((dto) => dto.id === id);

    if (!mockDTO) {
      throw new Error('DTO not found');
    }

    return mockDTO;
  },
};

export default api;
