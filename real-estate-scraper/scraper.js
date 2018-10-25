const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

// DEFINING FUNCTION TO _______
const scrapeDataFromFSBO = (city, state) => {
  const urlBase = "https://www.forsalebyowner.com/search/list/";
  // USE A SPLIT-JOIN METHOD TO PROPERLY HANDLE CITIES WITH MULTIPLE WORDS
  city = city.split(" ").join("-");
  state = state.split(" ").join("-");
  const scrapeUrl = `${urlBase}${city}-${state}`;
  console.log(scrapeUrl);

  // request is a function which comes from the request module
  request(scrapeUrl, function(err, response, html) {
    fs.writeFileSync("./filename.html", html);
    const $ = cheerio.load(html);
  });
};

// www.forsalebyowner.com/search/list/beverly-hills-california
// https://www.craigslist.org/tampa-fl/
// TESTING BY USING FUNCTION
// //blueprint.forsalebyowner.com/uploads/resize/for_sale_by_owner/2418/24182323-866e56c6e7af9c1d6751700e30f88314.jpg
scrapeDataFromFSBO("tampa", "florida");
