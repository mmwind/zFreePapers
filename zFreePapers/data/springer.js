//document.body.innerHTML = "<h1>Page matches ruleset from file</h1>";
var doiLink = document.URL;
var re = /.*link.springer.com\/[article|chapter|book]*\/(.*)/;
var doi = re.exec(doiLink);
console.log(doi);
var oldCode = $(".MainTitleSection").html();
//var newCode = '<br><a href="http://sci-hub.cc/'+doi[1]+'"> [ Download Free ] </a>'
var newCode = '<form action="http://sci-hub.cc/'+doi[1]+'"><input type="submit" value="Download free" class="button-add-scihub" /></form>'
$(".MainTitleSection").html(oldCode + newCode);