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
  request(scrapeUrl, function(err, response, html) {
    fs.writeFileSync("./filename.html", html);
  });
};

// www.forsalebyowner.com/search/list/beverly-hills-california
// https://www.craigslist.org/tampa-fl/
// TESTING BY USING FUNCTION
scrapeDataFromFSBO("tampa", "florida");
