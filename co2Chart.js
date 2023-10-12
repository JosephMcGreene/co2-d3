import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { dimensions } from "./env.js";
import { getDataAbout, datePoint } from "./helpers.js";

//Get CO2 data from API endpoint
export const { co2: co2Data } = await getDataAbout("co2");

// The X Axis
export const co2X = d3
  .scaleTime()
  .domain(d3.extent(co2Data, (d) => datePoint(d.year, d.month, d.day)))
  .range([dimensions.marginLeft, dimensions.width - dimensions.marginRight]);

//The Y Axis
export const co2Y = d3
  .scaleLinear()
  .domain([`${co2Data[0].cycle}` - 5, 425])
  .range([dimensions.height - dimensions.marginBottom, dimensions.marginTop]);
