var allLinksToDOI = $('a[href^="http://dx.doi.org/"]');
console.log(allLinksToDOI.length);
for (var i = 0; i < allLinksToDOI.length; i++) {
	console.log(allLinksToDOI[i].attr('href'));
}
/*arr.forEach(function(item, i, allLinksToDOI) {
	var href = item.attr('href');
	var re = /http:\/\/dx\.doi\.org\/(.*)/;
	var doi = re.exec(href);
	var newCode = '<br><form action="http://sci-hub.cc/'+doi[1]+'"><input type="submit" value="Download free" class="button-add-scihub" /></form>'
	item.html( item.html() + newCode);
});*/
//http://dl.acm.org/citation.cfm?id=358692