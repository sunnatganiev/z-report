import axios from 'axios';
import {
  openClose,
  reportInfoReq,
  reportInfoRes,
  saleRefundReq,
  saleRefundRes,
} from './types';

export class ZReport {
  url: string;
  token: string;

  constructor(url: string, token: string) {
    this.url = url;
    this.token = token;
  }

  openReport = async (): Promise<openClose> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: 'openZreport',
    });
    return res.data;
  };

  closeReport = async (): Promise<openClose> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: 'closeZreport',
    });
    return res.data;
  };

  sale = async (
    reqBody: saleRefundReq
  ): Promise<saleRefundRes> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: 'sale',
      ...reqBody,
    });
    return res.data;
  };

  refund = async (
    reqBody: saleRefundReq
  ): Promise<saleRefundRes> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: 'refund',
      ...reqBody,
    });
    return res.data;
  };

  reportInfo = async (
    reqBody: reportInfoReq
  ): Promise<reportInfoRes> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: 'getZreportInfo',
      ...reqBody,
    });
    return res.data;
  };

  reportInfoByNum = async (
    reqBody: reportInfoReq
  ): Promise<reportInfoRes> => {
    const res = await axios.post(this.url, {
      token: this.token,
      method: 'getZReportInfoByNumber',
      ...reqBody,
    });
    return res.data;
  };
}
