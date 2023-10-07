import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const dataSource = "https://global-warming.org/api/";

export async function getDataAbout(endpoint) {
  try {
    return await d3.json(`${dataSource}${endpoint}-api`);
  } catch (err) {
    console.error(err);
  }
}
