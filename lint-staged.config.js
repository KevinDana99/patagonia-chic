module.exports = {
	'*.{js,jsx,ts,tsx}': () => ['yarn format:fix', 'yarn validate'],
};
