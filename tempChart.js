import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { dimensions } from "./env.js";
import { getDataAbout, datePoint } from "./helpers.js";

export const { result: tempData } = await getDataAbout("temperature");

export function getMonthFromDecimal(tempDataIndex) {
  switch (tempDataIndex.time.substring(5)) {
    case "04":
      return 1; //January
    case "13":
      return 2; //February
    case "21":
      return 3; //March
    case "29":
      return 4; //April
    case "38":
      return 5; //May
    case "46":
      return 6; //June
    case "54":
      return 7; //July
    case "63":
      return 8; //August
    case "71":
      return 9; //September
    case "79":
      return 10; //October
    case "88":
      return 11; //November
    case "96":
      return 12; //December
    default:
      return null;
  }
}

export const tempX = d3
  .scaleTime()
  .domain(
    d3.extent(tempData, (d) =>
      datePoint(d.time.substring(0, 4), getMonthFromDecimal(d))
    )
  )
  .range(dimensions.rangeX);

export const tempY = d3
  .scaleLinear()
  .domain([
    `${tempData[0].station}` - 1.6,
    `${tempData[tempData.length - 1].station}`,
  ])
  .range(dimensions.rangeY);
