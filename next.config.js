/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'raw.githubusercontent.com',
			'media-exp1.licdn.com',
			'mir-s3-cdn-cf.behance.net',
			'annuaire.frenchtechbordeaux.com',
			'secure.meetupstatic.com',
			'cyriac.descubes-du-chatenet.com',
			'localhost',
		],
	},
};

module.exports = nextConfig;
