SimpleJekyllSearch({
		searchInput: document.getElementById('search-input'),
		resultsContainer: document.getElementById('results-container'),
		json: '/webdevtips/search.json',
		searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
		noResultsText: 'No results found',
		limit: 10,
		fuzzy: false,
});
