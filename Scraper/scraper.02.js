/*
    scraper.02.js

    Em Carter
    24/02/2021

    Takes the data and pulls out the 2019-20 returns
*/

const inputFile = '../Data/AEC_AllAnnualData_21200304/Detailed Receipts.csv';
const jsonOutput = "../Data/ScraperReceiptParty.02.json";

const csv = require('csv-parser');
const fileSystem = require('fs');
var receipt_csv_data = [];
var idx = 0;

fileSystem.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (data_out) => {
        
        let data = {
            receipt_id: idx,
            receipt_fy: data_out.FinancialYear,
            receipt_return_type: data_out.ReturnType,
            receipt_value: data_out.Value,
            receipt_name: data_out.RecipientName,
            receipt_from: data_out.ReceivedFrom,
            receipt_addr1: data_out.AddressLine1,
            receipt_addr2: data_out.AddressLine2,
            receipt_suburb: data_out.Suburb,
            receipt_state: data_out.State,
            receipt_postcode: data_out.Postcode,
            receipt_type: data_out.ReceiptType,
            receipt_donor_type: '',
            receipt_donor_category: ''
        }

        idx++;

        receipt_csv_data.push(data);
    })
    .on('end', () => {
        fileSystem.writeFileSync(jsonOutput,JSON.stringify(receipt_csv_data));
    });