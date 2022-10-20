import datetime from "@leon20spr/datetime";

/**
 * To test local functions
 */
console.log(datetime.local.getDate());
console.log(datetime.local.getTime());
console.log(datetime.local.getDateTime());

/**
 * To test utc functions
 */
console.log(datetime.utc.getDate());
console.log(datetime.utc.getTime());
console.log(datetime.utc.getDateTime());