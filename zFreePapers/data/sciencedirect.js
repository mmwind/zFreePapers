//document.body.innerHTML = "<h1>Page matches ruleset from file</h1>";
var doiLink = $(".S_C_ddDoi").text();
var re = /http:\/\/dx\.doi\.org\/(.*)/;
var doi = re.exec(doiLink);
var oldCode = $(".acol1").html();
//var newCode = '<br><a class="corpReq cLink blueButton" href="http://sci-hub.cc/'+doi[1]+'"> Download Free </a>'
var newCode = '<form action="http://sci-hub.cc/'+doi[1]+'"><input type="submit" value="Download free" class="button-add-scihub" /></form>'
//'<form action="'+doi[1]+'"><input type="submit" value=" [ Download free ] " /></form>'
$(".acol1").html(oldCode + newCode);