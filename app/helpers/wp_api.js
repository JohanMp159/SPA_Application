const NAME = "malvestida",
	  DOMAIN = `https://${NAME}.com`,
	  SITE = `${DOMAIN}/wp-json`,
	  API_WP = `${SITE}/wp/v2`,
	  PER_PAGE = 6,
	  POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
	  POST = `${API_WP}/posts`,
	  CATEGORIES = `${API_WP}/categories`,
	  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

export default {
	NAME,
	DOMAIN,
	SITE,
	API_WP,
	PER_PAGE,
	POSTS,
	POST,
	CATEGORIES,
	SEARCH,
	page
}