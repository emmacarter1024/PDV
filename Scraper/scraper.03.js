/*
    scraper.03.js

    Em Carter
    24/02/2021

    Takes the data and pulls two lists - a list of donors, and a list of parties.
    Also applies the categorisation and aggregation rules
*/

const inputFile = '../Data/ScraperReceiptParty.02.json';
const outputFile = '../Data/ScraperReceiptParty.03.json';

const donorListFile = '../Data/donor_list.txt';
const partyListFile = '../Data/party_list.txt';

const branchMappingFile = "../Mappings/branch_mappings.json";
const donorTypeMappingFile = "../Mappings/donor_type_mapping.json";

const fileSystem = require('fs');
const { findSourceMap } = require('module');

var jsonString = fileSystem.readFileSync(inputFile, "utf8");
var jsonBranchMappingString = fileSystem.readFileSync(branchMappingFile, "utf8");
var jsonDonorTypeMappingString = fileSystem.readFileSync(donorTypeMappingFile, "utf8");

var receiptData = JSON.parse(jsonString);
var branchMappingData = JSON.parse(jsonBranchMappingString);
var donorTypeMappingData = JSON.parse(jsonDonorTypeMappingString);

var donorList = [];
var partyList = [];

var unmatched_donors = 0;

for (var i = 0; i < receiptData.length; i++) {

    let donor = receiptData[i].receipt_from;
    let party = receiptData[i].receipt_name;

    //check the branch mapping
    let root_party = party;
    for (var j = 0; j < branchMappingData.length; j++) {
        if (branchMappingData[j].party_name == party ) {
            root_party = branchMappingData[j].root_party;
        }
    }

    receiptData[i].root_party = root_party;

    //check the donor type mapping
    let donor_type = "";
    for (var j = 0; ( j < donorTypeMappingData.length ) && ( donor_type == "" ); j++) {
        let donor_pattern = donorTypeMappingData[j].pattern;
        let donor_match_type = donorTypeMappingData[j].match_type;
        let donor_result = donorTypeMappingData[j].result;

        if (donor_match_type == "exact" && donor_pattern.toUpperCase() == donor.toUpperCase()) {
            donor_type = donor_result;
        } else if (donor_match_type == "contains" && donor.toUpperCase().includes(donor_pattern.toUpperCase())) {
            donor_type = donor_result;
        }
    }

    if (donor_type == "") {
        unmatched_donors++;
    }

    if (!donorList.includes(donor+"~"+donor_type)) {
        donorList.push(donor+"~"+donor_type);
    }

    if (!partyList.includes(party+"~"+root_party)) {
        partyList.push(party+"~"+root_party);
    }
}

var donorListFS = fileSystem.createWriteStream(donorListFile);
donorListFS.on('error', function(err) { console.log('error writing file: '+err);});
donorListFS.write("Dummy~Donor~Donor Type~Donor Category\n");
var idx = 0;
for ( idx in donorList ) {
    donorListFS.write("~"+donorList[idx]+"~\n");
}
donorListFS.end();

var partyListFS = fileSystem.createWriteStream(partyListFile);
partyListFS.on('error', function(err) { console.log('error writing file: '+err);});
partyListFS.write("Dummy~Party~Parent Party\n");
idx = 0;
for ( idx in partyList) {
    partyListFS.write("~"+partyList[idx]+"\n");
}
partyListFS.end();

fileSystem.writeFileSync(outputFile,JSON.stringify(receiptData));

console.log("Unmatched donors: "+unmatched_donors);