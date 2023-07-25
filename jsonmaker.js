const XLSX = require('xlsx')
const fs = require('fs');

const wb = XLSX.readFile('./ITR Pending.xlsx');
const wsname = wb.SheetNames[0];
const ws = wb.Sheets[wsname];
const arrItems = XLSX.utils.sheet_to_json(ws);
const arr = JSON.stringify(arrItems);
fs.writeFile('ContactInfo.json', arr, (err) => { 
    if(err) { 
        throw err;
    }
    else{
        console.log("Data has been written to file successfully."); 
    }
    }); 
    