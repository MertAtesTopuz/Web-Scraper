const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");

axios.get("https://www.kgm.gov.tr/Sayfalar/KGM/SiteTr/YolDanisma/TrafigeKapaliYollar.aspx").then(urlResponse => {
    const $ = cheerio.load(urlResponse.data);
    let d1 = [];
    let d2 = [];
    let d3 = [];
    let d4 = [];
    let d5 = [];
    let d6 = [];
    let d7 = [];
    let d8 = [];
    let d9 = [];
    let d10 = [];
    let d11 = [];
    let d12 = [];

    $('.trDatas td:nth-child(1)').each((index, element) => {
        const trd1 = $(element).text();
        d1[index] = trd1;
    });

    $('.trDatas td:nth-child(2)').each((index, element) => {
        const trd2 = $(element).text();
        d2[index] = trd2;
    });

    $('.trDatas td:nth-child(3)').each((index, element) => {
        const trd3 = $(element).text();
        d3[index] = trd3;
    });

    $('.trDatas td:nth-child(4)').each((index, element) => {
        const trd4 = $(element).text();
        d4[index] = trd4;
    });

    $('.trDatas td:nth-child(5)').each((index, element) => {
        const trd5 = $(element).text();
        d5[index] = trd5;
    });

    $('.trDatas td:nth-child(6)').each((index, element) => {
        const trd6 = $(element).text();
        d6[index] = trd6;
    });

    $('.trDatas td:nth-child(7)').each((index, element) => {
        const trd7 = $(element).text();
        d7[index] = trd7;
    });

    $('.trDatas td:nth-child(8)').each((index, element) => {
        const trd8 = $(element).text();
        d8[index] = trd8;
    });

    $('.trDatas td:nth-child(9)').each((index, element) => {
        const trd9 = $(element).text();
        d9[index] = trd9;
    });

    $('.trDatas td:nth-child(10)').each((index, element) => {
        const trd10 = $(element).text();
        d10[index] = trd10;
    });

    $('.trDatas td:nth-child(11)').each((index, element) => {
        const trd11 = $(element).text();
        d11[index] = trd11;
    });

    $('.trDatas td:nth-child(12)').each((index, element) => {
        const trd12 = $(element).text();
        d12[index] = trd12;
    });

    let dataP = []

    for (let i = 0; i < d1.length; i++) {
        dataP.push({
            id: d1[i],
            area_no: d2[i],
            branch_no: d3[i],
            kk_no: d4[i],
            kpd: d5[i],
            road_name: d6[i],
            reason: d7[i],
            start_p: d8[i],
            end_p: d9[i],
            c_date: d10[i],
            c_time: d11[i],
            update: d12[i]
        });
    }

    fs.writeFileSync("karayolu.json", JSON.stringify(dataP))

}); 
