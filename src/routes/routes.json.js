import { getContent } from './_content.js';

const lookup = new Map();

export function get(req, res, next) {
    const { slug } = 'routes'
	if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
        const data = getContent('routes');
        lookup.set(slug, JSON.stringify(data));
	}
	const json = lookup.get(slug);
	if (json) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(json);
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}