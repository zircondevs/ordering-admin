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
	}
};



module.exports = nextConfig;
 