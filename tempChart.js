import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import dimensions from "./chartSize.js";
import { getDataAbout } from "./helpers.js";

export const { result: tempData } = await getDataAbout("temperature");

export function getMonthFromDecimal(tempDataIndex) {
  switch (tempDataIndex.time.substring(5)) {
    case "04":
      return 0; //January
    case "13":
      return 1; //February
    case "21":
      return 2; //March
    case "29":
      return 3; //April
    case "38":
      return 4; //May
    case "46":
      return 5; //June
    case "54":
      return 6; //July
    case "63":
      return 7; //August
    case "71":
      return 8; //September
    case "79":
      return 9; //October
    case "88":
      return 10; //November
    case "96":
      return 11; //December
  }
}

//The X Axis
