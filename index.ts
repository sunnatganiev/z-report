import axios from "axios";

export class ZReport {
  url: string;
  token: string;

  constructor(url: string, token: string) {
    this.url = url;
    this.token = token;
  }

  openReport = async (): Promise<{
    error: boolean;
    message: string;
  }> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: "openZreport",
    });
    return res.data;
  };

  closeReport = async (): Promise<{
    error: boolean;
    message: string;
  }> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: "closeZreport",
    });
    return res.data;
  };

  sale = async (reqBody: {
    companyName: string;
    companyAddress: string;
    companyINN: string;
    staffName: string;
    printerSize: number;
    params: {
      discountCard: {
        available: number;
        addition: number;
        subtraction: number;
        remainder: number;
      };
      paycheckNumber: string;
      items: {
        discount: number;
        price: number;
        barcode: string;
        amount: number;
        vatPercent: number;
        vat: number;
        name: string;
        label: string;
        classCode: string;
        other: number;
      }[];
      receivedCash: number;
      receivedCard: number;
      extraInfos: {
        extra1: string;
        extra2: string;
        extra3: string;
      };
    };
  }): Promise<{
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
  }> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: "sale",
      ...reqBody,
    });
    return res.data;
  };

  refund = async (reqBody: {
    companyName: string;
    companyAddress: string;
    companyINN: string;
    staffName: string;
    printerSize: number;
    params: {
      discountCard: {
        available: number;
        addition: number;
        subtraction: number;
        remainder: number;
      };
      paycheckNumber: string;
      items: {
        discount: number;
        price: number;
        barcode: string;
        amount: number;
        vatPercent: number;
        vat: number;
        name: string;
        label: string;
        classCode: string;
        other: number;
      }[];
      receivedCash: number;
      receivedCard: number;
      extraInfos: {
        extra1: string;
        extra2: string;
        extra3: string;
      };
    };
  }): Promise<{
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
  }> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: "refund",
      ...reqBody,
    });
    return res.data;
  };

  reportInfo = async (reqBody: {
    printerSize: number;
    zReportId: number;
  }): Promise<{
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
  }> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: "getZreportInfo",
      ...reqBody,
    });
    return res.data;
  };

  reportInfoByNum = async (reqBody: {
    printerSize: number;
    zReportId: number;
  }): Promise<{
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
  }> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: "getZReportInfoByNumber",
      ...reqBody,
    });
    return res.data;
  };
}
