var pageMod = require("sdk/page-mod").PageMod({
  include: "https://www.google.*",
  contentStyleFile: require("sdk/self").data.url("fix.css")
});
