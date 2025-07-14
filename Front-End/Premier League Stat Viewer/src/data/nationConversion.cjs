const fs = require("fs")
const path = require("path")
const csv = require("csv-parser")
const countries = require("i18n-iso-countries")

countries.registerLocale(require("i18n-iso-countries/langs/en.json"))

const manualCodes = {
  ENG: { alpha2: "GB-ENG", name: "England" },
  ALG: { alpha2: "DZ", name: "Algeria" },
  SUI: { alpha2: "CH", name: "Switzerland" },
  NED: { alpha2: "NL", name: "Netherlands" },
  PAR: { alpha2: "PY", name: "Paraguay" },
  DEN: { alpha2: "DK", name: "Denmark" },
  GER: { alpha2: "DE", name: "Germany" },
  URU: { alpha2: "UY", name: "Uruguay" },
  NIR: { alpha2: "GB-NIR", name: "Northern Ireland" },
  CHI: { alpha2: "CL", name: "Chile" },
  WAL: { alpha2: "GB-WLS", name: "Wales" },
  SCO: { alpha2: "GB-SCT", name: "Scotland" },
  POR: { alpha2: "PT", name: "Portugal" },
  BAN: { alpha2: "BD", name: "Bangladesh" },
  ZAM: { alpha2: "ZM", name: "Zambia" },
  CRO: { alpha2: "HR", name: "Croatia" },
  GRE: { alpha2: "GR", name: "Greece" },
  GAM: { alpha2: "GM", name: "Gambia" },
  ZIM: { alpha2: "ZW", name: "Zimbabwe" },
  KVX: { alpha2: "XK", name: "Kosovo" }
};
const uniqueCodes = new Set();
const uniquePosCodes = new Set();

const inputPath = path.join(__dirname, "../../../../players.csv");
const outputPath = path.join(__dirname, "nations.json");

fs.createReadStream(inputPath)
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
                const nationCode2 = manualCodes[nationCode3].alpha2;
                const nationName = manualCodes[nationCode3].name;
                nationalities.push({nationCode3, nationCode2, nationName});
            }
        });
        fs.writeFileSync(outputPath, JSON.stringify(nationalities, null, 2), "utf-8");
        console.log("Successfully saved to nations.json!")
    })