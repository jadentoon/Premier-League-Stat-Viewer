const fs = require("fs")
const path = require("path")
const csv = require("csv-parser")
const countries = require("i18n-iso-countries")

countries.registerLocale(require("i18n-iso-countries/langs/en.json"))

const uniqueCodes = new Set();

const inputFile = path.join(__dirname, "../../../../players.csv");

fs.createReadStream(inputFile)
    .pipe(csv())
    .on("data", (row) => {
        const nationCode3 = row.Nation?.trim().toUpperCase();
        if (nationCode3) uniqueCodes.add(nationCode3);
    })
    .on("end", () => {
        const nationalities = []

        uniqueCodes.forEach(nationCode3 => {
            const nationCode2 = countries.alpha3ToAlpha2(nationCode3);
            const nationName = countries.getName(nationCode3, "en")
            if (nationCode2 && nationName){
                nationalities.push({nationCode3, nationCode2, nationName})
            } else {
                console.warn(nationCode3+ " does not have an alpha 2 code.")
            }
        });
        console.log(nationalities);
    })