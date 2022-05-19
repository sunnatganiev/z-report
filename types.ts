export type openClose = {
  error: boolean;
  message: string;
};

export type saleRefundReq = {
  companyName: string;
  companyAddress: string;
  companyINN: string;
  staffName: string;
  printerSize?: number;
  params: {
    discountCard?: {
      available?: number;
      addition?: number;
      subtraction?: number;
      remainder?: number;
    };
    paycheckNumber?: string;
    items: {
      discount: number;
      price: number;
      barcode: string;
      amount: number;
      vatPercent: number;
      vat: number;
      name: string;
      label?: string;
      commissionTIN?: string;
      classCode: string;
      other: number;
    }[];
    receivedCash: number;
    receivedCard: number;
    extraInfos?: {
      extra1: string;
      extra2: string;
      extra3: string;
    };
  };
};

export type saleRefundRes = {
  error: boolean;
  paycheck: string;
  info: {
    terminalId: string;
    receiptSeq: string;
    fiscalSign: string;
    qrCodeURL: string;
    dateTime: string;
  };
  qrPath: string;
  virtualNumber: string;
};

export type reportInfoReq = {
  printerSize?: number;
  zReportId: number;
};

export type reportInfoRes = {
  error: boolean;
  message: {
    paycheck: string;
    number: number;
    count: number;
    totalRefundCount: number;
    firstReceiptSeq: string;
    lastReceiptSeq: string;
    totalSaleCount: number;
    totalRefundCash: number;
    totalRefundCard: number;
    totalRefundVAT: number;
    openTime: string;
    terminalID: string;
    totalSaleCard: number;
    closeTime: string;
    appletVersion: string;
    totalSaleCash: number;
    totalSaleVAT: number;
  };
};
