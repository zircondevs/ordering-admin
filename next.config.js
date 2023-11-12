/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains:  ["chefsavvy.com", "logos-world.net", "res.cloudinary.com"],
	},
	env: {
		AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL,
		PORTL_URL: process.env.NEXT_PUBLIC_PORTL_URL,
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true
	},
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Content-Security-Policy",
						// eslint-disable-next-line max-len
						value: `default-src 'self'  ${process.env.NEXT_PUBLIC_AUTH_URL}; form-action 'self'; frame-src 'self' *; object-src 'self'; img-src 'self' data: http://res.cloudinary.com/; frame-ancestors 'none'; child-src 'self'; font-src 'self'; style-src 'unsafe-inline' https://fonts.googleapis.com; worker-src 'self'; manifest-src 'self'; script-src   'self' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""}`
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload"
					}
				],
			},
		];
	},
};



module.exports = nextConfig;
 