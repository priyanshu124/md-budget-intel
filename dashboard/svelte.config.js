/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			handleHttpError: ({ path }) => {
				// Allow links to the main Next.js site (outside Evidence's base path)
				if (path === '/' || path === '/methodology' || path === '/guardrails') {
					return;
				}
				throw new Error(`404: ${path}`);
			}
		}
	}
};

export default config;
