/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
	clearMocks: true,
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/.jest/styleMock.js',
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/.jest/fileMock.js',
	},
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
	transformIgnorePatterns: [],
	moduleDirectories: ['node_modules', 'src'],
};

