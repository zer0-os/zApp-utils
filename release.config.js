module.exports = {
	branches: ['test/semantic-release'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		'@semantic-release/github',
	],
	npm: {
		npmPublish: false,
		npmToken: process.env.NPM_TOKEN,
	},
};
