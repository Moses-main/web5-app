import { Web5 } from "@web5/api";
// Needs globalThis.crypto polyfill.
// This is the cryptography
// import { webcrypto } from "node:crypto";

// Needs globalThis.crypto polyfill.
import { webcrypto } from "node:crypto";

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

const { web5, did: alideDid } = await Web5.connect();
// console.log(alideDid);

// Writing to the DWN (Creating input by the user for a decentralized server)

const { record } = await web5.dwn.records.create({
  data: "Hello, Web5",
  message: {
    dataFormat: "text/plain",
  },
});

// Reading from the DWN (Reading from the decentralized server or database)
const readResult = await record.data.text();

// Update DWN Records

// console.log("writeResult", record);// command for printing the content of the overall created record

console.log(readResult); // command for print the conetent read from the record created
console.log("");
const updateResult = await record.update({
  data: "Hello, web5! i am updated.",
});
console.log("");
// console.log(updateResult.text()); // command for print the updated conetent read from the record

// After DWN is updated
console.log("updatedResult", await record.data.text());

// Delete DWN record
const deleteResult = await record.delete();
console.log("deleteResult", deleteResult);
