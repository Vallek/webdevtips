SimpleJekyllSearch({
		searchInput: document.getElementById('search-input'),
		resultsContainer: document.getElementById('results-container'),
		json: '/webdevtips/search.json',
		searchResultTemplate: '<li class="search__item"><a class="search__link" href="{url}">{title}<span class="search__lang">{lang}</span></a></li>',
		noResultsText: 'No results found',
		limit: 20,
		fuzzy: false,
		debounceTime: 500,
});
