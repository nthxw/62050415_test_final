// // ✅ (Optionally) Create Date using Universal time (= GMT)
// //    instead of local time
// const d1 = new Date(Date.UTC(2022, 0, 14, 14, 30, 0));
// console.log(d1);

// // ✅ Get a String representing the given Date
// //    using UTC (= GMT) time zone.
// const d2 = new Date();
// const result = d2.toUTCString();
// console.log(result); // 👉️ "Fri, 14 Jan 2022 16:50:03 GMT"

// // 👇️ returns UTC (=GMT) Hour of the date
// console.log(d2.getUTCHours()); // 👉️ 16

// // 👇️ returns UTC (=GMT) Minutes of the date
// console.log(d2.getUTCMinutes()); // 👉️ 50

// // 👇️ returns UTC (=GMT) Seconds of the date
// console.log(d2.getUTCSeconds()); // 👉️ 03

const gmtDateTime = new Date().toUTCString();
console.log(gmtDateTime);
