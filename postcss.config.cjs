module.exports = {
	plugins: [
		require('@csstools/postcss-global-data')({
			files: ['./src/assets/style/variables.css'],
		}),
		require('postcss-mixins'),
		require('postcss-preset-env')({ stage: 2 }),
	],
};
