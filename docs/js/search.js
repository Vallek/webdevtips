SimpleJekyllSearch({
		searchInput: document.getElementById('search-input'),
		resultsContainer: document.getElementById('results-container'),
		json: '/webdevtips/search.json',
		searchResultTemplate: '<li class="search__item"><a class="search__link" href="{url}">{title}</a></li>',
		noResultsText: 'No results found',
		limit: 10,
		fuzzy: false,
});
