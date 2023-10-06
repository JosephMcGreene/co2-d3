import { dimensions } from "./chartSize.js";

//Get CO2 data from API endpoint
async function getCO2Data() {
  const { co2 } = await d3.json("https://global-warming.org/api/co2-api");
  return co2;
}
export const co2Data = await getCO2Data();

export const day = (year, month, day) => {
  return new Date(`${year} ${month} ${day}`);
};

// The X Axis
export const co2X = d3
  .scaleTime()
  .domain(d3.extent(co2Data, (d) => day(d.year, d.month, d.day)))
  .range([dimensions.marginLeft, dimensions.width - dimensions.marginRight]);

//The Y Axis
export const co2Y = d3
  .scaleLinear()
  .domain([`${co2Data[0].cycle}` - 5, 425])
  .range([dimensions.height - dimensions.marginBottom, dimensions.marginTop]);
