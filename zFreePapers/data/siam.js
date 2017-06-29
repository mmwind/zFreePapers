//document.body.innerHTML = "<h1>Page matches ruleset from file</h1>";
var doiLink = document.URL;
var re = /.*epubs.siam.org\/doi\/abs\/([\d|\w|\.|\-|\/]*).*/;
var doi = re.exec(doiLink);
var oldCode = $(".permaLinkSectionDoi").html();
//var newCode = '<br><a href="http://sci-hub.cc/'+doi[1]+'"> [ Download Free ] </a>'
var newCode = '<br><form action="http://sci-hub.cc/'+doi[1]+'"><input type="submit" value="Download free" class="button-add-scihub" /></form>'
$(".permaLinkSectionDoi").html(oldCode + newCode);
// http://epubs.siam.org/doi/abs/10.1137/15M1033344