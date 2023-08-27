const newman = require("newman");

newman.run(
  {
    collection:("https://api.postman.com/collections/29168397-a020b929-5c17-4e2e-9ca2-55ce8b3fe4c3?access_key=PMAT-01H8SHGE0MD0BZ9275ME8RAPZ3"), 

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);