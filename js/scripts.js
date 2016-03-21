var templateNode = document.getElementById('articles-template');
var templateString = templateNode.innerHTML;

var template = Handlebars.compile(templateString);

var articles = [{
	id: 1,
	title: 'Стайна хризантема',
	content: 'Това растение (Chrysanthemum morifolium) е любимец на NASA. Именно тези цветя използват за пречистване на въздуха в офисите на космическото агентство. Те ефективно поглъщат амоняк, бензол и формалдехид от въдуха във всяко помещение. Хризантемата не е типичното стайно растение, но с редовно поливане и поставени на подходящо място могат дълго време да "работят" за нас. При това цветето не е скъпо и след като прецъфти е идеален вариант за цветната ни леха в двора. - See more at: http://margaritta.dir.bg/2015/9staini-rastenia-prechistvat-vazduha.html#sthash.iZ4hzdEt.dpuf',
	postDate: '02-03-2016',
	imgUrl: 'http://margaritta.dir.bg/2015/images/chrysanthemum.jpg'
}];

var articleHTML = template({articles: articles});
console.log(articleHTML);
document.body.innerHTML += articleHTML;