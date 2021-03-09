/*
    scraper.01.js

    Em Carter
    24/02/2021

    Takes the 2019-20 input file and grabs the party data
*/

const inputFile = '../Data/AEC_PartyDisclosure_1920_20210224.csv';
const htmlDumpDirectory = "../Data/AEC_HTML_Data/returns/";
const jsonOutput = "../Data/ScraperPartyData.01.json";

const csv = require('csv-parser');
const fileSystem = require('fs');
const request = require('request');
const got = require("got");
var aec_csv_data = [];

const returnIDRegExp = /returnId=(\d*)/;
const clientIdRegExp = /clientFileId=(\d*)/;

//-------------------------------------------------------------------
//  CLEAN: clear out the files currently in the HTML directory
//-------------------------------------------------------------------
fileSystem.readdirSync(htmlDumpDirectory).forEach(file => {
    fileSystem.unlinkSync(htmlDumpDirectory+file);
});

//-------------------------------------------------------------------
//  PARSE CSV: parse the CSV input file
//-------------------------------------------------------------------

fileSystem.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (data_out) => {

        let data = {
            EntityName: data_out.EntityName,
            EntityCategory: data_out.EntityCategory,
            EntityReturnURL: data_out.EntityReturnURL
        };

        data.http_error = '';
        data.http_status_code = '';
        data.returnId = '';
        data.entity_id = '';
        data.fy = '2019-20';

        if (data.EntityReturnURL != '') {
            let match = data.EntityReturnURL.match(returnIDRegExp);
            data.returnId = match[1];

            request(data.EntityReturnURL, function(error, response, body) {
                let entityId = "";
                if (body != '') {
                    let entityIdMatch = body.match(clientIdRegExp);
                    if (entityIdMatch != null) {
                        entityId = entityIdMatch[1];
                        console.log("entity_id: "+entityId);
                    }
                }
                data.entity_id=entityId;

                data.http_error = error;
                data.http_status_code = response && response.statusCode;

                fileSystem.writeFile(htmlDumpDirectory+data.returnId+".html",body,(err) => {
                    if (err) throw err;
                    //I don't think we have to do anything else yet?
                });
                fileSystem.writeFileSync(jsonOutput,JSON.stringify(aec_csv_data));
            });

        } else {
            data.http_status_code = '000';  //no data
            data.http_error = 'No URL';
            data.entity_id = "";
        }

        aec_csv_data.push(data);
        
    })
    .on('end', () => {
        // fileSystem.writeFileSync(jsonOutput,JSON.stringify(aec_csv_data));
    });
