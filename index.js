const axios = require("axios");

class ZReport {
    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    openReport() {
        return axios
            .post(this.url, {
                token: this.token,
                method: "openZreport",
            })
            .then((res) => res.data);
    }

    closeReport() {
        return axios
            .post(this.url, {
                token: this.token,
                method: "closeZreport",
            })
            .then((res) => res.data);
    }

    sale() {
        return axios
            .post(this.url, {
                token: this.token,
                method: "sale",
                companyName: "Humo MCHJ",
                companyAddress: "Tashkent",
                companyINN: "123456",
                staffName: "Abdulazizov Shakhboz",
                printerSize: 80,
                params: {
                    discountCard: {
                        available: 12345,
                        addition: 12345,
                        subtraction: 12345,
                        remainder: 12345,
                    },
                    paycheckNumber: "7654321",
                    items: [
                        {
                            discount: 250000,
                            price: 519199,
                            barcode: "98743154313",
                            amount: 2000,
                            vatPercent: 15,
                            vat: 103839,
                            name: "AAAAAAAAAAAAAA",
                            label: "qwertyuuuuuuiopasdfghjklzxcvbnm",
                            classCode: "08510003002000000",
                            other: 9199,
                        },
                        {
                            discount: 250000,
                            price: 519199,
                            barcode: "23412334321",
                            amount: 2000,
                            vatPercent: 15,
                            vat: 103839,
                            name: "BBBBBBBBBB",
                            classCode: "08510003002000000",
                            other: 9199,
                        },
                    ],
                    receivedCash: 260000,
                    receivedCard: 260000,
                    extraInfos: {
                        extra1: "Bla",
                        extra2: "BlaBla",
                        extra3: "BlaBlaBla",
                    },
                },
            })
            .then((res) => res.data);
    }

    refund() {
        return axios
            .post(this.url, {
                token: this.token,
                method: "refund",
                companyName: "Humo MCHJ",
                companyAddress: "Tashkent",
                companyINN: "123456",
                staffName: "Abdulazizov Shakhboz",
                printerSize: 80,
                params: {
                    discountCard: {
                        available: 12345,
                        addition: 12345,
                        subtraction: 12345,
                        remainder: 12345,
                    },
                    paycheckNumber: "7654321",
                    items: [
                        {
                            discount: 250000,
                            price: 519199,
                            barcode: "98743154313",
                            amount: 2000,
                            vatPercent: 15,
                            vat: 103839,
                            name: "AAAAAAAAAAAAAA",
                            label: "qwertyuuuuuuiopasdfghjklzxcvbnm",
                            classCode: "08510003002000000",
                            other: 9199,
                        },
                        {
                            discount: 250000,
                            price: 519199,
                            barcode: "23412334321",
                            amount: 2000,
                            vatPercent: 15,
                            vat: 103839,
                            name: "BBBBBBBBBB",
                            classCode: "08510003002000000",
                            other: 9199,
                        },
                    ],
                    receivedCash: 260000,
                    receivedCard: 260000,
                    extraInfos: {
                        extra1: "Bla",
                        extra2: "BlaBla",
                        extra3: "BlaBlaBla",
                    },
                },
            })
            .then((res) => res.data);
    }

    reportByNum() {
        return axios
            .post(this.url, {
                token: this.token,
                method: "getZReportInfoByNumber",
                printerSize: 80,
                zReportId: 1,
            })
            .then((res) => res.data);
    }

    reportInfo() {
        return axios
            .post(this.url, {
                token: this.token,
                method: "getZreportInfo",
                printerSize: 80,
                zReportId: 0,
            })
            .then((res) => res.data);
    }
}

module.exports = ZReport;
