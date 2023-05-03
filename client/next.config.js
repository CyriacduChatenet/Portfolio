/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'cdn.sanity.io',
			'cyriac.descubes-du-chatenet.com',
			'localhost'
		],
	},
};

module.exports = nextConfig;
