var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Sci-hub",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.sci-hub.cc");
}

// Import the page-mod API
var pageMod = require("sdk/page-mod");
var pageMod1 = require("sdk/page-mod");
var pageMod2 = require("sdk/page-mod");

pageMod.PageMod({
  include: /.*/, 
  contentStyleFile: "./button.css",
  contentScriptFile: [self.data.url("jquery-3.1.0.min.js"),  self.data.url("byLink.js")]
});

pageMod1.PageMod({
  include: /.*link.springer.com.*/, 
  contentStyleFile: "./button.css",
  contentScriptFile: [self.data.url("jquery-3.1.0.min.js"),  self.data.url("springer.js")]
});

pageMod2.PageMod({
  include: /.*epubs.siam.org.*/, 
  contentStyleFile: "./button.css",
  contentScriptFile: [self.data.url("jquery-3.1.0.min.js"),  self.data.url("siam.js")]
});
